import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Classprofile from '@/components/classprofile'
import StudentDetail from '@/components/studentDetail'
import PaperDetail from '@/components/paperDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'classprofile',
      component: Classprofile
    }, {
      path: '/workdone',
      name: 'classprofile',
      component: Classprofile
    }, {
      path: '/answer',
      name: 'classprofile',
      component: Classprofile
    },
    {
      path: '/knowledge',
      name: 'classprofile',
      component: Classprofile
    }, {
      path: '/student',
      name: 'classprofile',
      component: Classprofile
    },
    {
      path: '/paperDetail/*',
      name: 'classprofile',
      component: PaperDetail
    },
    {
      path: '/studentDetail/*',
      name: 'StudentDetail',
      component: StudentDetail
    }
  ]
})
