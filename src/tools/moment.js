/*
 * @Author: Trinyoung.Lu
 * @Date: 2020-09-22 18:43:06
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-22 18:44:38
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\tools\moment.js
 */
import moment from 'moment'

export function formatTime (unix) {
  return moment(unix).format('YYYY-MM-DD')
}
