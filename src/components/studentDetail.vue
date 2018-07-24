<template>
  <div class="c-pre-student">
    <div class="c-pres-container" v-if="content.content">
      <div class="c-pres__content f-clearfix">
        <!--学生端进入学生详情隐藏学生列表-->
        <div class="c-pres__content--left" v-if="taskId != 'student'">
          <div class="c-pres__content--left-item  text-ovh" v-for="(item) in studentList" :userId="item.userId" :class="(item.userId === userId) ? 'c-pres-item--is-active' : ''" @click="checkUse(item.userId)">
            <span class="c-pres_name-position text-ovh">
              {{item.name}}
              </span>
          </div>
        </div>
        <div class="analy-student-details">
          <div class="analy-student-details__item">
            <i class="analy-student-details__type analy-student-details__type--acc"></i>
            <p class="analy-student-details__num">
              <span class="font-color--lightgreen font-size28" v-if="data.ratio >= 0 ">{{(data.ratio*100).toFixed(1)}}%</span>正确率
            </p>
            <p class="analy-student-details__progress">
              <span class="analy-student-details__bar analy-student-details__bar--lightgreen"></span>
            </p>
            <p class="analy-student-details__tips" v-if="data.ratio > data.avgRatio">
              高于班级正确率
              <span class="font-color--lightgreen">{{(data.ratio*100 - data.avgRatio*100).toFixed(1)}}%</span>
            </p>
            <p class="analy-student-details__tips" v-if="data.ratio < data.avgRatio">
              低于班级正确率
              <span class="font-color--lightgreen">{{(data.avgRatio*100 - data.ratio*100).toFixed(1)}}%</span>
            </p>
            <p class="analy-student-details__tips" v-if="data.ratio === data.avgRatio">
              您的成绩与班级持平
            </p>
          </div>
          <div class="analy-student-details__item">
            <i class="analy-student-details__type analy-student-details__type--time"></i>
            <p class="analy-student-details__num">
              <span class="font-color--green font-size28">{{`${(data.usedTime/60).toFixed(0)}''${data.usedTime%60}'`}}</span>用时
            </p>
            <p class="analy-student-details__progress">
              <span class="analy-student-details__bar analy-student-details__bar--green"></span>
            </p>
            <p class="analy-student-details__tips">
              提交时间
              <span class="font-color--green">{{data.doneOn}}</span>
            </p>
          </div>
          <div class="analy-student-details__item">
            <i class="analy-student-details__type analy-student-details__type--rank"></i>
            <p class="analy-student-details__num">
              <span class="font-color--orange font-size28">{{data.rank}}</span><span class="font-color--orange">/{{data.total}}</span>排名
            </p>
            <p class="analy-student-details__progress">
              <span class="analy-student-details__bar analy-student-details__bar--orange"></span>
            </p>
            <p class="analy-student-details__tips">
              超过班上<span class="font-color--orange">{{parseInt(((data.total-data.rank)/data.total)*100)}}%</span>的同学
            </p>
          </div>
        </div>
        <div class="analy-detail-tabs">
          <ul>
            <li class="analy-detail-tabs__item " @click="checkTabs(index)" :class="item.className" v-for="(item,index) in tabs">
              {{item.text}}
            </li>
          </ul>
        </div>
        <div class="c-pres__content--center" :class="taskId === 'student' ?  '' : 'c-pres__content--center--tea'">
          <stuKnowledge :knos="data.knos" v-if="showKnowFlag"></stuKnowledge>
          <div v-if="!showKnowFlag">
            <div class="c-pres__tab-show f-clearfix">
              <div class="c-pres--isshow-answer" :class="this.showAnswerFlag ? 'font-color--green' : ''" @click="showAnswer">答案解析</div>
            </div>
            <div class="c-pres__topic" v-if="content.content">
              <!-- 题干部分 -->
              <div class="c-pres__topic--item" v-for="item in content.content.sections[0].groups">
                <div class="c-dw__question-title" >
                  {{item.ord}}、{{item.title}}
                </div>
                <div v-for="subitem in item.ques" v-if="data.bigs">
                  <!--复合题目-->
                  <div v-if="content.questions[subitem.qid].content.tpl === 6" class="c-pres__subjective" :id="subitem.qid">
                    <div class="c-pres__topic-title c-res__add-margin" >
                    <span>
                      {{subitem.ord}}.
                    <span v-html="content.questions[subitem.qid].content.stem"></span>
                       <span class="c-res-itsource">({{subitem.score}}分)</span>
                    </span>
                    </div>
                    <div v-for="(comItem,$index) in content.questions[subitem.qid].content.subs">
                      <!--单选-->
                      <choise v-if="comItem.tpl === 1" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag" :id="comItem.qcid"></choise>
                      <choise v-if="comItem.tpl === 2" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag" :id="comItem.qcid"></choise>
                      <choise v-if="comItem.tpl === 3" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag" :id="comItem.qcid"></choise>
                      <!--填空 -->
                      <fill v-if="comItem.tpl === 4" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag" :id="comItem.qcid"></fill>
                      <!--问答-->
                      <essay v-if="comItem.tpl === 5" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag" :id="comItem.qcid"></essay>
                      <!--完形填空-->
                      <clozetest v-if="comItem.tpl === 7" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag" :id="comItem.qcid"></clozetest>
                    </div>
                  </div>
                  <div v-if="content.questions[subitem.qid].content.tpl != 6" :id="subitem.qcid">
                    <!--单选-->
                    <choise v-if="content.questions[subitem.qid].content.tpl === 1" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag" :id="subitem.qcid"></choise>
                    <choise v-if="content.questions[subitem.qid].content.tpl === 2" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag" :id="subitem.qcid"></choise>
                    <choise v-if="content.questions[subitem.qid].content.tpl === 3" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag" :id="subitem.qcid"></choise>
                    <!--填空 -->
                    <fill v-if="content.questions[subitem.qid].content.tpl === 4" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag" :id="subitem.qcid"></fill>
                    <!--问答-->
                    <essay v-if="content.questions[subitem.qid].content.tpl === 5" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag" :id="subitem.qcid"></essay>
                    <!--完形填空-->
                    <clozetest v-if="content.questions[subitem.qid].content.tpl === 7" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag" :id="subitem.qcid"></clozetest>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-pres__content--right" id="sideBar">
          <div class="c-pres--right-title">题号卡</div>
          <div class="c-pres--right-con">
            <div class="c-pres__state-info">
              <div class="c-pres__state-item c-pres__itemc"><i></i>正确</div>
              <div class="c-pres__state-item c-pres__itemz"><i></i>错误</div>
              <div class="c-pres__state-item c-pres__itemd"><i></i>待批改</div>
            </div>
            <div class="c-pres-result__content-btn" v-if="content.content">
              <div v-for="item in content.content.sections[0].groups">
                <div class="c-pres-result__quetion-title">
                  {{item.ord}}、{{item.title}}（{{item.score}}分）
                </div>
                <div class="c-pres-result__btn-items">
                  <div class="c-pres-result__btn-item"  v-for="smItem in item.ques" :class="smItem.qid === itemActiveIndex ? `c-result-isactive ${smItem.className}` : `${smItem.className}`" @click="slideTo(smItem.qid)">
                     <span :class="smItem.qid === itemActiveIndex ? 'c-result-isactive' : ''">{{smItem.ord}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: 'studentDetail',
  data: function () {
    return {
      tabs: [
        {
          text: '学生详情',
          className: 'analy-detail-tabs__item--active'
        }, {
          text: '知识点掌握分析',
          className: ''
        }
      ], // 答案解析
      showAnswerFlag: false, // 答案解析
      showKnowFlag: false, // tabs切换
      taskId: '', // 任务id
      userId: 0,
      itemActivelist: [], // 右侧导航list
      itemActiveIndex: ''// 右侧导航index
    }
  },
  computed: {
    ...mapState('Student', [
      'data',
      'studentList',
      'content'
    ]
    )
  },
  mounted () {
    this.taskId = this.$route.params[0].split('/')[0]
    this.userId = this.$route.params[0].split('/')[1]
    this.init()
  },
  methods: {
    ...mapActions('Student', {
      initStudent: 'initStudent'
    }),
    showAnswer: function () {
      this.showAnswerFlag = !this.showAnswerFlag
    },
    checkTabs: function (i) {
      this.tabs.map((item) => {
        item.className = ''
        this.tabs[i].className = 'analy-detail-tabs__item--active'
        if (i === 0) {
          this.showKnowFlag = false
        } else {
          this.showKnowFlag = true
        }
      })
    },
    checkUse: function (userId) {
      this.userId = userId
      this.initStudent({taskId: this.taskId, userId: this.userId}).then()
    },
    slideTo: function (num) {
      let _this = this
      _this.itemActiveIndex = num
      window.scrollTo(0, document.getElementById(num).offsetTop)
    },
    async init () {
      let data = {taskId: this.taskId, userId: this.userId}
      await this.initStudent(data).then(() => {
        let _this = this
        _this.userId = _this.userId
        /* 将题目qid整合进一个数组 */
        _this.content.content.sections[0].groups.map((item) => {
          item.ques.map((smitem) => {
            _this.itemActivelist.push(smitem.qid)
          })
        })
        _this.itemActiveIndex = _this.itemActivelist[0]
        /* 页面滚动导航 */
        document.onscroll = function () {
          let heightTop = document.documentElement.scrollTop || document.body.scrollTop
          if (heightTop >= 350) {
            document.getElementById('sideBar').style.top = `${heightTop - 350}px`
          } else {
            document.getElementById('sideBar').style.top = 0
          }
          _this.itemActivelist.map((item) => {
            let scrollTop = document.getElementById(item).offsetTop
            if (heightTop >= (scrollTop - 350)) {
              _this.itemActiveIndex = item
            }
          })
        }
      })
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
