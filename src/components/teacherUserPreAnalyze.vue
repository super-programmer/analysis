<template>

  <div class="g-container">
    <div class="c-pres__content--left">
      <!-- <div  v-for="item in userArr" :key="item.userId"  class="c-pres__content--left-item  text-ovh" @click="getEveryData(item.userId)"> -->
      <div  v-for="item in userArr" :key="item.userId"  class="c-pres__content--left-item  text-ovh" >
      <div @click="getEveryData(item.userId)" class="c-pres__content--left-item text-ovh">
        <span class="c-pres_name-position text-ovh">
        {{item.name}}
        <div v-if="nowUserId == item.userId" class="c-pres__student--is-check"></div>
        </span>
      </div>
      </div>
    </div>
    <div style="margin-left:94px">
      <div class="c-analy-heaher c-analy-heaher--sm">
        <div class="c-analy-heaher__main">
          <h3 >
            预习作业
          </h3>
        </div>
      </div>
      <!--微课-->
      <div class="analy-section" v-if="microClassArray.length != 0">
        <div class="analy-section__tit">
          微课
        </div>
        <div class="analy-section__main">
            <ul >
              <li v-for="item in microClassArray" :key="item.workId" class="analy-resouce-item">
                <p class="analy-resouce-operation">
                  <input @click="toDetail(item.workId,item.taskId,item.resType,item.resId,item.refId)" type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
                </p>
                <p class="analy-resouce-type analy-resouce-type--vedio"></p>
                <p class="analy-resouce-name">
                  {{item.resName}}
                </p>
                <p :class="togetClass(item.doneOn)">
                  <span v-if="item.doneOn">
                    <span class="analy-resouce-tips__item">
                      <i class="c-analy__icon c-analy__icon--time"></i>
                      观看时长:
                      <span class="font-color--green">{{togetHourAndMinite(item.usedTime)}}</span>
                    </span>
                    <span class="analy-resouce-tips__item">
                      <i class="c-analy__icon c-analy__icon--look"></i>
                      观看次数:
                      <span class="font-color--green">{{toChangeNull(item.watchCnt)}}次</span>
                    </span>
                  </span>
                </p>
              </li>
            </ul>
        </div>
      </div>
      <!--课件-->
      <div class="analy-section" v-if="couseWaveArray.length != 0">
        <div class="analy-section__tit">
          课件
        </div>
        <div class="analy-section__main">
            <ul>
              <li  v-for="item in couseWaveArray" :key="item.workId" class="analy-resouce-item">
                <p class="analy-resouce-operation">
                  <input @click="toDetail(item.workId,item.taskId,item.resType,item.resId,item.refId)" type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
                </p>
                <p class="analy-resouce-type analy-resouce-type--doc"></p>
                <p class="analy-resouce-name">
                  {{item.resName}}
                </p>
                <p :class="togetClass(item.doneOn)">
                  <span v-if="item.doneOn">
                    <span class="analy-resouce-tips__item">
                      <i class="c-analy__icon c-analy__icon--time"></i>
                      观看时长:
                      <span class="font-color--green">{{togetHourAndMinite(item.usedTime)}}</span>
                    </span>
                    <span class="analy-resouce-tips__item">
                      <i class="c-analy__icon c-analy__icon--look"></i>
                      观看次数:
                      <span class="font-color--green">{{toChangeNull(item.watchCnt)}}次</span>
                    </span>
                  </span>
                </p>
              </li>
            </ul>
        </div>
      </div>
      <!--试卷-->
      <div class="analy-section" v-if="paperArray.length != 0">
        <div class="analy-section__tit">
          试卷
        </div>
        <div class="analy-section__main">
            <ul>
              <li  v-for="item in paperArray" :key="item.workId" class="analy-resouce-item">
                <p class="analy-resouce-operation">
                  <input @click="toDetail(item.workId,item.taskId,item.resType,item.resId,item.refId)" type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
                </p>
                <p class="analy-resouce-type analy-resouce-type--paper"></p>
                <p class="analy-resouce-name">
                  {{item.resName}}
                </p>
                <p :class="togetClass(item.doneOn)">
                  <span v-if="item.doneOn">
                    <span class="analy-resouce-tips__item">
                      <i class="c-analy__icon c-analy__icon--alarm"></i>
                      用时:
                      <span class="font-color--green">{{togetMiniteAndSecond(item.usedTime)}}</span>
                    </span>
                    <span class="analy-resouce-tips__item">
                      <i class="c-analy__icon c-analy__icon--right"></i>
                      正确率:
                      <span class="font-color--green">{{toChangeRadio(item.ratio)}}%</span>
                    </span>
                  </span>
                </p>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import API from '@/api/api'
