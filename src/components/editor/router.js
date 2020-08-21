import editor from '@/components/editor'
const obj = {
  path: '/editor',
  name: 'Editor',
  component: editor,
  props: true,
  children: [ {
    path: ':articleId',
    name: 'Editor_sub',
    component: editor,
    props: true
  }]
}
export default obj
