<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <v-main :articleId="articleId"></v-main>
    </el-main>
  </el-container>
</template>
<script>
import header from '@/views/console/Header'
import editor from './editor'

export default {
  components: {
    'v-header': header,
    'v-main': editor
  },
  props: ['articleId']
}
</script>
<style scoped>
.el-header {
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
}
.el-main {
  margin: 40px;
}
</style>
