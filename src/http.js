import axios from 'axios'
import qs from 'qs'

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error)
})
axios.interceptors.request.use(function (config) {
  let token = window.localStorage['access_token']
  if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = token
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 或者 可以用Vue.prototype.axiosRequest = function () {}
// 保存到全局中 使用更加方便 看个人喜好
const baseurl = 'https://api.yunguxt.com/'
const axiosRequest = function (obj) {
  var data = jointRequestData(obj.data)
  return axios({
    method: obj.method || 'get',
    url: baseurl + obj.url,
    data: qs.stringify(data, {allowDots: true}),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 20000
  })
}

const axiosRequestAll = function (arr) {
  var aRequest = []
  for (var i of arr) {
    var data = jointRequestData(i.data)
    aRequest.push(axios({
      method: i.method,
      url: i.url,
      data: qs.stringify(data, {allowDots: true}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }))
  }
  return axios.all(aRequest).then(axios.spread(function () {
    var aReturn = []
    for (var i of arguments) {
      aReturn.push(i)
    }
    return aReturn
  }))
}

const jointRequestData = function (data) {
  for (let i in data) {
    if (typeof data[i] === 'object') {
      data[i] = JSON.stringify(data[i])
    }
  }
  return data
}

export default {
  axiosRequest,
  axiosRequestAll
}
