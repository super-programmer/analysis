<template>
  <!--选择-->
  <div class="c-pres__subjective">
    <div class="c-pres__qstem--left c-pres__qstem--left--tea" :qcid="data.qcid">
      <div class="c-pres__topic-title c-res__add-margin">
        <span v-if="index">({{index}})</span><span v-if="!index">{{subitem.ord}}</span>.
        <span v-html="data.stem"></span>。
        <span class="c-res-itsource">({{subitem.contents[data.uid].score}}分)</span>
      </div>
      <div class="c-pres__topic-content">
        <div class="c-pres__choice-question">{{subitem.right}}</div>
        <div class="c-res__postil c-res__answer--show" v-if="showAnswer">
          <div class="c-res__answer-title">【答案】</div>
          <div class="c-res__positl-content c-res__answer-content c-pres__choice__answer" v-html="data.answer">
          </div>
        </div>
      </div>
      <div class="c-pres__topic-content" v-if="showAnswer">
        <div class="c-res__postil c-res__answer--show" v-if="data.analysis">
          <div class="c-res__answer-title">【解析】</div>
          <div class="c-res__positl-content c-res__answer-content c-pres__explin">
            {{data.analysis}}
          </div>
        </div>
      </div>
      <div class="analy-paper--charts" v-if="data.ratio >= 0">
        <div class="analy-paper--charts__item">
          <p class="analy-paper--charts__tit">
            正确率
          </p>
          <div class="analy-paper--charts__box">
            <div class="analy-paper--charts__nums">
              <p class="analy-paper--charts__num">
                {{(data.ratio*100).toFixed(0)}}%
              </p>
              <p class="analy-paper--charts__tips">
                答对{{data.right3}}人，占比{{(data.ratio*100).toFixed(0)}}%
              </p>
              <p class="analy-paper--charts__tips">
                答错{{data.right1}}人，占比{{((data.right1/data.total) * 100).toFixed(0)}}%
              </p>
              <p class="analy-paper--charts__tips">
                半对{{data.right2}}人，占比{{((data.right2/data.total) * 100).toFixed(0)}}%
              </p>
            </div>
            <ve-ring :data="chartData1" height="220px" :settings="chartSettings" :tooltip-visible='false'
                     :legend-visible="false" :colors="pieColor" ></ve-ring>
          </div>
        </div>
        <div class="analy-paper--charts__item">
          <p class="analy-paper--charts__tit">选项分布
          </p>
          <div class="analy-paper--charts__box" @click="showCharts(data.qcid)">
            <ve-histogram :data="chartData3" height="220px" :legend-visible="false" :barwidth="60"
                          :settings="chartSettings3" :colors="histogramColor" :y-axis="yAxis"
                          :x-axis="xAxis" :events="chartEvents"></ve-histogram>
          </div>
        </div>
      </div>
    </div>
    <div class="c-pres__check-operation--right" v-if="studentData.type">
      <div class="c-pres-source__btn">{{subitem.score}}</div>
    </div>
  </div>
</template>
<script>
import http from '@/http'
export default {
  props: ['data', 'subitem', 'studentData', 'index', 'showAnswer'],
  name: 'essay',
  data: function () {
    let _this = this
    return {
      chartSettings: {
        radius: [54, 63],
        offsetY: 65,
        animation: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        }
      },
      chartSettings1: {
        radius: [49, 82],
        offsetY: 100,
        hoverAnimation: false,
        label: {
          normal: {
            formatter: '{b}:{d}%',
            color: '#666'
          }
        }
      },
      chartSettings3: {
        metrics: ['人数'],
        series: {
          barWidth: 200
        }
      },
      yAxis: {
        type: 'category'
        // data: ['全对', '半对', '全错']
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      chartData1: {
        columns: ['状态', '人数'],
        rows: [
          // {'状态': '答对', '人数': 20},
          // {'状态': '答错', '人数': 5}
        ]
      },
      chartData3: {
        columns: ['得分区间', '人数'],
        rows: []
      },
      pieColor: ['#2bd672', '#eee'],
      histogramColor: ['#2697ff'],
      label: '',
      studentData1: this.studentData,
      chartEvents: {
        click: function (e) {
          _this.label = e.name
        }
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    /* 初始化数据 */
    init: function () {
      /* 学生详情 */
      if (this.studentData.queRsts) {
        JSON.parse(JSON.stringify(this.studentData.queRsts)).map((item) => {
          if (this.subitem.qid === item.qid) {
            this.subitem.right = item.value
          }
        })
      }
      /* 试卷详情 */
      if (this.studentData.analys) {
        JSON.parse(JSON.stringify(this.studentData.analys)).map((item) => {
          if (item.qcid === this.data.qcid && item.ratio) {
            this.data.ratio = item.ratio // 正确率
            this.data.right1 = item.right1 // 错误的人数
            this.data.right2 = item.right2 // 半对的人数
            this.data.right3 = item.right3 // 正确的人数
            this.data.total = item.right3 + item.right2 + item.right1 + item.right0 // 全部人数
            this.chartData1 = {
              columns: ['状态', '人数'],
              rows: [
                {'状态': '答对', '人数': `${this.data.right3}`},
                {'状态': '答错', '人数': `${this.data.right1}`}
              ]
            }
            let data = []
            let rows = []
            item.items.map((item) => {
              data.push(item.label)
              rows.push({'人数': item.value})
            })
            this.chartData3.rows = rows
            this.yAxis.data = data
          }
        })
      }
    },
    /* 展示图表 */
    showCharts: function (qcid) {
      let _this = this
      let option = {
        method: 'get',
        url: `work/home/tasks/${this.studentData.taskId}/analy2/names/${qcid}`
      }
      http.axiosRequest(option).then(res => {
        if (res) {
          res.data.map(item => {
            if (item.label === _this.label) {
              let str = `<table class="analy-messgesbox-table"><tr><td class="analy-messgesbox-table__tit">${
                item.label
              }</td><td>${item.names.join('、')}</td></tr></table>`
              _this.$msgbox({
                title: '',
                message: str,
                showCancelButton: false,
                showConfirmButton: false,
                closeOnClickModal: true,
                dangerouslyUseHTMLString: true
              }).then(() => {}).catch(() => {})
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
