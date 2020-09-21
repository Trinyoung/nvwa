<template>
  <main class="my-1 shadow-lg bg-white">
    <nav aria-label="breadcrumb" class="title-nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          分类管理
        </li>
      </ol>
    </nav>
    <form class="pb-2 pr-3 pl-3 pt-0 form-container border-bottom">
      <div class="form-row my-2">
        <div class="col form-inline">
          <strong> 起止日期：</strong>
          <date-picker v-model="searchInfo.startDate" :config="options" @dp-hide="showDatePickResult"></date-picker>
          <span id="split-icon" class="justify-center">至</span>
          <date-picker v-model="searchInfo.endDate" :config="options"></date-picker>
        </div>
        <div class="col-5 form-inline">
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
            <option value="">Vue</option>
            <option value="">React</option>
            <option value="">nodejs</option>
          </select>
        </div>
        <div class="col-5 align-left">
          <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        </div>
      </div>
    </form>
    <div class="my-0 p-3 shadow-sm" id="main-content">
      <div class="breadcrumb">
        <button class="btn btn-primary" data-toggle="modal" data-target="#edit-type">新增</button>
        <div class="modal fade" tabindex="-1" role="dialog" id="edit-type" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <typeEdit/>
          </div>
        </div>
      </div>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">标题</th>
            <th scope="col">分类</th>
            <th scope="col">创建时间</th>
            <th scope="col">标签</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <th scope="row">{{index + 1}}</th>
            <td>{{item.title}}</td>
            <td>{{item.types}}</td>
            <td>{{item.createdAt}}</td>
            <td>{{item.tags}}</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :pages="pages" :currentPage="currentPage" :getList="getList"></pagination>
    </div>
  </main>
</template>
<script>
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import typeEdit from './type_edit'
import Axios from 'axios'
import pagination from '../tools/pagination'
export default {
  components: {
    datePicker,
    typeEdit,
    pagination
  },
  data: function () {
    return {
      list: [],
      pages: 1,
      currentPage: 1,
      total: 0,
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
  methods: {
    getList () {
      Axios.get('/api/types').then((res) => {
        const { docs, pages, total, page } = res.result.data
        this.list = docs
        this.pages = pages
        this.page = page
        this.total = total
      })
    },
    showDatePickResult: function () {
      console.log(this.searchInfo.date)
    }
  }
}
</script>
<style scoped>
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
#split-icon {
  display: inline-block;
  width: 30px;
}
.border-gray {
  border: gray;
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
#search-input {
  display: inline-block;
}

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
