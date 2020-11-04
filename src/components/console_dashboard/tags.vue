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
        <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
        <button class="ml-2 btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
      </div>
    </form>
    <div class="my-0 p-3 shadow-sm" id="main-content">
      <div class="btn-toolbar my-1 pb-1" role="toolbar" aria-label="Toolbar with button groups">
        <el-button type="primary" @click="openDialog">新增</el-button>
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
                <el-button @click="openDialog(index)" type="primary" plain>编辑</el-button>
                <el-button type="danger" plain>删除</el-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :getList="getList" :currentPage="currentPage" :pages ="pages"></pagination>
    </div>
    <el-dialog title="标签设置" :visible.sync="dialogFormVisible">
      <el-form :model="condition">
        <el-form-item label="名称:" label-width="50px">
          <el-input v-model="condition.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save">确认</el-button>
      </span>
    </el-dialog>
  </main>
</template>
<script>
import datePicker from 'vue-bootstrap-datetimepicker'
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
      dialogFormVisible: false,
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
  created () {
    this.getList()
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
      const url = id ? 'api/tags' : `/api/tags/${id}`
      Axios.post(url, condition, { headers: {Authorization} }).then(res => {
        this.$message.success('添加成功！')
        if (res.data && res.data.code === '000') {
          if (!id && this.dataList.length < 10) {
            res.data.result.createdAt = moment(res.data.result.createdAt).format('YYYY-MM-DD HH:mm:ss')
            this.dataList.push(res.data.result)
          } else {
            this.getList()
          }
        } else {
          this.$message.error(res.data.message)
        }
        localStorage.removeItem('tags')
      }).catch(err => {
        this.$message.error(err)
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
    },
    openDialog (index) {
      this.dialogFormVisible = true
      this.condition = Object.assign({}, this.dataList[index])
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
table .el-button {
  height: 25px;
  padding: 5px 12px;
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
