<template>
  <div>
    <div class="c-pres__subjective">
      <div class="c-pres__qstem--left c-pres__qstem--left--tea" :qcid="data.qcid">
        <div class="c-dw__question-cloze-text">
          <span v-if="index">({{index}})</span><span v-if="!index">{{subitem.ord}}</span>.
          <span v-html="data.stem"></span>。
          <span class="c-res-itsource">({{subitem.contents[data.uid].score}}分)</span>
        </div>
        <div class="c-dw__cloze-options" style="line-height: 10px;" v-for="(item,index) in data.subs" :qcid="item.qcid">
          <div class="c-dw__test-wx-num" style="color: rgb(68, 68, 68);">（{{index+1}}）</div>
          <div style="float: left;" v-for="sitem in item.options">
            <div class="c-dw__cloze-option" :class="sitem.className">{{sitem.label}}、{{sitem.option}}</div>
          </div>
        </div>
        <div class="c-pres__topic-content">
          <div class="c-res__postil c-res__answer--show" v-if="showAnswer">
            <div class="c-res__answer-title">【答案】</div>
            <div class="c-res__positl-content c-res__answer-content c-pres__choice__answer">
              <p v-for="(item,index) in data.subs"><span>{{(index+1)}}</span>.<span v-html="item.answer"></span></p>
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
      </div>
      <div class="c-pres__check-operation--right" v-if="studentData.type">
        <div class="c-pres-source__btn">{{subitem.score}}</div>
      </div>
    </div>

    <div class="analy-paper-radiobox" v-if="studentData.type != true">
      <div class="m-table">
        <h3 class="analy-paper-radiobox__tit">
          总正确率
          <span class="font-color--green">{{(subitem.ratio*100).toFixed(0)}}</span>
        </h3>
        <table>
          <tr>
            <th>题号</th>
            <th>正确率</th>
            <th>题号</th>
            <th>正确率</th>
            <th>题号</th>
            <th>正确率</th>
          </tr>
          <tr v-for="(row,i) in gradelist">
            <td v-if="row[0]">
              第{{i*3 + 0 + 1 }}题
            </td>
            <td :qcid="row[0].qcid" v-if="row[0]" @click="showItemChart(row[0].qcid)" style="cursor:pointer">
              {{(row[0].ratio)*100}}%
            </td>
            <td v-if="row[1]">
              第{{i*3 + 1 + 1 }}题
            </td>
            <td :qcid="row[1].qcid" v-if="row[1]" @click="showItemChart(row[1].qcid)" style="cursor:pointer">
              {{(row[1].ratio)*100}}%
            </td>
            <td :qcid="row[2].qcid" v-if="row[2]">
              第{{i*3 + 2 + 1 }}题
            </td>
            <td v-if="row[2]" @click="showItemChart(row[2].qcid)" style="cursor:pointer">
              {{(row[2].ratio)*100}}%
            </td>
          </tr>
        </table>
      </div>
    </div>
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <div class="analy-dialog-chartsbox">
        <ve-ring :data="chartData2" height="220px" :settings="chartSettings1" :legend-visible="false"
                 :colors="pieColor1"></ve-ring>
        <input type="button" class="u-btn u-btn--sm u-btn--green" :value="showStudentsFlag ? '收起名单' : '展开名单'" @click="showStudents">
        <table class="analy-messgesbox-table" v-if="showStudentsFlag">
          <tbody>
          <tr v-for="item in studentsList">
            <td class="analy-messgesbox-table__tit">{{item.label}}</td>
            <td>{{item.names.join('、')}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import http from '@/http'
export default {
  props: ['data', 'subitem', 'studentData', 'index', 'showAnswer'],
  name: 'clozetest',
  data () {
    return {
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
      pieColor1: ['#fe5a59', '#ffe25a', '#abf258', '#61cfff'],
      chartData2: {},
      dialogTableVisible: false, // dialog标识
      showStudentsFlag: false, // 学生名单展开标识
      studentsList: []// 学生名单列表
    }
  },
  created () {
    this.data.subs.map((item) => {
      item.options.map((sitem) => {
        if (sitem.correct === true) {
          sitem.className = 'font-color--green'
        }
      })
    })
    this.data.stem = this.data.stem.replace(/<p>/g, '<span>')
    this.data.stem = this.data.stem.replace(/<\/p>/g, '</span>')
    if (this.studentData.bigs) {
      JSON.parse(JSON.stringify(this.studentData.bigs)).map((item) => {
        if (item.id === this.subitem.ord) {
          this.subitem.ratio = item.ratio
        }
      })
    }
  },
  computed: {
    gradelist: function () {
      let _this = this
      var list = this.data.subs
      var arrTemp = []
      var index = 0
      var sectionCount = 3
      for (var i = 0; i < list.length; i++) {
        index = parseInt(i / sectionCount)
        if (arrTemp.length <= index) {
          arrTemp.push([])
        }
        _this.studentData.analys.map((item) => {
          if (item.ratio && (item.qcid === list[i].qcid)) {
            list[i].ratio = item.ratio
          }
        })
        arrTemp[index].push(list[i])
      }
      return arrTemp
    }
  },
  methods: {
    showItemChart: function (qcid) {
      let _this = this
      _this.chartData2 = {
        columns: ['选项', '占比'],
        rows: []
      }
      JSON.parse(JSON.stringify(_this.studentData.analys)).map((item) => {
        if (item.qcid === qcid && item.ratio) {
          item.items.map((smitem) => {
            _this.chartData2.rows.push({'选项': `${smitem.label}`, '占比': `${smitem.value}`})
          })
        }
      })
      let option = {
        method: 'get',
        url: `work/home/tasks/${_this.studentData.taskId}/analy2/names/${qcid}`
      }
      http.axiosRequest(option).then(res => {
        _this.studentsList = res.data
      })
      _this.dialogTableVisible = true
    },
    /* 展示选项学生列表 */
    showStudents: function () {
      this.showStudentsFlag = !this.showStudentsFlag
    }
  }
}
</script>

<style scoped>

</style>
