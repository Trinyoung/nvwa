<template>
    <main role="main" class="container">
      <!-- <div class="d-flex align-items-center p-3 my-3  bg-purple rounded shadow-sm"> -->
        <ul class="nav justify-content-center d-flex align-items-center p-3 my-3  bg-purple rounded shadow-sm">
          <li class="nav-item">
            <span class="nav-link active item-title"  @click="changeView('home')">首页</span>
          </li>
          <li class="nav-item">
            <span class="nav-link active item-title"  @click="changeView('article')">文章</span>
          </li>
          <li class="nav-item">
            <span class="nav-link item-title" @click="changeView('logger')">日志</span>
          </li>
          <li class="nav-item">
            <span class="nav-link item-title" @click="changeView('series')">连载</span>
          </li>
          <li class="nav-item">
            <span class="nav-link item-title" @click="changeView('albumn')">相册</span>
          </li>
        </ul>
        <v-home v-show="view === 'home'"></v-home>
        <v-article v-show="view === 'article'"></v-article>
        <v-logger v-show="view === 'logger'"></v-logger>
        <v-albumn v-show="view === 'albumn'"></v-albumn>
  </main>
</template>
<script>
import home from './home'
import article from './article'
import albumn from './albumn'
import logger from './logger'
import $ from 'jquery'
export default {
  components: {
    'v-home': home,
    'v-article': article,
    'v-albumn': albumn,
    'v-logger': logger
  },
  data: function () {
    return {
      view: 'home',
      newestList: [],
      hotList: []
    }
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    },
    changeView: function (type = 'home') {
      this.view = type
      $()
    }
  }
}
</script>
<style scoped>
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }
  .justify-content-center {
    /* background-image: image('../../static/首页标题栏.jpg'); */
    background-image: url('../../../static/首页标题栏.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* opacity: 0.5; */
  }
  .item-title {
    color: white;
    font-size: 1.1rem;
  }

  .item-title:hover {
    cursor: pointer;
    color: blue;
  }
</style>
