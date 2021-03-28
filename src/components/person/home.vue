<!--
 * @Author: your name
 * @Date: 2020-11-23 16:22:22
 * @LastEditTime: 2021-03-13 21:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\person\home.vue
-->
<template>
  <main class="v-height mb-2">
    <div class="container bg-white py-5">
      <div class="row">
        <div class="col-md-4" v-for="item in items" :key="item.name">
          <div class="card mb-4 shadow-sm">
            <div class="bg-secondary image-container">
              <img :src="item.picture" alt="" width="100%" height="100%">
            </div>
            <div class="card-body">
              <h3 class="card-text text-left">
                 {{item.name}}
              </h3>
              <p class="card-text text-left">
                数量: {{item.count || 0 }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="jumpTo(item.detail)">查看</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    @click="jumpTo(item.new)"
                    v-if="isMaster"
                  >新建</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      uid: this.$route.params.uid,
      isMaster: false,
      items: [{
        name: '文章',
        count: 0,
        description: '',
        detail: `/person/${this.$route.params.uid}/articles`,
        new: `/console/editor/new`,
        picture: '../../../static/images/00054a6a8a90057162c9eaf3d465916d.jpeg'
      }, {
        name: '分类',
        count: 0,
        description: '',
        detail: `/person/${this.$route.params.uid}/types`,
        picture: '../../../static/images/1c1b5cd639e9ba885b3f04e9140aef68.jpg'
      }, {
        name: '相册',
        count: 0,
        description: '',
        detail: '',
        picture: '../../../static/images/00054a6a8a90057162c9eaf3d465916d.jpeg'
      }, {
        name: '日志',
        count: 0,
        description: '',
        detail: '',
        picture: '../../../static/images/6998d1dfd40c6f870e17129ea9afbded.jpeg'
      }, {
        name: '系列',
        count: 0,
        description: '',
        detail: '',
        picture: '../../../static/images/00054a6a8a90057162c9eaf3d465916d.jpeg'
      }, {
        name: '标签',
        count: 0,
        description: '',
        detail: '',
        picture: '../../../static/images/00054a6a8a90057162c9eaf3d465916d.jpeg'
      }]
    }
  },
  created () {
    // this.user = JSON.parse(localStorage.getItem('userInfo'))
    this.getUserInfo()
  },
  methods: {
    jumpTo (url) {
      this.$router.push(url)
    },
    async getUserInfo () {
      let userInfo = localStorage.getItem(`userInfo_${this.$route.params.uid}`)
      if (userInfo) {
        this.userInfo = JSON.parse(userInfo)
      }
      if (!userInfo) {
        try {
          this.userInfo = await this.$getAjax(`/myapi/user/userInfo?uid=${this.$route.params.uid}`)
        } catch (err) {
          this.$message.error(err.message)
        }
      }
      const self = localStorage.getItem('userInfo')
      if (self && JSON.parse(self).uid === this.$route.params.uid) {
        this.isMaster = true
      }
      this.getArticleNums()
    },
    async getArticleNums () {
      const result = await this.$getAjax(`/myapi/articles/nums?createdBy=${this.$route.params.uid}`)
      this.articleInfo = result
    }
  }
}
</script>
<style scoped>
  .container {
    min-height: calc(100vh - 132px);
  }
  .v-height {
    /* height: 100%; */
  }
  .image-container {
    height: 200px;
  }
</style>
