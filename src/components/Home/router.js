import home from '@/components/Home'
import article from '@/components/home/article'
import homePage from '@/components/home/home'
import logger from '@/components/home/logger'
const obj = {
  path: '/home',
  name: 'Home',
  component: home,
  children: [ {
    path: '',
    name: 'main',
    component: homePage
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
