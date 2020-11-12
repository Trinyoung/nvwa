<template>
  <main role="main" class="main">
    <!-- <div class="container p-3 rounded my-2 shadow-sm content-header justify-content-center">
      <div class="row my-1">
        <div class="col-sm-5">
          <b>上一篇：</b><a href="#">龙的传人</a>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-5">
          <b>下一篇：</b><a href="#">黄河大合唱</a>
        </div>
      </div>
    </div> -->
    <div class="my-1 pt-0 p-3 bg-white rounded shadow-sm">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" v-for="type in article.types" :key="type._id">
            <router-link :to="`/home/articles?type=${type._id}`">{{type.title}}</router-link>
          </li>
        </ol>
      </nav>
      <h1 class="border-bottom border-gray pb-2 mb-0 col-title">{{article.title}}</h1>
      <div class="text-muted article-tip">
        <ul class="list-group list-group-horizontal mt-1">
          <li class="list-group-item "><b>作者：</b>{{article.author}}</li>
          <li class="list-group-item "><b>更新时间：</b>{{formatTime(article.updatedAt * 1000)}}</li>
          <li class="list-group-item ">
            <b>字数：</b>{{article.wordNums}}
          </li>
          <li class="list-group-item">
            <b>阅读数：</b>{{article.hasReads}}
          </li>
        </ul>
      </div>
      <div class="content-container markdown-body" v-html="article.contentHtml" >
      </div>
      (完)
      <div class="reffer-container pt-3">
        <h5 class="border-bottom border-gray pb-2 mb-0">文献引用({{article.refers&&article.refers.length || 0}})</h5>
        <ul class="list-group list-group-container">
          <li class="list-group-item" v-for="(item, index) in article.refers" :key="index">
            <b>{{index+1}}. </b> <span>{{item.title}}</span> <a :href="item.link">{{item.link}}</a>
          </li>
        </ul>
      </div>
      <div class="tags-container my-3">
        <h5 class="border-bottom border-gray pb-2 mb-0 text-left">标签 ({{article.tags && article.tags.length || 0}})</h5>
        <ul class="list-group list-group-horizontal mt-1">
          <li class="list-group-item" v-for="item in article.tags" :key="item.id">
            <el-tag type="primary">{{item.name}}</el-tag>
          </li>
        </ul>
      </div>
      <div class="row my-2">
        <div class="col-sm-4">
          <b>上一篇：</b><a href="#">龙的传人</a>
        </div>
        <div class="col-sm-4">
          <div v-bind:class="{'isFavorited':isFavorited, 'favorite-icon':!isFavorited} ">
            <b-icon-hand-thumbs-up class="size-2" @click="setFavorite"></b-icon-hand-thumbs-up>
          </div>
          <span class="favorite-num">{{favoriteNum}}</span>
        </div>
        <div class="col-sm-4">
          <b>下一篇：</b><a href="#">黄河大合唱</a>
        </div>
      </div>
      <v-bottom :refers="article.refers" :articleId="articleId" :uid="uid"></v-bottom>
    </div>
  </main>
