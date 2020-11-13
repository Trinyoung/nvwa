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
    name: 'console_home',
    component: article
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
