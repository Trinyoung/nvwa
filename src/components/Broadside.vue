<template>
  <div class="broadSide my-2 shadow-sm">
    <nav id="sidebarMenu" class="d-md-block sidebar collapse">
      <div class="avatar-head">
        <router-link to="/console">
          <img class='avatar' src="https://upload.jianshu.io/users/upload_avatars/7137229/dc133847-5398-42c5-96f3-5ce9828e4b47?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
        </router-link>
        <p class="font-yahei">{{userInfo.username}}</p>
        <ul class="list-info font-yahei">
          <li>文章数：{{articleInfo.articleNums || 0}}</li>
          <li>浏览量：{{articleInfo.readsNums || 0}}</li>
          <li>点赞数：{{articleInfo.favoriteNums || 0}}</li>
        </ul>
      </div>
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>常用标签</span>
      </h6>

      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        热门文章
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
// import Axios from 'axios'
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
      }
    }
  },
  props: ['uid'],
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
      console.log(this.userId, this.uid, 'userId, uid---------------------->')
      this.userId = this.userId || this.uid
      if (this.userId) {
        this.userInfo = JSON.parse(localStorage.getItem(`userInfo_${this.userId}`))
        this.getArticleNums()
      }
    },
    async getArticleNums () {
      const result = await this.$getAjax(`/myapi/articles/nums?createdBy=${this.userId}`)
      this.articleInfo = result
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
  min-height: calc(100vh -48px);
  border: 1px solid aliceblue;
  background: aliceblue;
}
.broadSide .text-muted {
  font-size: 1.1rem;
}
.avatar-head {
  margin-top: 2rem;
}
.avatar {
  border-radius: 50%;
  width: 30%
}
.font-yahei {
  /* font-family: "Microsoft YaHei"; */
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
  top: 0;
  min-height: calc(100vh - 48px);
}

.list-info {
  list-style-type: none;
}
</style>
