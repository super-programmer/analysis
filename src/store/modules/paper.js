
// tpl 1 单选
// tpl 2 多选
// tpl 3 判断
// tpl 4 填空
// tpl 5 问答
// tpl 6 复合题
// tpl 7 完形
import {SectionToChinese} from '@/common/common'
import http from '@/http'
export default {
  namespaced: true,
  state: {
    content: {},
    gradeData: {}
  },
  getters: {
    state (state) {
      return state
    }
  },
  mutations: {
    GETORIN (state, data) {
      state.content = data.content
    },
    GETGRADE (state, data) {
      state.gradeData = data
    }
  },
  actions: {
    async initPaper ({commit}, data) {
      return new Promise((resolve, reject) => {
        let option = {
          method: 'get',
          url: `repository/resource/${data.resId}/paper/${data.refId}`
        }
        http.axiosRequest(option).then((res) => {
          if (res) {
            // 阿拉伯数字转换
            res.data.content.content.sections[0].groups.map((item) => {
              item.ord = SectionToChinese(item.ord)
            })
            commit('GETORIN', res.data)
          }
        })
        if (data.type === 'tea') {
          let option = {
            method: 'get',
            url: `work/home/tasks/${data.taskId}/analy2/ques`
          }
          http.axiosRequest(option).then((res) => {
            if (res) {
              res.data.taskId = data.taskId
              commit('GETGRADE', res.data)
              resolve()
            }
          })
        }
      })
    }
  }
}
