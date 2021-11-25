<template>
  <div class="navbar-container d-flex navbar-dark bg-dark shadow-sm">
    <router-link class="navbar-brand d-flex" to="/home">
      <b-icon-house-fill class="icon" width="2rem" height="1.5rem"></b-icon-house-fill>
      <span class="d-inline-block align-bottom home-title text-transform">Trinyoung</span>
    </router-link>
    <div class="nav-right d-flex">
      <el-dropdown>
        <el-button>
          <img :src="userInfo.avatar" alt=""  class="avatar">
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">
            <router-link :to="`/person/${this.userInfo.uid}`" >
              我的主页
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">
            <router-link :to="`/console/${this.userInfo.uid}`">
              控制台
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-lock">
            <router-link :to="`/${this.userInfo.username}/updatePassword`">
              修改密码
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">
            <span class="logout" @click="logout">
              退出
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
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
<style lang="scss" scoped>
.navbar-container {
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  /* jusspace-between */
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
  height:100%;
  line-height: 100%;
  align-items: center;
  justify-content: center;
  width: 220px;
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
.d-flex {
  display: flex;
}
.dropdown-item {
  display: flex;
  align-items: center;
}
.nav-right {
  align-items: center;
  .el-button {
    padding: 0;
  }
  .nav-icon {
    // color: cornsilk;
    margin-right: 5px;
  }
  margin-right: 10px;
}
.d-flex-align-center {
  display: flex;
  align-items: center;
  color: black;
}
</style>
