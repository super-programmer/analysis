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
    window.localStorage['access_token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MDM1NjAiLCJleHAiOjE1MzI0MDEyMjQsInVpZCI6NjAzNTYwLCJraWQiOjQwOCwibmFtZSI6IuiAgeW4iEEiLCJ0eXAiOiJhY2MiLCJwaWQiOiJVNjAzNTYwUzZSMiIsInJpZCI6MiwiYXVzIjpbIlJPTEVfQVVUSEVEIiwiUk9MRV9URUFDSEVSIl0sInNpZCI6Nn0.oWXkHOnZ5fhBpzF1-5gTBNqruNpBTtuVK3-8qaFbAr0'
  }
})
