<template>
    <div class="reffer-container pt-3">
    <div class="border-gray row">
      <div class="col-sm-11">
        <h5 class="border-bottom pb-2 mb-0 ">评论 (10)</h5>
      </div>
      <div class="col-sm-1">
        <div class="comment-icon" data-toggle="collapse" data-target="#collapseExample" >
          <b-icon-chat-dots class="font-2em"></b-icon-chat-dots>
        </div>
      </div>
    </div>
    <div class="collapse" id="collapseExample">
      <form class="my-2 border-bottom border-gray">
        <div class="form-row align-items-center">
          <div class="col-sm-12 my-1">
            <textarea type="text" class="form-control comment-content"  placeholder="添加评论"></textarea>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-sm-8 my-1">
            <input type="text" class="form-control" placeholder="添加您的邮箱">
          </div>
          <div class="col-sm-4 my-1">
            <span> * 必填项</span>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-sm-8 my-1">
            <input type="text" class="form-control" id="inlineFormInputName" placeholder="写上您的昵称">
          </div>
          <div class="col-sm-4 my-1">
            <span> * 限制长度为16个字符</span>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-sm-10 my-1">
            <button class="btn btn-primary" type="button">
              发 表
            </button>
          </div>
        </div>
      </form>
    </div>

    <ul class="list-group list-group-container">
      <li class="list-group-item">
        <div class="comment-item comment-header">
          <b class="comment-author">
            trinyoung
          </b>
          <div class="d-inline-right">
            <b-icon-hand-thumbs-up class="icon"></b-icon-hand-thumbs-up>
            <span class="favorite-num">16</span>
          </div>
        </div>
        <div class="comment-body comment-item">
          <span>我们的人阿斯顿发生</span>
        </div>
        <div class="comment-bottom comment-item">
          <span>2020-08-02</span>
          <span class="hover-change reply-button" data-toggle="collapse" data-target="#collapseReply">回复</span>
          <div class="collapse" id="collapseReply">
            <form class="my-2 border-bottom border-gray">
              <div class="form-row align-items-center">
                <div class="col-sm-12 my-1">
                  <textarea type="text" class="form-control comment-content"  placeholder="添加评论"></textarea>
                </div>
              </div>
              <div class="form-row align-items-center">
                <div class="col-sm-8 my-1">
                  <input type="text" class="form-control" placeholder="添加您的邮箱">
                </div>
                <div class="col-sm-4 my-1">
                  <span> * 必填项</span>
                </div>
              </div>
              <div class="form-row align-items-center">
                <div class="col-sm-8 my-1">
                  <input type="text" class="form-control" id="inlineFormInputName" placeholder="写上您的昵称">
                </div>
                <div class="col-sm-4 my-1">
                  <span> * 限制长度为16个字符</span>
                </div>
              </div>
              <div class="form-row align-items-center">
                <div class="col-sm-10 my-1">
                  <button class="btn btn-primary" type="button">
                    发 表
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="comment-item">
          <b class="margin-auto comment-author">
            一蓑烟雨任平生
          </b>
        </div>
        <div class="comment-body comment-item">
          <span>我们的人阿斯顿发生</span>
        </div>
        <div class="comment-bottom comment-item">
          <span>2020-08-02 </span>
          <span class="hover-change reply-button"> 回复</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['refers']
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
</style>
