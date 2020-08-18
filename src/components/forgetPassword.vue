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
                  <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg>
              </span>
              </div>
              <input type="text" class="form-control" placeholder="请输入用户名" aria-label="Username" aria-describedby="basic-addon1" v-model="inputInfo.username">
          </div>
        </div>
        <div class="row form-group login-item">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="邮箱" aria-label="password" aria-describedby="basic-addon1" v-model="inputInfo.email">
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
              <input type="text" class="form-control" placeholder="请输入验证码" aria-label="confirmCode" aria-describedby="basic-addon1" v-model="inputInfo.confirmCode">
              <div class="input-group-append">
                <button class="btn btn-outline-success" id="basic-addon2" @click="cutdown">{{buttonInfo.confirmCodeDesc}}</button>
              </div>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            <Button  type="submit" class="button-right btn-primary btn line-input-button" @click="next">下一步</Button>
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
        username: '',
        email: '',
        confirmCode: ''
      },
      buttonInfo: {
        time: 60,
        confirmCodeDesc: '获取验证码'
      }
    }
  },
  created: function () {
  },
  methods: {
    cutdown: function () {
      const { username, email } = this.$data.inputInfo
      if (!username || !email) {
        return alert('请填写用户名或者邮箱！')
      }
      axios.post('http://localhost:9220/api/user/confirmCode', { username, email }).then((res) => {
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
    },
    next: function () {
      const params = Object.assign({}, this.inputInfo)
      const username = this.inputInfo.username
      localStorage.setItem('confirmCode', this.inputInfo.confirmCode)
      console.log(params, '参数在这里呢------------->')
      axios.put('http://localhost:9220/api/user/confirmCode', params).then((result) => {
        console.log(result, 'result')
        if (result.status !== 200 || result.data.code !== '000') {
          return alert('验证码、邮箱或者用户名输入错误')
        }
        this.$router.push(`/${username}/updatePassword`)
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
