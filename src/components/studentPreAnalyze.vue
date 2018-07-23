<template>
  <div class="g-container">
    <div class="c-analy-heaher c-analy-heaher--sm">
      <i class="c-analy-heaher__icon c-analy-heaher__icon--course"></i>
      <div class="c-analy-heaher__operation">
      </div>
      <div class="c-analy-heaher__main">
        <h3 class="c-analy-tit">
          {{lessonTitle}}
        </h3>
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
    <div class="analy-section">
      <div class="analy-section__tits">
        <div class="analy-section--left">
          <div class="analy-section__tit">
            预习要求
          </div>
        </div>
        <div class="analy-section--right">
          <div class="analy-section__tit">
            作业数量
          </div>
        </div>
      </div>
      <div class="analy-section__main">
        <div class="analy-section--left" >
          <p class="analy-explain" v-html="previewOrder">
          </p>
          <!-- <p class="analy-explain">
            1，必须在规定的时间内完成
          </p>
          <p class="analy-explain">
            2，必须在规定的时间内完成，且必须是自己独立完成。
          </p>
          <p class="analy-explain">
            3，必须在规定的时间内完成
          </p>
          <p class="analy-explain">
            4，必须在规定的时
          </p> -->
        </div>
        <div class="analy-section--right">
            <div class="analy-resources-nums">
                <p class="analy-resources-num font-color--green">
                  {{microClassArray.length}}
                  <span class="font-size14 analy-resources-num__tips">份</span>
                </p>
                <p class="analy-resources-tips">微课</p>
            </div>
          <div class="analy-resources-nums">
                <p class="analy-resources-num font-color--blue">
                  {{couseWaveArray.length}}
                  <span class="font-size14 analy-resources-num__tips">份</span>
                </p>
                <p class="analy-resources-tips">课件</p>
            </div>
          <div class="analy-resources-nums">
                <p class="analy-resources-num font-color--orange">
                  {{paperArray.length}}
                  <span class="font-size14 analy-resources-num__tips">份</span>
                </p>
                <p class="analy-resources-tips">试卷</p>
            </div>
        </div>
      </div>
      </div>
    <!--微课-->
    <div class="analy-section" v-if="microClassArray.length != 0">
      <div class="analy-section__tit">
        微课
      </div>
      <div  class="analy-section__main">
          <ul>
            <li v-for="item in microClassArray" :key="item.workId" class="analy-resouce-item">
              <p class="analy-resouce-operation">
                <input v-if="item.doneOn" type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
                <input @click="toComplete(item.workId)" v-if="!item.doneOn" type="button" class="u-btn u-btn--lg u-btn--green" value="去完成">
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
                    <span class="font-color--green">{{toChangeNull(item.usedTime)}}小时</span>
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
      <div class="analy-section__main" :class="courWaveNullClass">
          <ul>
            <li class="analy-resouce-item" v-for="item in couseWaveArray" :key="item.workId">
              <p class="analy-resouce-operation">
                <input v-if="item.doneOn" type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
                <input @click="toComplete(item.workId)" v-if="!item.doneOn" type="button" class="u-btn u-btn--lg u-btn--green" value="去完成">
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
                    <span class="font-color--green">{{toChangeNull(item.usedTime)}}小时</span>
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
          <!-- <p v-if="couseWaveArray.length == 0" class="analy-tips--null">
            暂无数据
          </p> -->
      </div>
    </div>
    <!--试卷-->
    <div class="analy-section" v-if="paperArray.length != 0">
      <div class="analy-section__tit">
        试卷
      </div>
      <div class="analy-section__main" :class="paperNullClass">
          <ul>
            <li v-for="item in paperArray" :key="item.workId" class="analy-resouce-item">
              <p class="analy-resouce-operation">
                <input v-if="item.doneOn" type="button" class="u-btn u-btn--lg u-btn--orange" value="作业详情">
                <input @click="toComplete(item.workId)" v-if="!item.doneOn" type="button" class="u-btn u-btn--lg u-btn--green" value="去完成">
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
          <!-- <p v-if="paperArray.length == 0" class="analy-tips--null">
            暂无数据
          </p> -->
      </div>
    </div>
    <!-- <div class="analy-section">
      <div class="analy-section__tit">
        试卷
      </div>
      <div class="analy-section__main analy-section__main--null">
          <p class="analy-tips--null">
            暂无数据
          </p>
      </div>
    </div> -->
  </div>
</template>
<script>
import API from '@/api/api'
export default {
  data(){
    return{
     lessonId:1878,//lessonId
     lessonName:'',//班级名字
     subjectName:'',//科目
     className:'',//科目名字
     teacherName:'',//老师名字
     titleStartTime:'',
     startTimeStr:'',
     previewOrder:'',
     paperArray:[],//2
     couseWaveArray:[],//3
     microClassArray:[],//4
    }
  },
  mounted(){
    this.lessonId = this.GetRequest("lessonId")
    API.getStudentPreview(this.lessonId)
    .then(resp =>{
      console.log(resp)
      if(resp.data.className){
        this.className = resp.data.className
      }
      if(resp.data.lessonName){
        this.lessonName = resp.data.lessonName
      }
      if(resp.data.teacherName){
        this.teacherName = resp.data.teacherName
      }
      this.titleStartTime = this.titleTimestampToTime(resp.data.startTime)
      this.startTimeStr = this.timestampToTime(resp.data.startTime)
      this.previewOrder = resp.data.demand.html
      this.paperArray = []
      this.couseWaveArray = []
      this.microClassArray = []
      var allArr = resp.data.works
      for(var i = 0; i < allArr.length; i ++){
        var typeDic = allArr[i]
        if(typeDic.resType == 2){
          this.paperArray.push(typeDic)
        }
        if(typeDic.resType == 3){
          this.couseWaveArray.push(typeDic)
        }
        if(typeDic.resType == 4){
          this.microClassArray.push(typeDic)
        }
      }
    })
    .catch(err =>{
      console.log(err)
    })
  },
  computed:{
    lessonTitle:function(){
      console.log(this.lessonName)
      if(!this.lessonName){
        this.lessonName = this.titleStartTime
      }
      return this.lessonName + this.subjectName + this.className   + '111'
    },
    paperNullClass:function(){
      if(this.paperArray.length == 0){
        return 'analy-section__main--null'
      }else{
        return ''
      }
    },
    microNullClass:function(){
      if(this.microClassArray.length == 0){
        return 'analy-section__main--null'
      }else{
        return ''
      }
    },
    courWaveNullClass:function(){
      if(this.couseWaveArray.length == 0){
        return 'analy-section__main--null'
      }else{
        return ''
      }
    },
  },
  methods:{
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
    titleTimestampToTime(timestamp) {
      var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear()
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)
      var D = (date.getDate()+1 < 10 ? '0'+(date.getDate()+1) : date.getDate()+1)
      return Y+M+D;
    },
    toChangeNull(num){
        if(num){
          return num
        }else{
           return 0
        }
    },
     //获取
    GetRequest (name) {
      return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
    },
    togetClass(doneOn){
      if(doneOn){
        return 'analy-resouce-tips'
      }else{
        return 'analy-resouce-tips analy-resouce-tips__noComplete'
      }
    },
    toComplete(workId){
       window.location.href = 'http://www.yunguxt.com/homework/#/finishHomework?workId=' + workId
    },
    toChangeRadio(radio){
      console.log('112233' + radio)
      if(radio){
        return radio * 100
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

