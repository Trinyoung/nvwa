/*
 * @Author: your name
 * @Date: 2020-11-23 16:22:12
 * @LastEditTime: 2020-12-04 10:07:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\console_dashboard\router.js
 */
import article from '@/components/console_dashboard/article'
import logger from '@/components/console_dashboard/logger'
import console from '@/components/console_dashboard'
import types from '@/components/console_dashboard/types'
import tags from '@/components/console_dashboard/tags'
import user from '@/components/console_dashboard/user'
const obj = {
  path: '/console/:uid',
  name: 'console',
  component: console,
  props: true,
  children: [{
    path: '/',
    redirect: 'user'
  }, {
    path: 'articles',
    name: 'console_article',
    component: article
  }, {
    path: 'logger',
    name: 'console_logger',
    component: logger
  }, {
    path: 'types',
    name: 'types',
    component: types
  }, {
    path: ':types/articles',
    name: 'console_article',
    component: article,
    props: true
  }, {
    path: 'tags',
    name: 'tags',
    component: tags
  }, {
    path: 'user',
    name: 'user',
    component: user
  }]
}
export default obj
