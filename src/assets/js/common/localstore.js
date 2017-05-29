export const localStore = function (key, value) {
  let localStorage = window.localStorage
  if (arguments.length === 1) {
    let result = localStorage.getItem(key)
    try {
      return JSON.parse(result)
    } catch (e) {
      return undefined
    }
  } else {
    if (value === null) {
      return localStorage.removeItem(key)
    }
    localStorage.setItem(key, JSON.stringify(value))
  }
}
export const sessionStore = function (key, value) {
  let sessionStorage = window.sessionStorage || window.localStorage
  if (arguments.length === 1) {
    let result = sessionStorage.getItem(key)
    try {
      return JSON.parse(result)
    } catch (e) {
      return undefined
    }
  } else {
    if (value === null) {
      return sessionStorage.removeItem(key)
    }
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}
