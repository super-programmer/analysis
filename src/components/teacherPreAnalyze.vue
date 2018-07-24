<template>
<div class="g-container">
  <el-dialog title="全部完成" :visible.sync="dialogTableVisible">
    <div class="m-table">
      <table>
        <tr>
          <th>
            序号
          </th>
          <th>
            姓名
          </th>
          <th v-if="clickType == 2" v-for="item in paperArray" :key="item.taskId">
            {{item.resName}}
          </th>
          <th v-if="clickType != 3" >
            操作
          </th>
        </tr>
        <tr v-for="(itemaa,index) in nowStudentArr" :key="itemaa.userId">
          <td>
            {{index + 1}}
          </td>
          <td>
            {{itemaa.name}}
          </td>
          <td :class="toGetCheck(item.taskId,itemaa.userId)" v-if="clickType == 2" v-for="item in paperArray" :key="item.taskId">
            <!-- {{toGetCheck(item.taskId,itemaa.userId)}} -->
          </td>
          <td v-if="clickType != 3" @click="toLook(itemaa.userId)">
              <input type="button" class="u-btn u-btn--lg u-btn--green" value="查看">
          </td>
        </tr>
      </table>
    </div>
  </el-dialog>
  <div class="c-analy-heaher">
    <i class="c-analy-heaher__icon c-analy-heaher__icon--course"></i>
    <div class="c-analy-heaher__operation">
    </div>
    <div class="c-analy-heaher__main">
      <h3 class="c-analy-tit">
        {{lessonTitle}}
      </h3>
      <!-- <p class="c-analy-tit--secon">
        散文
      </p> -->
      <p class="c-analy-tips">
          <span class="c-analy-tip">
              任课老师：{{teacherName}}
          </span>
        <span class="c-analy-tip">
              上课时间：{{startTimeStr}}
          </span>
      </p>
    </div>
  </div>
  <div class="analy-preview-detail">
    <div class="analy-section__tit">
      预习完成情况
    </div>
    <div class="analy-preview--nums">
      <div @click="toJumpUser(1)" class="analy-preview--nums__item">
        <p class="font-color--green analy-preview--nums__num">{{alReadyComplete}}</p>
        <p class="analy-preview--nums__tips">按时完成</p>
      </div>
      <div @click="toJumpUser(2)" class="analy-preview--nums__item">
        <p class="font-color--yellow analy-preview--nums__num">{{partComplete}}</p>
        <p class="analy-preview--nums__tips">部分完成</p>
      </div>
      <div @click="toJumpUser(3)" class="analy-preview--nums__item">
        <p class="font-color--orange analy-preview--nums__num">{{noComplete}}</p>
        <p class="analy-preview--nums__tips">未完成</p>
      </div>
    </div>
    <div class="analy-section__main">
        <ul>
          <li  v-for="item in paperArray" :key="item.taskId" class="analy-resouce-item">
            <p class="analy-resouce-operation">
              <input @click="toGotodetail(item.taskId,item.resType,item.resId,item.refId)"  type="button" class="u-btn u-btn--lg u-btn--green" value="查看">
            </p>
            <!-- <p class="analy-resouce-type analy-resouce-type--doc"></p> -->
            <p :class="toJudgeClassType(item.resType)"></p>
            <p class="analy-resouce-name">
              {{item.resName}}
            </p>
            <div class="analy-resouce-acc">
              <div v-if="item.resType == 2" class="analy-resouce-acc__main">
                <p class="analy-resouce-acc__main__num">
                  <!-- {{item.ratio}}% -->
                  {{toChangeRadio(item.ratio)}}%
                </p>
                <p v-if="(item.papScore) && item.papScore>0"  class="analy-resouce-acc__main__tips">
                  平均分
                </p>
                <p v-else class="analy-resouce-acc__main__tips">
                  正确率
                </p>
              </div>
              <div class="analy-resouce-acc__charts"></div>
            </div>
            <div class="analy-resouce-progress">
              <div class="analy-resouce-progress__item">
                <p class="analy-resouce-progress__tit">
                  按时完成
                </p>
                <p class="analy-resouce-progress__main">
                  <span class="analy-resouce-progress__bar analy-resouce-progress__bar--green" :style="{width:(item.done - item.late)/item.total*194 + 'px'}"></span>
                </p>
                <p class="analy-resouce-progress__num">
                  <span class="font-color--green font-size16">{{toChangeNull(item.done - item.late)}}</span>/{{item.total}}
                </p>
              </div>
              <div class="analy-resouce-progress__item">
                <p class="analy-resouce-progress__tit">
                  未按时完成
                </p>
                <p class="analy-resouce-progress__main">
                  <span class="analy-resouce-progress__bar analy-resouce-progress__bar--yellow" :style="{width:item.late/item.total*194 + 'px'}"></span>
                </p>
                <p class="analy-resouce-progress__num">
                  <span class="font-color--yellow font-size16">{{toChangeNull(item.late)}}</span>/{{item.total}}
                </p>
              </div>
              <div class="analy-resouce-progress__item">
                <p class="analy-resouce-progress__tit">
                  未完成
                </p>
                <p class="analy-resouce-progress__main">
                  <span class="analy-resouce-progress__bar analy-resouce-progress__bar--orange" :style="{width:(item.total - item.done)/item.total*194 + 'px'}"></span>
                </p>
                <p class="analy-resouce-progress__num">
                  <span class="font-color--orange font-size16">{{toChangeNull(item.total - item.done)}}</span>/{{item.total}}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</div>
