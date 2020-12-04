<template>
  <div class="editor-container container col-md-9  p-1 bg-white" id="main-content">
    <div class="header-container">
      <el-form :inline="true" class="header-form">
        <el-form-item label="分类: ">
          <el-cascader
          v-model="articleObj.type"
          :options="types"
          :props="{ checkStrictly: true }"
          clearable></el-cascader>
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
          <el-switch v-model="articleObj.isPublic"></el-switch>
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
      <div class="col-md-11 col-lg-11 col-sm-11">
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
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <el-button type="success" plain @click="refferStatusChange(item)">编辑</el-button>
            <el-button type="danger" plain>删除</el-button>
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
            <el-button type="success" plain @click="refferChange(index, item.title, item.link)">确 定</el-button>
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
        isPublic: true,
        type: []
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
    this.getTags()
    this.getTypes()
    this.getAticle()
  },
  props: ['articleId'],
  methods: {
    async save (published) {
      const contentHtml = $('.v-note-read-content').html()
      const articleId = this.articleId
      const {content, category, title, subTitle, tags, refers, isMarkdown, isPublic, type = []} = this.articleObj
      let data = Object.assign({published, content_html: contentHtml})
      let [ typeCode, typeId ] = (type[type.length - 1] && type[type.length - 1].split('_')) || [undefined, undefined]
      console.log(typeId, typeCode, '类型相关的的字段')
      data = Object.assign(data, {
        content, category, title, subTitle, tags, refers, isMarkdown: Number(isMarkdown), isPublic: Number(isPublic), type: typeId, typeCode
      })
      if (articleId && articleId !== 'new') {
        data.articleId = articleId
        try {
          await this.$putAjax(`/api/articles/${articleId}`, data, true)
          this.$message.success('发表成功')
          this.$router.go(-1)
        } catch (err) {
          this.$message.error(err.message)
        }
      } else {
        try {
          await this.$postAjax(`/api/articles`, data, true)
          this.$message.success('发表成功')
          this.$router.go(-1)
        } catch (err) {
          this.$message.error(err.message)
        }
      }
    },
    async saveMavon (value, render) {
      // const Authorization = `Bearer ${localStorage.getItem('token')}`
      const data = Object.assign({published: false, content_html: render, content: value}, this.articleObj)
      this.$postAjax('/api/articles', data, true)
      this.$message.succss('保存成功！')
    },
    async getAticle () {
      const id = this.articleId
      if (id !== 'new') {
        const result = await this.$getAjax(`/api/articles/${id}`)
        const { content, title, isMarkdown, isPublic, subTitle, abstract, tags, refers, _id, type, typeCode } = result
        this.articleObj = { title, content, isPublic, subTitle, abstract, tags, refers, type, typeCode }
        this.articleObj.articleId = _id
        this.articleObj.isPublic = !!isPublic
        this.articleObj.isMarkdown = !!isMarkdown
        if (typeCode) {
          this.getParentTypes(typeCode)
        }
      }
    },
    getParentTypes (typeCode) {
      axios.get(`/myapi/articles/types/parent?typeCode=${typeCode}`).then(res => {
        this.articleObj.type = res.data.result
      })
    },
    async getTags () {
      let tags = JSON.parse(localStorage.getItem('tags')) || []
      if (!tags || tags.length === 0) {
        const result = await this.$getAjax('/myapi/tags')
        result.forEach(item => {
          tags.push({name: item.name, value: item._id})
        })
        localStorage.setItem('tags', JSON.stringify(result))
      }
      this.tags = tags
    },
    getTypes () {
      this.types = JSON.parse(localStorage.getItem('types'))
      if (!this.types || this.types.length === 0) {
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
      item.status = !item.status
    },
    refferChange (index, title, link) {
      if (this.articleObj.refers[index]._id) {
        this.articleObj.refers[index].title = title
        this.articleObj.refers[index].link = link
      } else {
        this.articleObj.refers.push({ title, link })
      }
    },
    async imgAdd (pos, file) {
      const formData = new FormData()
      formData.append('img', file)
      const result = await this.$postAjax('/upload/upload/file', formData)
      this.$refs.md.$img2Url(pos, result)
    }
  }
}
</script>
<style scoped>
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
  color: green;
  width: 3rem;
  height: 3rem;
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
  height:calc(100vh - 250px)!important;
  border: 1px solid #b6d3f0!important;
}
.ql-toolbar {
  border: 1px solid #b6d3f0!important;
}
.v-note-wrapper {
  box-shadow: none!important;
  border: 1px solid #b6d3f0!important;
}
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
