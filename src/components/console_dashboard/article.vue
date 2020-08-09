<template>
    <main role="main" class="container">
      <ul class="nav justify-content-center d-flex align-items-center p-3 my-3  bg-purple rounded shadow-sm header">
          <li class="nav-item">
            <a class="nav-link active item-title" href="#">文章</a>
          </li>
          <li class="nav-item">
            <a class="nav-link item-title" href="#">日志</a>
          </li>
          <li class="nav-item">
            <a class="nav-link item-title" href="#">连载</a>
          </li>
          <li class="nav-item">
            <a class="nav-link item-title" href="#">相册</a>
          </li>
          <li class="nav-item">
            <a class="nav-link item-title" href="#">标签</a>
          </li>
      </ul>
      <div class="row">
          <div class="col-sm-0 col-md-3"></div>
          <div class="col-md-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="搜索" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" id="basic-addon2">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  </svg>
                </button>
              </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <div class="dropdown">
              <button class="btn btn-secondary" data-toggle="dropdown"  id="add-button">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                  <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                </svg>
              </button>
              <div class="dropdown-menu" id='dropdownMenu2' aria-labelledby="dropdown02">
                <ul>
                  <li class="dropdown-item">
                    <router-link to="/editor">新建文章</router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link to="/">新建日志</router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link to="/">新建系列</router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link to="/">新建相册</router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link to="/">新建标签</router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link to="/">上传资源</router-link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div class="my-0 p-3 bg-white rounded shadow-sm" id="main-content">
        <div class="media text-muted pt-3">
          <!-- <svg class="bd-placeholder-img mr-2 rounded" width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg> -->
          <div class="media-body mb-0 small lh-125 border-bottom border-gray d-inline">
            <strong class="text-gray-dark my-2 d-block">@username</strong>
            <p class="my-2">Donec id elit non mi porta gravida at eget metus.阿斯顿发送到发答案是发送到发送到发送到阿斯顿发送到发送到发阿</p>
            <strong class="text-gray-dark d-block my-2">2020-08-05</strong>
          </div>
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bd-placeholder-img mr-2 rounded" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </div>
        <div class="media text-muted pt-3">
          <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"/><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus.
          </p>
        </div>
      </div>
      <nav aria-label="Page navigation example" id="page-list">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo;</a>
          </li>
          <!-- <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a> -->
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">7</a></li>
          <li class="page-item"><a class="page-link" href="#">8</a></li>
          <li class="page-item"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">10</a></li>
          <li class="page-item">
            <a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a>
          </li>
        </ul>
      </nav>
  </main>
</template>
<script>
export default {
  data: function () {
    return {
      newestList: [],
      hotList: []
    }
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    }
  }
}
</script>
<style scoped>
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }
  .header {
    /* background-image: image('../../static/首页标题栏.jpg'); */
    background-image: url('../../../static/首页标题栏.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* opacity: 0.5; */
  }
  .item-title {
    color: white;
    font-size: 1.1rem;
  }
  #search-input {
    display: inline-block;
  }

  #basic-addon2 {
    width: 4rem;
  }
  #page-list {
    margin-top: 0.5rem;
  }
  .pagination {
    margin: 0 auto;
  }
  .list-group-item {
    border: none
  }
  .row {
    margin-left:0;
    margin-right: 0;
  }
  .pagination {
    width: 300px;
  }
</style>
