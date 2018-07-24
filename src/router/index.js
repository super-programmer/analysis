import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Classprofile from '@/components/classprofile'
import StudentDetail from '@/components/studentDetail'
import PaperDetail from '@/components/paperDetail'
import studentPreAnalyze from '@/components/studentPreAnalyze'
import teacherPreAnalyze from '@/components/teacherPreAnalyze'
import teacherUserPreAnalyze from '@/components/teacherUserPreAnalyze'
import teacherVedio from '@/components/teacherVedio'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index/*',
      name: 'classprofile',
      component: Classprofile
    }, {
      path: '/workdone',
      name: 'classprofile',
      component: Classprofile
    }, {
      path: '/studentDetail/*',
      name: 'StudentDetail',
      component: StudentDetail
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
      path: '/studentPreAnalyze',
      name: 'studentPreAnalyze',
      component: studentPreAnalyze
    },
    {
      path: '/teacherPreAnalyze',
      name: 'teacherPreAnalyze',
      component: teacherPreAnalyze
    },
    {
      path: '/teacherUserPreAnalyze',
      name: 'teacherUserPreAnalyze',
      component: teacherUserPreAnalyze
    },
    {
      path: '/teacherVedio',
      name: 'teacherVedio',
      component: teacherVedio
    },
  ]
})
