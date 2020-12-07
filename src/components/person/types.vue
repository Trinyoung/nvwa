<!--
 * @Author: your name
 * @Date: 2020-11-23 16:22:22
 * @LastEditTime: 2020-12-07 16:46:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\person\types.vue
-->
<template>
  <div class="list-container shadow-sm p-3 rounded text-left">
    <h1>分类</h1>
    <div class="text-muted">共 {{list.length}} 个一级分类</div>
    <tree :treeData="list" class="tree-container bg-light"></tree>
  </div>
</template>
<script>
// import moment from 'moment'
import pagination from '../tools/pagination'
import tree from '../tools/tree'
export default {
  components: { pagination, tree },
  data: function () {
    return {
      list: [],
      total: 0,
      page: 1,
      pages: 1,
      loading: false,
      uid: this.$route.params.uid,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    async getList (parent) {
      this.loading = true
      let queryString = `createdBy=${this.$route.params.uid}`
      if (parent) {
        queryString += `parent=${parent}`
      }
      const result = await this.$getAjax(`/myapi/articles/types/tree?${queryString}`)
      this.list = result
      this.loading = false
    }
  }
}
</script>
<style scoped>
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }
  .item-title {
    color: white;
    font-size: 1.1rem;
  }
  .new-icon {
    border:1px solid green;
    color: green;
    font-weight: 100;
    padding: 0 5px 0 5px;
  }
  .hot-icon {
    border: 1px solid red;
    color: red;
    font-weight: 100;
    padding: 0 5px 0 5px;
  }
  .list-container {
    min-height: calc(100vh - 132px);
  }
  .list-group-item {
    padding-left: 0;
    padding-bottom: 0.3rem;
  }
  .tree-container {
    min-height: 500px;
  }
</style>
