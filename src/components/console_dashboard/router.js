/*
 * @Author: your name
 * @Date: 2020-11-23 16:22:12
 * @LastEditTime: 2020-12-17 10:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\console_dashboard\router.js
 */

const obj = {
  path: '/console/:uid',
  name: 'console',
  component: () => import('@/components/console_dashboard/index'),
  props: true,
  children: [{
    path: '/',
    redirect: 'user'
  }, {
    path: 'articles',
    name: 'console_article',
    component: () => import('@/components/console_dashboard/article')
  }, {
    path: 'logger',
    name: 'console_logger',
    component: () => import('@/components/console_dashboard/logger')
  }, {
    path: 'types',
    name: 'types',
    component: () => import('@/components/console_dashboard/types')
  }, {
    path: ':types/articles',
    name: 'console_article',
    component: () => import('@/components/console_dashboard/article'),
    props: true
  }, {
    path: 'tags',
    name: 'tags',
    component: () => import('@/components/console_dashboard/tags')
  }, {
    path: 'user',
    name: 'user',
    component: () => import('@/components/console_dashboard/user')
  }, {
    path: 'stastic',
    name: 'stastic',
    component: () => import('@/components/console_dashboard/stastic')
  }]
}
export default obj
