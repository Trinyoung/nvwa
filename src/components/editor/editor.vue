<template>
  <div class="editor-container container col-md-9 my-1 p-3 bg-white" id="main-content">
    <div class="header-container">
      <el-form :inline="true" class="header-form">
        <el-form-item label="分类: ">
          <el-cascader
          v-model="articleObj.type"
          :options="types"></el-cascader>
        </el-form-item>
        <el-form-item label="标签: ">
          <el-select v-model="articleObj.tags"  placeholder="请选择" multiple >
            <el-option
              v-for="item in tags"
              :key="item._id"
              :label="item.name"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否公开: ">
          <el-switch v-model="articleObj.public"></el-switch>
        </el-form-item>
        <el-form-item label="Markdown: ">
          <el-switch v-model="articleObj.isMarkdown"></el-switch>
        </el-form-item>
      </el-form>
    </div>
    <div class="row my-2">
      <div class="col-md-10 col-lg-10 col-sm-10 titileInput">
        <div class="input-group flex-nowrap">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">标 题</span>
          </div>
          <input type="text" class="form-control"
            placeholder="请输入标题" v-model="articleObj.title" aria-label="title" aria-describedby="addon-wrapping">
          <div class="input-group-append">
            <button class="btn btn-secondary">
              添加副标题
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-lg-2 col-sm-2">
        <button class="btn btn-primary publish-button" @click="save(1)">
          发布
        </button>
      </div>
    </div>
    <div class="row row-container">
      <div class="col-md-11 col-lg-11 col-sm-11 content-container">
        <v-markdownEditor v-if="articleObj.isMarkdown" class='mavonEditor'
        v-model="articleObj.content" @save="save(0)"
        ref="md"
        @imgAdd="imgAdd"></v-markdownEditor>
        <v-editor v-if="!articleObj.isMarkdown" class="quillEditor border-0" v-model="articleObj.content"></v-editor>
      </div>
      <div class="col-md-1 right-side col-sm-0">
        <div class="sidebar">
          <div class="my-3 sidebar-item">
            <b-icon-archive class="size-2" @click="save(0)"></b-icon-archive>
            保存
          </div>
          <div class="my-3 sidebar-item">
            <b-icon-trash class="size-2"></b-icon-trash>
            删除
          </div>
          <div class="my-3 sidebar-item">
            <b-icon-box-arrow-up-right class="size-2"></b-icon-box-arrow-up-right>
            分享
          </div>
          <div class="my-3 sidebar-item">
            <b-icon-star class="size-2"></b-icon-star>
            收藏
          </div>
          <div class="my-3 sidebar-item">
            <b-icon-reply class="size-2" @click="$router.go(-1)"></b-icon-reply>
            返回
          </div>
        </div>
      </div>
    </div>
    <form class="form row text-sm-left text-md-center other-set my-2">
      <div class="col-sm-12 col-md-10 col-lg-10 my-2 d-flex">
      </div>
      <div class="col-md-2">
        <div class="form-check-inline">
          <el-button type="success" @click="dialogFormVisible = true">添加引用</el-button>
        </div>
      </div>
    </form>
    <el-dialog title="文献引用" :visible.sync="dialogFormVisible">
      <el-form :model="refferEdit">
        <el-form-item label="文献名称" :label-width="formLabelWidth">
          <el-input v-model="refferEdit.refferValue" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文献链接" :label-width="formLabelWidth">
          <el-input v-model="refferEdit.refferLink"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addReffer()">Confirm</el-button>
      </span>
    </el-dialog>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in articleObj.refers" :key="item.title">
        <div v-if="!item.status" class="row">
          <div class="col">
            <a :href="item.link">{{index + 1}} .</a>
            <a :href= item.link class="d-inline-block">{{item.title}}</a>
          </div>
          <div>
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary" @click="refferStatusChange(item)">编辑</button>
              <button type="button" class="btn btn-secondary">删除</button>
            </div>
          </div>
        </div>
        <form v-if ="item.status" class="row">
          <div class="col-1">{{index + 1}} .</div>
          <div class="col">
            <input type="text" class="form-control d-inline-block" placeholder="请输入文献名称" v-model="item.title">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="请输入文献链接" v-model="item.link">
          </div>
          <div class="col-2">
            <button class="btn btn-primary" @click="refferChange(index, item.title, item.link)">确定</button>
          </div>
        </form>
      </li>
    </ul>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import { mavonEditor } from 'mavon-editor'
