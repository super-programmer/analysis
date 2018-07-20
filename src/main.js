import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Ygui from 'ygui'
import VCharts from 'v-charts'
import moment from 'moment'
import 'ygui/lib/static/css/app.css'
import './assets/analy-homework.css'
import './assets/analysis.css'
Vue.config.productionTip = false
Vue.use(Ygui)
Vue.use(VCharts)

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
    window.localStorage['access_token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDQxNDEzIiwiZXhwIjoxNTMyMDg5MTY2LCJ1aWQiOjEwNDE0MTMsImtpZCI6NDYyLCJuYW1lIjoi5b6Q6ICB5biIIiwidHlwIjoiYWNjIiwicGlkIjoiVTEwNDE0MTNTNVIyIiwicmlkIjoyLCJhdXMiOlsiUk9MRV9BVVRIRUQiLCJST0xFX1RFQUNIRVIiXSwic2lkIjo1fQ.D_gHadTeAEJx53IuuZ_ivy7mdJTqpCaU5sxN5mQ0lgg'
  }
})
