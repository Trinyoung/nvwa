<template>
    <div class="reffer-container pt-3">
    <div class="border-gray row ">
      <div class="col-sm-10">
        <h5 class="border-bottom border-gray pb-2 mb-0">评论 ({{commentNums}})</h5>
      </div>
    </div>
    <div class="mt-2">
      <el-form label-width="100px" :model="dataForm" ref="dataForm" :rules="rules">
        <el-form-item label="评论内容" prop="content">
          <el-input type="textarea" v-model="dataForm.content" class="content-container" placeholder="请添加评论内容"></el-input>
        </el-form-item>
        <el-form-item label="昵称" v-if="isUser" prop="nilName">
          <el-input v-model="dataForm.nilName" placeholder="请填写昵称，长度限定为10个字符"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" v-if="isUser" prop="email">
          <el-input v-model="dataForm.email" placeholder="请填写邮箱, 不对外显示"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('dataForm')">发 表</el-button>
          <el-button type="danger" plain @click="resetForm('dataForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <ul class="list-group list-group-container">
      <li class="list-group-item" v-for="item in comments" :key="item._id">
        <div class="comment-item comment-header">
          <b class="comment-author">
            {{item.nilName}}
          </b>
          <div class="d-inline-right">
            <b-icon-hand-thumbs-up class="icon"></b-icon-hand-thumbs-up>
            <span class="favorite-num">16</span>
          </div>
        </div>
        <div class="comment-body comment-item">
          <span>{{item.content}}</span>
        </div>
        <div class="comment-bottom comment-item">
          <span>{{formatTime(item.createdAt)}}</span>
          <span class="hover-change reply-button" data-toggle="collapse" data-target="#collapseReply">回复</span>
          <div class="collapse mt-2" id="collapseReply">
            <el-form label-width="100px" :model="dataForm" ref="dataForm" :rules="rules">
              <el-form-item label="评论内容" prop="content">
                <el-input type="textarea" v-model="dataForm.content" class="content-container" placeholder="请添加评论内容"></el-input>
              </el-form-item>
              <el-form-item label="昵称" v-if="!isUser" prop="nilName">
                <el-input v-model="dataForm.nilName" placeholder="请填写昵称，长度限定为10个字符"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" v-if="!isUser" prop="email">
                <el-input v-model="dataForm.email" placeholder="请填写邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="submitForm('dataForm')">发 表</el-button>
                <el-button type="danger" plain @click="resetForm('ruleForm')">取 消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
import moment from 'moment'
export default {
  props: ['refers', 'articleId', 'uid'],
  created () {
    this.isUser = !!this.uid
    this.getComments()
  },
  data () {
    return {
      commentNums: 0,
      comments: [],
      dataForm: {
        content: '',
        articleId: this.articleId
      },
      rules: {
        content: [
          {required: true, message: '请填写评论内容', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请填写邮箱，邮箱不对外显示', trigger: 'blur'},
          {type: 'email', message: '请填写正确的邮箱各式', trigger: 'blur'}
        ],
        nilName: [
          {required: true, message: '请填写昵称', trigger: 'blur'},
          {type: 'string', max: 20, message: '限定长度为10', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const submitForm = Object.assign({
            ariticleId: this.articleId
          }, this.dataForm)
          if (this.uid) {
            submitForm.createdBy = this.uid
          }
          Axios.post('/myapi/comments', submitForm).then(res => {
            this.dataForm.resetFields()
            this.$message({
              type: 'success',
              message: '发表成功'
            })
          }).catch(err => {
            this.$message({
              type: 'error',
              message: `评论发表失败, ${err.msg}`
            })
          })
        }
      })
    },
    getComments () {
      Axios.get(`/myapi/comments/${this.articleId}/list`).then(res => {
        this.comments = res.data.list
        console.log()
        this.commentNums = this.comments.length
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err.msg
        })
      })
    },
    formatTime (unix) {
      return moment(unix * 1000).format('YYYY-MM-DD HH:mm:ss')
    },
    resetFields () {
      this.resetFields()
    }
  }
}
</script>
<style scoped>
  .list-group-item {
    border: none;
    padding: 0.35rem 0.25rem;
  }
  .reply-container {
    margin-right: 0rem;
  }
  .comment-header {
    position: relative;
  }
  .favorite-num {
    margin-top: 0.5rem;
  }
  .comment-body {
    margin-left: 1rem;
  }
  .comment-bottom {
    margin-left: 1rem;
    font-size: 0.8rem;
    color: darkgrey;
  }
  .hover-change:hover {
    cursor: pointer;
    color: blue;
  }
  .reply-button {
    margin:10px;
  }
  .comment-author {
    font-size: 1rem;
  }
  .comment-item {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .d-inline-right {
    display: inline-block;
    margin-right: 1rem;
    position: absolute;
    right: 0;
  }
  .comment-header {
    width: 100%;
  }
  .right-button {
    position: absolute;
    right:0;
  }
  .father-positon {
    position: relative;
  }
  .comment-icon:hover {
    cursor: pointer;
    color: cornflowerblue;
  }
  .comment-content {
    height: 8rem;
  }
  .favorite-icon:hover {
    cursor: pointer;
    color: red;
  }
  .icon {
     margin-bottom: 4px;
  }
  .font-2em {
    width: 2em;
    height: 2em;
  }
  .el-button {
    padding: 10px 10px;
  }
  .el-form-item {
    margin-bottom: 12px;
    width: 90%
  }
  .content-container {
    /* height: 40px; */
    /* margin-bottom: 15px; */
    /* resize: none; */
  }
</style>
<style>
  .el-form-item__error {
    padding-top: 1px;
  }
</style>
