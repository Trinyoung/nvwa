<template>
    <div class="reffer-container pt-3">
    <div class="border-gray row">
      <div class="col-sm-11">
        <h5 class="border-bottom pb-2 mb-0 ">评论 (10)</h5>
      </div>
      <div class="col-sm-1">
        <div class="comment-icon" data-toggle="collapse" data-target="#collapseExample" >
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
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
            <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
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
  svg {
     margin-bottom: 4px;
  }
</style>
