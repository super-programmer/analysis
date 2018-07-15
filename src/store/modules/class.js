import http from '@/http'
import moment from 'moment'
var Mock = require('mockjs')
export default {
  namespaced: true,
  state: {
    data: {
      'avgRatio': Mock.Random.float(0, 100, 0, 2),
      'avgTime': Mock.Random.integer(0),
      'className': Mock.Random.string(),
      'done': Mock.Random.integer(0, 60),
      'finalOn': '2018-07-15T06:35:03.363Z',
      'late': Mock.Random.integer(0, 20),
      'mark': 0,
      'maxRatio': Mock.Random.float(0, 100, 0, 2),
      'maxTime': Mock.Random.integer(0),
      'minRatio': Mock.Random.float(0, 100, 0, 2),
      'minTime': Mock.Random.integer(0),
      'names': {
        'additionalProp1': [
          'string'
        ],
        'additionalProp2': [
          'string'
        ],
        'additionalProp3': [
          'string'
        ]
      },
      'pubOn': moment('2018-07-15T06:35:03.363Z').format('YYYY-MM-DD hh:mm:ss'),
      'refId': 0,
      'resIcon': 'string',
      'resId': 0,
      'resName': Mock.Random.string(),
      'title': Mock.Random.string(),
      'total': Mock.Random.integer(60, 100),
      'undo': 0,
      'users': [
        {
          'name': Mock.Random.name(),
          'rank': Mock.Random.integer(0, 100),
          'ratio': Mock.Random.float(0, 100, 0, 2),
          'score': Mock.Random.integer(0, 100),
          'usedTime': Mock.Random.integer(0),
          'userId': 0
        }, {
          'name': Mock.Random.name(),
          'rank': Mock.Random.integer(0, 100),
          'ratio': Mock.Random.float(0, 100, 0, 2),
          'score': Mock.Random.integer(0, 100),
          'usedTime': Mock.Random.integer(0),
          'userId': 0
        }, {
          'name': Mock.Random.name(),
          'rank': Mock.Random.integer(0, 100),
          'ratio': Mock.Random.float(0, 100, 0, 2),
          'score': Mock.Random.integer(0, 100),
          'usedTime': Mock.Random.integer(0),
          'userId': 0
        }, {
          'name': Mock.Random.name(),
          'rank': Mock.Random.integer(0, 100),
          'ratio': Mock.Random.float(0, 100, 0, 2),
          'score': Mock.Random.integer(0, 100),
          'usedTime': Mock.Random.integer(0),
          'userId': 0
        }, {
          'name': Mock.Random.name(),
          'rank': Mock.Random.integer(0, 100),
          'ratio': Mock.Random.float(0, 100, 0, 2),
          'score': Mock.Random.integer(0, 100),
          'usedTime': Mock.Random.integer(0),
          'userId': 0
        }
      ]
    },
    studentList: {
      maxRatio: [Mock.Random.name(), Mock.Random.name()],
      minRatio: [Mock.Random.name(), Mock.Random.name()],
      maxTime: [Mock.Random.name(), Mock.Random.name()],
      minTime: [Mock.Random.name(), Mock.Random.name()]
    }
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
    }
  },
  actions: {
    init ({commit}, taskId) {
      let option = {
        method: 'get',
        url: `work/apidoc/home/tasks/${taskId}/analy2/scores`
      }
      http.axiosRequest(option).then((res) => {
        let studentList = {
          maxRatio: [],
          minRatio: [],
          maxTime: [],
          minTime: []
        }
        let data = res.data
        if (data) {
          commit('GETORIN', data)
          // 根据条件筛选出对应学生列表
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
          commit('SELECTSTU', studentList)
        }
      })
    }
  }
}
