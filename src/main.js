/*
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-04 08:31:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-02 14:48:51
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// @ts-ignore
import App from './App'
import router from './router'
// @ts-ignore
import VueCookie from 'vue-cookie'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
// @ts-ignore
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
// @ts-ignore
import 'bootstrap-select/dist/js/bootstrap-select'
// import '@/assets/scss/index.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ElementUI from 'element-ui' // （1）
import 'element-ui/lib/theme-chalk/index.css'
// @ts-ignore
import {postAjax, getAjax, deleteAjax, putAjax} from '@/api/request'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCookie)
// Vue.use(request)
Vue.prototype.$postAjax = postAjax
Vue.prototype.$getAjax = getAjax
Vue.prototype.$putAjax = putAjax
Vue.prototype.$deleteAjax = deleteAjax
// @ts-ignore
Vue.use(Vuex)
// @ts-ignore
Vue.use(ElementUI, {zIndex: 3000})

// @ts-ignore
router.beforeEach((from, to, next) => {
  const regex = new RegExp('/console')
  // @ts-ignore
  const cookie = Vue.cookie.get('isLogin')
  if (!cookie) {
    localStorage.clear()
  }
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
const store = new Vuex.Store({
  state: {
    readsNums: 0,
    favoriteNums: 0
  },
  mutations: {
    readIncrement (state) {
      state.readsNums++
    },
    favoriteIncrement (state) {
      state.favoriteNums++
    },
    getStateChange (state, {readsNums, favoriteNums}) {
      // console.log(num, state, '在这里')
      state.readsNums = readsNums
      state.favoriteNums = favoriteNums
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // @ts-ignore
  store
})
