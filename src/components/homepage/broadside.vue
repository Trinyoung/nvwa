<!--
 * @Author: your name
 * @Date: 2020-11-19 15:06:13
 * @LastEditTime: 2020-11-19 16:11:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\homepage\broadside.vue
-->
<template>
  <div class="broadSide my-2 shadow-sm">
    <nav id="sidebarMenu" class="d-md-block sidebar collapse">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>推荐文章</span>
      </h6>

      <ul class="nav flex-column">
        <li class="nav-item text-left" v-for="item in newArticles" :key="item._id">
          <router-link class="nav-link d-inline-block" :to="`/home/${uid}/articles/${item._id}`">
            <span data-feather="file-text">{{item.title}}</span>
            <div class="nav-item-time align-baseline">
              <b-icon-calendar2-check></b-icon-calendar2-check>
              {{formatTime(item.createdAt)}}</div>
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        推荐作者
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item text-left" v-for="item in hotArticles" :key="item._id">
          <router-link class="nav-link" :to="`/home/${uid}/articles/${item._id}`">
            <span data-feather="file-text">{{item.title}}</span>
            <div class="nav-item-time align-baseline">
              <b-icon-calendar2-check></b-icon-calendar2-check>
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
      hotArticles: [],
      isMaster: false,
      toConsoleUrl: `/console/${this.$route.params.uid}`
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
    // async getArticleNums () {
    //   const result = await this.$getAjax(`/myapi/articles/nums?createdBy=${this.$route.params.uid}`)
    //   this.articleInfo = result
    // },
    async getHotArticles () {
      try {
        this.hotArticles = await this.$getAjax(`/myapi/articles/list/hot`)
      } catch (err) {
        this.$message.error(err.message)
      }
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
  min-height: calc(100vh -48px);
  border: 1px solid aliceblue;
  background: aliceblue;
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
  min-height: calc(100vh - 48px);
}

.list-info {
  list-style-type: none;
}
.nav-link {
  display: inline-block;
}
</style>
