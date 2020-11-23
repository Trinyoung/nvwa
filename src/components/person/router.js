/*
 * @Author: your name
 * @Date: 2020-11-11 18:05:18
 * @LastEditTime: 2020-11-23 09:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\Home\router.js
 */
import person from '@/components/person'
import article from '@/components/person/article'
import personPage from '@/components/person/home'
import Loggers from '@/components/person/Loggers'
import types from '@/components/person/types'
import detail from '@/components/person/content'
const obj = {
  path: '/person/:uid',
  name: 'person',
  component: person,
  props: true,
  children: [ {
    path: '/',
    name: 'main',
    component: personPage
  }, {
    path: 'articles',
    name: 'article',
    component: article,
    props: true
  }, {
    path: 'logger',
    name: 'logger',
    component: Loggers
  }, {
    path: 'types',
    name: 'type',
    component: types
  }, {
    path: 'articles/:articleId',
    name: 'articleDetail',
    component: detail,
    props: true
  }]
}
export default obj
