<template>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h1 class="border-bottom border-gray pb-2 mb-0 col-title">大中国</h1>
        <div class="text-muted article-tip">
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><b>作者：</b> Trinyoung</li>
            <li class="list-group-item"><b>更新时间:</b> 2020-08-02</li>
            <li class="list-group-item">
              <b>字数：</b> 2000
            </li>
            <li class="list-group-item">
              <b>阅读数：</b> 2000
            </li>
          </ul>
        </div>
        <div class="content-container pt-3">
          <p class="media-body pb-3 mb-0 lh-125">
            我们的人阿斯顿发生，名字叫中国， 兄弟姐妹都很多， 景色也不错！阿斯顿发手动阀撒打发斯蒂芬撒地方手动阀撒打发斯蒂芬阿斯顿发送到撒打发斯蒂芬阿斯顿发阿法士大夫。
            <code>
              const green = 'a'
            </code>

            <br/>
            家里盘着两条龙啊， 是长江与黄河！
          </p>
          <p class="media-body pb-3 mb-0 lh-125">
            我们的人阿斯顿发生，名字叫中国， 兄弟姐妹都很多， 景色也不错！
          </p>
        </div>
        <div class="reffer-container pt-3">
          <h4 class="border-bottom border-gray pb-2 mb-0">文献引用</h4>
          <ul class="list-group list-group-container">
            <li class="list-group-item">
              <b>1.</b> <span>我们的人阿斯顿发生</span>
            </li>
            <li class="list-group-item">
              <b>2.</b> <span>我们的人阿斯顿发生</span>
            </li>
          </ul>
        </div>
        <div class="reffer-container pt-3">
          <h4 class="border-bottom border-gray pb-2 mb-0">评论 (10)</h4>
          <form class="my-2 border-bottom border-gray">
            <div class="form-row align-items-center">
              <div class="col-sm-10 my-1">
                <label class="sr-only" for="inlineFormInputName">Name</label>
                <textarea type="text" class="form-control" id="inlineFormInputName" placeholder="添加评论"></textarea>
              </div>
              <div class="col-sm-2">
                <button type="submit" class="btn btn-primary">提 交</button>
              </div>
            </div>
          </form>
          <ul class="list-group list-group-container">
            <li class="list-group-item">
              <div>
                <b class="margin-auto">
                  trinyoung
                </b>
                <span class="reply-container small">
                  回复
                </span>
              </div>
              <div class="comment-body">
                <span>我们的人阿斯顿发生</span>
              </div>
              <div class="comment-bottom">
                <span>2020-08-02</span>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <b>
                  trinyoung
                </b>
                <span class="reply-container"></span>
              </div>
              <div class="comment-body">
                <span>我们的人阿斯顿发生</span>
              </div>
              <div class="comment-bottom">
                <span>2020-08-02</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </main>
</template>
<script>
export default {
  data: function () {
    return {
      newestList: [],
      hotList: []
    }
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    }
  }
}
</script>
<style scoped>
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: center;
  }
  .justify-content-center {
    background-image: url('../../../static/首页标题栏.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .item-title {
    color: white;
    font-size: 1.1rem;
  }

  .article-tip {
    margin-left: 1rem;
    text-align: left;
    font-size: 0.8rem;
  }
  .reffer-container {
    margin-top: 1rem;
    text-align: left;
  }
  .content-container {
    font-size: 1rem;
  }
  .list-group-item {
    border: none;
    padding: 0.35rem 0.25rem;
  }
  .reply-container {
    margin-right: 0rem;
  }
  .comment-body {
    margin-left: 1rem;
  }
  .comment-bottom {
    margin-left: 1rem;
    font-size: 0.8rem;
    color: darkgrey;
  }
</style>
