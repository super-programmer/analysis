import http from '@/http'
import moment from 'moment'
let Mock = require('mockjs')
export default {
  namespaced: true,
  state: {
    data: {
      'avgRatio': Mock.Random.float(20, 100, 0, 1),
      'avgScore': 0,
      'bigs': [
        {
          'id': 0,
          'name': 'string',
          'qids': [
            0
          ],
          'ratio': 0,
          'remark': 'string',
          'score': 0,
          'total': 0
        }
      ],
      'doneOn': moment('2018-07-15T06:35:03.363Z').format('M-DD hh:mm:ss'),
      'grades': [
        {
          'qid': 0,
          'ratio': 0,
          'right': 0,
          'score': 0
        }
      ],
      'knos': [
        {
          'id': 0,
          'name': 'string',
          'qids': [
            0
          ],
          'ratio': Mock.Random.float(0, 100, 0, 1),
          'remark': 'string',
          'score': 0,
          'total': 0
        }
      ],
      'markOn': moment('2018-07-15T06:35:03.363Z').format('YYYY-MM-DD hh:mm:ss'),
      'queRsts': [
        {
          'blanks': [
            {
              'right': 0,
              'score': 0,
              'value': '没结果'
            }, {
              'right': 1,
              'score': 0,
              'value': '错误'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }
          ],
          'cmts': 'string',
          'qcid': 0,
          'qid': 1856,
          'ratio': 0,
          'right': 1,
          'score': 25,
          'tags': [
            'string'
          ],
          'value': 'A'
        },
        {
          'blanks': [
            {
              'right': 0,
              'score': 0,
              'value': '没结果'
            }, {
              'right': 1,
              'score': 0,
              'value': '错误'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }
          ],
          'cmts': 'string',
          'qcid': 0,
          'qid': 1092,
          'ratio': 0,
          'right': 1,
          'score': 25,
          'tags': [
            'string'
          ],
          'value': 'B'
        },
        {
          'blanks': [
            {
              'right': 0,
              'score': 0,
              'value': '没结果'
            }, {
              'right': 1,
              'score': 0,
              'value': '错误'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }
          ],
          'cmts': 'string',
          'qcid': 0,
          'qid': 1190,
          'ratio': 0,
          'right': 0,
          'score': 25,
          'tags': [
            'string'
          ],
          'value': 'C'
        },
        {
          'blanks': [
            {
              'right': 0,
              'score': 0,
              'value': '没结果'
            }, {
              'right': 1,
              'score': 0,
              'value': '错误'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }, {
              'right': 2,
              'score': 0,
              'value': '正确'
            }
          ],
          'cmts': 'string',
          'qcid': 0,
          'qid': 1831,
          'ratio': 0,
          'right': 0,
          'score': 25,
          'tags': [
            'string'
          ],
          'value': 'A'
        },
        {
          'blanks': [
            {
              'right': 0,
              'score': 0,
              'value': '没结果'
            }, {
              'right': 1,
              'score': 0,
              'value': '错误'
            }
          ],
          'cmts': 'string',
          'qcid': 0,
          'qid': 1341,
          'ratio': 0,
          'right': 0,
          'score': 25,
          'tags': [
            'string'
          ],
          'value': 'A'
        }
      ],
      'rank': Mock.Random.integer(1, 1),
      'ratio': Mock.Random.float(0, 100, 0, 1),
      'refId': 0,
      'resId': 0,
      'score': 0,
      'total': Mock.Random.integer(10, 100),
      'usedTime': Mock.Random.integer(0, 1200)
    },
    studentList: [],
    content: {}
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
    GETSTUDENT (state, data) {
      state.studentList = data.users
      state.studentList = data.users
    },
    GETPAPER (state, data) {
      state.content = data
    }
  },
  actions: {
    initStudent ({commit, dispatch, state, rootState}, taskId) {
      commit('GETSTUDENT', rootState.Class.data)
      commit('GETPAPER', rootState.Class.content)
      let option = {
        method: 'get',
        url: `work/home/tasks/${taskId}/analy2`
      }
      // http.axiosRequest(option).then((res) => {
      //   if (res) {
      //     commit('GETORIN', res.data)
      //   }
      // })
    }
  }
}
