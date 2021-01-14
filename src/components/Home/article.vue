<template>
  <div class="bg-white list-container shadow-sm p-3 rounded">
    <div class="article-list">
      <nav aria-label="breadcrumb" class="breadcrumb-container rounded">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" v-for="type in types" :key="type._id">
            <router-link :to="`/home/${$route.params.uid}/articles?type=${type._id}`">{{type.title}}</router-link>
          </li>
        </ol>
      </nav>
      <ul v-loading="loading">
        <li class="media pt-2" v-for="item in list" :key="item._id" :to="{path:`/articles/${item._id}`}">
          <p class="media-body pb-2 mb-0 lh-125 border-bottom border-gray pl-1">
            <router-link :to="{path:`/home/${uid}/articles/${item._id}`}">
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
    </div>
    <pagination :currentPage="currentPage" :pages="pages" :getList="getList"></pagination>
  </div>
</template>
<script>
import Axios from 'axios'
import pagination from '../tools/pagination'
import moment from 'moment'
export default {
  components: {
    pagination
  },
  data: function () {
    return {
      list: [],
      currentPage: 1,
      pages: 1,
      loading: false,
      uid: this.$route.params.uid,
      types: []
    }
  },
  created: function () {
    this.getList(1)
    if (this.$route.query.type) {
      this.getParentTypes(this.$route.query.type)
    } else {
      this.types = [{title: '全部', _id: ''}]
    }
  },
  methods: {
    getList (page) {
      this.loading = true
      if (page) this.currentPage = page || 1
      let { keyword } = this.$data
      let queryString = `page=${page}&createdBy=${this.uid}`
      if (keyword) queryString += `&keyword=${keyword}`
      if (this.$route.query.type) queryString += `&type=${this.$route.query.type}`
      Axios.get(`/myapi/articles/list?${queryString}`).then((res) => {
        if (res.data.code !== '000') {
          return alert('获取结果失败')
        }
        this.loading = false
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
    },
    async getParentTypes (type) {
      try {
        const result = await this.$getAjax(`/myapi/articles/types/parent?id=${type}&withTitle=1`)
        this.types = result
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
  .list-container {
    min-height: calc(100vh - 132px);
    border: 1px solid aliceblue;
  }
  svg {
    margin-bottom: 1.5px;
  }
  .favorite-icon:hover {
    color: red;
    cursor: pointer;
  }
</style>
