<template>
  <div class="reffer-container pt-3">
    <div class="border-gray row ">
      <div class="col-sm-10">
        <h5 class="border-bottom border-gray pb-2 mb-0">评论 ({{commentNums}})</h5>
      </div>
    </div>
    <div class="mt-2">
      <el-form label-width="100px" :model="dataForm" :rules="rules">
        <el-form-item label="评论内容" prop="content">
          <el-input type="textarea" v-model="dataForm.content" class="content-container" placeholder="请添加评论内容"></el-input>
        </el-form-item>
        <el-form-item label="昵称" v-if="!isUser" prop="nilName">
          <el-input v-model="dataForm.nilName" placeholder="请填写昵称，长度限定为10个字符"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" v-if="!isUser" prop="email">
          <el-input v-model="dataForm.email" placeholder="请填写邮箱, 不对外显示"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" :disabled="!dataForm.content" @click="submitForm('dataForm')">发 表</el-button>
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
          <div class="d-inline-right" v-bind:class="{'isFavorited':item.isFavorited, 'favorite-icon':!item.isFavorited}">
            <b-icon-hand-thumbs-up width="1.5em" height="2em" @click="setCommentFavorite(item)"></b-icon-hand-thumbs-up>
            <span class="favorite-num align-bottom">{{item.favoriteNum || 0}}</span>
          </div>
        </div>
        <div class="comment-body comment-item">
          <span>{{item.content}}</span>
        </div>
        <div class="comment-bottom comment-item">
          <span>{{formatTime(item.createdAt)}}</span>
          <span class="hover-change reply-button" data-toggle="collapse" :data-target="`#collapseReply${item._id}`">回复</span>
          <div class="collapse mt-2" :id="`collapseReply${item._id}`">
            <el-form label-width="100px" v-model="replyForm[item._id]" :rules="rules">
              <el-form-item label="评论内容" prop="content">
                <el-input type="textarea" v-model="replyForm[item._id].content" class="content-container" placeholder="请添加评论内容"></el-input>
              </el-form-item>
              <el-form-item label="昵称" v-if="!isUser" prop="nilName">
                <el-input v-model="replyForm[item._id].nilName" placeholder="请填写昵称，长度限定为10个字符"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" v-if="!isUser" prop="email">
                <el-input v-model="replyForm[item._id].email" placeholder="请填写邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" :disabled="!replyForm[item._id].content"
                  @click="submitForm(`replyForm[${item._id}]`, item._id, replyForm[item._id], item.parent)"
                  data-toggle="collapse" :data-target="`#collapseReply${item._id}`"
                  >发 表</el-button>
                <el-button type="danger" plain @click="resetForm(`replyForm_${item._id}`)" data-toggle="collapse" :data-target="`#collapseReply${item._id}`">取 消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="comment-children">
          <ul class="list-group list-group-container">
            <li class="list-group-item" v-for="ele in item.children" :key="ele._id">
              <div class="comment-item comment-header">
                <b class="comment-author">
                  {{ele.nilName}}
                </b>
                <div class="d-inline-right"  v-bind:class="{'isFavorited':ele.isFavorited, 'favorite-icon':!ele.isFavorited}" >
                  <b-icon-hand-thumbs-up width="1.5em" height="2em" @click="setCommentFavorite(ele)"></b-icon-hand-thumbs-up>
                  <span class="favorite-num align-bottom">{{ele.favoriteNum || 0}}</span>
                </div>
              </div>
              <div class="comment-target comment-item" v-if="ele.target">
                <div class="mb-2">
                  @ {{ele.target.nilName}}
                </div>
                <div>
                  {{ele.target.content}}
                </div>
              </div>
              <div class="comment-body comment-item">
                <span>{{ele.content}}</span>
              </div>
              <div class="comment-bottom">
                <span>{{formatTime(ele.createdAt)}}</span>
                <span class="hover-change reply-button" data-toggle="collapse" :data-target="`#collapseReply${ele._id}`">回复</span>
                <div class="collapse mt-2" :id="`collapseReply${ele._id}`" >
                  <el-form label-width="100px" v-model="replyForm[ele._id]" :ref='`replyForm.${ele._id}`'>
                    <el-form-item label="评论内容" prop="content">
                      <el-input type="textarea" v-model="replyForm[ele._id].content" class="content-container" placeholder="请添加评论内容"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" v-if="!isUser" prop="nilName">
                      <el-input v-model="replyForm[ele._id].nilName" placeholder="请填写昵称，长度限定为10个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" v-if="!isUser" prop="email">
                      <el-input v-model="replyForm[ele._id].email" placeholder="请填写邮箱"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="success" :disabled="!replyForm[ele._id].content"
                        data-toggle="collapse" :data-target="`#collapseReply${ele._id}`"
                        @click="submitForm(`replyForm.${ele._id}`, ele._id, replyForm[ele._id], ele.parent)">发 表</el-button>
                      <el-button type="danger" plain @click="resetForm(`replyForm[${ele._id}]`, ele._id)"
                        data-toggle="collapse" :data-target="`#collapseReply${ele._id}`">取 消</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
