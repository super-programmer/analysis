<template>
  <div class="c-pre-student">
    <div class="c-pres-container" v-if="canShow">
      <div class="c-pres__content f-clearfix">
        <div class="c-pres__content--center c-pres__content--center--tea">
          <div>
            <div class="c-pres__tab-show f-clearfix">
              <div class="c-pres--isshow-answer" @click="showAnswer">答案解析</div>
            </div>
            <div class="c-pres__topic">
              <!-- 题干部分 -->
              <div class="c-pres__topic--item" v-for="item in content.content.sections[0].groups">
                <div class="c-dw__question-title">
                  {{item.ord}}、{{item.title}}
                </div>
                <div v-for="subitem in item.ques">
                  <!--复合题目-->
                  <div v-if="content.questions[subitem.qid].content.tpl === 6" class="c-pres__subjective">
                    <div class="c-pres__topic-title c-res__add-margin">
                    <span>
                      {{subitem.ord}}.
                    <span v-html="content.questions[subitem.qid].content.stem"></span>
                       <span class="c-res-itsource">({{subitem.score}}分)</span>
                    </span>
                    </div>
                    <div v-for="(comItem,$index) in content.questions[subitem.qid].content.subs">
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
                  <div v-if="content.questions[subitem.qid].content.tpl != 6">
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
        <div class="c-pres__content--right">
          <div class="c-pres--right-title">题号卡</div>
          <div class="c-pres--right-con">
            <div class="c-pres-result__content-btn">
              <div v-for="item in content.content.sections[0].groups">
                <div class="c-pres-result__quetion-title">
                  {{item.ord}}、{{item.title}}（{{item.score}}分）
                </div>
                <div class="c-pres-result__btn-items">
                  <div class="c-pres-result__btn-item" v-for="smItem in item.ques" :class="smItem.className">{{smItem.ord}}</div>
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
  name: 'paperDetail',
  data: function () {
    return {
      showAnswerFlag: false, // 答案解析
      canShow: false // 答案解析
    }
  },
  computed: {
    ...mapState({
      gradeData: state => state.Paper.gradeData,
      content: state => state.Paper.content
    })
  },
  created () {
    let data = {
      taskId: 1551,
      resId: 2029,
      refId: 2516,
      type: 'tea'
    }
    this.initPaper(data).then(() => {
      this.canShow = true
    })
  },
  mounted () {
    /* 添加试卷标识 */
  },
  methods: {
    ...mapActions('Paper', {
      initPaper: 'initPaper'
    }),
    showAnswer: function () {
      this.showAnswerFlag = !this.showAnswerFlag
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
