<!--
 * @Author: your name
 * @Date: 2020-11-19 15:06:21
 * @LastEditTime: 2020-12-04 13:00:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\homepage\main.vue
-->
<template>
  <main role="main" class="container">
    <div class="article-list border p-3 my-2 rounded shadow-sm">
      <ul v-loading="loading" class="list-group list-group-flush">
        <li class="list-group-item pt-2 list-group-item-action" v-for="item in list" :key="item._id" :to="{path:`/articles/${item._id}`}">
          <p class="mb-0 text-left">
            <router-link :to="{path:`/person/${item.author.uid}/articles/${item._id}`}">
              <strong class="d-block text-gray-dark">
                <div class="d-inline-block new-icon" v-if="item.isNew">新</div>
                <div class="d-inline-block hot-icon" v-if="item.isHot">热</div>
                {{ item.title }}
              </strong>
              <span class="d-block text-muted" >
                {{ item.content && item.content.substr(0, 150) }}……
              </span>
              <span class="d-block small text-muted">
                <span class="align-middle">
                  <b-icon-calendar2-check></b-icon-calendar2-check>
                  {{ formatTime(item.createdAt) }}
                </span>
                <span class="ml-2 align-middle">
                  <b-icon-person></b-icon-person>
                  {{ item.author.username }}
                </span>
                <span class="ml-2 align-middle">
                  <b-icon-eye></b-icon-eye>
                  {{ item.hasReads || 0 }}
                </span>
                <span class="ml-2 align-middle">
                  <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
                  {{ item.favorites || 0 }}
                </span>
              </span>
            </router-link>
          </p>
        </li>
      </ul>
      <pagination :currentPage="currentPage" :pages="pages" :getList="getList"></pagination>
    </div>
  </main>
</template>
<script>
import moment from 'moment'
import pagination from '@/components/tools/pagination'
export default {
  components: {
    pagination
  },
  data () {
    return {
      list: [],
      loading: false,
      currentPage: 1,
      pages: 1
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.loading = true
      const result = await this.$getAjax('/myapi/articles/list')
      this.list = result.docs
      this.loading = false
    },
    formatTime (time) {
      return moment(time * 1000).format('YYYY-MM-DD')
    }
  }
}
</script>
<style scoped>
  .container {
    position: relative;
  }
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }
  .new-icon {
    border:1px solid green;
    color: green;
    font-weight: 100;
    padding: 0 3px 0 3px;
    font-size: 0.5rem;
  }
  .hot-icon {
    border: 1px solid red;
    color: red;
    font-weight: 100;
    padding: 0 3px 0 3px;
    font-size: 0.5rem;
  }
  .justify-content-center {
    background-color: aliceblue;
    top: 50px;
    position: sticky;
    z-index: 10;
  }
  .item-title {
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
  .list-group-item {
    padding-left: 0;
  }
</style>
