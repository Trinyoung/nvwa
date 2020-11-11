import Axios from 'axios'

function postAjax (url, body, withCredential) {
  return handleRequest({method: 'post', url, body, withCredential})
}

function getAjax (url, withCredential) {
  return handleRequest({method: 'get', url, withCredential})
}

function putAjax (url, body, withCredential) {
  return handleRequest({method: 'put', url, body, withCredential})
}

function deleteAjax (url, body, withCredential) {
  return handleRequest({method: 'delete', url, body, withCredential})
}
async function handleRequest ({method, url, body, withCredential}) {
  try {
    const res = await request(method, url, body, withCredential)
    if (res.data && res.data.code !== '000') {
      throw new Error(res.data.result.message)
    }
    return res.data.result
  } catch (error) {
    throw error
  }
}
function request (method, url, data, withCredential) {
  const options = {
    method,
    url,
    data,
    headers: {}
  }
  if (withCredential) {
    options.headers.Authorization = localStorage.getItem('token')
  }
  return Axios(options)
}

export {
  postAjax,
  getAjax,
  putAjax,
  deleteAjax
}
