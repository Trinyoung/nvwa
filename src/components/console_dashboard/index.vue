<!--
 * @Author: your name
 * @Date: 2020-11-23 16:22:22
 * @LastEditTime: 2020-12-10 16:30:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\console_dashboard\index.vue
-->
<template>
  <div class="dashboard-container">
    <v-header></v-header>
    <main role="main" class="container-fluid">
      <div class="row">
        <v-broadside></v-broadside>
        <v-main :tags= tags></v-main>
      </div>
    </main>
  </div>
</template>
<script>
import header from './Header'
import broadside from './broadside'
import main from './main'
import bottom from '../bottom'

export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-bottom': bottom
  },
  data () {
    return {
      tags: []
    }
  },
  props: ['uid'],
  created () {
    this.init()
  },
  methods: {
    init () {
      const token = localStorage.getItem('token')
      if (!token) {
        this.$router.push('/login')
      }
      this.getTags()
    },
    async getTags () {
      try {
        const result = await this.$getAjax(`/myapi/tags?createdBy=${this.uid}`)
        console.log(result, 'result------------------->')
      } catch (err) {
        this.$message.error(err.messag)
      }
    }
  }
}
</script>
<style scoped>
  @media (min-width: 1600px) {
    .container {
      max-width: 1440px;
    }
  }
</style>
<style>
  .dashboard-container table .el-button {
    height: 25px;
    padding: 5px 12px;
  }
</style>
