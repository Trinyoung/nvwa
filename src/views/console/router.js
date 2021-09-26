import article from '@/views/console/article'
import logger from '@/views/console/logger'
import console from '@/views/console'
import types from '@/views/console/types'
import tags from '@/views/console/tags'
import user from '@/views/console/user'
import stastic from '@/views/console/stastic'
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
  }, {
    path: 'stastic',
    name: 'stastic',
    component: stastic
  }]
}
export default obj
