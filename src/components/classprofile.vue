<template>
  <div>
    <Header></Header>
    <div class="g-container">
      <!--侧边栏-->
      <div class="analy-sildebar" id="analySildebar" v-if="data.done">
        <ul class="analy-sildebar-list">
          <li class="analy-sildebar__item" :class="slideBarIndex === index ? 'analy-sildebar__item--active' : ''" v-for="(item,index) in slideBar"  @click="changeBar(index)">
            <a  :href="item.id">
              <span class="font-color--999 analy-sildebar__order">{{index + 1}}</span>{{item.tit}}
            </a>
          </li>
        </ul>
      </div>
      <div class="analy-review-main" :class="!data.done ? 'analy-review-main--full': ''">
        <div class="c-analy-heaher">
          <i class="c-analy-heaher__icon" :class="data.className"></i>
          <!--公布答案-->
          <div class="c-analy-heaher__operation">
            <div class="c-publish-answer-box" v-if="data.done">
              <div class="container">
                <div class="bg_con">
                  <input id="checked_1" type="checkbox" class="switch"  :checked="publishFlag" @change="publishAnswer()"/>
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
        <!--班级试卷题干-->
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
                  <span v-if="data.avgScore != null "><span class="font-color--lightgreen font-size28" >{{(data.avgScore).toFixed(1)}}</span>班级平均分</span>
                </p>
                <p class="analy-student-details__num" v-if="data.avgRatio === null && data.avgScore === null">
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
                <p class="analy-student-details__tips"  v-if="data.maxRatio === null && data.maxScore === null">
                  最高:
                  <span class="font-color--lightgreen">--</span>
                </p>
                <p class="analy-student-details__tips" v-if="data.minRatio >= 0">
                  最低:
                  <span class="font-color--lightgreen" v-if="data.minScore === null " :title="studentList.minRatio.join(',')">{{(data.minRatio*100).toFixed(1)}}% {{studentList.minRatio.join(',')}}</span>
                  <span class="font-color--lightgreen" v-if="data.minScore != null " :title="studentList.minRatio.join(',')">{{(data.minScore).toFixed(1)}}% {{studentList.minRatio.join(',')}}</span>
                </p>
                <p class="analy-student-details__tips" v-if="data.minRatio === null && data.minScore === null">
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
                  <span class="font-color--green font-size28">{{(data.avgTime/60).toFixed(1)}}分钟</span>平均用时
                </p>
                <p class="analy-student-details__progress">
                  <span class="analy-student-details__bar analy-student-details__bar--green"></span>
                </p>
                <p class="analy-student-details__tips">
                  最快:<span class="font-color--green" :title="data.names.minTime.join(',')" v-if="data.names.minTime">{{(data.minTime/60).toFixed(1)}}分钟  {{data.names.minTime.join(',')}}</span>
                </p>
                <p class="analy-student-details__tips">
                  最慢:<span
                  class="font-color--green" :title="data.names.maxTime.join(',')" v-if="data.names.maxTime">{{(data.maxTime/60).toFixed(1)}}分钟  {{data.names.maxTime.join(',')}}</span>
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
            <div class="analy-situation-subject" :class="pullClassName" v-if="content.content">
              <div v-for="item in content.content.sections[0].groups">
                <div class="analy-situation-subject__title c-dw__question-title">
                  {{item.ord}}.{{item.title}}
                </div>
                <div class="analy-situation-subject__con">
                  <div class="analy-situation-subject__item" v-for="smItem in item.ques">
                    <div class="analy-situation-subject__tips" :qid="smItem.qid" :resId="smItem.resId" @click="showDetail(smItem.qid)">
                      <p class="analy-situation-subject__nums" v-if="smItem.ratio > 0">{{(smItem.ratio*100).toFixed(0)}}%</p>
                      <p class="analy-situation-subject__nums" v-if="smItem.ratio === null || 0">--</p>
                      <p class="analy-situation-subject__qid">{{smItem.ord}}</p>
                    </div>
                    <div class="analy-situation-subject__charts">
                      <ve-ring :data="smItem.chartData" height="52px" :settings="chartSettings" :tooltip-visible='false' :legend-visible="false" :colors="pieColor"></ve-ring>
                    </div>
                  </div>
                </div>
              </div>
              <div class="analy-situation-pullbtn" @click="packUp"></div>
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
                  <td>{{(item.qids.length*100/queNum).toFixed(0)}}%</td>
                  <td>{{item.remark}}</td>
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
                <tr v-for="(item,index) in data.users" v-if="item.rank">
                  <td>
                    <span :class="`analy-rank-icon analy-rank-icon--${item.rank}`" v-if="item.rank <= 3"></span>
                    <span class="naly-rank-icon" v-if="item.rank > 3">{{item.rank}}</span>
                  </td>
                  <td>{{item.name}}</td>
                  <td>{{(item.ratio*100).toFixed(0)}}</td>
                  <td>
                    <input type="button" class="u-btn u-btn--sm u-btn-sm-green" :id='item.userId' value="查看" @click="toStudent(index)">
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
      <!--显示题目详情-->
      <el-dialog title="" :visible.sync="dialogTableVisible" :append-to-body="true">
        <div>
            <div v-if="content.content">
              <!-- 题干部分 -->
              <div v-for="item in content.content.sections[0].groups">
                <div v-for="subitem in item.ques">
                  <!--复合题目-->
                  <div v-if="content.questions[subitem.qid].content.tpl === 6" class="c-pres__subjective">
                    <div v-for="(comItem,$index) in content.questions[subitem.qid].content.subs" >
                      <div v-if="activeQcid === subitem.qid">
                        <!--单选-->
                        <choise v-if="comItem.tpl === 1" :data="comItem" :subitem="subitem" :studentData="gradeData" :index="$index+1" :showAnswer="showAnswerFlag"></choise>
                        <choise v-if="comItem.tpl === 2" :data="comItem" :subitem="subitem" :studentData="gradeData" :index="$index+1" :showAnswer="showAnswerFlag"></choise>
                        <choise v-if="comItem.tpl === 3" :data="comItem" :subitem="subitem" :studentData="gradeData" :index="$index+1" :showAnswer="showAnswerFlag"></choise>
                        <!--填空 -->
                        <fill v-if="comItem.tpl === 4" :data="comItem" :subitem="subitem" :studentData="gradeData" :index="$index+1" :showAnswer="showAnswerFlag"></fill>
                        <!--问答-->
                        <essay v-if="comItem.tpl === 5" :data="comItem" :subitem="subitem" :studentData="gradeData" :index="$index+1" :showAnswer="showAnswerFlag"></essay>
                        <!--完形填空-->
                        <clozetest v-if="comItem.tpl === 7" :data="comItem" :subitem="subitem" :studentData="gradeData" :index="$index+1" :showAnswer="showAnswerFlag"></clozetest>
                      </div>
                    </div>
                  </div>
                  <div v-if="content.questions[subitem.qid].content.tpl != 6">
                    <div v-if="activeQcid === subitem.qid">
                      <!--单选-->
                      <choise v-if="content.questions[subitem.qid].content.tpl === 1" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="gradeData" :showAnswer="showAnswerFlag"></choise>
                      <choise v-if="content.questions[subitem.qid].content.tpl === 2" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="gradeData" :showAnswer="showAnswerFlag"></choise>
                      <choise v-if="content.questions[subitem.qid].content.tpl === 3" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="gradeData" :showAnswer="showAnswerFlag"></choise>
                      <!--填空 -->
                      <fill v-if="content.questions[subitem.qid].content.tpl === 4" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="gradeData" :showAnswer="showAnswerFlag"></fill>
                      <!--问答-->
                      <essay v-if="content.questions[subitem.qid].content.tpl === 5" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="gradeData" :showAnswer="showAnswerFlag"></essay>
                      <!--完形填空-->
                      <clozetest v-if="content.questions[subitem.qid].content.tpl === 7" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="gradeData" :showAnswer="showAnswerFlag"></clozetest>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </el-dialog>
    </div>
    <!--判断是否是有学生提交-->
    <!--<div class="analy-back" v-if="data.done" @click="goToTop"></div>-->
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import fill from './submodule/fill'
import essay from './submodule/essay'
import choise from './submodule/choise'
import clozetest from './submodule/clozetest'
import stuKnowledge from './stuKnowledge'
import judge from './submodule/judge'
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
        {id: '#workdone', 'tit': '作业完成情况'},
        {id: '#answer', 'tit': '答题详情'},
        {id: '#knowledge', 'tit': '知识点分析'},
        {id: '#student', 'tit': '学生成绩排行'}
      ],
      slideBarIndex: 0,
      taskId: '',
      className: '',
      pullClassName: '',
      showAnswerFlag: false,
      activeQcid: '', // 点击的题目qid
      dialogTableVisible: false // dialog显示状态
    }
  },
  computed: {
    ...mapState('Class', [
      'data',
      'gradeData',
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
    let _this = this
    _this.taskId = _this.getRequest().taskId
    _this.init(_this.taskId).then()
    /* 页面滚动导航 */
    document.onscroll = function () {
      let heightTop = document.documentElement.scrollTop || document.body.scrollTop
      _this.slideBar.map((item, index) => {
        let scrollTop = document.getElementById(item.id.split('#')[1]).offsetTop
        if (heightTop >= (scrollTop - 140)) {
          _this.slideBarIndex = index
        }
      })
    }
  },
  methods: {
    ...mapActions('Class', {
      init: 'init',
      publishFun: 'publishAnswer'
    }),
    publishAnswer: function () {
      let data = {
        taskId: this.taskId,
        publishFlag: this.publishFlag
      }
      console.log(data)
      this.publishFun(data)
    },
    toStudent: function (index) {
      if (index >= 0) {
        this.$router.push({path: `/studentDetail/${this.taskId}/${index}`})
      } else {
        this.$router.push({path: `/studentDetail/${this.taskId}`})
      }
    },
    toPaper: function () {
      this.$router.push({path: `/paperDetail/${this.taskId}/${this.data.resId}/${this.data.refId}`})
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
    },
    /* 收起 */
    packUp: function () {
      if (this.pullClassName === 'analy-situation-subject--pull') {
        this.pullClassName = ''
      } else {
        this.pullClassName = 'analy-situation-subject--pull'
      }
    },
    // 获取taskId
    getRequest: function () {
      var url = location.search // 获取url中"?"符后的字串
      var theRequest = new Object()
      if (url.indexOf('?') != -1) {
        var str = url.substr(1),
          strs = str.split('&')
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
        }
      }
      return theRequest
    },
    /* 展示题目详情 */
    showDetail: function (data) {
      this.dialogTableVisible = true
      this.activeQcid = data
    }
  },
  components: {
    fill: fill,
    essay: essay,
    choise: choise,
    judge: judge,
    clozetest: clozetest,
    stuKnowledge: stuKnowledge
  }
}
</script>
<style scoped>
</style>
