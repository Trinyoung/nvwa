<!--
 * @Author: your name
 * @Date: 2020-11-13 08:44:15
 * @LastEditTime: 2021-03-01 17:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\Home\index.vue
-->
<template>
  <div>
    <v-header :isLogin="isLogin" @change="mainShowChange"></v-header>
    <main role="main" class="container">
      <div class="row">
        <v-broadside class="col-md-2 broadside" :uid="uid" ref="broadSide" :hotArticles="hotArticles" :newArticles="newArticles"
        @change="mainShowChange"
        @mainShow="detailChange"></v-broadside>
        <v-main class="mt-1 col-md-10 main-container" :uid="uid" @articleInfoChange="articleInfoChange"
        v-bind:class="{ mainHidden }"></v-main>
      </div>
    </main>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100"></el-backtop> -->
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
      newArticles: [],
      mainHidden: false
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
    },
    mainShowChange (val) {
      this.mainHidden = !this.mainHidden
    },
    detailChange () {
      this.mainHidden = false
    }
  }
}
</script>
<style scoped>
  @media (min-width: 1400px) {
    .container {
      max-width: 1300px;
    }
  }

  .broadside {
    padding: 0;
    position: sticky;
  }
  .main-container {
    position: sticky;
  }
  .mainHidden {
    display: none;
  }
</style>
