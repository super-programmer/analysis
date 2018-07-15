<template>
  <!--判断-->
  <div class="c-pres__subjective" v-for="item in 1" v-if="13">
    <div class="c-pres__qstem--left c-pres__qstem--left--tea">
      <div class="c-pres__topic-title c-res__add-margin">
        1.动能修正系数与断面流速分布有关。
        <span class="c-res-itsource">(10分)</span>
      </div>
      <div class="c-pres__topic-content ">
                  <span class="c-pres__choice-question c-pres__choice-question--judge font-color--green">
                    <label><input type="radio" name="1" checked disabled>正确</label>
                  </span>
        <span class="c-pres__choice-question c-pres__choice-question--judge font-color--orange">
                    <label><input type="radio" name="1" disabled >错误</label>
                  </span>
        <!-- 选择题答案 -->
        <div class="c-res__postil c-res__answer--show">
          <div class="c-res__answer-title">【答案】</div>
          <div class="c-res__positl-content c-res__answer-content c-pres__choice__answer">
            B
          </div>
        </div>
      </div>
      <div class="analy-paper--charts">
        <div class="analy-paper--charts__item">
          <p class="analy-paper--charts__tit">
            正确率
          </p>
          <div class="analy-paper--charts__box">
            <div class="analy-paper--charts__nums">
              <p class="analy-paper--charts__num">
                75%
              </p>
              <p class="analy-paper--charts__tips">
                答对20人，占比75%
              </p>
              <p class="analy-paper--charts__tips">
                答错5人，占比25%
              </p>
            </div>
            <ve-ring :data="chartData1" height="220px" :settings="chartSettings" :tooltip-visible='false'
                     :legend-visible="false" :colors="pieColor" :events="log"></ve-ring>
          </div>
        </div>
        <div class="analy-paper--charts__item">
          <p class="analy-paper--charts__tit">选项分布
          </p>
          <div class="analy-paper--charts__box">
            <ve-ring :data="chartData2" height="220px" :settings="chartSettings1" :legend-visible="false"
                     :colors="pieColor1" :events="log"></ve-ring>
          </div>
        </div>
      </div>
    </div>
    <div class="c-pres__check-operation--right">
      <div class="c-pres-source__btn">24.5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'judge'
}
</script>

<style scoped>

</style>
