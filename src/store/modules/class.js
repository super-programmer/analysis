import http from '@/http'
import moment from 'moment'
import SectionToChinese from '@/common/common'
let Mock = require('mockjs')
export default {
  namespaced: true,
  state: {
    // data: {
    //   'avgRatio': Mock.Random.float(0, 100, 0, 1),
    //   'avgTime': Mock.Random.integer(0),
    //   'className': Mock.Random.string(),
    //   'done': Mock.Random.integer(0, 60),
    //   'finalOn': '2018-07-15T06:35:03.363Z',
    //   'late': Mock.Random.integer(0, 20),
    //   'mark': 0,
    //   'maxRatio': Mock.Random.float(0, 100, 0, 2),
    //   'maxTime': Mock.Random.integer(0),
    //   'minRatio': Mock.Random.float(0, 100, 0, 2),
    //   'minTime': Mock.Random.integer(0),
    //   'names': {
    //     'additionalProp1': [
    //       'string'
    //     ],
    //     'additionalProp2': [
    //       'string'
    //     ],
    //     'additionalProp3': [
    //       'string'
    //     ]
    //   },
    //   'pubOn': moment('2018-07-15T06:35:03.363Z').format('YYYY-MM-DD hh:mm:ss'),
    //   'refId': 0,
    //   'resIcon': 'string',
    //   'resId': 0,
    //   'resName': Mock.Random.string(),
    //   'title': Mock.Random.string(),
    //   'total': Mock.Random.integer(60, 100),
    //   'undo': 0,
    //   'users': [
    //     {
    //       'name': Mock.Random.name(),
    //       'rank': Mock.Random.integer(0, 100),
    //       'ratio': Mock.Random.float(0, 100, 0, 2),
    //       'score': Mock.Random.integer(0, 100),
    //       'usedTime': Mock.Random.integer(0),
    //       'userId': 0
    //     }, {
    //       'name': Mock.Random.name(),
    //       'rank': Mock.Random.integer(0, 100),
    //       'ratio': Mock.Random.float(0, 100, 0, 2),
    //       'score': Mock.Random.integer(0, 100),
    //       'usedTime': Mock.Random.integer(0),
    //       'userId': 0
    //     }, {
    //       'name': Mock.Random.name(),
    //       'rank': Mock.Random.integer(0, 100),
    //       'ratio': Mock.Random.float(0, 100, 0, 2),
    //       'score': Mock.Random.integer(0, 100),
    //       'usedTime': Mock.Random.integer(0),
    //       'userId': 0
    //     }, {
    //       'name': Mock.Random.name(),
    //       'rank': Mock.Random.integer(0, 100),
    //       'ratio': Mock.Random.float(0, 100, 0, 2),
    //       'score': Mock.Random.integer(0, 100),
    //       'usedTime': Mock.Random.integer(0),
    //       'userId': 0
    //     }, {
    //       'name': Mock.Random.name(),
    //       'rank': Mock.Random.integer(0, 100),
    //       'ratio': Mock.Random.float(0, 100, 0, 2),
    //       'score': Mock.Random.integer(0, 100),
    //       'usedTime': Mock.Random.integer(0),
    //       'userId': 0
    //     }
    //   ]
    // },
    data: {},
    studentList: {},
    // studentList: {
    //   maxRatio: [Mock.Random.name(), Mock.Random.name()],
    //   minRatio: [Mock.Random.name(), Mock.Random.name()],
    //   maxTime: [Mock.Random.name(), Mock.Random.name()],
    //   minTime: [Mock.Random.name(), Mock.Random.name()]
    // }, // 学生得分列表
    // bigs: [
    //   {
    //     'id': 0,
    //     'name': 'string',
    //     'qids': [
    //       0
    //     ],
    //     'ratio': 0,
    //     'remark': 'string',
    //     'score': 0,
    //     'total': 0
    //   }], // 大题正确率结果列表
    bigs: [], // 大题正确率结果列表
    // grades: [
    //   {
    //     'qid': 0,
    //     'ratio': 0,
    //     'right': 0,
    //     'score': 0
    //   }
    // ], // 题目平均成绩
    grades: [], // 题目平均成绩
    analys: [
      {
        'items': [
          {
            'key': 'string',
            'label': 'string',
            'value': 0
          }
        ],
        'qcid': 0,
        'qid': 0,
        'ratio': Mock.Random.float(0, 100, 0, 1),
        'right0': 0,
        'right1': 0,
        'right2': 0,
        'right3': 0,
        'score': 0
      }
    ], // 题目分析结果
    knos: [
      {
        'id': Mock.Random.integer(0),
        'name': Mock.Random.string(),
        'qids': [
          Mock.Random.integer(0), Mock.Random.integer(0)
        ],
        'ratio': Mock.Random.float(0, 100, 0, 2),
        'remark': 'string',
        'score': Mock.Random.integer(0),
        'total': Mock.Random.integer(2)
      }
    ], // 知识点分析
    queNum: Mock.Random.integer(2), // 小题数目
    content: {},
    publishFlag: false
  },
  getters: {
    state (state) {
      return state
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
      state.bigs = data.bigs
      state.grades = data.grades
      state.analys = data.analys
      state.knos = data.knos
      state.queNum = data.queNum
    },
    GETPAPER (state, data) {
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
      return new Promise((resolve, reject) => {
        let option = {
          method: 'get',
          url: `repository/resource/${data.resId}/paper/${data.refId}`
        }
        let knowledgeoption = {
          method: 'get',
          url: `work/home/tasks/${data.taskId}/analy2/ques`
        }
        /* 请求知识点分析 */
        http.axiosRequest(knowledgeoption).then((res) => {
          let data = res.data
          if (data) {
            commit('GETKNOWLEDGE', data)
            /* 请求试卷信息 */
            http.axiosRequest(option).then((res) => {
              if (res) {
                // 阿拉伯数字转换
                res.data.content.content.sections[0].groups.map((item) => {
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
          str = 'openeasw'
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
