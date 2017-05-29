import qs from 'qs'

let query = window.location.search.substr(1)
let queryObj = qs.parse(query) || {}

function getParam (paramName) {
  return paramName ? queryObj[paramName] : queryObj
}

export default { getParam }
