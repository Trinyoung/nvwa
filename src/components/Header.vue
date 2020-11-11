<template>
  <nav class="navbar sticky-top bg-white flex-md-nowrap p-0 shadow-sm">
    <a class="navbar-brand align-bottom col-md-3 col-lg-2 d-inline-block" href="#">
      <b-icon-house-fill class="icon" width="2rem" height="1.5rem"></b-icon-house-fill>
      <span class="d-inline-block align-bottom home-title">Trinyoung</span>
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="form-inline my-lg-0">
      <div class="input-group mr-sm-2">
        <input type="text" class="form-control border" id="search-input" placeholder="搜 索" >
        <div class="input-group-append">
          <button class="btn btn-outline-success" id="basic-addon2">
            <b-icon-search></b-icon-search>
          </button>
        </div>
      </div>
    </form>
    <div class="dropdown">
      <el-button type="success" plain @click="jumpTo('/register')">注册</el-button>
      <el-button type="danger" plain @click="jumpTo('/login')">登录</el-button>
      <!-- <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        你好: Trinyoung
      </button>
      <div class="dropdown-menu" id='dropdownMenu2' aria-labelledby="dropdown02">
        <a class="dropdown-item" href="#">进入后台</a>
        <a class="dropdown-item" href="#">登出</a>
      </div> -->
    </div>
  </nav>
</template>
<script>
export default {
  created () {

  },
  methods: {
    jumpTo (url) {
      this.$router.push(url)
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

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
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
  background-color: aliceblue;
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25); */
  font-family:Georgia, 'Times New Roman', Times, serif
}
.home-title {
  margin-bottom: -3px;
}
.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
}

.icon {
  color: rgb(2, 13, 24);
}
#dropdownMenu2 {
  position: absolute;
  right: 0!important;
  left: auto;
}
#search-input {
  border-radius: 0.5rem 0 0 0.5rem;
}

#basic-addon2 {
  width: 4rem;
}
</style>
