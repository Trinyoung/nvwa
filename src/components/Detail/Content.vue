<template>
  <main role="main" class="container">
    <div class="container p-3 rounded my-1 shadow-sm content-header justify-content-center">
      <div class="row my-1">
        <div class="col-sm-5">
          <b>上一篇：</b><a href="#">龙的传人</a>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-5">
          <b>下一篇：</b><a href="#">黄河大合唱</a>
        </div>
      </div>
    </div>
    <div class="my-1 pt-0 p-3 bg-white rounded shadow-sm">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">音乐</a>
          </li>
          <li class="breadcrumb-item"><a href="#">流行音乐</a></li>
          <li class="breadcrumb-item active" aria-current="page">大中国</li>
        </ol>
      </nav>
      <h1 class="border-bottom border-gray pb-2 mb-0 col-title">{{title}}</h1>
      <div class="text-muted article-tip">
        <ul class="list-group list-group-horizontal mt-1">
          <li class="list-group-item border-right"><b>作者：</b>Trinyoung</li>
          <li class="list-group-item border-right"><b>更新时间：</b>2020-08-02</li>
          <li class="list-group-item border-right">
            <b>字数：</b>2000
          </li>
          <li class="list-group-item">
            <b>阅读数：</b>2000
          </li>
        </ul>
      </div>
      <div class="content-container" v-html="contentHtml">
      </div>
      <div class="reffer-container pt-3">
        <h5 class="border-bottom border-gray pb-2 mb-0">文献引用</h5>
        <ul class="list-group list-group-container">
          <li class="list-group-item">
            <b>1.</b> <span>我们的人阿斯顿发生</span>
          </li>
          <li class="list-group-item">
            <b>2.</b> <span>我们的人阿斯顿发生</span>
          </li>
        </ul>
      </div>
      <div class="tags-container my-3">
        <h5 class="border-bottom border-gray pb-2 mb-0 text-left">标签 ({{tags.length}})</h5>
        <ul class="list-group list-group-horizontal mt-1">
          <li class="list-group-item" v-for="item in tags" :key="item.id">
            <span class="tag-icon d-inline-block">
              {{item}}
            </span>
          </li>
        </ul>
      </div>
      <div class="row my-2">
        <div class="col-sm-4">
          <b>上一篇：</b><a href="#">龙的传人</a>
        </div>
        <div class="col-sm-4">
          <div class="favorite-icon">
            <b-icon-hand-thumbs-up class="size-2" @click="setFavorite"></b-icon-hand-thumbs-up>
            <b-icon-hand-thumbs-up class="size-2" @click="setFavorite"></b-icon-hand-thumbs-up>
          </div>
          <span class="favorite-num">16</span>
        </div>
        <div class="col-sm-4">
          <b>下一篇：</b><a href="#">黄河大合唱</a>
        </div>
      </div>
      <v-bottom></v-bottom>
    </div>
  </main>
</template>
<script>
import Bottom from './Bottom'
import Axios from 'axios'
export default {
  components: {
    'v-bottom': Bottom
  },
  data: function () {
    return {
      contentHtml: '',
      title: '',
      author: '',
      tags: ['前端', 'vue', 'nodejs']
    }
  },
  props: ['articleId'],
  created: function () {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail: function () {
      const id = this.articleId
      Axios.get(`/api/articles/${id}`).then((result) => {
        const { content, title } = result.data.data
        const contentHtml = result.data.data.content_html
        this.contentHtml = contentHtml || content
        // this.
        this.title = title
      })
    },
    getComments: function () {
      return ''
    }
  }
}
</script>
<style scoped>
  .media-body {
    text-align: left;
  }
  .size-2 {
    height: 2em;
    width: 2em;
  }
  .col-title {
    text-align: center;
  }
  .justify-content-center {
    background-image: url('../../../static/首页标题栏.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .item-title {
    color: white;
    font-size: 1.1rem;
  }

  .article-tip {
    margin-left: 1rem;
    text-align: left;
    font-size: 0.8rem;
  }
  .reffer-container {
    margin-top: 1rem;
    text-align: left;
  }
  .list-group-item {
    border: none;
    padding: 0.35rem 0.25rem;
  }
  .content-header {
    margin-left: 0;
    margin-right: 0;
    font-size: 1rem;
    background-image: url('../../../static/首页标题栏.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: aliceblue;
  }
  .favorite-icon:hover {
    cursor: pointer;
    color: red;
  }
  .content-container {
    text-align: left;
    font-size: 0.9rem;
  }
  .tag-icon {
    padding: 2px 15px 2px 15px;
    background: green;
    border-radius: 5px;
    color: aliceblue;
  }
  h1 {
    font-size:1.5rem!important;
    font-weight: bold;
  }
  .content-container >>> pre {
    background: rgb(246,248,250);
    padding: 1rem 1rem 1rem 1rem;
    font-size: 85%;

  }

  .content-container >>> h2 {
    font-size:1.5rem!important;
    font-weight: bold;
    border-bottom: 1px solid gainsboro;
    margin-top: 2rem;
  }

  .content-container >>> h3 {
    font-size: 1.25rem!important;
    font-weight: bold;
  }
  .content-container >>> h4 {
    font-size: 1.15rem!important;
    font-weight: bold;
  }
  svg {
    margin-bottom: 2px;
  }
</style>