import axios from 'axios'
import $ from 'jquery'
export default {
  components: {
    'v-markdownEditor': mavonEditor,
    'v-editor': quillEditor
  },
  data: function () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '100px',
      articleObj: {
        content: '',
        category: '1',
        title: '',
        subTitle: '',
        render: '',
        tags: [],
        refers: [],
        isMarkdown: true,
        public: true,
        type: undefined
      },
      refferEdit: {
        refferValue: '',
        refferLink: ''
      },
      tags: [],
      types: []
    }
  },
  created: function () {
    this.getAticle()
    this.getTags()
    this.getTypes()
  },
  props: ['articleId'],
  methods: {
    submit: function () {
      console.log('submit')
    },
    save: function (published) {
      const contentHtml = $('.v-note-read-content').html()
      const articleId = this.articleId
      const data = Object.assign({published: false, content_html: contentHtml}, this.articleObj)
      const Authorization = `Bearer ${localStorage.getItem('token')}`
      if (articleId && articleId !== 'new') {
        data.articleId = articleId
        axios.put(`/api/articles/${articleId}`, data, { headers: {Authorization} }).then(res => {
          if (res.status === 200 && res.data.code === '000' && res.data.result._id) {
            this.$router.push(`/console/editor/${res.data.result._id}`)
          }
          if (res.data.code === '401') {
            this.$router.push(`/login`)
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err.msg
          })
        })
      } else {
        axios.post('/api/articles', data, { headers: { Authorization } }).then(res => {
          if (res.status === 200 && res.data.code === '000' && res.data.result._id) {
            this.$router.push(`/console/editor/${res.data.result._id}`)
          }
          if (res.data.code === '401') {
            this.$router.push('/login')
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err.msg
          })
        })
      }
    },
    saveMavon: function (value, render) {
      const Authorization = `Bearer ${localStorage.getItem('token')}`
      const data = Object.assign({published: false, content_html: render, content: value}, this.articleObj)
      axios.post('/api/articles', data, {headers: {Authorization}}).then(res => {
        if (res.status === 200 && res.data.code === '000' && res.data.result._id) {
          this.$router.push(`/console/editor/${res.data.result._id}`)
        }
        if (res.data.code === '401') {
          this.$router.push('/login')
        }
      })
    },
    getAticle () {
      const id = this.articleId
      if (id !== 'new') {
        axios.get(`/api/articles/${id}?console=1`).then((result) => {
          const { content, title, isMarkdown, isPublic, subTitle, abstract, tags, refers, _id } = result.data.data
          this.articleObj = { title, content, isPublic, subTitle, abstract, tags, refers }
          this.articleObj.articleId = _id
          this.isPublic = !!isPublic
          this.articleObj.isMarkdown = !!isMarkdown
          this.articleObj.tags = tags
        })
      }
    },
    getTags () {
      let tags = JSON.parse(localStorage.getItem('tags'))
      if (!tags || tags.length === 0) {
        axios.get('/myapi/tags').then(res => {
          const result = res.data.data
          result.forEach(item => {
            tags.push({name: item.name, value: item._id})
          })
        })
      }
      this.tags = tags
    },
    getTypes () {
      let types = JSON.parse(localStorage.getItem('types'))
      if (!types || types.length === 0) {
        axios.get('/myapi/articles/types/all').then(res => {
          this.types = res.data.result
          localStorage.setItem('types', JSON.stringify(this.types))
        })
      }
    },
    addReffer () {
      if (!this.refferEdit.refferValue) {
        return alert('请填写文献名称')
      }
      const obj = {
        title: this.refferEdit.refferValue,
        link: this.refferEdit.refferLink,
        status: false
      }
      this.articleObj.refers.push(obj)
      this.refferEdit.refferValue = ''
      this.refferEdit.refferLink = ''
      this.dialogFormVisible = false
    },
    refferStatusChange (item) {
      return (() => {
        console.log(this.articleObj.refers)
        item.status = !item.status
      })()
    },
    refferChange (index, title, link) {
      if (this.articleObj.refers[index]._id) {
        this.articleObj.refers[index].title = title
        this.articleObj.refers[index].link = link
      } else {
        this.articleObj.refers.push({ title, link })
      }
    },
    imgAdd (pos, file) {
      const formData = new FormData()
      formData.append('img', file)
      axios.post('/upload/upload/file', formData).then(res => {
        console.log(res, '------res----<>------>')
        // const
        // if () {}
        this.$refs.md.$img2Url(pos, res.data.path)
      })
    }
  }
}
</script>
<style scoped>
.height-100 {
  height: 100%;
}
.row {
  margin-right: 0;
}
#tags-picker {
  width: auto;
}
#main-content {
  min-height: calc(100vh - 48px);
}
.size-2 {
  width: 2em;
  height: 2em;
}

