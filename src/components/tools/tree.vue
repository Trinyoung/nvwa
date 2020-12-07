<!--
 * @Author: your name
 * @Date: 2020-12-07 13:27:20
 * @LastEditTime: 2020-12-07 16:30:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\tools\tree.vue
-->
<template>
<div class="text-left">
  <div v-for="(item, index) in treeData" :key="index">
    <div class="align-bottom hover-cursor p-2" @click="handleClick(item, index)">
      <b-icon-folder2 v-if="item.type==1 && !item.status" class="mb-1"></b-icon-folder2>
      <b-icon-folder2-open v-if="item.type==1 && item.status" class="mb-1"></b-icon-folder2-open>
      <b-icon-file-richtext v-if="item.type==2" class="mb-1"></b-icon-file-richtext>
      {{item.label}}
      <!-- <b-icon-chevron-right class="mr-1 mb-1" v-if="item.children && !item.status"></b-icon-chevron-right>
      <b-icon-chevron-down class="mr-1 mb-1" v-if="item.children && item.status"></b-icon-chevron-down> -->
      <div class="text-50 mt-1 d-inline-block width-auto align-right">
        <span class="text-muted">2020-12-06</span>
      </div>
    </div>
    <div class="children" v-if ="item.children && item.status">
      <tree :treeData="item.children"></tree>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'tree',
  props: ['treeData'],
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    handleClick (item, index) {
      if (item.type === 1) {
        this.$set(this.treeData[index], 'status', !this.treeData[index].status)
      }
      if (item.type === 2) {
        this.$router.push(`/person/${this.$route.params.uid}/articles/${item.value}`)
      }
    }
  }
}
</script>
<style scoped>
.children {
  padding-left: 10px;
}
.hover-cursor:hover {
  cursor: pointer;
  background: aliceblue;
}
.text-50 {
  font-size: 0.5rem;
}
.width-auto {
  width: auto;
}
</style>
