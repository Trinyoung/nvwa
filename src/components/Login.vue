<template>
  <form class="loginForm">
    <div class="container">
      <div class="form-group loginHead pd-3">
        <span class="loginTitle">登 录</span>
      </div>
      <div class="form-group row login-item">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-person-fill></b-icon-person-fill>
            </span>
          </div>
          <input
            type="text"
            class="form-control outline-none"
            placeholder="请输入用户名/手机/邮箱"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="username"/>
        </div>
      </div>
      <div class="row form-group login-item">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-lock-fill></b-icon-lock-fill>
            </span>
          </div>
          <input
            type="password"
            class="form-control outline-none"
            placeholder="请输入密码"
            aria-label="password"
            aria-describedby="basic-addon1"
            v-model="password"
          />
        </div>
      </div>
      <div class="form-group width-8 mb-3 font-8">
        <div class="d-inline-block mr-3">
          <input
          type="checkbox"
          class="form-check-input"
          v-model="rememberMe"
          value="true"/>
          <label class="form-check-label" for="exampleCheck1" id="rememberMe">记住我</label>
        </div>
        <div class="d-inline-block ml-3">
          <router-link
          to="forgetPassword"
          class="link form-check-label d-inline-block">
          忘记密码？
        </router-link>
        </div>
      </div>
      <div class="row form-group mb-3">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <el-button
            type="success"
            class="width-8 line-input-button"
            @click="login"
            >登 录</el-button
          >
        </div>
        <div class="col-sm-2"></div>
      </div>
      <div class="form-group mb-0 font-8 text-center">
        <router-link to="/register" class="link text-center">
          还没有注册？ 申请注册
        </router-link>
      </div>
    </div>
  </form>
</template>
<script>
// import axios from 'axios'
export default {
  computed: {},
  data: function () {
    return {
      username: '',
      password: '',
      rememberMe: ''
    }
  },
  methods: {
    async login () {
      const request = {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      }
      try {
        const result = await this.$postAjax('/api/user/login', request)
        localStorage.setItem('userInfo', JSON.stringify(result.userInfo))
        localStorage.setItem('token', result.token)
        this.$router.push(`/person/${result.userInfo.uid}`)
      } catch (err) {
        this.$message.error(err.message)
      }
    }
  }
}
</script>>
<style scoped>
.font-8 {
  font-size: 0.8rem;
}
.input-group-text {
  color: #41b904;
  font-size:1.1rem;
  background-color: white;
  border-right:none
}
.link {
  outline: none;
  color: #8fc475!important;
}
.link:hover {
  color: #41b904!important;
}
.form-check-label {
  margin-top: 2px;
}

.loginHead {
  text-align: center;
  border-radius: 0.5rem 0.5rem 0 0;
}

.login-item {
  margin: 0 auto;
  width: 80%;
  font-size: 1.1rem;
}
.width-8 {
  width: 80%;
  margin: 0 auto;
}
.outline-none {
  border-left: none;
}
.line-text-middle {
  display: inline-block;
  line-height: 2.5rem;
  height: 100%;
  font-size: 1.1rem;
  font-weight: bold;
}
.line-input-middle {
  display: inline-block;
  line-height: 1.2rem;
  height: 100%;
  font-size: 1.1rem;
}

.loginTitle {
  font-size: 1.5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: inline-block;
  line-height: 3.2rem;
}

.line-input-button {
  font-size: 1.2rem;
  padding: 0.5rem;
}
#rememberMe {
  margin-top: 2px;
}
.loginForm {
    margin: auto;
    top: 50%;
    position: relative;
    width: 100%;
    margin-top: -10rem;
    padding-bottom: 0.5rem;
}
@media (min-width:30rem) {
  .loginForm {
    background-color: white;
    border: 1px solid rgb(202, 201, 201);
    border-radius: 0.5rem;
    max-width: 30rem;
    box-shadow: rgb(243, 239, 239);
  }
}
</style>
