<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" id="main-content">
    <div class="editor-container container-fluid">
      <div class="row">
        <div class="col-md-1 col-lg-1 col-sm-0 sidebar-row"></div>
        <div class="col-md-10 col-lg-10 col-sm-12 titileInput">
          <input type="text" class='form-control' id="#title" name="title">
        </div>
      </div>
      <div class="row row-container">
        <div class="col-md-1 col-lg-1 col-sm-0 sidebar-row"></div>
        <div class="col-md-10 col-lg-10 col-sm-12 content-container">
          <v-markdownEditor v-if="isMarkdown" class='mavonEditor'></v-markdownEditor>
          <v-editor v-if="!isMarkdown" class="quillEditor"></v-editor>
        </div>
      </div>
    </div>
  </main>
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
      isMarkdown: true
    }
  }
}
</script>
<style scoped>
#main-content {
  height: calc(100vh - 48px);;
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
</style>
