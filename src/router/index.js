import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import editorRouter from '@/components/editor/router'
import Detail from '@/components/Detail'
import homeRouter from '@/components/Home/router'
import consoleRouter from '@/components/Console_dashboard/router'
import ForgetPassword from '@/components/forgetPassword'
import updatePassword from '@/components/updatePassword'
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
      redirect: '/home'
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
    editorRouter,
    consoleRouter,
    {
      path: '/articles/:articleId',
      name: 'Article',
      component: Detail,
      props: true
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    }, {
      path: '/:username/updatePassword',
      name: 'updatePassword',
      component: updatePassword,
      props: true
    }
  ]
})
