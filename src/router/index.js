import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import editor from '@/components/Editor'
// import Console from '@/components/Console_dashboard'
import Detail from '@/components/Detail'
import homeRouter from '@/components/Home/router'
import consoleRouter from '@/components/Console_dashboard/router'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'mavon-editor/dist/css/index.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    homeRouter,
    {
      path: '/editor',
      name: 'Editor',
      component: editor
    },
    consoleRouter,
    {
      path: '/article',
      name: 'Article',
      component: Detail
    }
  ]
})
