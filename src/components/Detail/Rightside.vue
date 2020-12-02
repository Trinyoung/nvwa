<template>
  <div class="col-md-1 right-side my-3">
    <div class="sidebar">
      <div class="my-3 sidebar-item shadow-sm tag-item">
        <b-icon-hand-thumbs-up width="1.8em" height="1.8em" class="tag" >
        </b-icon-hand-thumbs-up>
        点 赞
      </div>
      <div class="my-3 sidebar-item shadow-sm tag-item">
        <b-icon-share width="1.8em" height="1.8em" class="tag"></b-icon-share>
        分享
      </div>
      <div class="my-3 sidebar-item shadow-sm tag-item" v-if="canCollect">
        <b-icon-star width="1.8em" height="1.8em" class="tag"></b-icon-star>
        收藏
      </div>
      <div class="my-3 sidebar-item shadow-sm tag-item" v-if="isAuthor">
        <router-link :to="{name: 'Editor', params: { articleId }}">
          <b-icon-pencil-square width="1.8em" height="1.8em" class="tag"></b-icon-pencil-square>
        </router-link>
        编辑
      </div>
      <div class="my-3 sidebar-item shadow-sm tag-item" >
        <b-icon-reply @click="$router.go(-1)" width="1.8em" height="1.8em" class="tag"></b-icon-reply>
        返回
      </div>
      <div v-if="isAuthor" class="my-3 sidebar-item shadow-sm tag-item">
        <b-icon-trash width="1.8em" height="1.8em" class="tag"></b-icon-trash>
        删除
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      canCollect: false
    }
  },
  props: ['articleId', 'isAuthor'],
  created () {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.canCollect = true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.sidebar {
  position: fixed;
  top: 150px;
  left: 100px;
}
.sidebar-item {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  color: darkgray;
  font-size: 0.9rem;
  background: aliceblue;
}
.sidebar-item :hover{
  color: red;
  cursor: pointer;
  border: 1px solid aliceblue;
}
.tag  {
  /* color: red; */
  margin: 0 auto;
  display: block;
  color: darkgray;
}
.tag-item {
  width: 4rem;
  height: 4rem;
  border-radius: 50% 50% 50% 50%;
  border: 1px solid aliceblue;
  margin: 0 auto;
}

.reffer-container {
  background: cadetblue;
}

.bi {
  margin-top: 0.5rem;
}
.input-group-text {
  font-weight: bold;
}
#add-button {
  font-weight: bold;
}

.list-item {
  position: relative;
  display: block;
  padding: 0.2rem 1.25rem;
  text-align: left;
}
.list-group-container {
  background: lemonchiffon;
}
.list-group-item {
  border: none;
  text-align: left;
  padding: 0.4rem 0.75rem;
  background: none;
}
</style>
