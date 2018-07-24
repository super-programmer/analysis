import http from '@/http'
import {setTime} from '@/common/common'
export default {
  namespaced: true,
  state: {
    data: {},
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
    async 'initStudent' (store, data) {
      const { commit, dispatch, state, rootState, rootGetters } = store
      /* 单个学生页面 */
      if (data.taskId === 'student') {
        /* 此处userId映射为workId */
        let option = {
          method: 'get',
          url: `work/home/works/${data.userId}/analy2`
        }
        await http.axiosRequest(option).then((res) => {
          let resData = res.data
          let options = {
            method: 'get',
            url: `repository/resource/${resData.resId}/paper/${resData.refId}`
          }
          http.axiosRequest(options).then((res) => {
            let content = res.data.content
            commit('GETPAPER', content)
            /* 右侧导航题目答案映射 */
            content.content.sections[0].groups.map((item) => {
              item.ques.map((smitem) => {
                resData.queRsts.map((item) => {
                  if (smitem.qid === item.qid) {
                    smitem.right = item.right
                    switch (smitem.right) {
                      case 0:
                        smitem.className = ''
                        break
                      case 1:
                        smitem.className = 'c-result-iswrong'
                        break
                      case 2:
                        smitem.className = ''
                        break
                      case 3:
                        smitem.className = 'c-result-iswrong'
                        break
                    }
                  }
                })
              })
            })
            resData.doneOn = setTime(resData.doneOn)
            resData.type = true
            commit('GETORIN', resData)
          })
        })
        return
      }
      await dispatch('Class/init', data.taskId, {root: true})
      commit('GETSTUDENT', rootState.Class.data)
      commit('GETPAPER', rootState.Class.content)
      let option = {
        method: 'get',
        url: `work/home/tasks/${data.taskId}/analy2/users/${data.userId}`
      }
      try {
        await http.axiosRequest(option).then((res) => {
          let content = state.content
          /* 右侧导航题目答案映射 */
          content.content.sections[0].groups.map((item) => {
            item.ques.map((smitem) => {
              res.data.queRsts.map((item) => {
                if (smitem.qid === item.qid) {
                  smitem.right = item.right
                  switch (smitem.right) {
                    case 0:
                      smitem.className = 'sss'
                      break
                    case 1:
                      smitem.className = 'c-result-isright'
                      break
                    case 2:
                      smitem.className = 'c-result-iswrong'
                      break
                  }
                }
              })
            })
          })
          res.data.doneOn = setTime(res.data.doneOn)
          res.data.type = true
          if (res) commit('GETORIN', res.data)
        })
      } catch (error) { console.log(error) }
    }
  }
}
