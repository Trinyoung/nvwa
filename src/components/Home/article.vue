<template>
  <div class="bg-white list-container shadow-sm p-3 rounded">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">音乐</a>
        </li>
        <li class="breadcrumb-item"><a href="#">流行音乐</a></li>
        <li class="breadcrumb-item active" aria-current="page">大中国</li>
      </ol>
    </nav>
    <div class="article-list">
      <ul>
        <li class="media pt-2" v-for="item in list" :key="item._id">
          <p class="media-body pb-2 mb-0 lh-125 border-bottom border-gray pl-1">
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
                {{ item.createdAt }}
              </span>
              <a class="ml-2 align-middle">
                <b-icon-person></b-icon-person>
                {{ item.createdBy }}
              </a>
              <a class="ml-2 align-middle">
                <b-icon-eye></b-icon-eye>
                {{ item.reads || 0 }}
              </a>
              <span class="ml-2 align-middle">
                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
                {{ item.favorites || 0 }}
              </span>
            </span>
          </p>
        </li>
      </ul>
    </div>
    <nav aria-label="Page navigation example" id="page-list" class="my-2">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo;</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">6</a></li>
        <li class="page-item"><a class="page-link" href="#">7</a></li>
        <li class="page-item"><a class="page-link" href="#">8</a></li>
        <li class="page-item"><a class="page-link" href="#">...</a></li>
        <li class="page-item"><a class="page-link" href="#">10</a></li>
        <li class="page-item">
          <a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a>
        </li>
      </ul>
      <span>共10页</span>
    </nav>
  </div>
</template>
<script>
import Axios from 'axios'
// import $ from 'jquery'
export default {
  data: function () {
    return {
      list: []
    }
  },
  created: function () {
    // this.getList()
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList () {
      const { page = 1, keyword, type } = this.$data
      console.log(page, keyword, type, ' ---------->')
      let queryString = `page=${page}`
      if (keyword) queryString += `&keyword=${keyword}`
      if (type) queryString += `&type=${keyword}`
      Axios.get(`/api/articles?${queryString}`).then((res) => {
        console.log(res, 'res----------------->')
        if (res.data.code !== '000') {
          return alert('获取结果失败')
        }
        this.$data.list = res.data.result.docs
        this.$data.list.forEach(item => {
          console.log(item)
        })
      })
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
