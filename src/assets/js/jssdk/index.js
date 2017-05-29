import wx from '_vendors/jweixin/jweixin-1.2.0.js'
import {$http} from 'js/utils'
import merge from 'lodash.merge'

let _config
function getConfig (url, params) {
  return $http.post(url, params).then(res => {
    return res.data.wx
  })
}
function getInitConfig () {
  return _config ? Promise.resolve(_config) : getConfig('/weixin/course/wxConfig.do', {
    url: window.location.href.split('#')[0]
  }).then(res => (_config = res))
}
let inited = false
function init (arr, onReady, debug) {
  if (inited === true) {
    return wx
  }
  inited = true
  wx.ready(function () {
    console.log('wxready')
    // window.alert('ready')
    onReady && onReady(wx)
  })
  wx.error(function (err) {
    console.log(err)
    // window.alert('wx err')
  })
  getInitConfig().then(config => {
    console.log('config:', config)
    config.debug = debug
    config.jsApiList = arr
    _config = config
    wx.config(config)
  })
  return wx
}
function emmiter (eventName, eventConfig, options) {
  let e = wx[eventName]
  if (!e) {
    console.error('wrong eventName')
    return
  }
  options = options || {}
  if (options.url) {
    return getConfig(options.url, options.params).then(res => {
      console.log(options.transformer && options.transformer(res) || res)
      return options.transformer && options.transformer(res) || res
    }).then(res => {
      try {
        console.log(eventName, merge(eventConfig, res))
        e(merge(eventConfig, res))
      } catch (err) {
        console.error('err:', err)
      }
    })
  } else {
    e(eventConfig)
  }
}
const WXMethods = {
  wx: wx,
  init: init,
  emmiter: emmiter
}
export default WXMethods
