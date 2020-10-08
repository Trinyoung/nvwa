<template>
  <main class="my-1 shadow-lg bg-white">
    <nav aria-label="breadcrumb" class="title-nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          分类管理
        </li>
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
        <el-button type="primary">新 增</el-button>
        <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
            <el-form-item label="名称：" prop="title">
              <el-input v-model="dataForm.title"></el-input>
            </el-form-item>
            <el-form-item label="分类：">
              <el-cascader
                :options="types"
                v-model="dataForm.parent"
                :props="{ checkStrictly: true }"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label="标识码：" v-if="!dataForm.parent" prop="typeCode">
              <el-input v-model="dataForm.typeCode" placeholder="请输入标识码"></el-input>
            </el-form-item>
            <el-form-item label="标签：">
              <el-select v-model="dataForm.tags" placeholder="请选择标签">
                <el-option
                  v-for="item in tags"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="描述：" >
              <el-input type="textarea" v-model="dataForm.description"></el-input>
            </el-form-item>
          </el-form>
        </el-dialog>
        <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#edit-type">新增</button> -->
        <!-- <div class="modal fade" tabindex="-1" role="dialog" id="edit-type" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <typeEdit/>
          </div>
        </div> -->
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
            <td>{{formatTime(item.createdAt)}}</td>
            <td>{{item.tags.join()}}</td>
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
import moment from 'moment'
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
      dialogFormVisible: false,
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
    this.getList()
  },
  methods: {
    getList (n = 1) {
      let queryString = `page=${n}&limit=10`
      Axios.get(`/api/articles/types/list?${queryString}`).then((res) => {
        const { docs, pages, total, page } = res.data.result
        this.list = docs
        this.pages = pages
        this.page = page
        this.total = total
      })
    },
    formatTime (time) {
      return moment(time * 1000).format('YYYY-MM-DD')
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
.el-form-item {
  margin-bottom: 0;
}
</style>
