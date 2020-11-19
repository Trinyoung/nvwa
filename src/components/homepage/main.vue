<!--
 * @Author: your name
 * @Date: 2020-11-19 15:06:21
 * @LastEditTime: 2020-11-19 16:58:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\homepage\main.vue
-->
<template>
  <main role="main" class="container">
    <div class="border justify-content-center d-flex align-items-center p-3 my-2 rounded shadow-sm">
      <div class="my-1 pt-0 p-3 rounded shadow-sm border-aliceBlue">
        <nav aria-label="breadcrumb" class="breadcrumb-container rounded">
          <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="type in article.types" :key="type._id">
              <router-link :to="`/home/${$route.params.uid}/articles?type=${type._id}`"
              >{{type.title}}</router-link>
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
        <v-bottom :refers="article.refers" :articleId="articleId" :uid="$route.params.uid"></v-bottom>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  .container {
    position: relative;
    /* top: 20px; */
  }
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }

  .justify-content-center {
    background-color: aliceblue;
    top: 50px;
    position: sticky;
    z-index: 10;
    /* opacity: 0.5; */
  }
  .item-title {
    /* color: white; */
    color: gray;
    font-size: 1.1rem;
  }

  .item-title:hover {
    cursor: pointer;
    color: blue;
  }
  .container {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }
</style>
