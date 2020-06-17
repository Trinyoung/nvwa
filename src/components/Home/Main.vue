<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" id="main-content">  
    <div class="container">
			<h2><input type='text'></h2>
      <v-markdownEditor v-if="isMarkdown"></v-markdownEditor>
      <v-editor v-if="!isMarkdown"></v-editor>
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
  border: 1px solid red;
  background: rosybrown;
}
</style>
