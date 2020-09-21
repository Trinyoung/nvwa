<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-31 19:32:06
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-14 18:17:51
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\components\console_dashboard\type_edit.vue
-->
<template>
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
            <input type="text" class="form-control" id="recipient-name" placeholder="分类名称">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-5">
            <select class="form-control">
              <option>一级分类</option>
            </select>
          </div>
          <div class="col-sm-5">
            <select class="form-control">
              <option>一级分类</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-8">
            <select name="tags" id="tags-picker" class="selectpicker form-control" title="添加标签" data-live-search="true" multiple>
              <option value="" data-content="<span class='badge badge-success'>angular</span>">angular</option>
              <option value="" data-content="<span class='badge badge-success'>react</span>">react</option>
              <option value="" data-content="<span class='badge badge-success'>vue</span>">vue</option>
              <option value="" data-content="<span class='badge badge-success'>javascript</span>">js</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <textarea class="form-control" id="description" placeholder="描述"></textarea>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
      <button type="button" class="btn btn-primary">提交</button>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import Axios from 'axios'
export default {
  data () {
    return {
      typeName: '',
      firstType: '',
      secondType: '',
      description: ''
    }
  },
  mounted () {
    $('.selectpicker').selectpicker()
  },
  methods: {
    save (id) {
      const condition = {}
      if (id) {

      }
    }
  }
}
</script>
<style scoped>
  main {
    text-align: left;
  }
  .edit-container {
    height: calc(100vh- 48px);
  }
  .title {
    /* background: gray; */
  }
  .col-form-label {
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
  .row {
    margin-left: 0;
    /* height: 40px; */
  }
  .submit {
    text-align: center;
  }
  .submit-button {
    width: 30%;
  }
</style>
