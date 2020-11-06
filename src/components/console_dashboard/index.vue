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
import Axios from 'axios'
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
    getTags () {
      Axios.get('/myapi/tags').then(res => {
        this.tags = res.data.list
        localStorage.setItem('tags', JSON.stringify(this.tags))
      })
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
