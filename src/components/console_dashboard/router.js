import article from '@/components/console_dashboard/article'
import logger from '@/components/console_dashboard/logger'
import console from '@/components/console_dashboard'

const obj = {
  path: '/console',
  name: 'console',
  component: console,
  children: [{
    path: '',
    name: 'home',
    component: article
  }, {
    path: 'articles',
    name: 'article',
    component: article
  }, {
    path: 'logger',
    name: 'logger',
    component: logger
  }]
}
export default obj