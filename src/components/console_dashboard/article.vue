<template>
  <main>
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
            <option value="">Angular</option>
            <option value="">Angular</option>
            <option value="">Angular</option>
          </select>
        </div>
        <div class="col-5 d-align-right">
          <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        </div>
      </div>
    </form>
    <div class="my-0 p-3 bg-white rounded shadow-sm" id="main-content">
      <div class="align-left">
        <nav aria-label="breadcrumb" class="d-inline-block type-level">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">音乐</a>
            </li>
            <li class="breadcrumb-item">
              <div class="dropdown">
                <a data-toggle="dropdown" id="add-button">流行音乐</a>
                <div class="dropdown-menu" id="dropdownMenu2" aria-labelledby="dropdown02">
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
            <button
              class="btn btn-secondary"
              data-toggle="tooltip"
              data-placement="right"
              title="新建"
              id="add-button"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-plus"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                />
              </svg>
            </button>
          </router-link>
          <router-link to="/editor">
            <button
              class="btn btn-secondary"
              data-toggle="tooltip"
              data-placement="right"
              title="新建"
              id="add-button"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-plus"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">标题</th>
            <th scope="col">分类</th>
            <th scope="col">作者</th>
            <th scope="col">发布时间</th>
            <th scope="col">标签</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Markasdfasdfasdfasdfasdfasdfsadfasdfdsfasddfas</td>
            <td>Markasdfasdfasdfasdfasdfasdfsadfasdfdsfasddfas</td>
            <td>一江春水向东流</td>
            <td>2020-08-26 12:30:30</td>
            <td>vue, Angular, react, nodejs, java, web前端, 知识进阶</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">详情</button>
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example" id="page-list">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo;</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">6</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">7</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">8</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">10</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>共 10 页
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
      $('.selectpicker').selectpicker()
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
  border: gray;
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
  border: none;
}
.row {
  margin-left: 0;
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
  display: inline-block !important;
}
.search-input {
  display: inline-block;
  width: auto;
}

.table td, th {
  vertical-align: middle;
  padding: 0.25rem;
}
.table thead {
  background-color: antiquewhite;
}
.table th {
  padding: 0.75rem;
}
.table .btn {
  height: 2.4rem;
}
.table .handle-cell {
  width: 200px;
}
/* .table  */
</style>
