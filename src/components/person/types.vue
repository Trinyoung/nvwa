<!--
 * @Author: your name
 * @Date: 2020-11-23 16:22:22
 * @LastEditTime: 2020-12-04 19:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\person\types.vue
-->
<template>
  <div class="bg-white list-container shadow-sm p-3 rounded">
    <!-- <div class="article-list">
      <ul v-loading="loading" class="list-group list-group-flush">
        <li class="list-group-item list-group-item-action" v-for="item in list" :key="item._id" :to="{path:`/articles/${item._id}`}">
          <p class="mb-0 text-left">
            <router-link :to="{path:`/person/${uid}/articles?type=${item._id}`}">
              <strong class="d-block text-muted">
              <b-icon-folder class="mb-1 mr-1"></b-icon-folder> {{ item.title }}
              </strong>
              <span class="d-block text-muted" >
                {{ item.description }}
              </span>
              <span class="d-block small text-muted">
                <span class="align-middle">
                  <b-icon-calendar2-check class="mb-1"></b-icon-calendar2-check>
                  {{ formatTime(item.createdAt) }}
                </span>
              </span>
            </router-link>
          </p>
        </li>
      </ul>
    </div>
    <pagination :currentPage="page" :pages="pages" :getList="getList"></pagination> -->
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
import moment from 'moment'
import pagination from '../tools/pagination'
export default {
  components: { pagination },
  data: function () {
    return {
      list: [],
      total: 0,
      page: 1,
      pages: 1,
      loading: false,
      uid: this.$route.params.uid
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    async getList () {
      const { page = 1 } = this.$data
      this.loading = true
      const result = await this.$getAjax(`/myapi/articles/types/list?page=${page}&limit=${10}`)
      this.list = result.docs
      this.loading = false
    },
    formatTime (unix) {
      return moment(unix * 1000).format('YYYY-MM-DD')
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
  .item-title {
    color: white;
    font-size: 1.1rem;
  }
  .new-icon {
    border:1px solid green;
    color: green;
    font-weight: 100;
    padding: 0 5px 0 5px;
  }
  .hot-icon {
    border: 1px solid red;
    color: red;
    font-weight: 100;
    padding: 0 5px 0 5px;
  }
  .list-container {
    min-height: calc(100vh - 132px);
  }
  .list-group-item {
    padding-left: 0;
    padding-bottom: 0.3rem;
  }
</style>
