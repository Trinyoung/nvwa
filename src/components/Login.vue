<template>
  <!-- <div class="container"> -->
    <form class="loginForm">
        <div class="container">
          <div class="form-group row loginHead pd-3">
            <div class="col-sm-12"><span class="loginTitle">LOGIN</span></div>
          </div>
          <div class="form-group row login-item">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="请输入用户名/手机/邮箱" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <div class="row form-group login-item">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <svg width="1.2em" height="1em" viewBox="0 0 16 16" class="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                  </svg>
                </span>
              </div>
              <input type="password" class="form-control" placeholder="请输入密码" aria-label="password" aria-describedby="basic-addon1">
            </div>
          </div>
          <div class="row form-group width-8 mb-3">
            <div class='col-sm-6'>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="rememberMe" value=true>
              <label class="form-check-label" for="exampleCheck1">remember me</label>
            </div>
            <div class="col-sm-6">
              <router-link to="forgetPassword">
                忘记密码？
              </router-link>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-sm-2">

            </div>
            <div class="col-sm-4">
              <Button type='submit' class='button-left btn-primary btn line-input-button' v-on:click="login">Login</Button>
            </div>
            <div class="col-sm-4">
              <router-link to="/register">
                <Button  type="submit" class="button-right btn-primary btn line-input-button">Register</Button>
              </router-link>
            </div>
              <div class="col-sm-2">
            </div>
          </div>
        </div>
    </form>
</template>
<script>
import axios from 'axios'
export default {
  computed: {

  },
  data: function () {
    return {
      username: '',
      password: '',
      rememberMe: ''
    }
  },
  methods: {
    login: function () {
      console.log(this.username, this.password, this.rememberMe, '信息的啥所发生的')
      axios.post('http://localhost:3000/api/user/login',
        {username: this.username, password: this.password, rememberMe: this.rememberMe}
      ).then(function (result) {
        console.log(result, 'result -------------> result')
        if (result.status !== 200 || result.data.code !== '000') {
          return alert('登录失败, 请检查用户名和密码')
        }
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/home')
      })
    }
  }
}
</script>>
<style scoped>
.loginForm {
  background-color: white;
  border-radius: .5rem;
  margin: auto;
  top: 50%;
  position: relative;
  width: 30rem;
  margin-top: -10rem;
  padding-bottom: 0.5rem;
}

.labeltitle {
  font-size: 1rem;
  color: green;
  margin-right: 0.2rem;
}
.loginHead {
  text-align: center;
  color: blue;
  background: wheat;
  border-radius: 0.5rem 0.5rem 0 0;
}
.button-left {
  margin-right: 0.5rem;
  width: 6rem;
}

.button-right {
  width: 6rem;
  background: rgb(96, 96, 167);
  /* margin-bottom: 0.5rem; */
}
.login-item {
  /* display: inline-block; */
  margin: 0 auto;
  width: 80%;
  font-size: 1.1rem;

}
.width-8 {
  width: 80%;
  margin: 0 auto;
  /* font-size: 0.8rem; */
}
.input-group-text {
  background-color: none;
}
.line-text-middle {
  display: inline-block;
  line-height: 2.5rem;
  height: 100%;
  font-size:1.1rem;
  font-weight: bold;
}
.line-input-middle {
  display: inline-block;
  line-height: 1.2rem;
  height: 100%;
  font-size:1.1rem;
}

.loginTitle {
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: inline-block;
  line-height: 3.2rem;
}

.line-input-button {
  display: inline-block;
  line-height: 1.5rem;
  height: 100%;
  font-size:1.2rem;
}
#rememberMe {
  border: 1px solid green;
  margin-bottom: 2px;
}
</style>
