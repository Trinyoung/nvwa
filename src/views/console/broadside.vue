<template>
  <!-- <nav id="sidebarMenu" class="d-md-block sidebar collapse">
    <div class="sidebar-sticky pt-3">
      <div class="dropdown">
        <button data-toggle="dropdown" class="btn btn-primary add-button rounded-pill">+ 新建</button>
        <div class="dropdown-menu" id="dropdownMenu2" aria-labelledby="dropdown02">
          <ul class="width-100">
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
        <li class="nav-item item-action">
          <el-collapse class="nav-link-item" :accordion="false">
            <el-collapse-item title="Consistency" icon-file-richtext>
              <template slot="title">
                <b-icon-file-richtext class="collapse-icon"></b-icon-file-richtext> 文档管理
              </template>
              <ul class="width-100">
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
        </li>
        <li class="nav-item item-action">
          <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/types`">
            <b-icon-folder2 class="icon"></b-icon-folder2>
            分类管理
          </router-link>
        </li>
        <li class="nav-item item-action">
          <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/tags`">
            <b-icon-tags class="icon"></b-icon-tags>
            标签管理
          </router-link>
        </li>
        <li class="nav-item item-action">
          <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/`">
            <b-icon-images class="icon"></b-icon-images>
            相册管理
          </router-link>
        </li>
        <li class="nav-item item-action">
          <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/`">
            <b-icon-file-earmark-zip class="icon"></b-icon-file-earmark-zip>
            资源文件
          </router-link>
        </li>
        <li class="nav-item item-action">
          <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/`">
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
        <li class="nav-item list-group-item-action">
          <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/user`">
            <b-icon-person class="icon"></b-icon-person>
            个人信息
          </router-link>
        </li>
        <li class="nav-item list-group-item-action">
          <a class="nav-link-item" href="#">
            <span data-feather="file-text">
              <b-icon-people></b-icon-people>
            </span>
            用户管理
          </a>
        </li>
        <li class="nav-item list-group-item-action">
          <a class="nav-link-item" href="#">
            <span data-feather="file-text">
              <b-icon-shield-lock></b-icon-shield-lock>
            </span>
            权限管理
          </a>
        </li>
        <li class="nav-item list-group-item-action">
          <router-link :to="`/console/${$route.params.uid}/stastic`" class="nav-link-item">
            <b-icon-graph-up></b-icon-graph-up>
            统计信息
          </router-link>
        </li>
      </ul>
    </div>
  </nav> -->
  <!-- <div class="side-container"> -->
  <el-menu
    background-color="#002338"
    text-color="#bbbbbb"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo side-container"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
    >
    <div class="dropdown">
      <el-dropdown trigger="click">
        <!-- <el-button data-toggle="dropdown" class="btn btn-primary add-button rounded-pill">+ 新建</el-button> -->
        <el-button class="add-button rounded-pill btn" type="primary">+ 新建</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-document">
            <router-link to="/console/editor/new" >
              <!-- <b-icon-file-text class="icon"></b-icon-file-text> -->
              新建文章
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-date">
            <router-link to="/">
              <!-- <b-icon-file-earmark-binary class="icon"></b-icon-file-earmark-binary> -->
              新建日志
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-reading">
            <router-link to="/">
              <!-- <b-icon-book class="icon"></b-icon-book> -->
              新建系列
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-picture-outline">
            <router-link to="/">
              <!-- <b-icon-images class="icon"></b-icon-images> -->
              新建相册
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-upload">
            <router-link to="/">
              <!-- <b-icon-upload class="icon"></b-icon-upload> -->
              上传资源
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <button data-toggle="dropdown" class="btn btn-primary add-button rounded-pill">+ 新建</button>
      <div class="dropdown-menu" id="dropdownMenu2" aria-labelledby="dropdown02">
        <ul class="width-100">
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
      </div> -->
    </div>
    <el-menu-item-group>
      <div class="menu_title">
        <b-icon-wrench></b-icon-wrench>
        资源管理
      </div>
      <el-submenu index="1">
        <template slot="title" >
          <b-icon-file-richtext class="collapse-icon"></b-icon-file-richtext> 文档管理
        </template>
        <el-menu-item-group>
          <el-menu-item :index="`/console/${$route.params.uid}/articles`">
            <b-icon-file-text class="icon"></b-icon-file-text>
            文章管理
          </el-menu-item>
          <el-menu-item :index="`/console/${$route.params.uid}/logs`">
            <b-icon-file-earmark-binary class="icon"></b-icon-file-earmark-binary>
            日志管理
          </el-menu-item>
          <el-menu-item :index="`/console/${$route.params.uid}/series`">
            <b-icon-book class="icon"></b-icon-book>
            系列管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :router="true" :index="`/console/${$route.params.uid}/types`">
        <b-icon-folder2 class="icon"></b-icon-folder2>
        分类管理
      </el-menu-item>
      <el-menu-item :router="true" :index="`/console/${$route.params.uid}/tags`">
          <b-icon-tags class="icon"></b-icon-tags>
          标签管理
      </el-menu-item>
      <el-menu-item index="3" :router="true">
        <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/`">
          <b-icon-images class="icon"></b-icon-images>
          相册管理
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/`">
          <b-icon-file-earmark-zip class="icon"></b-icon-file-earmark-zip>
          资源文件
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/`">
          <b-icon-trash class="icon"></b-icon-trash>
          归档管理
        </router-link>
      </el-menu-item>
    <!-- <el-menu-item> -->
    </el-menu-item-group>
    <el-menu-item-group>
      <!-- <template> -->
        <div class="menu_title">
          <b-icon-gear></b-icon-gear>
          系统设置
        </div>
      <!-- </template> -->

      <el-menu-item>
        <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/user`">
          <b-icon-person class="icon"></b-icon-person>
          个人信息
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link class="nav-link-item" :to="`/console/${$route.params.uid}/user`">
          <b-icon-person class="icon"></b-icon-person>
          团队管理
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link :to="`/console/${$route.params.uid}/stastic`" class="nav-link-item">
            <b-icon-graph-up></b-icon-graph-up>
            统计信息
          </router-link>
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
  <!-- </div> -->
</template>
<script>
// import 'vue-feather-icons'
export default {
  data () {
    return {
      sourceMangements: [
        {
          type: 1,
          children: [
            {
              article: {
                type: '1-1'
              }
            },
            {
              logger: {
                type: '1-2'
              }
            }
          ]
        }
      ],
      systemMangements: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.side-container {
  background: #002338;
  height: 100%;
  font-size: 1rem;
  border: none;
  width: 220px;
  .el-menu {
    width: 100%;
    padding-top: 1rem;
  }
  .nav-link-item {
    font-weight: 500;
    color: #bbbbbb;
  }
  .add-button {
    width: 150px;
    margin-top: 20px;
  }
  .menu_title {
    color: #93979c;
    text-align: left;
    padding-left: 40px;
  }
}

</style>
<style lang="scss">
  .side-container {
    .el-submenu {
      .el-menu-item {
        padding: 0;
      }
    }
  }
</style>
