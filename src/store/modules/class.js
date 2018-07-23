import http from '@/http'
import {SectionToChinese} from '@/common/common'
export default {
  namespaced: true,
  state: {
    data: {},
    studentList: {},
    bigs: [], // 大题正确率结果列表
    grades: [], // 题目平均成绩
    analys: [], // 题目分析结果
    knos: [], // 知识点分析
    queNum: '', // 小题数目
    content: {},
    gradeData: {},
    publishFlag: false
  },
  getters: {
    state (state) {
      return state
    },
    studentList (studentList) {
      return studentList
    }
  },
  mutations: {
    GETORIN (state, data) {
      state.data = data
    },
    SELECTSTU (state, data) {
      state.studentList = data
    },
    GETKNOWLEDGE (state, data) {
      state.gradeData = data
      state.bigs = data.bigs
      state.grades = data.grades
      state.analys = data.analys
      state.knos = data.knos
    },
    GETPAPER (state, data) {
      state.queNum = data.queNum
      state.content = data.content
    },
    GETPUBLISHFLAG (state, data) {
      state.publishFlag = data.publishFlag
    }
  },
  actions: {
    init ({dispatch, commit}, taskId) {
      return new Promise((resolve, reject) => {
        let option = {
          method: 'get',
          url: `work/home/tasks/${taskId}/analy2/scores`
        }
        /* 请求班级概况基础信息 */
        http.axiosRequest(option).then((res) => {
          let studentList = {
            maxRatio: [],
            minRatio: [],
            maxTime: [],
            minTime: []
          }
          let data = res.data
          /*转换任务类型*/
          switch(res.data.type){
            case 1:
              this.taskClassName = 'c-analy-heaher__icon--pre'
              break
            case 2:
              this.taskClassName = 'c-analy-heaher__icon--oncourse'
              break
            case 3:
              this.taskClassName = 'c-analy-heaher__icon--after'
              break
            case 4:
              this.taskClassName = 'c-analy-heaher__icon--test'
              break
          }
          if (data) {
            let paperData = {
              refId: data.refId,
              resId: data.resId,
              taskId: taskId
            }
            commit('GETORIN', data)
            // 根据条件筛选出对应学生列表
            if (data.users) {
              data.users.map(function (item) {
                // 最高正确率
                if (item.ratio === data.maxRatio) {
                  studentList.maxRatio.push(item.name)
                }
                // 最低正确率
                if (item.ratio === data.minRatio) {
                  studentList.minRatio.push(item.name)
                }
                // 最快完成
                if (item.usedTime === data.minTime) {
                  studentList.minTime.push(item.name)
                }
                // 最慢完成
                if (item.usedTime === data.maxTime) {
                  studentList.maxTime.push(item.name)
                }
              })
            }
            commit('SELECTSTU', studentList)
            dispatch('initPaper', paperData).then(() => {
              resolve()
            })
          }
        })
      })
    },
    initPaper ({dispatch, commit}, data) {
      let _this = data
      return new Promise((resolve, reject) => {
        let option = {
          method: 'get',
          url: `repository/resource/${_this.resId}/paper/${_this.refId}`
        }
        let knowledgeoption = {
          method: 'get',
          url: `work/home/tasks/${_this.taskId}/analy2/ques`
        }
        /* 请求知识点分析 */
        http.axiosRequest(knowledgeoption).then((res) => {
          res.data.taskId = _this.taskId
          let data = res.data
          if (data) {
            commit('GETKNOWLEDGE', data)
            /* 请求试卷信息 */
            http.axiosRequest(option).then((res) => {
              if (res) {
                res.data.queNum = 0
                // 阿拉伯数字转换
                res.data.content.content.sections[0].groups.map((item) => {
                  res.data.queNum += item.ques.length
                  item.ord = SectionToChinese(item.ord)
                })
                res.data.content.content.sections[0].groups.map((item) => {
                  item.ques.map((smitem) => {
                    data.analys.map((a) => {
                      if (smitem.qid === a.qid) {
                        smitem.ratio = a.ratio
                        smitem.chartData = {
                          columns: ['状态', '人数'],
                          rows: [
                            {'状态': '答对', '人数': parseInt(smitem.ratio * 100)},
                            {'状态': '答错', '人数': 100 - parseInt(smitem.ratio * 100)}
                          ]
                        }
                      }
                    })
                  })
                })
                commit('GETPAPER', res.data)
                resolve()
              }
            })
          }
        })
      })
    },
    publishAnswer ({commit}, data) {
      return new Promise((resolve, reject) => {
        let str
        if (data.publishFlag) {
          str = 'closeasw'
        } else {
          str = 'openasw'
        }
        let option = {
          method: 'post',
          url: `work/home/tasks/${data.taskId}/${str}`
        }
        /* 公布答案 */
        http.axiosRequest(option).then((res) => {
          if (res) {
            if (data.publishFlag) {
              commit('GETPUBLISHFLAG', false)
            } else {
              commit('GETPUBLISHFLAG', true)
            }
            resolve()
          }
        })
      })
    }
  }
}
