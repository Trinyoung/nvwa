<template>
  <nav id="sidebarMenu" class="col-sm-2 d-md-block sidebar collapse">
    <div class="sidebar-sticky pt-3">
      <div class="dropdown">
        <button data-toggle="dropdown" class="btn btn-primary add-button rounded-pill">+ 新建</button>
        <div class="dropdown-menu" id="dropdownMenu2" aria-labelledby="dropdown02">
          <ul>
            <li class="dropdown-item">
              <router-link to="/editor/new">
                <b-icon-file-text></b-icon-file-text>
                新建文章
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-file-earmark-binary></b-icon-file-earmark-binary>
                新建日志
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-book></b-icon-book>
                新建系列
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <span data-feather="file">
                  <b-icon-images></b-icon-images>
                </span>
                新建相册
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-upload></b-icon-upload>
                上传资源
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <h6 class="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-wrench" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"/>
          </svg>
          资源管理
        </span>
        <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          <div class="nav-link">
            <span data-feather="file">
              <b-icon-file-richtext></b-icon-file-richtext>
            </span>
          <span data-toggle="dropdown"> 文档管理 </span>
          <div class="dropdown-menu" id="dropdownMenu2" aria-labelledby="dropdown02">
            <ul>
              <li class="dropdown-item">
                <router-link to="/console/articles">
                  <b-icon-file-text></b-icon-file-text>
                  文章管理
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/console/logs">
                  <b-icon-file-earmark-binary></b-icon-file-earmark-binary>
                  日志管理
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/console/series">
                  <b-icon-book></b-icon-book>
                  系列管理
                </router-link>
              </li>
            </ul>
          </div>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/console/types">
            <span data-feather="file">
              <b-icon-folder2></b-icon-folder2>
            </span>
            分类管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/console/tags">
            <span data-feather="file">
              <b-icon-tags></b-icon-tags>
            </span>
            标签管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file">
              <b-icon-images></b-icon-images>
            </span>
            相册管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file">
              <b-icon-file-earmark-zip></b-icon-file-earmark-zip>
            </span>
            资源文件
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file">
              <b-icon-trash></b-icon-trash>
            </span>
            归档管理
          </router-link>
        </li>
      </ul>
      <h6 class="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>
          <b-icon-gear></b-icon-gear>
          系统设置
        </span>
      </h6>
      <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="#">
              <span data-feather="file">
                <b-icon-person></b-icon-person>
              </span>
              个人信息
            </router-link>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
              <span data-feather="file-text">
                <b-icon-people></b-icon-people>
              </span>
              用户管理
          </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="file-text">
              <b-icon-shield-lock></b-icon-shield-lock>
            </span>
            权限管理
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text">
                <b-icon-graph-up></b-icon-graph-up>
              </span>
              统计信息
            </a>
          </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import 'vue-feather-icons'
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  #sidebarMenu {
    background-color: #002338;
  }
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #bbbbbb;
  /* text-align: left; */
  /* margin-left: 2rem; */
}
.sidebar .nav-item {
  text-align: left;
  font-weight: 500;
  color: #bbbbbb;
  margin-left: 2rem;
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
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
.add-button {
  width: 80%;
}
</style>
