<template>
    <div class="editor-container container col-md-9" id="main-content">
      <div class="row my-2">
        <div class="col-md-10 col-lg-10 col-sm-10 titileInput">
          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">标 题</span>
            </div>
            <input type="text" class="form-control" placeholder="请输入标题" aria-label="title" aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2 article-setting">
          <button class="btn btn-primary title-add" data-toggle="dropdown"  id="add-button">
            +
          </button>
          <button class="btn btn-primary" data-toggle="dropdown" >
            发布
          </button>
        </div>
      </div>
      <div class="row row-container">
        <div class="col-md-11 col-lg-11 col-sm-11 content-container">
          <v-markdownEditor v-if="isMarkdown" class='mavonEditor' v-model="content" @save="saveMavon"
          ></v-markdownEditor>
          <v-editor v-if="!isMarkdown" class="quillEditor"></v-editor>
        </div>
        <div class="col-md-1 right-side ">
          <div class="sidebar">
            <div class="my-3 sidebar-item">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-tags" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                <path fill-rule="evenodd" d="M5.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
              </svg>
            </div>
            <div class="my-3 sidebar-item">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div>
            <div class="my-3 sidebar-item">
              <svg width="1.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-share" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.724 3.947l-7 3.5-.448-.894 7-3.5.448.894zm-.448 9l-7-3.5.448-.894 7 3.5-.448.894z"/>
                <path fill-rule="evenodd" d="M13.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
            </div>
            <div class="my-3 sidebar-item">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
            </div>
            <div class="my-3 sidebar-item">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-reply" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.502 5.013a.144.144 0 0 0-.202.134V6.3a.5.5 0 0 1-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 0 1 1.921-.306 7.403 7.403 0 0 1 .798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 0 1 .45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 0 1 .042-.028.147.147 0 0 0 0-.252.494.494 0 0 1-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 0 0-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 0 1-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.667z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import { mavonEditor } from 'mavon-editor'
export default {
  components: {
    'v-markdownEditor': mavonEditor,
    'v-editor': quillEditor
  },
  data: function () {
    return {
      isMarkdown: true,
      content: '## 我们不一样' + '好样的'
    }
  },
  methods: {
    submit: function () {
      console.log('submit')
    },
    publish: function () {
      console.log(this.content, '------->')
      console.log(this.html)
      console.log('publish')
    },
    saveMavon: function (value, render) {
      console.log(value)
      console.log(render)
    }
  }
}
</script>
<style scoped>
#main-content {
  height: calc(100vh - 48px);
}
.editor-container {
  height: 99.5%;
  margin-top: 0.5%;
}
.v-note-wrapper {
  z-index: inherit;
}
.quillEditor {
  background: white;
  height: inherit;
}
.mavonEditor {
  height: inherit;
}
.content-container {
  height: 100%;
}
.row-container {
  height: 90%;
  padding-top: 0.1rem;
}
.titleInput {
  height: inherit!important;
}
#add-button {
  border-radius: 50% 50%;
  width: 2.4rem;
  height: 100%;
}

.right-side {
  border-radius: 1rem;
  background: rgb(141, 138, 138);
}

.sidebar-item {
  background: wheat;
  width: 3rem;
  height: 3rem;
  border-radius: 50% 50% 50% 50%;
  margin: 0 auto;
}
.sidebar-item :hover{
  background: whitesmoke;
  width: 3rem;
  height: 3rem;
  border-radius: 50% 50% 50% 50%;
  margin: 0 auto;
  cursor: pointer;
}
.bi {
  margin-top: 0.5rem;
}
.input-group-text {
  font-weight: bold;
}
#add-button {
  font-weight: bold;
}
.article-setting {
  background: gray;
  border-radius: 1rem;
}
</style>
