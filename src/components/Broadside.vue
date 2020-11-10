<template>
  <div class="broadSide my-1">
    <nav id="sidebarMenu" class="d-md-block sidebar collapse">
      <div class="avatar-head">
        <router-link to="/console">
          <img class='avatar' src="https://upload.jianshu.io/users/upload_avatars/7137229/dc133847-5398-42c5-96f3-5ce9828e4b47?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
        </router-link>
        <p>Trinyoung</p>
        <ul class="list-info">
          <li>文章数:0</li>
          <li>浏览量:0</li>
        </ul>
      </div>
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>常用标签</span>
      </h6>

      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        热门文章
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">
            <span data-feather="file-text"></span>
            Current month
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data: function () {
    return {
      listItems: ['星辰大海', '人间百态', '车水马龙', '小桥流水', '大漠孤烟']
    }
  },
  created () {},
  methods: {
    getArticleInfo () {
      Axios.get()
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
}
.broadSide .text-muted {
  font-size: 1.1rem;
}
.avatar-head {
  margin-top: 2rem;
}
.avatar {
  border-radius: 50%;
  width: 30%
}

#sidebarMenu {
  padding-top: 1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: sticky;
  border-radius: 1rem;
  left: 0;
  top: 0;
  min-height: calc(100vh - 48px);
}

.list-info {
  list-style-type: none;
}
</style>
