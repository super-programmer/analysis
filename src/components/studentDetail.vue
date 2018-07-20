<template>
  <div class="c-pre-student">
    <div class="c-pres-container">
      <div class="c-pres__content f-clearfix">
        <div class="c-pres__content--left">
          <div class="c-pres__content--left-item  text-ovh" v-for="item of studentList" :userId="item.userId">
            <span class="c-pres_name-position text-ovh">
              {{item.name}}
              <span class="c-pres__student--is-check"></span>
              </span>
          </div>
        </div>
        <div class="analy-student-details">
          <div class="analy-student-details__item">
            <i class="analy-student-details__type analy-student-details__type--acc"></i>
            <p class="analy-student-details__num">
              <span class="font-color--lightgreen font-size28">{{(data.ratio).toFixed(1)}}%</span>正确率
            </p>
            <p class="analy-student-details__progress">
              <span class="analy-student-details__bar analy-student-details__bar--lightgreen"></span>
            </p>
            <p class="analy-student-details__tips" v-if="data.ratio > data.avgRatio">
              高于班级正确率
              <span class="font-color--lightgreen">{{(data.ratio - data.avgRatio).toFixed(1)}}%</span>
            </p>
            <p class="analy-student-details__tips" v-if="data.ratio < data.avgRatio">
              低于班级正确率
              <span class="font-color--lightgreen">{{(data.avgRatio - data.ratio).toFixed(1)}}%</span>
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
        <div class="c-pres__content--center c-pres__content--center--tea">
          <stuKnowledge :knos="data.knos" v-if="showKnowFlag"></stuKnowledge>
          <div v-if="!showKnowFlag">
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
                      <choise v-if="comItem.tpl === 1" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag"></choise>
                      <choise v-if="comItem.tpl === 2" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag"></choise>
                      <choise v-if="comItem.tpl === 3" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag"></choise>
                      <!--填空 -->
                      <fill v-if="comItem.tpl === 4" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag"></fill>
                      <!--问答-->
                      <essay v-if="comItem.tpl === 5" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag"></essay>
                      <!--完形填空-->
                      <clozetest v-if="comItem.tpl === 7" :data="comItem" :subitem="subitem" :studentData="data" :index="$index+1" :showAnswer="showAnswerFlag"></clozetest>
                    </div>
                  </div>
                  <div v-if="content.questions[subitem.qid].content.tpl != 6">
                    <!--单选-->
                    <choise v-if="content.questions[subitem.qid].content.tpl === 1" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag"></choise>
                    <choise v-if="content.questions[subitem.qid].content.tpl === 2" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag"></choise>
                    <choise v-if="content.questions[subitem.qid].content.tpl === 3" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag"></choise>
                    <!--填空 -->
                    <fill v-if="content.questions[subitem.qid].content.tpl === 4" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag"></fill>
                    <!--问答-->
                    <essay v-if="content.questions[subitem.qid].content.tpl === 5" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag"></essay>
                    <!--完形填空-->
                    <clozetest v-if="content.questions[subitem.qid].content.tpl === 7" :data="content.questions[subitem.qid].content" :subitem="subitem" :studentData="data" :showAnswer="showAnswerFlag"></clozetest>
                  </div>
                </div>
              </div>
              <!--<div class="c-pres__topic&#45;&#45;item">
                <div class="c-dw__question-title">
                  一.解答题<span class="font-color&#45;&#45;blue font-size14">【班级正确率70%】</span>
                </div>
                <div class="c-pres__subjective" v-if="13">
                  <div class="c-pres__qstem&#45;&#45;left c-pres__qstem&#45;&#45;left&#45;&#45;tea">
                    <div class="c-pres__topic-title">
                      <span>1.</span> 阅读下面的文字，回答后面问题。
                    </div>
                    <div class="c-pres__topic-content">
                      我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”
                      　　回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。钱，托他们直是白托！而且我这样大年纪的人，难道还不能料理自己么？唉，我现在想想，那时真是太聪明了！
                      　　我说道，“爸爸，你走吧。”他望车外看了看，说，“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。父亲是一个胖子，走过去自然要费事些。我本来要去的，他不肯，只好让他去。我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。
                    </div>
                    <div class="c-pres__topic-title c-res__add-margin">
                      （1）从全文看，父亲是一个怎样的人？。
                      <span class="c-res-itsource">(10分)</span>
                    </div>
                    <div class="c-pres__topic-content ">
                      我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，
                      看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路
                    </div>
                    <div class="c-res__postil">
                      <div class="c-res__positl-title">文字标注</div>
                      <div class="c-res__positl-content">
                        看见满院狼藉的东西，又想起祖母
                      </div>
                    </div>
                    <div class="c-res__postil c-res__answer&#45;&#45;show c-res__kd">
                      <div class="c-res__answer-title">【考点】</div>
                      <div class="c-res__positl-content c-res__answer-content c-pres__text">
                        我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天到徐州见着父亲， 看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！
                      </div>
                    </div>
                    <div class="c-res__postil c-res__answer&#45;&#45;show">
                      <div class="c-res__answer-title">【解析】</div>
                      <div class="c-res__positl-content c-res__answer-content c-pres__explin">
                        我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天
                      </div>
                    </div>
                    <div class="analy-paper&#45;&#45;charts">
                      <div class="analy-paper&#45;&#45;charts__item">
                        <p class="analy-paper&#45;&#45;charts__tit">
                          正确率
                        </p>
                        <div class="analy-paper&#45;&#45;charts__box">
                          <div class="analy-paper&#45;&#45;charts__nums">
                            <p class="analy-paper&#45;&#45;charts__num">
                              75%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              答对20人，占比75%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              答错5人，占比25%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              半对5人，占比25%
                            </p>
                          </div>
                          <ve-ring :data="chartData1" height="220px" :settings="chartSettings" :tooltip-visible='false'
                                   :legend-visible="false" :colors="pieColor" :events="log"></ve-ring>
                        </div>
                      </div>
                      <div class="analy-paper&#45;&#45;charts__item">
                        <p class="analy-paper&#45;&#45;charts__tit">选项分布
                        </p>
                        <div class="analy-paper&#45;&#45;charts__box">
                          <ve-histogram :data="chartData3" height="220px" :legend-visible="false" :barwidth="60"
                                        :settings="chartSettings3" :colors="histogramColor" :events="log" :y-axis="yAxis"
                                        :x-axis="xAxis"></ve-histogram>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c-pres__check-operation&#45;&#45;right">
                    <div class="c-pres-source__btn c-pres-source__all">24.5</div>
                  </div>
                </div>
              </div>
              <div class="c-pres__topic&#45;&#45;item">
                <div class="c-pres__subjective" v-for="item in 1" v-if="13">
                  <div class="c-pres__qstem&#45;&#45;left c-pres__qstem&#45;&#45;left&#45;&#45;tea">
                    <div class="c-pres__topic-title c-res__add-margin">
                      （2）从全文看，父亲是一个怎样的人？。
                      <span class="c-res-itsource">(10分)</span>
                    </div>
                    <div class="c-pres__topic-content ">
                      我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，
                      看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路
                    </div>
                    &lt;!&ndash; 答案 &ndash;&gt;
                    <div class="c-res__postil c-res__answer&#45;&#45;show">
                      <div class="c-res__answer-title">【答案】</div>
                      <div class="c-res__positl-content c-res__answer-content">
                        我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，
                        看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！
                      </div>
                    </div>
                    &lt;!&ndash; 文字标注 &ndash;&gt;
                    <div class="c-res__postil">
                      <div class="c-res__positl-title">文字标注</div>
                      <div class="c-res__positl-content">
                        又想起祖母，不禁簌簌地流下眼泪。父亲说
                      </div>
                    </div>
                  </div>
                  <div class="c-pres__check-operation&#45;&#45;right">
                    <div class="c-pres-source__btn">24.5</div>
                    <div class="c-pres-source-ops__item c-res__right c-res__right-is-active "></div>
                    <div class="c-pres-source-ops__item c-res__half-right c-res__half-right-is-active"></div>
                    <div class="c-pres-source-ops__item c-res__wrong c-res__wrong-is-active"></div>
                  </div>
                </div>
              </div>
              <div class="c-pres__topic&#45;&#45;item">
                <div class="c-dw__question-title">
                  二.选择题<span class="font-color&#45;&#45;blue font-size14">【班级正确率70%】</span>
                </div>
                <div class="c-pres__subjective" v-for="item in 1" v-if="13">
                  <div class="c-pres__qstem&#45;&#45;left c-pres__qstem&#45;&#45;left&#45;&#45;tea">
                    <div class="c-pres__topic-title c-res__add-margin">
                      1.表述有误的一项是？。
                      <span class="c-res-itsource">(10分)</span>
                    </div>
                    <div class="c-pres__topic-content">
                      <div class="c-pres__choice-question">A. 心里很轻松似的，过一会说，我走了；到那边来信</div>
                      <div class="c-pres__choice-question">A. 心里很轻松似的，过一会说，我走了；到那边来信</div>
                      <div class="c-pres__choice-question c-pres-is-rightanswer">A. 心里很轻松似的，过一会说，我走了；到那边来信</div>
                      <div class="c-pres__choice-question">A. 心里很轻松似的，过一会说，我走了；到那边来信</div>
                      &lt;!&ndash; 选择题答案 &ndash;&gt;
                      <div class="c-res__postil c-res__answer&#45;&#45;show">
                        <div class="c-res__answer-title">【答案】</div>
                        <div class="c-res__positl-content c-res__answer-content c-pres__choice__answer">
                          B
                        </div>
                      </div>
                    </div>
                    <div class="analy-paper&#45;&#45;charts">
                      <div class="analy-paper&#45;&#45;charts__item">
                        <p class="analy-paper&#45;&#45;charts__tit">
                          正确率
                        </p>
                        <div class="analy-paper&#45;&#45;charts__box">
                          <div class="analy-paper&#45;&#45;charts__nums">
                            <p class="analy-paper&#45;&#45;charts__num">
                              75%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              答对20人，占比75%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              答错5人，占比25%
                            </p>
                          </div>
                          <ve-ring :data="chartData1" height="220px" :settings="chartSettings" :tooltip-visible='false'
                                   :legend-visible="false" :colors="pieColor" :events="log"></ve-ring>
                        </div>
                      </div>
                      <div class="analy-paper&#45;&#45;charts__item">
                        <p class="analy-paper&#45;&#45;charts__tit">选项分布
                        </p>
                        <div class="analy-paper&#45;&#45;charts__box">
                          <ve-ring :data="chartData2" height="220px" :settings="chartSettings1" :legend-visible="false"
                                   :colors="pieColor1" :events="log"></ve-ring>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c-pres__check-operation&#45;&#45;right">
                    <div class="c-pres-source__btn">24.5</div>
                  </div>
                </div>
              </div>
              <div class="c-pres__topic&#45;&#45;item">
                <div class="c-dw__question-title">
                  三.填空题<span class="font-color&#45;&#45;blue font-size14">【班级正确率70%】</span>
                </div>
                <div class="c-pres__subjective" v-for="item in 1">
                  <div class="c-pres__qstem&#45;&#45;left c-pres__qstem&#45;&#45;left&#45;&#45;tea">
                    <div class="c-pres__topic-title c-res__add-margin f-clearfix">
                      <div class="c-pres__gap-fill-item c-pres__gap-fill-character">4.图中气压名字是</div>
                      <div class="c-pres__gap-fill-item c-pres__gap-fill-input">
                        <input type="text" class="c-gap-input__item c-gap_fill-right" v-model="val" readonly>
                      </div>
                      <div class="c-pres__gap-fill-item c-pres__gap-fill-character">他是高压</div>
                      <div class="c-pres__gap-fill-item c-pres__gap-fill-input">
                        <input type="text" class="c-gap-input__item c-gap_fill-wrong" v-model="val" readonly>
                      </div>
                    </div>
                    <div class="c-pres__topic-content">
                      &lt;!&ndash; 选择题答案 &ndash;&gt;
                      <div class="c-res__postil c-res__answer&#45;&#45;show">
                        <div class="c-res__answer-title c-pres__gap-fill">【答案】</div>
                        <div class="c-res__positl-content c-res__answer-content c-pres__choice__answer">
                          <div class="c-pres__gap-fill">【第一空】
                            <span>亚热带</span>
                          </div>
                          <div class="c-pres__gap-fill">【第二空】
                            <span>季风气候</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="c-res__postil c-res__answer&#45;&#45;show c-res__kd">
                      <div class="c-res__answer-title">【考点】</div>
                      <div class="c-res__positl-content c-res__answer-content c-pres__text">
                        我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天到徐州见着父亲， 看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！
                      </div>
                    </div>
                    <div class="c-res__postil c-res__answer&#45;&#45;show">
                      <div class="c-res__answer-title">【解析】</div>
                      <div class="c-res__positl-content c-res__answer-content c-pres__explin">
                        我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天
                      </div>
                    </div>
                  </div>
                  <div class="c-pres__check-operation&#45;&#45;right">
                    <div class="c-pres-source__btn">24.5</div>
                  </div>
                </div>
              </div>
              <div class="c-pres__topic&#45;&#45;item">
                <div class="c-dw__question-title">
                  四.判断题<span class="font-color&#45;&#45;blue font-size14">【班级正确率70%】</span>
                </div>
                <div class="c-pres__subjective" v-for="item in 1" v-if="13">
                  <div class="c-pres__qstem&#45;&#45;left c-pres__qstem&#45;&#45;left&#45;&#45;tea">
                    <div class="c-pres__topic-title c-res__add-margin">
                      1.动能修正系数与断面流速分布有关。
                      <span class="c-res-itsource">(10分)</span>
                    </div>
                    <div class="c-pres__topic-content ">
                    <span class="c-pres__choice-question c-pres__choice-question&#45;&#45;judge font-color&#45;&#45;green">
                      <label><input type="radio" name="1" checked disabled>正确</label>
                    </span>
                      <span class="c-pres__choice-question c-pres__choice-question&#45;&#45;judge font-color&#45;&#45;orange">
                      <label><input type="radio" name="1" disabled>错误</label>
                    </span>
                      &lt;!&ndash; 选择题答案 &ndash;&gt;
                      <div class="c-res__postil c-res__answer&#45;&#45;show">
                        <div class="c-res__answer-title">【答案】</div>
                        <div class="c-res__positl-content c-res__answer-content c-pres__choice__answer">
                          B
                        </div>
                      </div>
                    </div>
                    <div class="analy-paper&#45;&#45;charts">
                      <div class="analy-paper&#45;&#45;charts__item">
                        <p class="analy-paper&#45;&#45;charts__tit">
                          正确率
                        </p>
                        <div class="analy-paper&#45;&#45;charts__box">
                          <div class="analy-paper&#45;&#45;charts__nums">
                            <p class="analy-paper&#45;&#45;charts__num">
                              75%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              答对20人，占比75%
                            </p>
                            <p class="analy-paper&#45;&#45;charts__tips">
                              答错5人，占比25%
                            </p>
                          </div>
                          <ve-ring :data="chartData1" height="220px" :settings="chartSettings" :tooltip-visible='false'
                                   :legend-visible="false" :colors="pieColor" :events="log"></ve-ring>
                        </div>
                      </div>
                      <div class="analy-paper&#45;&#45;charts__item">
                        <p class="analy-paper&#45;&#45;charts__tit">选项分布
                        </p>
                        <div class="analy-paper&#45;&#45;charts__box">
                          <ve-ring :data="chartData2" height="220px" :settings="chartSettings1" :legend-visible="false"
                                   :colors="pieColor1" :events="log"></ve-ring>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c-pres__check-operation&#45;&#45;right">
                    <div class="c-pres-source__btn">24.5</div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
        <div class="c-pres__content--right">
          <div class="c-pres--right-title">题号卡</div>
          <div class="c-pres--right-con">
            <div class="c-pres__state-info">
              <div class="c-pres__state-item c-pres__itemc"><i></i>正确</div>
              <div class="c-pres__state-item c-pres__itemz"><i></i>错误</div>
              <div class="c-pres__state-item c-pres__itemd"><i></i>待批改</div>
            </div>
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
  name: 'studentDetail',
  created () {
    this.initStudent(222)
  },
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
      showKnowFlag: false // tabs切换
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
    /* 右侧导航题目答案映射 */
    this.content.content.sections[0].groups.map((item) => {
      item.ques.map((smitem) => {
        this.data.queRsts.map((item) => {
          if (smitem.qid === item.qid) {
            console.log(smitem.right, item.right, item.qid, smitem.qid)
            smitem.right = item.right
            switch (smitem.right) {
              case 0:
                smitem.className = 'sss'
                break
              case 1:
                smitem.className = 'c-result-isright'
                break
              case 2:
                smitem.className = 'c-result-iswrong'
                break
            }
          }
        })
      })
    })
    this.data.type = true
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
