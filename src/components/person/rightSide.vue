<template>
  <div class="sidebar">
    <div class="my-3 sidebar-item shadow-sm tag-item">
      <b-icon-hand-thumbs-up width="1.8em" height="1.8em" class="tag"
        v-bind:class="{'isFavorited':isFavorited, 'favorite-icon':!isFavorited} "
        @click="setFavorite">
      </b-icon-hand-thumbs-up>
      点 赞
    </div>
    <div class="my-3 sidebar-item shadow-sm tag-item">
      <b-icon-share width="1.8em" height="1.8em" class="tag"
       @click="getHaha"></b-icon-share>
      分享
    </div>
    <div class="my-3 sidebar-item shadow-sm tag-item" v-if="canCollect"
      @click="websocket2">
      <b-icon-star width="1.8em" height="1.8em" class="tag"></b-icon-star>
      收藏
    </div>
    <div class="my-3 sidebar-item shadow-sm tag-item" v-if="canCollect"
      @click="getHehe">
      <b-icon-star width="1.8em" height="1.8em" class="tag"></b-icon-star>
      呵呵
    </div>
    <div class="my-3 sidebar-item shadow-sm tag-item" v-if="isAuthor">
      <router-link :to="{name: 'Editor', params: { articleId }}">
        <b-icon-pencil-square width="1.8em" height="1.8em" class="tag"></b-icon-pencil-square>
      </router-link>
      编辑
    </div>
    <div class="my-3 sidebar-item shadow-sm tag-item" >
      <b-icon-reply @click="$router.go(-1)" width="1.8em" height="1.8em" class="tag"></b-icon-reply>
      返回
    </div>
    <div v-if="isAuthor" class="my-3 sidebar-item shadow-sm tag-item">
      <b-icon-trash width="1.8em" height="1.8em" class="tag" @click="deleteArticle"></b-icon-trash>
      删除
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      canCollect: false
    }
  },
  props: ['articleId', 'isAuthor', 'isFavorited'],
  created () {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.canCollect = true
    }
  },
  methods: {
    async setFavorite () {
      if (this.isFavorited) {
        return this.$message.success('已经点过赞了！')
      }
      const request = {
        articleId: this.articleId,
        createdBy: this.userInfo && this.userInfo.uid,
        authorUid: this.$route.params.uid
      }
      try {
        await this.$postAjax('/myapi/articles/favorites', request)
        this.$parent.isFavorited = true
        // console.log('点赞开始了')
        // this.$emit('favoriteChange', false, true)
        this.$store.commit('favoriteIncrement')
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async deleteArticle () {
      await this.$deleteAjax(`/api/articles/${this.articleId}`, true)
      this.$message.success('删除成功！')
      this.$router.replace(`/person/${this.$route.params.uid}/articles`)
    },
    async websocketTest () {
      const websocket = new WebSocket('wss://www.trinyoung.cn/websocket_server/bookgenerate')
      websocket.onopen = function () {
        websocket.send('建立连接成功！')
      }
      websocket.onmessage = function ({data}) {
        console.log(data, 'data ------------->')
      }
      websocket.onclose = function ({data}) {
        console.log(data)
        console.log('连接关闭')
      }
    },
    async getHaha () {
      const data = await this.$getAjax(`/websocket_server/bookdownload/haha`)
      console.log(data)
    },
    async getHehe () {
      const data = await this.$getAjax(`/websocket_server/bookdownload/hehe`)
      console.log(data)
    },
    async websocket2 () {
      const ws = new WebSocket('ws://www.trinyoung.cn/websocket_server/')
      ws.onopen = function () {
        ws.send('建立连接1')
      }
      ws.onmessage = function ({data}) {
        console.log(data, 'ws 建立的连接')
      }
      ws.onclose = function (event) {
        console.log('连接关闭')
      }
    }
  }
}
</script>
<style scoped>
.sidebar {
  position: sticky;
  top: 150px;
  right: -50px;
  z-index: 1000;
  float: right;
  width: 3rem;
}
.sidebar-item {
  width: 3rem;
  position: relative;
  left: 3.8rem;
  height: 3rem;
  margin: 0 auto;
  color: darkgray;
  font-size: 0.9rem;
  background: aliceblue;
}
.sidebar-item :hover{
  color: red;
  cursor: pointer;
  border: 1px solid aliceblue;
}
.tag  {
  margin: 0 auto;
  display: block;
  color: darkgray;
}
.tag-item {
  width: 4rem;
  height: 4rem;
  border-radius: 50% 50% 50% 50%;
  border: 1px solid aliceblue;
  margin: 0 auto;
}
#dropdownMenu2 {
  left: 1.4rem!important;
  top: 0.5rem!important;
}

#dropdownMenu2 :hover{
  cursor: pointer;
}
.reffer-container {
  background: cadetblue;
}

.bi {
  margin-top: 0.5rem;
}
.input-group-text {
  font-weight: bold;
}
#add-button {
  font-weight: bold;
}

.list-item {
  position: relative;
  display: block;
  padding: 0.2rem 1.25rem;
  text-align: left;
}
.list-group-container {
  background: lemonchiffon;
}
.list-group-item {
  border: none;
  text-align: left;
  padding: 0.4rem 0.75rem;
  background: none;
}
.isFavorited {
  color: red;
}
</style>
