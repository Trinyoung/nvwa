<template>
  <form class="loginForm">
    <div class="container">
      <div class="form-group row loginHead pd-3">
        <div class="col-sm-12"><span class="loginTitle">登 录</span></div>
      </div>
      <div class="form-group row login-item">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-person></b-icon-person>
            </span>
          </div>
          <input type="text" class="form-control" placeholder="请输入用户名/手机/邮箱" aria-label="Username" aria-describedby="basic-addon1" v-model="username">
        </div>
      </div>
      <div class="row form-group login-item">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-lock></b-icon-lock>
            </span>
          </div>
          <input type="password" class="form-control" placeholder="请输入密码" aria-label="password" aria-describedby="basic-addon1" v-model="password">
        </div>
      </div>
      <div class="row form-group width-8 mb-2">
        <div class='col-sm-6'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="rememberMe" value=true>
          <label class="form-check-label" for="exampleCheck1">记住我</label>
        </div>
        <div class="col-sm-6">
          <router-link to="forgetPassword">
            忘记密码？
          </router-link>
        </div>
      </div>
      <div class="row form-group mb-1">
        <div class="col-sm-2">

        </div>
        <div class="col-sm-8">
          <Button type='submit' class='button-left btn-primary btn line-input-button width-8' v-on:click="login">登录</Button>
        </div>
        <div class="col-sm-2">
        </div>
      </div>
      <div class="row form-group mb-0">
        <div class="col-sm-12 font-8">
          <router-link to="/register">
            还没有注册？ 申请注册
          </router-link>
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
      axios.post('/api/user/login',
        {username: this.username, password: this.password, rememberMe: this.rememberMe}
      ).then((result) => {
        console.log(result, 'result -------------> result')
        if (result.status !== 200 || result.data.code !== '000') {
          return alert('登录失败, 请检查用户名和密码')
        }
        console.log(result.data, '----------data')
        localStorage.setItem('userInfo', JSON.stringify(result.data.userInfo))
        localStorage.setItem('token', result.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>>
<style scoped>
  .font-8 {
    font-size: .8rem;
  }
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
