import article from '@/components/console_dashboard/article'
import logger from '@/components/console_dashboard/logger'
import console from '@/components/console_dashboard'
import types from '@/components/console_dashboard/types'
import typeEdit from '@/components/console_dashboard/type_edit'
import tags from '@/components/console_dashboard/tags'

const obj = {
  path: '/console',
  name: 'console',
  component: console,
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
    component: article
  }, {
    path: 'tags',
    name: 'tags',
    component: tags
  }]
}
export default obj
