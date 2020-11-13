<template>
  <div>
    <v-header :isLogin="isLogin"></v-header>
    <main role="main" class="container">
      <div class="row">
        <v-broadside class="col-md-2 broadside" :uid="uid" ref="broadSide"></v-broadside>
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
// import rightside from './Rightside'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-bottom': bottom
    // 'v-rightside': rightside
  },
  data () {
    return {
      isLogin: false
    }
  },
  props: ['uid'],
  created () {
    console.log(this.uid, '----------+++++++>-------------->')
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
    top: 0
  }
</style>
