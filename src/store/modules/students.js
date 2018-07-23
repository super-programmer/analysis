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
        let option = {
          method: 'get',
          url: `work/home/works/${data.activeIndex}/analy2`
        }
        await http.axiosRequest(option).then((res) => {
          if (res) {
            console.log(res)
          }
        })
        return
      }
      await dispatch('Class/init', data.taskId, {root: true})
      const studentList = rootGetters['Class/studentList'].data.users
      commit('GETSTUDENT', rootState.Class.data)
      commit('GETPAPER', rootState.Class.content)
      let option = {
        method: 'get',
        url: `work/home/tasks/${data.taskId}/analy2/users/${studentList[data.activeIndex].userId}`
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
