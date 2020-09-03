<template>
  <div class="editor-container container col-md-9 my-1 p-3 bg-white" id="main-content">
    <nav aria-label="breadcrumb" class="title-nav border-bottom">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          文档管理
        </li>
        <li class="breadcrumb-item active" aria-current="page">文章</li>
      </ol>
    </nav>
    <div class="row my-2">
      <div class="col-md-10 col-lg-10 col-sm-10 titileInput">
        <div class="input-group flex-nowrap">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">标 题</span>
          </div>
          <input type="text" class="form-control" placeholder="请输入标题" v-model="title" aria-label="title" aria-describedby="addon-wrapping">
          <div class="input-group-append">
            <button class="btn btn-secondary">
              添加副标题
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-lg-2 col-sm-2">
        <button class="btn btn-primary publish-button" @click="publish">
          发布
        </button>
      </div>
    </div>
    <div class="row row-container">
      <div class="col-md-11 col-lg-11 col-sm-11 content-container">
        <v-markdownEditor v-if="isMarkdown" class='mavonEditor' v-model="content" @save="saveMavon"></v-markdownEditor>
        <v-editor v-if="!isMarkdown" class="quillEditor border-0" v-model="articleObj.content"></v-editor>
      </div>
      <div class="col-md-1 right-side col-sm-0">
        <div class="sidebar">
          <div class="my-3 sidebar-item" data-toggle="tooltip" data-placement="right" title="保存">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-box-arrow-in-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
              <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
          </div>
          <div class="my-3 sidebar-item" data-toggle="tooltip" data-placement="right" title="删除">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </div>
          <div class="my-3 sidebar-item" data-toggle="tooltip" data-placement="right" title="分享">
            <svg width="1.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-share" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.724 3.947l-7 3.5-.448-.894 7-3.5.448.894zm-.448 9l-7-3.5.448-.894 7 3.5-.448.894z"/>
              <path fill-rule="evenodd" d="M13.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>
          <div class="my-3 sidebar-item" data-toggle="tooltip" data-placement="right" title="收藏">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          </div>
          <div class="my-3 sidebar-item" data-toggle="tooltip" data-placement="right" title="返回">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-reply" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M9.502 5.013a.144.144 0 0 0-.202.134V6.3a.5.5 0 0 1-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 0 1 1.921-.306 7.403 7.403 0 0 1 .798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 0 1 .45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 0 1 .042-.028.147.147 0 0 0 0-.252.494.494 0 0 1-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 0 0-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 0 1-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.667z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <form class="form row text-sm-left text-md-center other-set my-2">
      <div class="col-sm-12 col-md-5 col-lg-6 my-2 d-flex">
        <label for="tags-picker" class="font-weight-bold form-check-inline">标签：</label>
        <div class="form-group picker-container">
          <select name="tags" id="tags-picker" class="selectpicker form-control" title="添加标签" data-live-search="true" multiple>
            <option value="" data-content="<span class='badge badge-success'>angular</span>">angular</option>
            <option value="" data-content="<span class='badge badge-success'>react</span>">react</option>
            <option value="" data-content="<span class='badge badge-success'>vue</span>">vue</option>
            <option value="" data-content="<span class='badge badge-success'>javascript</span>">js</option>
          </select>
        </div>
      </div>
      <div class="col-md-5 col-lg-5 col-sm-12 my-2">
        <label class="form-check-label font-weight-bold" for="inlineCheckbox1">是否公开:</label>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="public">
        </div>
      </div>
    </form>
    <div class="form row text-sm-left other-set">
      <div class="col-sm-12 col-md-12 col-lg-12 my-2 d-flex">
        <label for="reffer-input" class="font-weight-bold form-check-inline">文献：</label>
        <div class="form-group d-flex mb-0 pr-3">
          <input type="text" class="form-control" placeholder="请输入文献标题" id="reffer-input" v-model="refferEdit.refferValue">
        </div>
        <div class="form-group d-flex mb-0 pr-3">
          <input type="text" class="form-control" placeholder="请输入文献链接" v-model="refferEdit.refferLink">
        </div>
        <div class="form-group mb-0">
          <button class="btn btn-primary" @click="addReffer"> 添 加 </button>
        </div>
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in articleObj.reffers" :key="item.value">
        <div v-if="!item.status" class="row">
          <div class="col">
            <a :href="item.link">{{index + 1}} .</a>
            <a :href= item.link class="d-inline-block">{{item.value}}</a>
          </div>
          <div>
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary" @click="refferStatusChange(item)">编辑</button>
              <button type="button" class="btn btn-secondary">删除</button>
            </div>
          </div>
        </div>
        <form v-if ="item.status" class="row">
          <!-- <div class="row reffer-item"> -->
            <div class="col-1">{{index + 1}} .</div>
            <div class="col">
              <input type="text" class="form-control d-inline-block" placeholder="请输入文献名称" v-model="item.value">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="请输入文献链接" v-model="item.link">
            </div>
            <div class="col-2">
              <button class="btn btn-primary" @click="refferChange(index, item.value, item.link)">确定</button>
            </div>
          <!-- </div> -->
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
  mounted: function () {
    $('.selectpicker').selectpicker()
  },
  data: function () {
    return {
      isMarkdown: true,
      articleObj: {
        content: '',
        category: '1',
        title: '',
        subTitle: '',
        render: '',
        tags: [],
        reffers: [],
        public: true
      },
      refferEdit: {
        refferValue: '',
        refferLink: ''
      }
    }
  },
  created: function () {
    this.getAticle()
  },
  props: ['articleId'],
  methods: {
    submit: function () {
      console.log('submit')
    },
    publish: function () {
      this.render = $('.v-note-read-content').html()
      const { title, category, subTitle, render, tags, content, reffers, articleId } = this.articleObj
      const data = {
        title, category, subTitle, content_html: render, tags, reffers, content, published: 1
      }
      const Authorization = `Bearer ${localStorage.getItem('token')}`
      axios.put(`/api/articles/${articleId}`, data, { headers: {Authorization} }, function (result) {
        console.log(result, 'result---------------->')
      })
    },
    saveMavon: function (value, render) {
      this.render = render
      this.content = value
    },
    getAticle () {
      const id = this.articleId
      axios.get(`/api/articles/${id}`).then((result) => {
        const { content, title } = result.data.data
        this.articleObj.title = title
        this.articleObj.content = content
      })
    },
    addReffer () {
      if (!this.refferEdit.refferValue) {
        return alert('请填写文献名称')
      }
      const obj = {
        value: this.refferEdit.refferValue,
        link: this.refferEdit.refferLink,
        status: false
      }
      this.articleObj.reffers.push(obj)
      this.refferEdit.refferValue = ''
      this.refferEdit.refferLink = ''
    },
    refferStatusChange (item) {
      return (() => {
        console.log(this.articleObj.reffers)
        item.status = !item.status
      })()
    },
    refferChange (index, value, link) {
      return (() => {
        this.articleObj.reffers[index].value = value
        this.articleObj.reffers[index].link = link
        this.articleObj.reffers[index].status = false
      })()
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
.content-container {
  height:calc(100vh - 200px);
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
  height: inherit;
}
.quillEditor {
  height: inherit;
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

.sidebar-item {
  background: wheat;
  width: 3rem;
  height: 3rem;
  border-radius: 50% 50% 50% 50%;
  margin: 0 auto;
}
.sidebar-item :hover{
  cursor: pointer;
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

</style>
