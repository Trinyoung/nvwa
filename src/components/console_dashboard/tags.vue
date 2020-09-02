<template>
  <main class="my-1 shadow-lg bg-white">
    <nav aria-label="breadcrumb" class="title-nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          标签管理
        </li>
      </ol>
    </nav>
    <form class="pb-2 pr-3 pl-3 pt-0 form-container border-bottom">
      <div class="form-row my-2">
        <div class="col form-inline">
        </div>
        <div class="col-5 form-inline align-left">
          <!-- <div class="col align-left"> -->
          <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" v-model="searchInfo.keyword">
          <button class="ml-2 btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
          <button class="ml-2 btn btn-outline-primary my-2 my-sm-0" type="">新增</button>
        <!-- </div> -->
        </div>
      </div>
    </form>
    <div class="my-0 p-3 shadow-sm" id="main-content">
      <div class="breadcrumb">
        <button class="btn btn-primary" data-toggle="modal" data-target="#edit-type">新增</button>
        <div class="modal fade" tabindex="-1" role="dialog" id="edit-type" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">分类管理</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <form>
              <div class="form-group row">
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="recipient-name" placeholder="名称">
                </div>
              </div>
              <div class="form-group row">
                
              </div>
            </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">提交</button>
            </div>
        </div>
          </div>
        </div>
      </div>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">标题</th>
            <th scope="col">分类</th>
            <th scope="col">创建时间</th>
            <th scope="col">标签</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>wen jun neng you ji duo chou yi jiang chun shui xiang dong liu</td>
            <td>音乐/流行音乐/大中国</td>
            <td>2020-08-26 12:30:30</td>
            <td>vue, Angular, react, nodejs, java, web前端, 知识进阶</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <!-- <td>@fat</td> -->
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <!-- <td>@twitter</td> -->
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>Otto</td>
            <!-- <td>@mdo</td> -->
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <!-- <td>@fat</td> -->
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <!-- <td>the Bird</td> -->
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>wen jun neng you ji duo chou yi jiang chun shui xiang dong liu</td>
            <td>音乐/流行音乐/大中国</td>
            <!-- <td>一江春水向东流</td> -->
            <td>2020-08-26 12:30:30</td>
            <td>vue, Angular, react, nodejs, java, web前端, 知识进阶</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <!-- <button type="button" class="btn btn-secondary">详情</button> -->
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>wen jun neng you ji duo chou yi jiang chun shui xiang dong liu</td>
            <td>音乐/流行音乐/大中国</td>
            <!-- <td>一江春水向东流</td> -->
            <td>2020-08-26 12:30:30</td>
            <td>vue, Angular, react, nodejs, java, web前端, 知识进阶</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <!-- <button type="button" class="btn btn-secondary">详情</button> -->
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>windows子系统ubuntu 配置node开发环境</td>
            <td>音乐/流行音乐/大中国</td>
            <!-- <td>一江春水向东流</td> -->
            <td>2020-08-26 12:30:30</td>
            <td>vue, Angular, react, nodejs, java, web前端, 知识进阶</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <!-- <button type="button" class="btn btn-secondary">详情</button> -->
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>wen jun neng you ji duo chou yi jiang chun shui xiang dong liu</td>
            <td>音乐/流行音乐/大中国</td>
            <!-- <td>一江春水向东流</td> -->
            <td>2020-08-26 12:30:30</td>
            <td>vue, Angular, react, nodejs, java, web前端, 知识进阶</td>
            <td class="handle-cell">
              <div class="btn-group" role="group" aria-label="Basic example">
                <!-- <button type="button" class="btn btn-secondary">详情</button> -->
                <button type="button" class="btn btn-secondary">编辑</button>
                <button type="button" class="btn btn-secondary">删除</button>
              </div>
            </td>
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
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import typeEdit from './type_edit'
export default {
  components: {
    datePicker,
    typeEdit
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
.title {
  text-align: left;
}
.title-nav .breadcrumb-item {
  font-weight: bold;
  font-size: 1.5rem;
}
/* .title-nav .breadcrumb {

} */
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

.table th {
  padding: 0.75rem;
}
.table .btn {
  height: 2.4rem;
}
.table .handle-cell {
  width: 200px;
}
</style>
