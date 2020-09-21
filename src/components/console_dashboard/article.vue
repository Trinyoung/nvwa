<template>
  <main class="my-1 shadow-lg bg-white ">
    <nav aria-label="breadcrumb" class="title-nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          文档管理
        </li>
        <li class="breadcrumb-item active" aria-current="page">文章</li>
      </ol>
    </nav>
    <form class="pb-2 pr-3 pl-3 pt-0 form-container border-bottom">
      <div class="form-row my-2">
        <div class="col form-inline">
          <strong> 开始日期：</strong>
          <date-picker v-model="searchInfo.startDate" :config="options" @dp-hide="showDatePickResult"></date-picker>
        </div>
        <div class="col form-inline">
          <strong> 截止日期：</strong>
          <date-picker v-model="searchInfo.startDate" :config="options" @dp-hide="showDatePickResult"></date-picker>
        </div>
      </div>
      <div class="form-row my-2">
        <div class="col form-inline">
          <label for="type-select"><strong>分类选择：</strong> </label>
          <select name="" id="type-select" class="selectpicker border border-gray rounded" multiple data-live-search="true" title="一级分类">
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
          </select>
          <select name="" id="type-select" class="selectpicker border border-gray rounded" multiple data-live-search="true" title="二级分类">
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
          </select>
        </div>
        <div class="col form-inline">
          <strong>发布状态：</strong>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value =0 v-model="searchInfo.published">
            <label class="form-check-label" for="inlineCheckbox1">已发布</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value =1 v-model="searchInfo.published">
            <label class="form-check-label" for="inlineCheckbox2">未发布</label>
          </div>
        </div>
      </div>
      <div class="form-row my-2">
        <div class="col form-inline">
          <label for=""><strong>标签选择：</strong> </label>
          <select name="" id="" class="selectpicker border border-gray rounded" multiple data-live-search="true" title="选择标签">
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
          </select>
        </div>
        <div class="col align-left">
          <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        </div>
      </div>
    </form>
    <div class="my-0 p-3 shadow-sm" id="main-content">
      <div class="btn-toolbar my-1 pb-1" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <div class="dropdown">
            <div class="d-inline-block select-handle">
              <input type="checkbox">
              <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">             </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-secondary">删除</button>
        </div>
        <div class="btn-group" role="group" aria-label="Third group">
          <button type="button" class="btn btn-secondary">新增</button>
        </div>
      </div>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">标题</th>
            <th scope="col">分类</th>
            <th scope="col">作者</th>
            <th scope="col">发布时间</th>
            <th scope="col">标签</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <th scope="row">{{index + 1}}</th>
            <td>{{item.title}}</td>
            <td>{{item.type}}</td>
            <td>{{item.createdBy}}</td>
            <td>{{item.createdAt}}</td>
            <td>{{item.tags}}</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">详情</button>
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :pages = pages :getList = getList :currentPage = currentPage></pagination>
    </div>
  </main>
</template>
<script>
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import Axios from 'axios'
import pagination from '../tools/pagination'
export default {
  components: {
    datePicker,
    pagination
  },
  data: function () {
    return {
      list: [],
      pages: 1,
      currentPage: 1,
      searchInfo: {
        startDate: new Date(),
        endDate: new Date(),
        tags: [],
        published: '',
        keyword: ''
      },
      options: {
        format: 'YYYY-MM-DD HH:mm:ss',
        useCurrent: false,
        locale: 'zh-cn'
      }
    }
  },
  created: function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
      $.extend(true, $.fn.datetimepicker.defaults, {
        icons: {
          time: 'far fa-clock',
          date: 'far fa-calendar',
          p: 'fas fa-arrow-up',
          down: 'fas fa-arrow-down',
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fas fa-calendar-check',
          clear: 'far fa-trash-alt',
          close: 'far fa-times-circle'
        }
      })
      $('.selectpicker').selectpicker()
    })
  },
  mounted () {
    this.getList()
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    },
    showDatePickResult: function () {
      console.log(this.searchInfo.date)
    },
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
        this.$data.pages = res.data.result.pages
        this.$data.list.forEach((item) => {
          console.log(item)
        })
      })
    }
  }
}
</script>
<style scoped>
.select-handle {
  background: cadetblue;
  line-height: 100%;
  height: 100%;
  width: 50px;
}
.title {
  text-align: left;
}
.title-nav .breadcrumb-item {
  font-weight: bold;
  font-size: 1.5rem;
}

.type-level {
  width: 85%;
}

.form-container {
  padding: 5px;
}
.media-body {
  text-align: left;
}
.col-title {
  text-align: left;
}
.align-left {
  text-align: left;
}
.form-check-label {
  font-size: 0.8rem;
}
.item-title {
  color: white;
  font-size: 1.1rem;
}
/* #search-input {
  display: inline-block;
} */

#basic-addon2 {
  width: 4rem;
}
#page-list {
  margin-top: 0.5rem;
}
.pagination {
  margin: 0 auto;
}
.list-group-item {
  border: none;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.pagination {
  width: 300px;
}

.d-table {
  display: table;
}
.d-table-cell {
  display: table-cell;
  vertical-align: middle;
}
.d-vertical-center {
  vertical-align: middle;
}
.d-align-right {
  text-align: right;
}
.d-inline-block {
  display: inline-block !important;
}
.search-input {
  display: inline-block;
  width: auto;
}

.table td, th {
  vertical-align: middle;
  padding: 0.25rem;
}

.table th {
  padding: 0.75rem;
}
.table .btn {
  height: 2.4rem;
}
.table .handle-cell {
  width: 200px;
}
</style>
