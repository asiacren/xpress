import axios from 'axios'
import qs from 'qs'
const $http = axios.create({
  baseURL: '/xlearn/',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

$http.interceptors.request.use(function (req) {
  if (/post/i.test(req.method)) {
    req.data = qs.stringify(req.data)
  }
  return req
})

$http.interceptors.response.use(function (res) {
  console.log(res)
  let data = res.data
  if (!data.ret || data.ret.retCode === '0000') {
    return res
  }
  return Promise.reject(res)
}, function (error) {
  console.log('rrr:', arguments)
  return Promise.reject(error)
})
export default $http
