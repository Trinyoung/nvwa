<template>
  <div class="forget-container">
    <div class="toast-container">
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body">
      验证码邮件已发送，请注意查收邮件！
    </div>
      </div>
    </div>
    <form class="loginForm">
      <div class="container">
        <div class="form-group row loginHead pd-3">
          <div class="col-sm-12"><span class="loginTitle">找回密码</span></div>
        </div>
        <div class="form-group row login-item">
          <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <svg width="1.2em" height="1em" viewBox="0 0 16 16" class="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                </svg>
              </span>
              </div>
              <input type="password" class="form-control" placeholder="请输入密码" aria-label="password" aria-describedby="basic-addon1" v-model="inputInfo.password">
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
            <input type="password" class="form-control" placeholder="请确认密码" aria-label="password" aria-describedby="basic-addon1" v-model="inputInfo.confirmPassword">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            <Button  type="submit" class="button-right btn-primary btn line-input-button" @click="submit">确认</Button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  data: function () {
    return {
      inputInfo: {
        password: '',
        confirmPassword: ''
      }
    }
  },
  props: ['username'],
  created: function () {
  },
  methods: {
    submit: function () {
      const { password, confirmPassword } = this.$data.inputInfo
      const username = this.username
      console.log(username, 'params------------->')
      const confirmCode = localStorage.getItem('confirmCode')
      console.log(username, confirmCode, '---------confirmCode')
      if (!password || !confirmPassword || password !== confirmPassword) {
        return alert('请填写用户名或者邮箱！')
      }
      axios.put('http://localhost:9220/api/user/password', { password, username, confirmCode }).then((res) => {
        if (res.status !== 200 || res.data.code !== '000') {
          return alert('请求失败, 请检查用户名和邮箱！')
        } else {
          $('.toast').toast('show')
          this.$data.buttonInfo.confirmCodeDesc = --this.$data.buttonInfo.time + '秒'
          setInterval(() => {
            if (this.$data.buttonInfo.time > 0) {
              this.$data.buttonInfo.time--
              this.$data.buttonInfo.confirmCodeDesc = this.$data.buttonInfo.time + '秒'
            } else {
              this.$data.buttonInfo.confirmCodeDesc = '获取验证码'
              clearInterval()
            }
          }, 1000)
        }
      })
    }
  }
}
</script>>
<style scoped>
.forget-container {
  position: relative;
  height: 100%;
}
.loginForm {
  background-color: white;
  border-radius: .5rem;
  margin:auto;
  top: 30%;
  position: relative;
  width: 30rem;
  padding-bottom: 0.5rem;
}
.toast-container {
  position: absolute;
  width: 100%;
  text-align: center;
}
.toast {
  margin: auto;
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
