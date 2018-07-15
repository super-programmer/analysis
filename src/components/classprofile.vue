<template>
  <div>
    <div class="g-container">
      <div class="analy-sildebar" id="analySildebar">
        <ul class="analy-sildebar-list">
          <li class="analy-sildebar__item analy-sildebar__item--active">
            <a href="#workdone">
              <span class="font-color--999 analy-sildebar__order">1</span>作业完成情况
            </a>
          </li>
          <li class="analy-sildebar__item">
            <a href="#answer">
              <span class="font-color--999 analy-sildebar__order">2</span>答题详情
            </a>
          </li>
          <li class="analy-sildebar__item">
            <a href="#knowledge">
              <span class="font-color--999 analy-sildebar__order">3</span>知识点分析
            </a>
          </li>
          <li class="analy-sildebar__item">
            <a href="#student">
              <span class="font-color--999 analy-sildebar__order">4</span>学生成绩排行
            </a>
          </li>
        </ul>
      </div>
      <div class="analy-review-main">
        <div class="c-analy-heaher">
          <i class="c-analy-heaher__icon c-analy-heaher__icon--course"></i>
          <div class="c-analy-heaher__operation">
            <div class="c-publish-answer-box">
              <div class="container">
                <div class="bg_con">
                  <input id="checked_1" type="checkbox" class="switch"/>
                  <label for="checked_1"></label>
                </div>
              </div>
              <p>公布答案</p>
            </div>

          </div>
          <div class="c-analy-heaher__main">
            <h3 class="c-analy-tit">
              {{data.title}}
            </h3>
            <p class="c-analy-tit--secon">
              {{data.resName}}
              <span class="c-analy-type-tips">
            word
          </span>
            </p>
            <p class="c-analy-tips">
          <span class="c-analy-tip">
              布置班级：{{data.className}}
          </span>
              <span class="c-analy-tip">
              开始时间：{{data.pubOn | datefmt('YYYY-MM-DD HH:mm:ss')}}
          </span>
            </p>
          </div>
        </div>
        <div class="analy-section" id="workdone">
          <div class="analy-section__tit">
            作业完成情况
          </div>
          <div class="analy-student-details analy-student-details--sm">
            <div class="analy-student-details__item">
              <i class="analy-student-details__type analy-student-details__type--acc"></i>
              <p class="analy-student-details__num">
                <span class="font-color--lightgreen font-size28">{{(data.avgRatio).toFixed(1)}}%</span>班级正确率
              </p>
              <p class="analy-student-details__progress">
                <span class="analy-student-details__bar analy-student-details__bar--lightgreen"></span>
              </p>
              <p class="analy-student-details__tips">
                最高
                <span class="font-color--lightgreen">{{(data.maxRatio).toFixed(1)}}% {{studentList.maxRatio.join(',')}}</span>
              </p>
              <p class="analy-student-details__tips">
                最低
                <span class="font-color--lightgreen">{{(data.minRatio).toFixed(1)}}% {{studentList.minRatio.join(',')}}</span>
              </p>
            </div>
            <div class="analy-student-details__item">
              <i class="analy-student-details__type analy-student-details__type--subacc"></i>
              <p class="analy-student-details__num">
                <span class="font-color--lightblue font-size28">{{(data.done/data.total * 100).toFixed(1)}}%</span>提交率
              </p>
              <p class="analy-student-details__progress">
                <span class="analy-student-details__bar analy-student-details__bar--lightblue"></span>
              </p>
              <p class="analy-student-details__tips">
                按时完成&nbsp;:
                <span class="font-color--lightblue">{{data.done}}个</span>
              </p>
              <p class="analy-student-details__tips">
                未时完成&nbsp;:
                <span class="font-color--lightblue">{{data.late}}个</span>
              </p>
              <p class="analy-student-details__tips">
                未完成&nbsp;:
                <span class="font-color--lightblue">{{data.total - data.done}}个</span>
              </p>
            </div>
            <div class="analy-student-details__item">
              <i class="analy-student-details__type analy-student-details__type--time"></i>
              <p class="analy-student-details__num">
                <span class="font-color--green font-size28">{{data.avgTime | datefmt('m')}}分钟</span>平均用时
              </p>
              <p class="analy-student-details__progress">
                <span class="analy-student-details__bar analy-student-details__bar--green"></span>
              </p>
              <p class="analy-student-details__tips">
                最快<span class="font-color--green">{{data.minTime | datefmt('m')}}分钟  {{studentList.minTime.join(',')}}</span>
              </p>
              <p class="analy-student-details__tips">
                最慢<span class="font-color--green">{{data.maxTime | datefmt('m')}}分钟  {{studentList.maxTime.join(',')}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="analy-section" id="answer">
          <div class="analy-section__tit">
            <div class="analy-section__tit__operation">
              <input type="button" class="u-btn u-btn--green" value="学生详情" @click="toStudent">
              <input type="button" class="u-btn u-btn--orange" value="试卷详情" @click="toPaper">
            </div>
            答题详情
            <span class="font-size14 font-color--999">共2大题，6小题</span>
          </div>
          <div class="analy-situation-subject">
            <div class="analy-situation-subject__title c-dw__question-title">
              一.解答题<span class="font-color--blue font-size14">【班级正确率70%】</span></div>
            <div class="analy-situation-subject__con">
              <div class="analy-situation-subject__item">
                <div class="analy-situation-subject__tips">
                  <p class="analy-situation-subject__nums">75%</p>
                  <p class="analy-situation-subject__qid">1</p>
                </div>
                <div class="analy-situation-subject__charts">
                  <ve-ring :data="chartData1" height="52px" :settings="chartSettings" :tooltip-visible='false'
                           :legend-visible="false" :colors="pieColor"></ve-ring>
                </div>
              </div>
            </div>
            <div class="analy-situation-subject__title c-dw__question-title">
              一.解答题<span class="font-color--blue font-size14">【班级正确率70%】</span></div>
            <div class="analy-situation-subject__con">
              <div class="analy-situation-subject__item">
                <div class="analy-situation-subject__tips">
                  <p class="analy-situation-subject__nums">75%</p>
                  <p class="analy-situation-subject__qid">1</p>
                </div>
                <div class="analy-situation-subject__charts">
                  <ve-ring :data="chartData1" height="52px" :settings="chartSettings" :tooltip-visible='false'
                           :legend-visible="false" :colors="pieColor"></ve-ring>
                </div>
              </div>
            </div>
            <div class="analy-situation-subject__title c-dw__question-title">
              一.解答题<span class="font-color--blue font-size14">【班级正确率70%】</span></div>
            <div class="analy-situation-subject__con">
              <div class="analy-situation-subject__item">
                <div class="analy-situation-subject__tips">
                  <p class="analy-situation-subject__nums">75%</p>
                  <p class="analy-situation-subject__qid">1</p>
                </div>
                <div class="analy-situation-subject__charts">
                  <ve-ring :data="chartData1" height="52px" :settings="chartSettings" :tooltip-visible='false'
                           :legend-visible="false" :colors="pieColor"></ve-ring>
                </div>
              </div>
            </div>
            <div class="analy-situation-pullbtn"></div>
          </div>
        </div>
        <div class="analy-section" id="knowledge">
          <div class="analy-section__tit">
            <div class="analy-section__tit__operation">
            </div>
            知识点分析
          </div>
          <div class="m-table m-table--full">
            <table>
              <tr>
                <th>知识点</th>
                <th>涉题数</th>
                <th>占比</th>
                <th width="45%">对应题号</th>
                <th>班级正确率</th>
              </tr>
              <tr>
                <td>疑问句</td>
                <td>66</td>
                <td>54%</td>
                <td>一（1）、二（1）</td>
                <td>78%</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="analy-section" id="student">
          <div class="analy-section__tit">
            <div class="analy-section__tit__operation">
            </div>
            学生成绩排行
          </div>
          <div class="m-table m-table--full">
            <table>
              <tr>
                <th width="25%">排名</th>
                <th width="25%">学生</th>
                <th width="25%">正确率</th>
                <th width="25%">操作</th>
              </tr>
              <tr v-for="item in data.users">
                <td>
                  <i :class="`naly-rank-icon analy-rank-icon--${item.rank}`" v-if="item.rank <= 3"></i>
                  <i class="naly-rank-icon" v-if="item.rank > 3">{{item.rank}}</i>
                </td>
                <td>{{item.name}}</td>
                <td>{{item.ratio}}</td>
                <td>
                  <input type="button" class="u-btn u-btn--sm u-btn-sm-green" :id='item.userId' value="查看">
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="analy-back"></div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'classprofile',
  data () {
    return {
      chartSettings: {
        radius: [20, 25],
        offsetY: 25,
        animation: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        }
      },
      pieColor: ['#2bd672', '#eee'],
      chartData1: {
        columns: ['状态', '人数'],
        rows: [
          {'状态': '答对', '人数': 20},
          {'状态': '答错', '人数': 5}
        ]
      }
    }
  },
  computed: {
    ...mapState('Class', [
      'data',
      'studentList'
    ]
    )
  },
  created () {
    document.onscroll = function () {
      var heightTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(heightTop);
      if (heightTop > 0) {
        heightTop = heightTop > 5 ? heightTop : 0
        document.getElementById('analySildebar').style.top = `${heightTop}px`
      }
    }
    // this.init(22)
  },
  mounted () {
    console.log(this.data)
  },
  methods: {
    ...mapActions('Class', {
      init: 'init'
    }),
    toStudent: function () {
      this.$router.push({path: '/studentDetail'})
    },
    toPaper: function () {
      this.$router.push({path: '/paperDetail'})
    }
  }
}
</script>

<style scoped>
</style>
