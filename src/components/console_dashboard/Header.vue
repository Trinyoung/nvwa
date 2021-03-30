<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow-sm">
    <router-link class="navbar-brand align-bottom d-inline-block mr-0 px-3 " to="/home">
      <b-icon-house-fill class="icon" width="2rem" height="1.5rem"></b-icon-house-fill>
      <span class="d-inline-block align-bottom home-title text-transform">Trinyoung</span>
    </router-link>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
        data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="dropdown">
      <button class="btn dropdown-toggle avatar text-transform" type="button" data-toggle="dropdown"  aria-expanded="false" aria-haspopup="true" v-if="userInfo.avatar">
        <img :src="userInfo.avatar" alt=""  class="avatar">
      </button>
      <button class="btn dropdown-toggle text-transform avatar-text" type="button" data-toggle="dropdown"  aria-expanded="false" aria-haspopup="true" v-if="!userInfo.avatar">
        <span >{{userInfo.username.substr(0, 2)}}</span>
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
      userInfo: {}
    }
  },
  created () {
    console.log(this.avatarUrl)
    this.init()
  },
  props: ['avatarUrl'],
  watch: {
    'avatarUrl' () {
      this.userInfo.avatar = this.avatarUrl
    }
  },
  methods: {
    init () {
      this.getUserInfo()
    },
    getUserInfo () {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
    async logout () {
      try {
        await this.$postAjax('/api/user/logout')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        this.$router.push('/login')
      } catch (err) {
        this.$message.error(err.message)
      }
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
  width: 80px;
  margin-right: 10px;
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
  padding: 0;
  width: 45px;
  height: 45px;
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
  .dropdown {
    position: absolute;
    top: 0.25px;
    right: 0.5rem;
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
