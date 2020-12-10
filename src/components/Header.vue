<template>
  <!-- <nav class="navbar sticky-top bg-white flex-md-nowrap p-0 shadow-sm">
    <router-link class="navbar-brand align-bottom col-md-3 col-lg-2 d-inline-block" to="/home">
      <b-icon-house-fill class="icon" width="2rem" height="1.5rem"></b-icon-house-fill>
      <span class="d-inline-block align-bottom home-title">Trinyoung</span>
    </router-link>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <form class="form-inline my-lg-0">
      <div class="input-group mr-sm-2">
        <input type="text" class="form-control border" id="search-input" placeholder="搜 索" >
        <div class="input-group-append">
          <button class="btn btn-outline-success" id="basic-addon2">
            <b-icon-search></b-icon-search>
          </button>
        </div>
      </div>
    </form> -->
    <!-- <div class="dropdown">
      <el-button type="success" plain @click="jumpTo('/register')" v-if="!isLogin">注册</el-button>
      <el-button type="danger" plain @click="jumpTo('/login')" v-if="!isLogin">登录</el-button>
      <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="isLogin">
        你好: {{userInfo.username}}
      </button>
      <div class="dropdown-menu" id='dropdownMenu2' aria-labelledby="dropdown02">
        <router-link :to="`/person/${this.userInfo.uid}`" class="dropdown-item">
          <b-icon-person></b-icon-person>
          我的主页
        </router-link>
        <router-link :to="`/console/${this.userInfo.uid}`" class="dropdown-item">
          <b-icon-gear></b-icon-gear>
          进入后台
        </router-link>
        <router-link :to="`/${this.userInfo.username}/updatePassword`" class="dropdown-item">
          <b-icon-lock></b-icon-lock>
          修改密码
        </router-link>
        <span class="dropdown-item logout" @click="logout">
          <b-icon-power></b-icon-power>
          退出
        </span>
      </div>
    </div>
  </nav> -->
  <nav class="navbar navbar-dark sticky-top bg-aliceblue flex-md-nowrap p-0 shadow-sm">
    <router-link class="navbar-brand align-bottom bg-aliceblue2 col-md-3 col-lg-2 mr-0 px-3" to="/home">
      <b-icon-house-fill class="icon" width="2rem" height="1.5rem"></b-icon-house-fill>
      <span class="d-inline-block align-bottom home-title">Trinyoung</span>
    </router-link>
    <span class="navbar-toggler"></span>
    <button class="navbar-toggler position-absolute d-md-none collapsed bg-aliceblue3" type="button" data-toggle="collapse"
      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"
      @click="mainShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
    <!-- <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sign out</a>
      </li>
    </ul> -->
    <div class="dropdown">
      <el-button type="success" plain @click="jumpTo('/register')" v-if="!isLogin">注册</el-button>
      <el-button type="danger" plain @click="jumpTo('/login')" v-if="!isLogin">登录</el-button>
      <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="isLogin">
        你好: {{userInfo.username}}
      </button>
      <div class="dropdown-menu" id='dropdownMenu2' aria-labelledby="dropdown02">
        <router-link :to="`/person/${this.userInfo.uid}`" class="dropdown-item">
          <b-icon-person></b-icon-person>
          我的主页
        </router-link>
        <router-link :to="`/console/${this.userInfo.uid}`" class="dropdown-item">
          <b-icon-gear></b-icon-gear>
          进入后台
        </router-link>
        <router-link :to="`/${this.userInfo.username}/updatePassword`" class="dropdown-item">
          <b-icon-lock></b-icon-lock>
          修改密码
        </router-link>
        <span class="dropdown-item logout" @click="logout">
          <b-icon-power></b-icon-power>
          退出
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      isLogin: false,
      userInfo: {
        username: ''
      }
    }
  },
  created () {
    this.isLogin = !!this.$cookie.get('isLogin')
    if (this.isLogin) {
      this.userInfo = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    jumpTo (url) {
      this.$router.push(url)
    },
    async logout () {
      try {
        await this.$postAjax('/api/user/logout')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        localStorage.removeItem('tags')
        localStorage.removeItem('types')
        this.$router.push('/login')
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    mainShow () {
      this.$emit('change')
    }
  }
}
</script>
<style scoped>
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;/* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}
.align-right {
  align-items: right;
}
.d-float-right {
  float: right;
}
.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}
.bg-aliceblue {
  background: aliceblue;
}
.bg-aliceblue2 {
  background: rgb(199, 226, 250);
}
.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  color: #333;
  /* background-color: aliceblue; */
  font-family:Georgia, 'Times New Roman', Times, serif
}
.home-title {
  margin-bottom: -3px;
}
.navbar .navbar-toggler {
  top: 0.25rem;
  left: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
}

.icon {
  color: rgb(2, 13, 24);
}
/* #dropdownMenu2 {
  position: absolute;
  right: 0!important;
  left: auto;
} */
#search-input {
  border-radius: 0.5rem 0 0 0.5rem;
}

#basic-addon2 {
  width: 4rem;
}
.logout {
  cursor: pointer;
}
</style>
