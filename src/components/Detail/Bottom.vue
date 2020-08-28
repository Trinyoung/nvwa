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
          <b class="margin-auto comment-author">
            trinyoung
          </b>
          <div class="d-inline-right">
            <svg  width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up favorite-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
            </svg>
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
    display: inline;
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
</style>
