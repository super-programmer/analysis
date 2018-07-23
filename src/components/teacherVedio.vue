<template>
  <div class="g-container">
    <div class="c-analy-heaher">
      <i class="c-analy-heaher__icon c-analy-heaher__icon--course"></i>
      <!-- <div class="c-analy-heaher__operation">
        <input type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
      </div> -->
      <div class="c-analy-heaher__main">
        <h3 class="c-analy-tit">
          {{this.title}}
        </h3>
        <p class="c-analy-tit--secon">
          {{this.resName}}
        </p>
        <p class="c-analy-tips">
          <span class="c-analy-tip">
              布置班级：{{this.className}}
          </span>
          <span class="c-analy-tip">
              开始时间：{{this.startTimeStr}}
          </span>
          <span class="c-analy-tip">
              截止时间：{{this.endTimeStr}}
          </span>
        </p>
      </div>
    </div>
      <div v-if="userArr.length != 0">
        <div class="analy-situation-tit">
          <div class="analy-situation-nums">
            <p class="analy-situation-num font-color--green">{{this.completeNum}}</p>
            <p class="analy-situation-tips">完成人数</p>
          </div>
          <div class="analy-situation-nums">
            <p class="analy-situation-num font-color--blue">{{this.noComepleteNum}}</p>
            <p class="analy-situation-tips">未完成人数</p>
          </div>
        </div>
        <div class="analy-section__tit">
          学生详情
          <div class="m-select">
            <div class="m-select-con">
              全部学生
            </div>
            <ul class="m-select-options">
              <li class="m-select-option">
                全部学生
              </li>
              <li class="m-select-option">
                已完成
              </li>
              <li class="m-select-option">
                未完成
              </li>
            </ul>
          </div>
        </div>
        <div class="m-table">
          <table>
            <tr>
              <th>姓名</th>
              <th>观看时长</th>
              <th>观看次数</th>
              <th>状态</th>
            </tr>
            <tr v-for="item in userArr" :key="item.userId">
              <td>{{item.name}}</td>
              <td>{{togetMiniteAndSecond(item.usedTime)}}</td>
              <td>{{toChangeNull(item.watchCnt)}}</td>
              <td><span class="font-color--green">{{toJudge(item.status)}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div v-else class="analy-section--null">
        无学生提交作业 暂无数据
      </div>
  </div>  
</template>
<script>
import API from '@/api/api'
export default {
  data(){
    return{
     taskId:1502,//lessonId
     resName:'',//资源名字
     title:'',
     subjectName:'',//科目
     className:'',//班级名字
     teacherName:'',//老师名字
     startTimeStr:'',
     endTimeStr:'',
     previewOrder:'',
     completeNum:0,
     noComepleteNum:0,
     userArr:[],
    }
  },
  mounted(){
    this.taskId = this.$route.query.taskId
    API.getTaskAnalyse(this.taskId)
    .then(resp =>{
      console.log(resp)
      this.resName = resp.data.resName
      this.title = resp.data.title
      this.className = resp.data.className
      this.startTimeStr = this.timestampToTime(resp.data.pubOn)
      this.endTimeStr = this.timestampToTime(resp.data.finalOn)
      this.completeNum = resp.data.done
      this.noComepleteNum = resp.data.undo
      this.userArr = resp.data.users
    })
    .catch(err =>{
    })
  },
  computed:{
    lessonTitle:function(){
      return this.className + this.subjectName + this.lessonName
    },
  },
  methods:{
    toChangeNull(num){
      if(num){
        return num
      }else{
          return 0
        }
    },
    toJudge(states){
      if(states == 0){
        return '未完成'
      }
      if(states == 1){
        return '已完成'
      }
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = (date.getDate()+1 < 10 ? '0'+(date.getDate()+1) : date.getDate()+1) + ' '
      var h = (date.getHours()+1 < 10 ? '0'+(date.getHours()+1) : date.getHours()+1)  + ':'
      var m = (date.getMinutes()+1 < 10 ? '0'+(date.getMinutes()+1) : date.getMinutes()+1);
      //var s = date.getSeconds();
      return Y+M+D+h+m;
    },
    toChangeNull(num){
        if(num){
          return num
        }else{
           return 0
        }
    },
    togetMiniteAndSecond(secondNum){
        if(secondNum){
          if(secondNum<60){
            return secondNum + '"'
          }else{
            return  parseInt(secondNum / 60.0) + "'" + parseInt((parseFloat(secondNum / 60.0) -
                          parseInt(secondNum / 60.0)) * 60) + '"';
          }
        }else{
          return 0 + '"'
        }
    },
  }
}
</script>