export default {
  data () {
    return {
      lessonId: 0, // lessonId
      paperArray: [], // 2
      couseWaveArray: [], // 3
      microClassArray: [], // 4
      userArr: [],
      firstUserId: 0,
      nowUserId: 110411
    }
  },
  mounted () {
    this.getParams()
  },
  computed: {
  },
  methods: {
    togotoDetail () {
      // this.$router.push({ name: 'teacherVedio'})
    },
    toChangeNull (num) {
      if (num) {
        return num
      } else {
        return 0
      }
    },
    toChangeRadio (radio) {
      console.log('112233' + radio)
      if (radio) {
        return radio * 100
      } else {
        return 0
      }
    },
    // 每个学生的数据
    getEveryData (everyId) {
      this.nowUserId = everyId
      // this.$router.push({name: 'teacherUserPreAnalyze', query: { lessonId: this.lessonId,userId:everyId}})
      this.togetDataFromUserId(everyId)
    },
    togetDataFromUserId (eveUserId) {
      console.log(this.lessonId, eveUserId)
      API.getTeacherUserPreview(this.lessonId, eveUserId)
        .then(resp => {
          console.log(resp)
          this.paperArray = []
          this.couseWaveArray = []
          this.microClassArray = []
          var allArr = resp.data
          for (var i = 0; i < allArr.length; i++) {
            var typeDic = allArr[i]
            if (typeDic.resType == 2) {
              this.paperArray.push(typeDic)
            }
            if (typeDic.resType == 3) {
              this.couseWaveArray.push(typeDic)
            }
            if (typeDic.resType == 4) {
              this.microClassArray.push(typeDic)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取
    GetRequest () {
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
    getParams () {
      // 取到路由带过来的参数
      this.lessonId = this.$route.query.lessonId
      this.nowUserId = this.$route.query.userId
      API.getTeacherClassPreview(this.lessonId)
        .then(resp => {
          console.log(resp)
          this.userArr = resp.data.users
          if (this.userArr.length != 0) {
            console.log(this.userArr)
            this.firstUserId = this.userArr[0].userId
          }
          console.log(this.firstUserId)
          this.togetDataFromUserId(this.nowUserId)
        })
        .catch(err => {
          console.log(err)
        })
    },
    togetHourAndMinite (secondNum) {
      if (secondNum) {
        if (secondNum < 60) {
          return '不足一分钟'
        } else if (secondNum < 3600) {
          return parseInt(secondNum / 60.0) + '分钟'
        } else {
          return parseInt(secondNum / 3600.0) + '小时' + parseInt((parseFloat(secondNum / 3600.0) -
                          parseInt(secondNum / 3600.0)) * 60) + '分钟'
        }
      } else {
        return 0 + '分钟'
      }
    },
    togetMiniteAndSecond (secondNum) {
      if (secondNum) {
        if (secondNum < 60) {
          return secondNum + '"'
        } else {
          return parseInt(secondNum / 60.0) + "'" + parseInt((parseFloat(secondNum / 60.0) -
                          parseInt(secondNum / 60.0)) * 60) + '"'
        }
      } else {
        return 0 + '"'
      }
    },
    togetClass (doneOn) {
      if (doneOn) {
        return 'analy-resouce-tips'
      } else {
        return 'analy-resouce-tips analy-resouce-tips__noComplete'
      }
    },
    toDetail (workId, taskId, resType, resId, refId) {
      if (resType === 3 || resType === 4) {
        window.location.href = `https://www.yunguxt.com/workviewer/index.html?taskId=${taskId}&resType=${resType}`
      } else {
        this.$router.push({path: `/paperDetail/${taskId}/${resId}/${refId}`})
      }
    }
  }
}
</script>