import moment from 'moment'
import $ from 'jquery'
export default {
  props: ['refers', 'articleId', 'uid'],
  created () {
    const vistorInfo = this.$cookie.get('visitInfo')
    this.vistorInfo = JSON.stringify(vistorInfo)
    this.isUser = !!this.uid || !!vistorInfo
    this.getComments()
    this.dataForm.articleId = this.articleId
    this.replyForm.articleId = this.articleId
  },
  data () {
    return {
      commentNums: 0,
      comments: [],
      visitInfo: {
        nilName: '',
        email: ''
      },
      dataForm: {
      },
      replyForm: {},
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
          {type: 'string', max: 20, message: '限定长度为20', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async submitForm (formName, reply, data, parent) {
      const submitForm = Object.assign({
        articleId: this.articleId
      }, this.dataForm, data)
      if (this.uid) {
        submitForm.createdBy = this.uid
      }
      if (this.vistorInfo) {
        submitForm.nilName = this.visitInfo.nilName
        submitForm.email = this.visitInfo.email
      }
      if (reply) {
        submitForm.reply = reply
        submitForm.isTop = 0
        submitForm.parent = parent || reply
      }
      try {
        await this.$postAjax('/myapi/comments', submitForm)
        $(`#collapseReply${reply}`).collapse(false)
        this.$message.success('发表成功')
        this.getComments()
        if (this.$cookie.get('visitInfo')) {
          this.isUser = true
        }
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async getComments () {
      let url = `/myapi/comments/${this.articleId}/list`
      if (this.uid) {
        url += `?uid=${this.uid}`
      }
      try {
        const result = await this.$getAjax(url)
        this.comments = result
        this.commentNums = this.comments.length
        this.comments.forEach(item => {
          if (item.children) {
            item.children.forEach(ele => {
              this.$set(this.replyForm, ele._id, {})
            })
          }
          this.$set(this.replyForm, item._id, {})
        })
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async setCommentFavorite (comment) {
      const isFavorited = sessionStorage.getItem(`comment_favorite_${comment._id}`)
      if (comment.isFavorited || isFavorited) {
        if (!comment.isFavorited) {
          comment.isFavorited = true
        }
        return this.$message.error('已经点赞过了, 请勿重复点赞！')
      }
      if (!comment.isFavorited && !isFavorited) {
        try {
          const request = {commentId: comment._id, createdBy: this.uid, authorUid: this.uid}
          const result = await this.$postAjax('/myapi/comments/favorites', request)
          comment.favoriteNum = result
          comment.isFavorited = true
          if (!this.uid) {
            sessionStorage.setItem(`comment_favorite_${comment._id}`, 1)
          }
        } catch (err) {
          this.$message.error(err.message)
        }
      }
    },
    getCommentFavorites () {
      Axios.get('/myapi/comments/favorites', {})
    },
    formatTime (unix) {
      return moment(unix * 1000).format('YYYY-MM-DD HH:mm:ss')
    },
    resetForm (formName, id) {
      this.replyForm[formName] = {}
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
    display: inline-block;
    /* margin-top: 0.5rem; */
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
    font-size: 0.9rem;
  }
  .comment-item {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
  }
  .comment-target {
    background:rgb(246,248,250);
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: gray;
  }
  .comment-children {
    margin-left: 1rem;
    margin-right: 1rem;
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
  .comment-body {
    margin-right: 2rem;
  }
  .favorite-icon {
    color: darkgray;
  }
  .isFavorited {
    color: red
  }
  .isFavorited:hover {
    cursor: pointer;
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
</style>
<style>
  .el-form-item__error {
    padding-top: 1px;
  }
</style>
