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
    },
    {
      path: '/studentDetail',
      name: 'classprofile',
      component: StudentDetail
    },
    {
      path: '/paperDetail',
      name: 'classprofile',
      component: PaperDetail
    }
  ]
})
