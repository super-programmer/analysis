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
    window.localStorage['access_token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDQxNDEzIiwiZXhwIjoxNTMyMjU1MzgxLCJ1aWQiOjEwNDE0MTMsImtpZCI6NDYyLCJuYW1lIjoi5b6Q6ICB5biIIiwidHlwIjoiYWNjIiwicGlkIjoiVTEwNDE0MTNTNVIyIiwicmlkIjoyLCJhdXMiOlsiUk9MRV9BVVRIRUQiL' +
      'CJST0xFX1RFQUNIRVIiXSwic2lkIjo1fQ.5emKAA-yMGaLslxQxUeMiHuB-H0d8nDh2psFTgEQAyM'
  }
})
