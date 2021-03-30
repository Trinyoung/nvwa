<!--
 * @Author: your name
 * @Date: 2021-01-14 19:58:49
 * @LastEditTime: 2021-03-30 13:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\Header.vue
-->
<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow-sm">
    <router-link class="navbar-brand align-bottom bg-aliceblue2 col-md-3 col-lg-2 mr-0 px-3" to="/home">
      <b-icon-house-fill class="icon" width="2rem" height="1.5rem"></b-icon-house-fill>
      <span class="d-inline-block align-bottom home-title">Trinyoung</span>
    </router-link>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"
      @click="mainShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="dropdown login-register" v-if="!isLogin">
      <el-button type="success" plain @click="jumpTo('/register')" v-if="!isLogin">注册</el-button>
      <el-button type="danger" plain @click="jumpTo('/login')" v-if="!isLogin">登录</el-button>
    </div>
    <div class="dropdown avatar-container" v-if="isLogin">
      <button class="btn dropdown-toggle avatar text-transform" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="userInfo.avatar">
        <img :src="userInfo.avatar" alt="" class="avatar">
        <!-- <span v-if="!userInfo.avatar">{{userInfo.username.substr(0, 2)}}</span> -->
      </button>
      <button class="btn dropdown-toggle avatar-text text-transform" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="!userInfo.avatar">
        <!-- <img :src="userInfo.avatar" alt="" v-if="userInfo.avatar" class="avatar"> -->
        <span>{{userInfo.username.substr(0, 2)}}</span>
      </button>
      <div class="dropdown-menu" id='dropdownMenu2' aria-labelledby="dropdown02">
        <router-link :to="`/person/${this.userInfo.uid}`" class="dropdown-item">
          <b-icon-person></b-icon-person>
          我的主页
        </router-link>
        <router-link :to="`/console/${this.userInfo.uid}`" class="dropdown-item">
          <b-icon-gear></b-icon-gear>
          控制台
        </router-link>
        <router-link :to="`/${this.userInfo.username}/updatePassword`" class="dropdown-item">
          <b-icon-lock></b-icon-lock>
          修改密码
        </router-link>
        <span class="dropdown-item logout" @click="logout" >
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
      userInfo: {}
    }
  },
  created () {
    this.isLogin = !!this.$cookie.get('isLogin')
    console.log(this.isLogin)
    if (this.isLogin) {
      console.log('---------login--------->')
      this.init()
    }
  },
  methods: {
    init () {
      this.getUserInfo()
    },
    getUserInfo () {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      console.log(this.userInfo.avatar, '头像')
    },
    async logout () {
      try {
        await this.$postAjax('/api/user/logout')
        localStorage.clear()
        this.$router.push('/login')
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    jumpTo (url) {
      this.$router.push(url)
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
.dropdown {
  margin-right: 10px;
  width: 80px;
}

#dropdownMenu2 {
  position: absolute;
  right: 0!important;
  left: auto;
}
.home-title {
  margin-bottom: -3px;
}

.sidebar .nav-link.active {
  color: #007bff;
}
.avatar {
  border-radius: 50%;
  /* background: rgb(118, 224, 207); */
  padding: 0;
  width: 45px;
  height: 45px;
  font-size: 0.8rem;
  color: #fff;
}
.avatar-text {
  border-radius: 50%;
  background: rgb(118, 224, 207);
  padding: 0;
  width: 45px;
  height: 45px;
  font-size: 0.8rem;
  color: #fff;
}
.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
.text-transform {
  text-transform: uppercase;
}
.navbar-brand {
  background-color: rgba(28, 12, 245, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  font-family:Georgia, 'Times New Roman', Times, serif;
  height:100%
}
@media(min-width: 768px) {
  .navbar-brand {
    width: 220px;
  }
}
@media(max-width:768px) {
  .navbar-brand {
    width: 100%
  }
  .avatar-container {
    position: absolute;
    right: 0;
  }
  .login-register {
    width: 100%;
    text-align: right;
  }
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}
.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
.logout:hover {
  cursor: pointer;
}
.navbar .navbar-toggler {
  top: .25rem;
  left: 1rem;
}
</style>
