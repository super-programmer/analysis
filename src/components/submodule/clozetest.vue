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
      </div>
      <div class="c-pres__check-operation--right" v-if="studentData.type">
        <div class="c-pres-source__btn">{{subitem.score}}</div>
      </div>
    </div>
    <div class="analy-paper-radiobox" v-if="subitem.ratio">
      <div class="m-table">
        <h3 class="analy-paper-radiobox__tit">
          总正确率
          <span class="font-color--green">{{subitem.ratio}}</span>
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
            <td :qcid="row[0].qcid" v-if="row[0]" @click="showItemChart(row[0].qcid)">
              {{row[0].radio}}%
            </td>
            <td v-if="row[1]">
              第{{i*3 + 1 + 1 }}题
            </td>
            <td :qcid="row[1].qcid" v-if="row[1]" @click="showItemChart(row[0].qcid)">
              {{row[1].radio}}%
            </td>
            <td :qcid="row[2].qcid" v-if="row[2]" @click="showItemChart(row[0].qcid)">
              第{{i*3 + 2 + 1 }}题
            </td>
            <td v-if="row[2]">
              {{row[2].radio}}%
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'subitem', 'studentData', 'index', 'showAnswer'],
  name: 'clozetest',
  mounted () {
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
      var list = this.data.subs
      var arrTemp = []
      var index = 0
      var sectionCount = 3
      for (var i = 0; i < list.length; i++) {
        index = parseInt(i / sectionCount)
        if (arrTemp.length <= index) {
          arrTemp.push([])
        }
        arrTemp[index].push(list[i])
      }
      return arrTemp
    }
  }
}
</script>

<style scoped>

</style>
