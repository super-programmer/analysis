import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// import Ygui from 'ygui'
import VCharts from 'v-charts'
import moment from 'moment'
import 'ygui/lib/static/css/app.css'
import './assets/analy-homework.css'
import './assets/analysis.css'
import 'element-ui/lib/theme-chalk/index.css'
import {MessageBox, Dialog} from 'element-ui'
Vue.config.productionTip = false
// Vue.use(Ygui)
Vue.use(VCharts)
Vue.use(Dialog)
Vue.prototype.$msgbox = MessageBox
Vue.filter('datefmt', function (input, fmtstring) {
  return moment(input).format(fmtstring)
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    window.localStorage['access_token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NDMxNzQiLCJleHAiOjE1MzIzMzg3MjcsInVpZCI6OTQzMTc0LCJraWQiOjQ5MSwibmFtZSI6IuaWsOWtpueUnyIsInR5cCI6ImFjYyIsInBpZCI6IlU5NDMxNzRTNlIxIiwicmlkIjoxLCJhdXMiOls' +
      'iUk9MRV9BVVRIRUQiLCJST0xFX1NUVURFTlQiXSwic2lkIjo2fQ.0lYMHyUkuk93aS7Se0etyCPDCTT9na54T0brBQdar_g'
  }
})
