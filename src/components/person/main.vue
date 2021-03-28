<!--
 * @Author: your name
 * @Date: 2020-08-04 08:31:03
 * @LastEditTime: 2021-03-01 17:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\Home\main.vue
-->
<template>
  <main role="main">
    <ul class="nav justify-content-center d-flex align-items-center p-2 my-1 shadow-sm">
      <li class="nav-item" v-for="item in activeMenus" :key="item.type"  @click="changeActive(item.type)">
        <router-link :to="`/person/${uid}/${item.value}`" class="nav-link" >
          <span class="item-title" v-bind:class="{active: isActive === item.type}">{{item.text}}</span>
        </router-link>
      </li>
    </ul>
    <router-view @articleInfoChange="articleInfoChange"/>
    <!-- <v-bottom></v-bottom> -->
  </main>
</template>
<script>
import broadSide from '../Broadside'
import bottom from '../bottom'
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
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }

  .justify-content-center {
    background-color: rgb(199, 226, 250);
    top: 50px;
    position: sticky;
    z-index: 10;
    /* opacity: 0.5; */
  }
  .item-title {
    color: gray;
    font-size: 1.2rem;
    font-weight: 540;
  }

  .item-title:hover {
    cursor: pointer;
    color: blue;
  }
  .active {
    color: rgb(77, 77, 231);
  }
</style>
