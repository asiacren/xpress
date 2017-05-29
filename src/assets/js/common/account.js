import $http from 'js/common/ajax'
import {localStore} from 'js/common/localstore'
// console.log(sessionStore)
let user
const login = function (user, opt) {
  if (!user) return false
  return $http.post('/weixin/login.do', user).then((res) => {
    res = res.data
    user = res.userInfo
    localStore('user', res.userInfo)
    // window.__user = res.userInfo
  })
}
const reg = function (user, opt) {
  if (!user) return false
  return $http.post('/weixin/reg.do', user)
}
const getUser = function (force) {
  user = user || localStore('user')
  return user
}
export default {
  login: login,
  reg: reg,
  getUser: getUser
}

