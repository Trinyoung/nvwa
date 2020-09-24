<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-31 19:32:06
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-24 19:59:33
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
     <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="80px">
      <el-form-item label="名称：" prop="title">
        <el-input v-model="dataForm.title"></el-input>
      </el-form-item>
      <el-form-item label="分类：">
         <el-cascader
          :options="types"
          v-model="dataForm.parent"
          :props="{ checkStrictly: true }"
          clearable></el-cascader>
      </el-form-item>
      <el-form-item label="标识码：" v-if="!dataForm.parent" prop="typeCode">
         <el-input v-model="dataForm.typeCode" placeholder="请输入标识码"></el-input>
      </el-form-item>
      <el-form-item label="标签：">
         <el-select v-model="dataForm.tags" placeholder="请选择标签">
          <el-option
            v-for="item in tags"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述：" >
        <el-input type="textarea" v-model="dataForm.description"></el-input>
      </el-form-item>
    </el-form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
      <button type="button" class="btn btn-primary" @click="save">提交</button>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  data () {
    return {
      dataForm: {
        title: '',
        parent: '',
        // tags: [],
        description: '',
        typeCode: ''
      },
      rules: {
        title: [
          {required: true, message: '请输入分类名称', trigger: 'blur'},
          {min: 3, max: 30, message: '长度3 到 30个字符', trigger: 'blur'}
        ],
        typeCode: [
          {required: true, message: '请输入标识码', trigger: 'blur'},
          {min: 4, max: 4, message: '长度为4', trigger: 'blur'}
        ]
      }
    }
  },
  props: ['types', 'tags', 'typeId'],
  mounted () {
    $('.selectpicker').selectpicker()
  },
  methods: {
    save () {
      const id = this.typeId
      const Authorization = `Bearer ${localStorage.getItem('token')}`
      if (!id) {
        axios.post('/api/articles/types', this.dataForm, { headers: { Authorization } }).then(res => {
          console.log(res)
        })
      } else {
        axios.put(`/api/articles/types/${id}`, this.dataForm, { headers: { Authorization } }).then(res => {
          console.log(res)
        })
      }
    }
  }
}
</script>
<style>
  .el-cascader {
    width: 100%;
  }
  .el-select {
    width: 100%;
  }
</style>
