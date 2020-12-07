<template>
  <div class="broadSide my-2 shadow-sm">
    <nav id="sidebarMenu" class="d-md-block sidebar collapse">
      <div class="avatar-head">
        <!-- <img class='avatar' v-if="!isMaster"
          src="https://upload.jianshu.io/users/upload_avatars/7137229/dc133847-5398-42c5-96f3-5ce9828e4b47?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"> -->
        <el-avatar :size="60" src="https://empty" >
          <img v-if="!isMaster" src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
          <router-link :to="toConsoleUrl" v-if="isMaster">
            <img
            src="https://upload.jianshu.io/users/upload_avatars/7137229/dc133847-5398-42c5-96f3-5ce9828e4b47?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
          </router-link>
        </el-avatar>
        <!-- <router-link :to="toConsoleUrl" v-if="isMaster">
          <img class='avatar'
          src="https://upload.jianshu.io/users/upload_avatars/7137229/dc133847-5398-42c5-96f3-5ce9828e4b47?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
        </router-link> -->
        <p class="font-yahei">{{userInfo.username}}</p>
        <ul class="list-info font-yahei">
          <li>文章数：{{articleInfo.articleNums || 0}}</li>
          <li>浏览量：{{articleInfo.readsNums || 0}}</li>
          <li>点赞数：{{articleInfo.favoriteNums || 0}}</li>
        </ul>
      </div>
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>最新文章</span>
      </h6>

      <ul class="nav flex-column">
        <li class="nav-item text-left" v-for="item in newArticles" :key="item._id">
          <router-link class="nav-link d-inline-block" :to="`/person/${uid}/articles/${item._id}`">
            <span data-feather="file-text">{{item.title}}</span>
            <div class="nav-item-time align-baseline">
              <b-icon-calendar2-check class="mb-1"></b-icon-calendar2-check>
              {{formatTime(item.createdAt)}}</div>
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        热门文章
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item text-left" v-for="item in hotArticles" :key="item._id">
          <router-link class="nav-link" :to="`/person/${uid}/articles/${item._id}`">
            <span data-feather="file-text">{{item.title}}</span>
            <div class="nav-item-time align-baseline">
              <b-icon-calendar2-check class="mb-1"></b-icon-calendar2-check>
              {{formatTime(item.createdAt)}}
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data: function () {
    return {
      userId: '',
      userInfo: {
        username: ''
      },
      articleInfo: {
        articleNums: 0,
        readsNums: 0,
        favoriteNums: 0
      },
      isMaster: false,
      toConsoleUrl: `/console/${this.$route.params.uid}`
    }
  },
  props: ['uid', 'hotArticles', 'newArticles'],
  created () {
    this.init()
  },
  watch: {
    'userId' (val) {
      this.init()
    }
  },
  methods: {
    init () {
      this.getUserInfo()
      this.getHotArticles()
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
    },
    async getHotArticles () {
      const result = await this.$getAjax(`/myapi/articles/list/hot?authonUid=${this.$route.params.uid}`)
      console.log(result, '------------------>')
    },
    formatTime (time) {
      return moment(time * 1000).format('YYYY-MM-DD')
    }
  }
}
</script>
<style scoped>
.broadSide .sidebar-heading {
  font-size: 1.5rem;
  margin-top: 20px;
}
.broadSide {
  height: calc(100vh -48px);
  border: 1px solid aliceblue;
  background: aliceblue;
  overflow-y: scroll;
  /* position: fixed; */
}
.broadSide::-webkit-scrollbar {
  display: none;
}
.broadSide .text-muted {
  font-size: 1.1rem;
}
.nav-item-time {
  font-size: 0.8rem;
  color: darkgray;
}
.avatar-head {
  margin-top: 2rem;
}
.avatar {
  padding: 0;
  border-radius: 50%;
  width: 35%;
}
.avatar-img {
  width: 100%;
  border-radius: 50%;
}
.font-yahei {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
#sidebarMenu {
  padding-top: 1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: sticky;
  border-radius: 1rem;
  left: 0;
  top: 60px;
  /* min-height: calc(100vh - 48px); */
}

.list-info {
  list-style-type: none;
}
.nav-link {
  display: inline-block;
  color: rgba(5, 0, 0, 0.842);
}
</style>
