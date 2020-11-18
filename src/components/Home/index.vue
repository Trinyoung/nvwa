<!--
 * @Author: your name
 * @Date: 2020-11-13 08:44:15
 * @LastEditTime: 2020-11-18 10:31:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\Home\index.vue
-->
<template>
  <div>
    <v-header :isLogin="isLogin"></v-header>
    <main role="main" class="container">
      <div class="row">
        <v-broadside class="col-md-2 broadside" :uid="uid" ref="broadSide" :hotArticles="hotArticles" :newArticles="newArticles"></v-broadside>
        <v-main class="col-md-10" :uid="uid" @articleInfoChange="articleInfoChange"></v-main>
      </div>
    </main>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import header from '../Header'
import broadside from '../Broadside'
import main from './main'
import bottom from '../bottom'

export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-bottom': bottom
  },
  data () {
    return {
      isLogin: false,
      hotArticles: [],
      newArticles: []
    }
  },
  props: ['uid'],
  created () {
    this.getHotArticles()
    this.getNewArticles()
  },
  methods: {
    init () {
    },
    articleInfoChange (readsNums, favoriteNums) {
      console.log(readsNums, favoriteNums, '点赞数和阅读数')
      if (readsNums) {
        this.$refs['broadSide'].articleInfo.readsNums++
      }
      if (favoriteNums) {
        this.$refs['broadSide'].articleInfo.favoriteNums++
      }
    },
    async getHotArticles () {
      try {
        const result = await this.$getAjax(`/myapi/articles/list/hot?authorUid=${this.uid}`)
        // console.log(result, '000000000000000000000')
        this.hotArticles = result
      } catch (err) {
        this.$message(err.message)
      }
    },
    async getNewArticles () {
      try {
        const result = await this.$getAjax(`/myapi/articles/list/new?createdBy=${this.uid}`)
        this.newArticles = result.docs
      } catch (err) {
        this.$message(err.message)
      }
    }
  }
}
</script>
<style scoped>
  @media (min-width: 1600px) {
    .main-container：{
      width: 1500px;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: 1300px;
    }
  }

  .broadside {
    padding: 0;
    position: sticky;
    top: 40px
  }
</style>
