<template>
<div class="console-container">
  <el-container >
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-container>
      <el-aside width="220px">
        <v-broadside></v-broadside>
      </el-aside>
      <el-container>
        <el-main>
          <v-main></v-main>
        </el-main>
        <el-footer>
          <v-bottom></v-bottom>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
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
      tags: [],
      avatarUrl: ''
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
      // this.getTags()
    },
    avatarChange (url) {
      console.log('index--------------avatarChange', url)
      this.avatarUrl = url
    },
    async getTags () {
      try {
        const result = await this.$getAjax(`/myapi/tags?createdBy=${this.uid}`)
        this.tags = result
        console.log(result, 'result------------------->')
      } catch (err) {
        this.$message.error(err.messag)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.console-container {
  height: 100%;
  position: fixed;
  width: 100%;
  .el-header {
    padding: 0;
  }
  .el-main {
    // padding: 0;
    padding: 5px;
  }
}
</style>