.other-set {
  background: #e9ecef;
  margin-left: 0;
}

.form-check-inline {
  height: 100%;
}
.v-note-wrapper {
  z-index: inherit;
}

.mavonEditor {
  height:calc(100vh - 200px);
  /* height: inherit; */
}

.titleInput {
  height: inherit!important;
}
.add-button {
  border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;
  height: 100%;
  width: 100%;
}

.right-side {
  border-radius: 1rem;
  background: #e9ecef;
}
.header-container {
  background: #e9ecef;
}
.sidebar-item {
  /* background: wheat; */
  color: green;
  width: 3rem;
  height: 3rem;
  /* border-radius: 50% 50% 50% 50%; */
  margin: 0 auto;
}
.sidebar-item :hover{
  cursor: pointer;
  color: red;
}

#dropdownMenu2 {
  left: 1.4rem!important;
  top: 0.5rem!important;
}

#dropdownMenu2 :hover{
  cursor: pointer;
}

.reffer-container {
  background: cadetblue;
}

.bi {
  margin-top: 0.5rem;
}
.input-group-text {
  font-weight: bold;
}
#add-button {
  font-weight: bold;
  width: 80%;
}
.publish-button {
  width: 100%;
}
.picker-container {
  margin-bottom: 0;
  flex:1;
}
.d-flex {
  flex:1;
  margin-bottom: 0;
}
.list-item {
  position: relative;
  display: block;
  padding: 0.2rem 1.25rem;
  text-align: left;
}

.list-group-item {
  border: none;
  text-align: left;
  padding: 0.4rem 0.75rem;
  background: none;
}
.breadcrumb {
  margin-bottom: 0;
}
.modal-content {
  text-align: left;
}
.color-green {
  color: green
}
</style>
<style>
.ql-container {
  height:calc(100vh - 250px);
  border: 1px solid #b6d3f0!important;
}
.ql-toolbar {
  border: 1px solid #b6d3f0!important;
}
.v-note-wrapper {
  box-shadow: none!important;
  border: 1px solid #b6d3f0!important;
}
</style>
<style>
  .header-container {
    text-align: left;
    padding:3px 15px;
    border-radius: 5px;
  }
  .header-container .el-form-item {
    margin-bottom: 0;
    margin-top: 8px;
    margin-right: 20px;
  }
  .header-container .el-form-item__label {
    font-weight: bold;
  }

</style>
