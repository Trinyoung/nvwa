<!--
 * @Author: your name
 * @Date: 2020-11-23 16:22:12
 * @LastEditTime: 2020-12-08 10:23:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\tools\pagination.vue
-->
<template>
  <nav aria-label="Page navigation example" id="page-list" class="mt-2 text-muted">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="currentPage === 1? 'disabled': ''">
        <a class="page-link" href="#" @click="pageDecline()">&laquo;</a>
      </li>
      <li class="page-item" v-for=" n in pages" :key="n" :class="currentPage === n? 'active': ''">
        <a class="page-link" href="#" @click="getList(n)">{{n}}</a>
      </li>
      <li class="page-item" :class="currentPage === pages? 'disabled': ''">
        <a class="page-link" href="#" @click="pageAdd()">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
    共 {{pages}}页
  </nav>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['currentPage', 'pages', 'getList'],
  methods: {
    pageAdd () {
      if (this.currentPage < this.pages) {
        this.currentPage++
        this.getList(this.currentPage)
      }
    },
    pageDecline () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.getList(this.currentPage)
      }
    }
  }
}
</script>
