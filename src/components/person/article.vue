<template>
  <div class="bg-white list-container shadow-sm p-3 rounded">
    <div class="article-list">
      <nav aria-label="breadcrumb" class="breadcrumb-container rounded">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <!-- <router-link :to="`/person/${$route.params.uid}/articles`">全部</router-link> -->
            <span @click="getList()" class="type-item">全部</span>
          </li>
          <li class="breadcrumb-item" v-for="type in types" :key="type._id">
            <span @click="getList(type._id, 1)" class="type-item">{{type.title}}</span>
            <!-- <router-link :to="`/person/${$route.params.uid}/articles?type=${type._id}`">{{type.title}}</router-link> -->
          </li>
        </ol>
      </nav>
      <ul v-loading="loading" class="list-group list-group-flush">
        <li class="list-group-item list-group-item-action" v-for="item in list" :key="item._id" :to="{path:`/articles/${item._id}`}">
          <p class="mb-0 text-left">
            <router-link :to="{path:`/person/${uid}/articles/${item._id}`}">
              <strong class="d-block text-gray-dark">
                <div class="d-inline-block new-icon" v-if="item.isNew">新</div>
                <div class="d-inline-block hot-icon" v-if="item.isHot">热</div>
                {{ item.title }}
              </strong>
              <span class="d-block text-muted" >
                {{ item.content && item.content.substr(0, 150) }}……
              </span>
              <span class="d-block small text-muted mt-1">
                <span class="align-middle">
                  <b-icon-calendar2-check class="mb-1"></b-icon-calendar2-check>
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
                  <b-icon-hand-thumbs-up class="mb-1"></b-icon-hand-thumbs-up>
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
  created () {
    this.getList()
    if (this.$route.query.type) {
      this.getParentTypes(this.$route.query.type)
    }
  },
  methods: {
    async getList (type, page) {
      this.loading = true
      if (page) this.currentPage = page || 1
      let queryString = `page=${this.currentPage}&createdBy=${this.uid}`
      if (type) queryString += `&type=${type}`
      const result = await this.$getAjax(`/myapi/articles/list?${queryString}`)
      this.loading = false
      this.list = result.docs
      this.pages = result.pages
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
        console.log(this.result, '-----------types------->')
        this.types = result
      } catch (err) {
        this.$message.error(err.message)
      }
    }
  }
}
</script>
<style scoped>
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
    /* min-height: 100%; */
    border: 1px solid aliceblue;
  }
  svg {
    margin-bottom: 1.5px;
  }
  .favorite-icon:hover {
    color: red;
    cursor: pointer;
  }
  .list-group-item {
    padding-left: 0;
    padding-bottom: 0.3rem;
  }
  .type-item {
    color: rgb(62, 141, 245);
  }
  .type-item:hover {
    cursor: pointer;
  }
</style>
