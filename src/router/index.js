// @ts-nocheck
/*
 * @Author: your name
 * @Date: 2020-11-11 18:05:23
 * @LastEditTime: 2020-11-23 17:00:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import editorRouter from '@/components/editor/router'
// import Detail from '@/components/Detail'
import homeRouter from '@/components/person/router'
// import consoleRouter from '@/components/console_dashboard/router'
import consoleRouter from '@/views/console/router'
import ForgetPassword from '@/components/forgetPassword'
import updatePassword from '@/components/updatePassword'
import homePage from '@/components/homepage'
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
      path: '/home',
      name: 'homepage',
      component: homePage
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
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    }, {
      path: '/:username/updatePassword',
      name: 'updatePassword',
      component: updatePassword,
      props: (route) => ({code: route.query.code})
    }
  ]
})
