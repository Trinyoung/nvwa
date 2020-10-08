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
    <div class="pb-2 pr-3 pl-3 pt-0 form-container border-bottom">
      <el-form :inline="true">
        <el-form-item label="日期范围:">
          <el-date-picker
            v-model="searchInfo.dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="标签选择:">
          <el-select v-model="searchInfo.tags" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类选择:">
          <el-cascader
            v-model="searchInfo.type"
            :options="options"
            :props="{ checkStrictly: true }"
            clearable></el-cascader>
        </el-form-item>
        <el-form-item label="发布状态:">
          <el-switch v-model="searchInfo.published"></el-switch>
        </el-form-item>
        <el-form-item label="关键字：">
          <el-input v-model="searchInfo.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" plain>搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="my-0 p-3 shadow-sm" id="main-content">
      <div class="btn-toolbar my-1 pb-1" role="toolbar" aria-label="Toolbar with button groups">
        <el-button type="primary" to='/console/editor/new'>新 增</el-button>
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
            <td>{{item.tags.join()}}</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <el-button type="success" plain>详情</el-button>
                <el-button type="primary" plain>编辑</el-button>
                <el-button type="danger" plain>删除</el-button>
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
import moment from 'moment'
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
        dateRange: '',
        type: '',
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
    getList (page) {
      let queryString = `page=${page}`
      if (page) {
        this.currentPage = page
      }
      const { keyword, type } = this.$data
      if (keyword) queryString += `&keyword=${keyword}`
      if (type) queryString += `&type=${keyword}`
      Axios.get(`/myapi/articles/list?${queryString}`).then((res) => {
        if (res.data.code !== '000') {
          return alert('获取结果失败')
        }
        this.$data.list = res.data.result.docs
        this.$data.pages = res.data.result.pages
        this.$data.list.forEach((item) => {
          item.createdAt = moment(item.createdAt * 1000).format('YYYY-MM-DD HH:mm:ss')
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
  text-align: left;
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
table .el-button {
  height: 25px;
  padding: 5px 12px;
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
.el-form-item {
  margin-bottom: 0;
}
</style>
