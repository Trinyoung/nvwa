import home from '@/components/Home'
import article from '@/components/article'
const obj = {
  path: '/home',
  name: 'Home',
  component: home,
  children: [{
    path: 'articles',
    name: 'article',
    components: article
  }]
}
export default obj
