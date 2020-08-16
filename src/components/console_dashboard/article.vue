<template>
    <main role="main" class="container">
      <ul class="nav justify-content-center d-flex align-items-center p-2 my-3 bg-primary rounded shadow-sm header">
          <li class="nav-item">
            <a class="nav-link active item-title" href="#">文章</a>
          </li>
          <li class="nav-item">
            <a class="nav-link item-title" href="#">日志</a>
          </li>
          <li class="nav-item">
            <a class="nav-link item-title" href="#">连载</a>
          </li>
      </ul>
      <form class="bg-white pd-2 form-container my-1 rounded">
        <div class="form-row my-2">
          <div class="col form-inline">
            <strong> 起止日期：</strong>
            <date-picker v-model="searchInfo.startDate" :config="options" @dp-hide="showDatePickResult"></date-picker>
            <span id="split-icon" class="justify-center">至</span>
            <date-picker v-model="searchInfo.endDate" :config="options"></date-picker>
          </div>
          <div class="col-4 form-inline">
            <strong>发布状态：</strong>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value =0 v-model="searchInfo.published">
              <label class="form-check-label" for="inlineCheckbox1">已发布</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value =1 v-model="searchInfo.published">
              <label class="form-check-label" for="inlineCheckbox2">未发布</label>
            </div>
          </div>
        </div>
        <div class="form-row my-2">
          <div class="col form-inline">
            <label for=""><strong>标签选择：</strong> </label>
            <select name="" id="" class="selectpicker border border-gray rounded" multiple data-live-search="true" title="选择标签">
              <option value="">Angular</option>
              <option value="">React</option>
              <option value="">Vue</option>
              <option value="">Nodejs</option>
            </select>
          </div>
          <div class="col-5 d-align-right">
            <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
          </div>
        </div>
      </form>
      <div class="my-0 p-3 bg-white rounded shadow-sm" id="main-content">
        <div class="align-left ">
          <nav aria-label="breadcrumb" class="d-inline-block type-level">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">音乐</a>
              </li>
              <li class="breadcrumb-item">
                <div class="dropdown">
                  <a  data-toggle="dropdown"  id="add-button">
                    流行音乐
                  </a>
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
              </li>
              <li class="breadcrumb-item active" aria-current="page">大中国</li>
            </ol>
          </nav>
          <div class="d-inline-block">
            <router-link to="/editor">
              <button class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="新建"  id="add-button">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                  <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                </svg>
              </button>
            </router-link>
            <router-link to="/editor">
              <button class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="新建"  id="add-button">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                  <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                </svg>
              </button>
            </router-link>
          </div>
        </div>
        <div class="text-muted border-bottom border-gray row d-table">
          <div class="media-body small col-sm-11 col-md-11 d-table-cell">
            <h6 class="text-gray-dark my-2 d-block">大中国</h6>
            <p class="my-2">Donec id elit non mi porta asdfasdfasdfasf到发送到阿斯顿发送dfsgsdfgdsfgdsfgdsfg中文是个我们多看的代码撒打发斯蒂芬大法师的法师打发大水发撒地方撒发大水，到发送到gfsfgsfdgsdfgsdfgfgdsgsdfgdfgsdfgfsgfghdfghdgfhgsdfgsdfgsdfgdsfgdf发阿</p>
            <strong class="text-gray-dark d-block my-2">@Trinyoung 2020-08-05</strong>
          </div>
          <div class="media-body d-table-cell col-sm-1">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bd-placeholder-img mr-2 rounded d-vertical-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </div>
          <div class="media-body d-table-cell col-sm-1">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bd-placeholder-img mr-2 rounded d-vertical-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </div>
        </div>
        <nav aria-label="Page navigation example" id="page-list">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo;</a>
            </li>
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
          共 10 页
        </nav>
      </div>
  </main>
</template>
<script>
// import 'bootstrap-datetimepicker/src/less/bootstrap-datetimepicker.less'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
export default {
  components: {
    datePicker
  },
  data: function () {
    return {
      newestList: [],
      hotList: [],
      searchInfo: {
        startDate: new Date(),
        endDate: new Date(),
        tags: [],
        published: '',
        keyword: ''
      },
      options: {
        format: 'YYYY-MM-DD HH:mm:ss',
        useCurrent: false,
        locale: 'zh-cn'
      }
    }
  },
  created: function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
      $.extend(true, $.fn.datetimepicker.defaults, {
        icons: {
          time: 'far fa-clock',
          date: 'far fa-calendar',
          p: 'fas fa-arrow-up',
          down: 'fas fa-arrow-down',
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fas fa-calendar-check',
          clear: 'far fa-trash-alt',
          close: 'far fa-times-circle'
        }
      })
    })
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    },
    showDatePickResult: function () {
      console.log(this.searchInfo.date)
    }
  }
}
</script>
<style scoped>
  .type-level {
    width: 85%;
  }
  #split-icon {
    display: inline-block;
    width: 30px;
  }
  .border-gray {
    border:gray;
  }
  .form-container {
    padding: 5px;
  }
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }
  .align-left {
    text-align: left;
  }
  .form-check-label {
    font-size: 0.8rem;
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

  .d-table {
    display: table;
  }
  .d-table-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .d-vertical-center {
    vertical-align: middle;
  }
  .d-align-right {
    text-align: right;
  }
  .d-inline-block {
    display: inline-block!important;
  }
  .search-input {
    display: inline-block;
    width: auto;
  }
  #add-button:hover {

  }
</style>