</template>
<script>
import API from '@/api/api'
export default {
  data () {
    return {
      nowStudentArr: [],
      noDoStudentArr: [],
      partDoStudentArr: [],
      allDoStudentArr: [],
      lessonId: 1878, // lessonId
      lessonName: '', // 班级名字
      subjectName: '', // 科目
      className: '', // 科目名字
      teacherName: '', // 老师名字
      startTimeStr: '',
      alReadyComplete: 0,
      partComplete: 0,
      noComplete: 0,
      paperArray: [],
      dialogTableVisible: false,
      clickType: 0,
      titleStartTime: '',
    }
  },
  mounted () {
     // debugger
    this.lessonId = this.GetRequest('lessonId')
    API.getTeacherClassPreview(this.lessonId)
      .then(resp => {
        console.log(resp)
        if (resp.data.className) {
          this.className = resp.data.className
        }
        if (resp.data.lessonName) {
          this.lessonName = resp.data.lessonName
        }
        if (resp.data.teacherName) {
          this.teacherName = resp.data.teacherName
        }
        this.titleStartTime = this.titleTimestampToTime(resp.data.startTime)
        this.startTimeStr = this.timestampToTime(resp.data.startTime)
        this.alReadyComplete = resp.data.doneNum
        this.partComplete = resp.data.partNum
        this.noComplete = resp.data.undoNum
        var allArr = resp.data.tasks
        for (var i = 0; i < allArr.length; i++) {
          var typeDic = allArr[i]
          this.paperArray.push(typeDic)
        }
        var allUserArr = resp.data.users
        for (var i = 0; i < allUserArr.length; i++) {
          var stateDic = allUserArr[i]
          console.log(stateDic)
          if (stateDic.state == 1) {
            this.noDoStudentArr.push(stateDic)
          }
          if (stateDic.state == 2) {
            this.partDoStudentArr.push(stateDic)
          }
          if (stateDic.state == 3) {
            this.allDoStudentArr.push(stateDic)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
    console.log(window.localStorage.access_token)
  },
  computed: {
    lessonTitle: function () {
      console.log(this.lessonName)
      if (!this.lessonName) {
        // this.lessonName = this.titleStartTime
      }
      return this.lessonName + this.subjectName + this.className
    }
  },
  methods: {
    timestampToTime (timestamp) {
      var date = new Date(timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1) + ' '
      var h = (date.getHours() + 1 < 10 ? '0' + (date.getHours() + 1) : date.getHours() + 1) + ':'
      var m = (date.getMinutes() + 1 < 10 ? '0' + (date.getMinutes() + 1) : date.getMinutes() + 1)
      // var s = date.getSeconds();
      return Y + M + D + h + m
    },
    titleTimestampToTime (timestamp) {
      var date = new Date(timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear()
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
      var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1)
      return Y + M + D
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
    // 获取
    GetRequest (name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
    },
    // 打开弹窗
    toJumpUser (state) {
      // this.dialogTableVisible = true
      this.clickType = state
      if (state === 1) {
        this.nowStudentArr = this.allDoStudentArr
      }
      if (state === 2) {
        this.nowStudentArr = this.partDoStudentArr
      }
      if (state === 3) {
        this.nowStudentArr = this.noDoStudentArr
      }
      if (this.nowStudentArr.length != 0) {
        this.dialogTableVisible = true
      }
    },
    toGetCheck (taskId, userId) {
      console.log(taskId, userId)
      var statesDic = {}
      // console.log(this.noDoStudentArr)
      for (var i = 0; i < this.noDoStudentArr.length; i++) {
        var dataDic = this.noDoStudentArr[i]
        console.log()
        if (userId == dataDic.userId) {
          // debugger
          statesDic = dataDic
        }
      }
      var nowStatesDic = statesDic['states']
      console.log(statesDic)
      console.log(taskId)
      for (var key in nowStatesDic) {
        console.log(key)
        if (key == taskId) {
          var taskValue = nowStatesDic[key]
          console.log(taskValue)
          if (taskValue == 3) {
            return 'm-table--right'
          } else {
            return 'm-table--wrong'
          }
        }
      }
    },
    toLook (nowUserId) {
      this.$router.push({name: 'teacherUserPreAnalyze', query: { lessonId: this.lessonId, userId: nowUserId}})
    },
    toJudgeClassType (type) {
      if (type == 2) {
          return 'analy-resouce-type analy-resouce-type--paper'
      }
      if (type == 3) {
        return 'analy-resouce-type analy-resouce-type--doc'
      }
      if (type == 4) {
        return 'analy-resouce-type analy-resouce-type--vedio'
      }
    },
    toGotodetail (taskId, type,resId,refId) {
      if (type != 2) {
        this.$router.push({name: 'teacherVedio', query: {taskId: taskId}})
      }else{
        // this.$router.push({path: `/${taskId}/${resId}/${refId}`})
        this.$router.push({path: `/index/${taskId}`})
      }
    }
  }
}
</script>
