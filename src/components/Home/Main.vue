<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" id="main-content">
    <div class="container title-head"><input type="text" class="form-control"></div>
    <div class="editor-container">
      <div class="row row-container">
        <div class="col-md-2 col-lg-1 col-sm-0"></div>
        <div class="col-md-8 col-lg-10 col-sm-12 content-container">
          <v-markdownEditor v-if="isMarkdown" class='mavonEditor'></v-markdownEditor>
          <v-editor v-if="!isMarkdown" class="quillEditor"></v-editor>
        </div>
        <div class="col-md-2 col-lg-1 col-sm-0"></div>
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
      isMarkdown: false
    }
  }
}
</script>
<style scoped>
#main-content {
  height: calc(100vh - 48px);;
}
.editor-container {
  height: 90%;
}
.title-head {
  height: 5%;
}
.v-note-wrapper {
  z-index: inherit;
}
.quillEditor {
  /* background: white; */
  height: 100%;
}
.mavonEditor {
  height: inherit;
}
.content-container {
  height: inherit;
}
.row-container {
  height: 100%;
}
</style>
