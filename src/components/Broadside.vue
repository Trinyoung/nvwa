<template>
  <div class="broadSide">
    <nav id="sidebarMenu" class="d-md-block sidebar collapse mt-1" >
      <div class="shadow-sm p-2 bg-white">
        <el-avatar :size="60" :src="userInfo.avatar" >
        </el-avatar>
        <p class="font-yahei">{{userInfo.username}}</p>
        <ul class="list-info font-yahei">
          <li>文章数：{{articleInfo.articleNums || 0}}</li>
          <li>浏览量：{{articleInfo.readsNums || 0}}</li>
          <li>点赞数：{{articleInfo.favoriteNums || 0}}</li>
        </ul>
      </div>
      <div class="bg-white shadow-sm pt-1 mt-1">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>最新文章</span>
        </h6>

        <ul class="nav flex-column">
          <li class="nav-item text-left list-group-item-action" v-for="item in newArticles" :key="item._id" @click="sidebarCollapse">
            <router-link class="nav-link d-inline-block" :to="`/person/${uid}/articles/${item._id}`" >
              <span data-feather="file-text" class="text-break">{{item.title}}</span>
              <div class="nav-item-time align-baseline">
                <b-icon-calendar2-check class="mb-1"></b-icon-calendar2-check>
                {{formatTime(item.createdAt)}}</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bg-white shadow-sm pt-1 mt-1 mb-1">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          热门文章
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item text-left list-group-item-action" v-for="item in hotArticles" :key="item._id">
            <router-link class="nav-link" :to="`/person/${uid}/articles/${item._id}`">
              <span data-feather="file-text">{{item.title}}</span>
              <div class="nav-item-time align-baseline">
                <b-icon-calendar2-check class="mb-1"></b-icon-calendar2-check>
                {{formatTime(item.createdAt)}}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import moment from 'moment'
import $ from 'jquery'
export default {
  data: function () {
    return {
      userId: '',
      userInfo: {
        username: '',
        avatar: ''
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
      console.log(this.userInfo, '--------------->')
      console.log(this.isMaster, '是否为主人？-------------》')
      this.getArticleNums()
    },
    async getArticleNums () {
      const result = await this.$getAjax(`/myapi/articles/nums?createdBy=${this.$route.params.uid}`)
      this.articleInfo = result
    },
    async getHotArticles () {
      await this.$getAjax(`/myapi/articles/list/hot?authonUid=${this.$route.params.uid}`)
    },
    formatTime (time) {
      return moment(time * 1000).format('YYYY-MM-DD')
    },
    sidebarCollapse () {
      console.log('--------------------->')
      $('#sidebarMenu').collapse('hide')
      this.$emit('mainShow')
    }
  }
}
</script>
<style scoped>
.broadSide {
  z-index: 100;
  font-size: 1rem;
}
.broadSide .sidebar-heading {
  font-size: 1.5rem;
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
.bg-aliceblue {
  background: aliceblue;
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
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: sticky;
  border-radius: 1rem;
  left: 0;
  top: 60px;
}

.list-info {
  list-style-type: none;
}
.nav-link {
  display: inline-block;
  color: rgba(5, 0, 0, 0.842);
}
</style>
