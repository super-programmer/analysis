<template>
  <!--选择-->
  <div class="c-pres__subjective">
    <div class="c-pres__qstem--left c-pres__qstem--left--tea">
      <div class="c-pres__topic-title c-res__add-margin" :id="subitem.qid">
        <span v-if="index">({{index}})</span><span v-if="!index">{{subitem.ord}}</span>.
        <span v-html="data.stem"></span>。
        <span class="c-res-itsource">({{subitem.contents[data.uid].score}}分)</span>
      </div>
      <div class="c-pres__topic-content">
        <div v-for="item in data.options" class="c-pres__choice-question" :class="item.className">{{item.label}}.
          <span v-html="item.option"></span>
        </div>
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
            </div>
            <ve-ring :data="chartData1" height="220px" :settings="chartSettings" :tooltip-visible='false' :legend-visible="false" :colors="pieColor" ></ve-ring>
          </div>
        </div>
        <div class="analy-paper--charts__item">
          <p class="analy-paper--charts__tit">选项分布
          </p>
          <div class="analy-paper--charts__box" @click="showCharts(data.qcid)">
            <ve-ring :data="chartData2" height="220px" :settings="chartSettings1" :legend-visible="false" :colors="pieColor1" :events="chartEvents"></ve-ring>
          </div>
        </div>
      </div v->
    </div>
    <div class="c-pres__check-operation--right" v-if="studentData.type">
      {{subitem.analys}}
      <div class="c-pres-source__btn">{{subitem.score}}</div>
    </div>
  </div>
</template>
<script>
import http from '@/http'
export default {
  props: ['data', 'subitem', 'studentData', 'index', 'showAnswer'],
  name: 'choise',
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
      pieColor: ['#2bd672', '#eee'],
      pieColor1: ['#fe5a59', '#ffe25a', '#abf258', '#61cfff'],
      chartData1: {
        columns: ['状态', '人数'],
        rows: [
          /* {'状态': '答对', '人数': 20},
          {'状态': '答错', '人数': 5} */
        ]
      },
      chartData2: {
        columns: ['选项', '占比'],
        rows: []
      },
      label: '',
      studentData1: this.studentData,
      chartEvents: {
        click: function (e) {
          _this.label = e.data.name
        }
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
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
              let str = `<table class="analy-messgesbox-table"><tr><td class="analy-messgesbox-table__tit">${item.label}</td><td>${item.names.join('、')}</td></tr></table>`
              _this.$msgbox({
                title: '',
                message: str,
                showCancelButton: false,
                showConfirmButton: false,
                closeOnClickModal: true,
                dangerouslyUseHTMLString: true
              }).then(() => {

              }).catch(() => {

              })
            }
          })
        }
      })
    },
    init: function () {
      /* 学生详情 */
      if (this.studentData.queRsts) {
        this.studentData.queRsts.map(item => {
          if (this.subitem.qid === item.qid) {
            this.subitem.right = item.value
          }
        })
      }
      if (this.data.options) {
        this.data.options.map(item => {
          if (item.label === this.data.answer) {
            item.className = 'c-pres-is-rightanswer'
          }
          /* 判断只有学生显示 */
          if (
            item.label === this.subitem.right &&
            this.data.answer != item.label
          ) {
            item.className = 'c-pres-is-wronganswer'
          }
          item.option = item.option.replace(/<p>/g, '<span>')
          item.option = item.option.replace(/<\/p>/g, '</span>')
        })
      }
      /* 组装echarts数据 */
      if (this.studentData.analys) {
        JSON.parse(JSON.stringify(this.studentData.analys)).map(item => {
          if (item.qcid === this.data.qcid && item.ratio) {
            this.data.ratio = item.ratio // 选项赋值用于判断正确率
            this.data.right1 = item.right1 // 错误的人数
            this.data.right2 = item.right2 // 半对的人数
            this.data.right3 = item.right3 // 正确的人数
            this.data.total =
              item.right3 + item.right2 + item.right1 + item.right0 // 全部人数
            let rows = [
              { 状态: '答对', 人数: `${item.right3}` },
              { 状态: '答错', 人数: `${item.right1}` }
            ]
            this.chartData1.rows = rows
            let rows2 = []
            item.items.map(seItem => {
              rows2.push({ 选项: `${seItem.label}`, 占比: `${seItem.value}` })
            })
            this.chartData2.rows = rows2
          }
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
