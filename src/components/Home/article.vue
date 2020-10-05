<template>
  <div class="bg-white list-container shadow-sm p-3 rounded">
    <div class="article-list">
      <ul>
        <li class="media pt-2" v-for="item in list" :key="item._id" :to="{path:`/articles/${item._id}`}">
          <p class="media-body pb-2 mb-0 lh-125 border-bottom border-gray pl-1">
            <router-link :to="{path:`/articles/${item._id}`}">
              <strong class="d-block text-gray-dark">
                <div class="d-inline-block new-icon">新</div>
                <div class="d-inline-block hot-icon">热</div>
                {{ item.title }}
              </strong>
              <span class="d-block text-muted">
                {{ item.description }}
              </span>
              <span class="d-block small text-muted">
                <span class="align-middle">
                  <b-icon-calendar2-check></b-icon-calendar2-check>
                  {{ formatTime(item.createdAt) }}
                </span>
                <a class="ml-2 align-middle">
                  <b-icon-person></b-icon-person>
                  {{ item.createdBy}}
                </a>
                <a class="ml-2 align-middle">
                  <b-icon-eye></b-icon-eye>
                  {{ item.reads || 0 }}
                </a>
                <span class="ml-2 align-middle">
                  <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
                  {{ item.favorites.length || 0 }}
                </span>
              </span>
            </router-link>
          </p>
        </li>
      </ul>
    </div>
    <pagination :currentPage="currentPage" :pages="pages" :getList="getList"></pagination>
  </div>
</template>
<script>
import Axios from 'axios'
import pagination from '../tools/pagination'
import moment from 'moment'
// import $ from 'jquery'
export default {
  components: {
    pagination
  },
  data: function () {
    return {
      list: [],
      currentPage: 1,
      pages: 1
    }
  },
  created: function () {
    this.getList(1)
  },
  mounted: function () {
    // this.getList()
  },
  methods: {
    getList (page) {
      if (page) this.currentPage = page || 1
      let { keyword, type } = this.$data
      let queryString = `page=${page}`
      if (keyword) queryString += `&keyword=${keyword}`
      if (type) queryString += `&type=${keyword}`
      Axios.get(`/myapi/articles/list?${queryString}`).then((res) => {
        if (res.data.code !== '000') {
          return alert('获取结果失败')
        }
        this.$data.list = res.data.result.docs
        this.pages = res.data.result.pages
      })
    },
    formatTime (time) {
      if (time) {
        return moment(time * 1000).format('YYYY-MM-DD')
      } else {
        return moment().format('YYYY-MM-DD')
      }
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
  svg {
    margin-bottom: 1.5px;
  }
  .favorite-icon:hover {
    color: red;
    cursor: pointer;
  }
</style>
