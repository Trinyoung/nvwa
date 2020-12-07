<!--
 * @Author: your name
 * @Date: 2020-08-04 08:31:03
 * @LastEditTime: 2020-12-07 19:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\Home\main.vue
-->
<template>
  <main role="main" class="container">
    <!-- <ul class="nav justify-content-center d-flex align-items-center p-3 my-2 rounded shadow-sm">
      <li class="nav-item" v-for="item in activeMenus" :key="item.type"  @click="changeActive(item.type)">
        <router-link :to="`/person/${uid}/${item.value}`" class="nav-link" >
          <span class="item-title" v-bind:class="{active: isActive === item.type}">{{item.text}}</span>
        </router-link>
      </li>
    </ul> -->
    <router-view @articleInfoChange="articleInfoChange"/>
    <v-bottom></v-bottom>
  </main>
</template>
<script>
import broadSide from '../Broadside'
import bottom from '../bottom'
// import menu from '/'
export default {
  components: {
    'v-broadSide': broadSide,
    'v-bottom': bottom
  },
  data () {
    return {
      view: 'home',
      newestList: [],
      hotList: [],
      isActive: 1,
      menus: [
        {
          type: 1,
          text: '首页',
          value: '',
          active: true
        },
        {
          type: 2,
          text: '文章',
          value: 'articles',
          active: true
        },
        {
          type: 3,
          text: '分类',
          value: 'types',
          active: true
        },
        {
          type: 4,
          text: '日志',
          value: 'logger',
          active: false
        },
        {
          type: 5,
          text: '连载',
          value: 'series',
          active: false
        },
        {
          type: 6,
          text: '相册',
          value: 'albumn',
          active: false
        }
      ]
    }
  },
  props: ['uid'],
  computed: {
    activeMenus () {
      return this.menus.filter(item => item.active)
    }
  },
  methods: {
    getNewestList () {
      return ''
    },
    getHotList () {
      return ''
    },
    articleInfoChange (readsNums, favoriteNums) {
      this.$emit('articleInfoChange', readsNums, favoriteNums)
    },
    changeActive (type) {
      this.isActive = type
    }
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
  .active {
    color: rgb(77, 77, 231);
  }
  /* :active */
</style>
