/*
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-04 08:31:03
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-23 09:25:57
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap-select/dist/js/bootstrap-select'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ElementUI from 'element-ui' // （1）
import 'element-ui/lib/theme-chalk/index.css'
// import { formatTime } from '@/tools/moment.js'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCookie)
Vue.use(ElementUI, {zIndex: 3000})

router.beforeEach((from, to, next) => {
  const regex = new RegExp('/console')
  const cookie = Vue.cookie.get('nvwaId.sig')
  if (regex.test(from.path)) {
    if (cookie) {
      next()
    } else {
      router.replace('/login')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
