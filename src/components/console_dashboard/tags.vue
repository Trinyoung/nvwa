<template>
  <main class="my-1 shadow-lg bg-white">
    <nav aria-label="breadcrumb" class="title-nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          标签管理
        </li>
      </ol>
    </nav>
    <form class="pb-2 pr-3 pl-3 pt-0 form-container border-bottom">
      <div class="form-row my-2">
        <div class="col form-inline">
        </div>
        <div class="col-5 form-inline align-left">
          <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
          <button class="ml-2 btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        </div>
      </div>
    </form>
    <div class="my-0 p-3 shadow-sm" id="main-content">
      <div class="breadcrumb">
        <button class="btn btn-primary" data-toggle="modal" data-target="#edit-type">新增</button>
        <div class="modal fade" tabindex="-1" role="dialog" id="edit-type" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">标签设置</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group row">
                    <div class="col-sm-8">
                      <input type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="condition.name"
                        placeholder="名称">
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                data-toggle="modal" data-target="#edit-type"
                data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary"
                 @click="save">提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">名称</th>
            <th scope="col">创建时间</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataList" :key="index">
            <th scope="row">{{index + 1}}</th>
            <td>{{item.name}}</td>
            <td>{{item.createdAt}}</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary"
                data-toggle="modal" data-target="#edit-type"
                @click="openDialog(index)">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :getList="getList" :currentPage="currentPage" :pages ="pages"></pagination>
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
import moment from 'moment'
import pagination from '../tools/pagination'
export default {
  components: {
    datePicker,
    typeEdit,
    pagination
  },
  data: function () {
    return {
      searchInfo: {
        keyword: ''
      },
      options: {
        format: 'YYYY-MM-DD HH:mm:ss',
        useCurrent: false,
        locale: 'zh-cn'
      },
      dataList: [],
      condition: {
        name: ''
      },
      total: 0,
      currentPage: 1,
      pages: 1
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
      this.getList()
    })
  },
  mounted () {
    this.getList(1)
  },
  methods: {
    getList (page) {
      let queryString = `page=${page}`
      if (page) {
        this.currentPage = page
      }
      if (this.searchInfo.keyword) {
        queryString += `&keyword=${this.searchInfo.keyword}`
      }
      Axios.get(`/api/tags/list?${queryString}`).then(res => {
        if (res.data && res.data.code === '000') {
          const dataList = res.data.result.docs
          this.total = res.data.result.total
          this.pages = res.data.result.pages
          dataList.forEach(item => { item.createdAt = moment().format('YYYY-MM-DD HH:mm:ss') })
          this.dataList = dataList
        }
      })
    },
    save (id) {
      const condition = this.condition
      const Authorization = `Bearer ${localStorage.getItem('token')}`
      Axios.post('/api/tags', condition, { headers: {Authorization} }).then(res => {
        if (res.data && res.data.code === '000') {
          if (this.dataList.length < 10) {
            res.data.result.createdAt = moment(res.data.result.createdAt).format('YYYY-MM-DD HH:mm:ss')
            this.dataList.push(res.data.result)
          } else {
            this.getList()
          }
        }
      })
    },
    pageAdd () {
      if (this.currentPage < this.pages) {
        this.currentPage++
        this.getList(this.currentPage)
      }
    },
    pageDecline () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.getList(this.currentPage)
      }
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
