<template>
  <main class="my-1 shadow-sm border">
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
          <el-select v-model="searchInfo.tags" placeholder="请选择标签">
            <el-option v-for="item in tags" :key="item.id" :value="item._id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类选择:">
          <el-cascader
            v-model="searchInfo.type"
            :options="types"
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
        <el-button type="primary" @click="dialogFormVisible=true">新 增</el-button>
        <el-dialog title="分类管理" :visible.sync="dialogFormVisible" class="dataForm-container">
          <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="80px">
            <el-form-item label="名称：" prop="title" >
              <el-input v-model="dataForm.title" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="分类：">
              <el-cascader
                :options="types"
                v-model="dataForm.parent"
                :props="{ checkStrictly: true }"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label="标识码：" prop="typeCode">
              <el-input v-model="dataForm.typeCode" placeholder="请输入标识码"></el-input>
            </el-form-item>
            <el-form-item label="标签：" >
              <el-select v-model="dataForm.tags" placeholder="请选择标签" multiple>
                <el-option
                  v-for="item in tags"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="描述：" >
              <el-input type="textarea" v-model="dataForm.description" placeholder="请添加描述"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('dataForm')">Create</el-button>
              <el-button @click="resetForm('dataForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
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
            <td>
              <el-tag v-for="tag in item.tags" :key="tag._id">
                {{tag.name}}
              </el-tag>
            </td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <el-button type="success" plain >详情</el-button>
                <el-button type="primary" plain >编辑</el-button>
                <el-button type="danger" plain >删除</el-button>
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
import '@fortawesome/fontawesome-free/css/all.css'
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
      total: 0,
      dialogFormVisible: false,
      types: [],
      tags: [],
      searchInfo: {
        startDate: new Date(),
        endDate: new Date(),
        tags: [],
        published: '',
        keyword: ''
      },
      dataForm: {
        title: '',
        parent: [],
        description: '',
        typeCode: '',
        tags: []
      },
      rules: {
        title: [
          {required: true, message: '请输入分类名称', trigger: 'blur'},
          {min: 3, max: 30, message: '长度3 到 30个字符', trigger: 'blur'}
        ],
        typeCode: [
          {required: true, type: 'string', message: '请输入标识码', trigger: 'blur'},
          {length: 4, message: '长度限定为4', trigger: 'blur'}
        ]
      }
    }
  },
  created: function () {
    this.getList()
    this.getTags()
    this.getTypes()
  },
  methods: {
    getList (n = 1) {
      let queryString = `page=${n}&limit=10`
      Axios.get(`/myapi/articles/types/list?${queryString}`).then((res) => {
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
    submitForm (formName) {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const id = this.typeId
          const Authorization = `Bearer ${localStorage.getItem('token')}`
          let { parent, title, description, tags, typeCode } = this.dataForm
          let typeParent
          if (parent && parent.length > 0) {
            [ typeCode, typeParent ] = parent[0] && parent[0].split('_')
          }
          const request = {
            isTop: 1,
            parent: typeParent,
            title,
            typeCode,
            description,
            tags
          }
          if (request.parent) {
            request.isTop = 0
          }
          if (!id) {
            Axios.post('/api/articles/types', request, { headers: { Authorization } }).then(res => {
              if (res.data.code === '000') {
                this.dialogFormVisible = false
                this.$message({
                  showClose: true,
                  message: '编辑成功'
                })
                localStorage.removeItem('types')
                this.getTypes()
              } else {
                this.$message.error('创建分类出现错误', res.data.message)
              }
            }).catch(err => {
              this.$message.error('创建分类出现错误', err.message)
            })
          } else {
            Axios.put(`/api/articles/types/${id}`, request, { headers: { Authorization } }).then(res => {
              if (res.data.code === '000') {
                this.dialogFormVisible = false
                this.$message({
                  showClose: true,
                  message: '编辑成功'
                })
              } else {
                this.$message.error('创建分类出现错误', res.data.message)
              }
            }).catch(err => {
              this.$message.error('创建分类出现错误', err.message)
            })
          }
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].restFields()
    },
    getTypes () {
      let types = localStorage.getItem('types')
      if (types) {
        this.types = JSON.parse(types)
        return
      }
      Axios.get('/myapi/articles/types/all').then(res => {
        this.types = res.data.result
        localStorage.setItem('types', JSON.stringify(this.types))
      })
    },
    getTags () {
      let tags = localStorage.getItem('tags')
      if (tags) {
        this.tags = JSON.parse(tags)
        return
      }
      Axios.get('/myapi/tags', (res) => {
        this.tags = res.data.list
        localStorage.setItem('tags', JSON.stringify(this.tags))
      })
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

.dataForm-container .el-form-item {
  margin-bottom: 20px
}

.el-cascader {
  width: 100%;
}

.el-select {
  width: 100%;
}
.el-tag {
  margin-left:5px;
}
</style>
