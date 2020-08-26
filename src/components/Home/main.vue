<template>
    <main role="main" class="container">
      <ul class="nav justify-content-center d-flex align-items-center p-3 my-2  bg-purple rounded shadow-sm">
        <li class="nav-item">
          <router-link to="/home">
            <span class="nav-link active item-title">首页</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home/articles">
            <span class="nav-link active item-title">文章</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home/logger">
            <span class="nav-link item-title">日志</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home/logger">
            <span class="nav-link item-title">连载</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home/logger">
            <span class="nav-link item-title">相册</span>
          </router-link>
        </li>
      </ul>
      <router-view/>
    </main>
</template>
<script>
import $ from 'jquery'
export default {
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