</template>
<script>
import Bottom from './Bottom'
import moment from 'moment'
import 'mavon-editor/dist/css/index.css'
export default {
  components: {
    'v-bottom': Bottom
  },
  data: function () {
    return {
      color: 'red',
      userInfo: {},
      isFavorited: false,
      favoriteNum: 0,
      loading: false,
      article: {
        title: '',
        updatedBy: '',
        contentHtml: '',
        updatedAt: '',
        refers: [],
        tags: [],
        types: [],
        hasReads: 0,
        createdBy: ''
      }
    }
  },
  props: ['articleId'],
  created () {
    this.getArticleDetail()
    this.userInfo = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo'))
    this.uid = this.userInfo && this.userInfo.uid
    if (this.userInfo) {
      this.getFavorite()
    }
  },
  methods: {
    async getArticleDetail () {
      const id = this.articleId
      this.loading = false
      try {
        const result = await this.$getAjax(`/myapi/articles/${id}`)
        const { content, title, updatedBy, updatedAt, createdAt, createdBy, refers, author, tags, type, hasReads, wordNums } = result
        const contentHtml = result.content_html
        this.article.contentHtml = contentHtml || content
        this.article.title = title
        this.article.updatedBy = updatedBy
        this.article.updatedAt = updatedAt || createdAt
        this.article.refers = refers
        this.article.tags = tags || []
        this.article.author = author
        this.article.hasReads = hasReads
        this.article.createdBy = createdBy
        this.isAuthor = this.uid === createdBy
        this.loading = false
        this.article.wordNums = wordNums
        // this.$refs.broadSide.userId = createdBy
        if (type) {
          this.getParentTypes(type.typeCode)
        }
        this.setReads()
        this.getFavoriteNums()
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async getParentTypes (type) {
      try {
        const result = await this.$getAjax(`/myapi/articles/types/parent?typeCode=${type}&withTitle=1`)
        this.article.types = result
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async setReads () {
      const request = { articleId: this.articleId, authorUid: this.article.createdBy }
      const hasRead = sessionStorage.getItem(`read_${this.articleId}`)
      if (!hasRead) {
        try {
          const result = await this.$postAjax(`/myapi/articles/reads`, request)
          sessionStorage.setItem(`read_${this.articleId}`, result._id)
          this.article.hasReads++
          this.$emit('articleInfoChange', true)
        } catch (err) {
          this.$message.error(err.message)
        }
      }
    },
    formatTime (unix) {
      return moment(unix).format('YYYY-MM-DD')
    },
    async setFavorite () {
      if (this.isFavorited) {
        return this.$message.success('已经点过赞了！')
      }
      const request = {
        articleId: this.articleId,
        createdBy: this.userInfo && this.userInfo.uid,
        authorUid: this.article.createdBy
      }
      try {
        await this.$postAjax('/myapi/articles/favorites', request)
        this.isFavorited = true
        this.favoriteNum++
        console.log('点赞开始了')
        this.$emit('articleInfoChange', false, true)
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async getFavoriteNums () {
      try {
        const result = await this.$getAjax(`/myapi/aritcles/favorites/nums?articleId=${this.articleId}`)
        this.favoriteNum = result
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async getFavorite () {
      let queryString = ''
      if (this.userInfo) {
        queryString = `uid=${this.userInfo.uid}`
      }
      try {
        const result = await this.$getAjax(`/myapi/articles/favorites/${this.articleId}?${queryString}`)
        this.isFavorited = !!result
      } catch (err) {
        this.$message.error(err.message)
      }
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
    /* background-image: url('../../../static/首页标题栏.jpg'); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .item-title {
    /* color: white; */
    font-size: 1.1rem;
  }
  img {
    max-width: 100%;
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
    background-color: aliceblue;
    /* background-image: url('../../../static/首页标题栏.jpg'); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .favorite-icon {
    color: darkgray;
  }
  .favorite-num {
    color: darkgray;
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
  .content-container >>> h1 {
    font-size: 1.6rem!important;
    font-weight: bold;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 2px;
  }
  .content-container >>> h2 {
    font-size:1.4rem!important;
    font-weight: bold;
    border-bottom: 1px dashed gainsboro;
    padding-bottom: 2px;
    margin-top: 10px;
  }

  .content-container >>> h3 {
    font-size: 1.25rem!important;
    font-weight: 500;
  }
  .content-container >>> h4 {
    font-size: 1.15rem!important;
    font-weight: 500;
  }
  .content-container >>> ul {
    margin-left: 2rem!important;
  }
  .content-container >>> ol {
    margin-left: 2rem!important;
  }
  .content-container >>> td {
    border:1px solid gainsboro;
    margin-left: 2rem!important;
    padding: 2px;
  }
  .content-container >>> table {
    width: 100%;
    text-align: center;
  }
  .content-container >>> th {
    border:1px solid gainsboro;
    margin-left: 2rem!important;
    padding: 5px;
  }
  .content-container >>> thead {
    background: #e9ecef;
  }
  .content-container >>> img {
    max-width: 100%;
  }
  .isFavorited {
    color: red
  }
  .isFavorited:hover {
    cursor: pointer;
    /* color: black */
  }
</style>
