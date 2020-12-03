/*
 * @Author: your name
 * @Date: 2020-11-23 16:22:12
 * @LastEditTime: 2020-12-03 08:58:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\api\request.js
 */
import Axios from 'axios'
import router from '../router'
function postAjax (url, body, withCredential) {
  return handleRequest({method: 'post', url, body, withCredential})
}

function getAjax (url, withCredential) {
  return handleRequest({method: 'get', url, withCredential})
}

function putAjax (url, body, withCredential) {
  return handleRequest({method: 'put', url, body, withCredential})
}

function deleteAjax (url, withCredential, body) {
  return handleRequest({method: 'delete', url, body, withCredential})
}
async function handleRequest ({method, url, body, withCredential}) {
  try {
    const res = await request(method, url, body, withCredential)
    if (res.data.code === '401') {
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('types')
      localStorage.removeItem('tags')
      router.push('/login')
    }
    if (res.data && res.data.code !== '000') {
      throw new Error(res.data.err)
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
    options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return Axios(options)
}

export {
  postAjax,
  getAjax,
  putAjax,
  deleteAjax
}
