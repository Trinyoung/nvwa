import Axios from 'axios'

function postAjax (url, body, withCredential) {
  request('post', url, body, withCredential)
}

async function getAjax (url, withCredential) {
  try {
    const res = await request('get', url, withCredential)
    if (res.data && res.data.code !== '000') {
      throw new Error(res.data.result.message)
    }
    return res.data.result
  } catch (error) {
    throw error
  }
}
async function putAjax (url, body, withCredential) {
  try {
    const res = await request('get', url, body, withCredential)
    if (res.data && res.data.code !== '000') {
      throw new Error(res.data.result.message)
    }
    return res.data.result
  } catch (error) {
    throw error
  }
}
async function deleteAjax (url, body, withCredential) {
  try {
    const res = await request('delete', url, body, withCredential)
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
