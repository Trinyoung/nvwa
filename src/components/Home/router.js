import home from '@/components/Home'
import article from '@/components/home/article'
import homePage from '@/components/home/home'
import Loggers from '@/components/home/Loggers'
import types from '@/components/home/types'
import detail from '@/components/home/content'
const obj = {
  path: '/home/:uid',
  name: 'Home',
  component: home,
  props: true,
  children: [ {
    path: '/',
    name: 'main',
    component: homePage
  }, {
    path: 'articles',
    name: 'article',
    component: article
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
