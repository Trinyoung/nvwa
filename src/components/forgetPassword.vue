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
        <div class="form-group loginHead pd-3">
          <span class="loginTitle">找回密码</span>
        </div>
        <div class="form-group  login-item">
          <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-person-fill></b-icon-person-fill>
              </span>
              </div>
              <input type="text" class="form-control outline-none" placeholder="请输入用户名" aria-label="Username" aria-describedby="basic-addon1" v-model="inputInfo.username">
          </div>
        </div>
        <div class=" form-group login-item">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-envelope-fill></b-icon-envelope-fill>
              </span>
            </div>
            <input type="text" class="form-control outline-none" placeholder="邮箱" aria-label="password" aria-describedby="basic-addon1" v-model="inputInfo.email">
          </div>
        </div>
        <div class=" form-group login-item">
          <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <b-icon-lock-fill></b-icon-lock-fill>
                </span>
              </div>
              <input type="text" class="form-control outline-none" placeholder="请输入验证码" aria-label="confirmCode" aria-describedby="basic-addon1" v-model="inputInfo.confirmCode">
              <div class="input-group-append">
                <button class="btn btn-outline-success" id="basic-addon2" @click="cutdown">{{buttonInfo.confirmCodeDesc}}</button>
              </div>
          </div>
        </div>
        <div class=" form-group">
          <!-- <div class="col-sm-4"> -->
          <Button  type="submit" class="btn-success btn line-input-button" @click="next">下一步</Button>
          <!-- </div> -->
        </div>
      </div>
    </form>
  </div>
</template>
<script>
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
    async cutdown () {
      const { username, email } = this.$data.inputInfo
      if (!username || !email) {
        return alert('请填写用户名或者邮箱！')
      }
      try {
        await this.$postAjax('/api/user/confirmCode', {username, email})
      } catch (err) {
        return this.$message.error(err.message)
      }

      this.buttonInfo.confirmCodeDesc = --this.buttonInfo.time + '秒'
      setInterval(() => {
        if (this.buttonInfo.time > 0) {
          this.buttonInfo.confirmCodeDesc = --this.buttonInfo.time + '秒'
        } else {
          this.buttonInfo.confirmCodeDesc = '获取验证码'
          clearInterval()
        }
      }, 1000)
    },
    async next () {
      const params = Object.assign({}, this.inputInfo)
      const username = this.inputInfo.username
      localStorage.setItem('confirmCode', this.inputInfo.confirmCode)
      try {
        await this.$putAjax('/api/user/confirmCode', params)
        this.$router.push(`/${username}/updatePassword`)
      } catch (err) {
        return this.$message.error(err.message)
      }
    }
  }
}
</script>>
<style scoped>
.forget-container {
  position: relative;
  height: 100%;
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
}
.input-group-text {
  background-color: white;
  color: #41b904;
  background-color: white;
  border-right:none
}
.outline-none {
  border-left: none;
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
@media (max-width: 30rem) {
  .loginForm {
    border-radius: 0.5rem;
    margin: auto;
    top: 50%;
    position: relative;
    width: 100%;
    margin-top: -10rem;
    padding-bottom: 0.5rem;
  }
}
@media (min-width:30rem) {
  .loginForm {
    background-color: white;
    border: 1px solid rgb(202, 201, 201);
    border-radius: 0.5rem;
    margin: auto;
    top: 50%;
    position: relative;
    max-width: 30rem;
    margin-top: -10rem;
    padding-bottom: 0.5rem;
    box-shadow: rgb(243, 239, 239);
  }
}
</style>
