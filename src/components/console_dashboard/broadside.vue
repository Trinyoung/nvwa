<template>
  <nav id="sidebarMenu" class="d-md-block sidebar collapse">
    <div class="sidebar-sticky pt-3">
      <div class="dropdown">
        <button data-toggle="dropdown" class="btn btn-primary add-button rounded-pill">+ 新建</button>
        <div class="dropdown-menu" id="dropdownMenu2" aria-labelledby="dropdown02">
          <ul>
            <li class="dropdown-item">
              <router-link to="/console/editor/new">
                <b-icon-file-text class="icon"></b-icon-file-text>
                新建文章
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-file-earmark-binary class="icon"></b-icon-file-earmark-binary>
                新建日志
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-book class="icon"></b-icon-book>
                新建系列
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-images class="icon"></b-icon-images>
                <!-- </span> -->
                新建相册
              </router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/">
                <b-icon-upload class="icon"></b-icon-upload>
                上传资源
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <h6 class="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>
          <b-icon-wrench></b-icon-wrench>
          资源管理
        </span>
        <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <!-- <div class="nav-link"> -->
            <el-collapse class="nav-link" :accordion="false">
              <el-collapse-item title="Consistency" icon-file-richtext>
                <template slot="title">
                  <b-icon-file-richtext class="collapse-icon"></b-icon-file-richtext> 文档管理
                </template>
                <ul>
                  <li class="dropdown-item">
                    <router-link :to="`/console/${$route.params.uid}/articles`" class="dropdown-item-link">
                      <b-icon-file-text class="icon"></b-icon-file-text>
                      文章管理
                    </router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link :to="`/console/${$route.params.uid}/logs`" class="dropdown-item-link">
                      <b-icon-file-earmark-binary class="icon"></b-icon-file-earmark-binary>
                      日志管理
                    </router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link :to="`/console/${$route.params.uid}/series`" class="dropdown-item-link">
                      <b-icon-book class="icon"></b-icon-book>
                      系列管理
                    </router-link>
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          <!-- </div> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/console/${$route.params.uid}/types`">
            <b-icon-folder2 class="icon"></b-icon-folder2>
            分类管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/console/${$route.params.uid}/tags`">
            <b-icon-tags class="icon"></b-icon-tags>
            标签管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/console/${$route.params.uid}/`">
            <b-icon-images class="icon"></b-icon-images>
            相册管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/console/${$route.params.uid}/`">
            <b-icon-file-earmark-zip class="icon"></b-icon-file-earmark-zip>
            资源文件
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/console/${$route.params.uid}/`">
            <b-icon-trash class="icon"></b-icon-trash>
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
          <router-link class="nav-link" :to="`/console/${$route.params.uid}/user`">
            <b-icon-person class="icon"></b-icon-person>
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
    width: 220px;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    /* overflow: scroll; */
  }
  .sidebar-sticky::-webkit-scrollbar {
    display:none
  }
  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    /* overflow-x: hidden; */
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
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
  text-align: left;
  margin-left: 2rem;
}
.dropdown-item-link {
  color: #bbbbbb;
}

.sidebar .nav-item {
  /* text-align: left; */
  font-weight: 500;
  color: #bbbbbb;
  /* margin-left: 2rem; */
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
.icon {
  margin-right: 0.2rem;
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
<style >
.el-collapse {
  border: none;
  /* font-size: 1rem; */
}
.el-collapse-item__header {
  font-size: 0.95rem;
  font-weight: 500;
  color: #bbbbbb;
  background-color: #002338;
  border: none;
  line-height: unset;
  height: unset;
}
.el-collapse-item__content {
  font-size: 0.95rem;
  background: #01385a;
  color: #bbbbbb;
  border:none;
  padding-bottom: 13px;
}
.el-collapse-item__wrap {
  border: none;
}
.dropdown-item:hover {
  background: #1173b1;
}
.collapse-icon {
  margin-right: 0.5rem;
}
</style>
