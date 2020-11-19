<!--
 * @Author: your name
 * @Date: 2020-11-19 15:06:21
 * @LastEditTime: 2020-11-19 18:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\homepage\main.vue
-->
<template>
  <main role="main" class="container">
    <div class="border justify-content-center d-flex align-items-center p-3 my-2 rounded shadow-sm">
     <div class="article-list">
      <!-- <nav aria-label="breadcrumb" class="breadcrumb-container rounded">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" v-for="type in types" :key="type._id">
            <router-link :to="`/home/${$route.params.uid}/articles?type=${type._id}`">{{type.title}}</router-link>
          </li>
        </ol>
      </nav> -->
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
                  {{ item.createdBy }}
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
    <!-- <pagination :currentPage="currentPage" :pages="pages" :getList="getList"></pagination> -->
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.list = await this.$getAjax('/myapi/articles/list')
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
</style>
