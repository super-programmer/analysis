<template>
  <div>
    <Header></Header>
    <div class="g-container">
      <!--侧边栏-->
      <div class="analy-sildebar" id="analySildebar" v-if="data.done">
        <ul class="analy-sildebar-list">
          <li :class="item.flag ? 'analy-sildebar__item analy-sildebar__item--active' : 'analy-sildebar__item'" v-for="(item,index) in slideBar"  @click="changeBar(index)">
            <a :href="item.id">
              <span class="font-color--999 analy-sildebar__order">{{index + 1}}</span>{{item.tit}}
            </a>
          </li>
        </ul>
      </div>
      <div class="analy-review-main" :class="!data.done ? 'analy-review-main--full': ''">
        <div class="c-analy-heaher">
          <i class="c-analy-heaher__icon" :class="className"></i>
          <!--公布答案-->
          <div class="c-analy-heaher__operation">
            <div class="c-publish-answer-box" v-if="data.done" @click="publishAnswer">
              <div class="container">
                <div class="bg_con">
                  <input id="checked_1" type="checkbox" class="switch" :checked="publishFlag"/>
                  <label for="checked_1"></label>
                </div>
              </div>
              <p>公布答案</p>
            </div>
            <input type="button" class="u-btn u-btn--orange" value="作业详情">
          </div>
          <!--跳转作业详情-->
          <div class="c-analy-heaher__main">
            <h3 class="c-analy-tit" :title="data.title">
              {{data.title}}
            </h3>
            <p class="c-analy-tit--secon" :title="data.resName">
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
        <div v-if="data.done">
          <div class="analy-section" id="workdone">
            <div class="analy-section__tit">
              作业完成情况
            </div>
            <div class="analy-student-details analy-student-details--sm">
              <div class="analy-student-details__item">
                <i class="analy-student-details__type analy-student-details__type--acc"></i>
                <p class="analy-student-details__num" v-if="data.avgRatio >= 0">
                  <span v-if="data.avgScore === null"><span class="font-color--lightgreen font-size28" >{{(data.avgRatio*100).toFixed(1)}}%</span>班级正确率</span>
                  <span v-if="data.avgScore !=null "><span class="font-color--lightgreen font-size28" >{{(data.avgScore).toFixed(1)}}</span>班级平均分</span>
                </p>
                <p class="analy-student-details__num" v-if="data.avgRatio === null">
                   <span class="font-color--lightgreen font-size28" >--</span>
                </p>
                <p class="analy-student-details__progress">
                  <span class="analy-student-details__bar analy-student-details__bar--lightgreen"></span>
                </p>
                <p class="analy-student-details__tips"  v-if="data.maxRatio >= 0">
                  最高:
                  <span class="font-color--lightgreen" v-if="data.maxScore === null" :title="studentList.maxRatio.join(',')">{{(data.maxRatio*100).toFixed(1)}}% {{studentList.maxRatio.join(',')}}</span>
                  <span class="font-color--lightgreen" v-if="data.maxScore != null" :title="studentList.maxRatio.join(',')">{{(data.maxScore).toFixed(1)}}% {{studentList.maxRatio.join(',')}}</span>
                </p>
                <p class="analy-student-details__tips"  v-if="!data.maxRatio">
                  最高:
                  <span class="font-color--lightgreen">--</span>
                </p>
                <p class="analy-student-details__tips" v-if="data.minRatio >= 0">
                  最低:
                  <span class="font-color--lightgreen" v-if="data.minScore === null " :title="studentList.minRatio.join(',')">{{(data.minRatio*100).toFixed(1)}}% {{studentList.minRatio.join(',')}}</span>
                  <span class="font-color--lightgreen" v-if="data.minScore != null " :title="studentList.minRatio.join(',')">{{(data.minScore).toFixed(1)}}% {{studentList.minRatio.join(',')}}</span>
                </p>
                <p class="analy-student-details__tips" v-if="data.minRatio === null">
                  最低:
                  <span class="font-color--lightgreen">--</span>
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
                  <span class="font-color--green font-size28">{{data.avgTime}}分钟</span>平均用时
                </p>
                <p class="analy-student-details__progress">
                  <span class="analy-student-details__bar analy-student-details__bar--green"></span>
                </p>
                <p class="analy-student-details__tips">
                  最快:<span
                  class="font-color--green" :title="studentList.minTime.join(',')">{{data.minTime}}分钟  {{studentList.minTime.join(',')}}</span>
                </p>
                <p class="analy-student-details__tips">
                  最慢:<span
                  class="font-color--green" :title="studentList.maxTime.join(',')">{{data.maxTime}}分钟  {{studentList.maxTime.join(',')}}</span>
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
              <span class="font-size14 font-color--999">共{{bigs.length}}大题，{{queNum}}小题</span>
            </div>
            <div class="analy-situation-subject" v-if="content.content">
              <div v-for="item in content.content.sections[0].groups">
                <div class="analy-situation-subject__title c-dw__question-title">
                  {{item.ord}}.{{item.title}}
                </div>
                <div class="analy-situation-subject__con">
                  <div class="analy-situation-subject__item" v-for="smItem in item.ques">
                    <div class="analy-situation-subject__tips" :qid="smItem.qid" :resId="smItem.resId">
                      <p class="analy-situation-subject__nums">{{smItem.ratio*100}}%</p>
                      <p class="analy-situation-subject__qid">{{smItem.ord}}</p>
                    </div>
                    <div class="analy-situation-subject__charts">
                      <ve-ring :data="smItem.chartData" height="52px" :settings="chartSettings" :tooltip-visible='false'
                               :legend-visible="false" :colors="pieColor"></ve-ring>
                    </div>
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
                <tr v-for="item in knos">
                  <td>{{item.name}}</td>
                  <td>{{item.qids.length}}</td>
                  <td>{{item.qids.length/item.total}}54%</td>
                  <td>{{item.qids.join(',')}}</td>
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
                <tr v-for="item in data.users" v-if="item.rank">
                  <td>
                    <i :class="`analy-rank-icon analy-rank-icon--${item.rank}`" v-if="item.rank <= 3"></i>
                    <i class="naly-rank-icon" v-if="item.rank > 3">{{item.rank}}</i>
                  </td>
                  <td>{{item.name}}</td>
                  <td>{{item.ratio*100}}</td>
                  <td>
                    <input type="button" class="u-btn u-btn--sm u-btn-sm-green" :id='item.userId' value="查看">
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="analy-section analy-section--null" v-if="!data.done" >
            无学生提交作业，暂无数据哦！
        </div>
      </div>
    </div>
    <!--判断是否是有学生提交-->
    <div class="analy-back" v-if="data.done" @click="goToTop"></div>
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
      slideBar: [
        {id: '#workdone', 'flag': true, 'tit': '作业完成情况'},
        {id: '#answer', 'flag': false, 'tit': '答题详情'},
        {id: '#knowledge', 'flag': false, 'tit': '知识点分析'},
        {id: '#student', 'flag': false, 'tit': '学生成绩排行'}
      ],
      taskId: 1221,
      className: ''
    }
  },
  computed: {
    ...mapState('Class', [
      'data',
      'studentList',
      'knos',
      'analys',
      'queNum',
      'bigs',
      'content',
      'publishFlag'
    ]
    )
  },
  created () {
    this.init(this.taskId).then(console.log(this.content))
    document.onscroll = function () {
      var heightTop = document.documentElement.scrollTop || document.body.scrollTop
      if (heightTop > 0) {
        heightTop = heightTop > 5 ? heightTop : 0
        if (document.getElementById('analySildebar')) {
          document.getElementById('analySildebar').style.top = `${heightTop}px`
        }
      }
    }
  },
  methods: {
    ...mapActions('Class', {
      init: 'init',
      publishFun: 'publishAnswer'
    }),
    toStudent: function () {
      this.$router.push({path: '/studentDetail'})
    },
    toPaper: function () {
      this.$router.push({path: '/paperDetail'})
    },
    /* 公布答案 */
    publishAnswer: function () {
      let data = {
        taskId: this.taskId,
        publishFlag: this.publishFlag
      }
      this.publishFun(data)
    },
    /* 分析数据整合进试卷 */
    setPaperData: function () {
    },
    changeBar: function ($index) {
      this.slideBar.map((item) => {
        item.flag = false
      })
      this.slideBar[$index].flag = true
    },
    /* 回到顶部 */
    goToTop: function () {
      (function smoothscroll () {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll)
          window.scrollTo(0, currentScroll - (currentScroll / 5))
        }
      })()
    }
  }
}
</script>

<style scoped>
</style>
