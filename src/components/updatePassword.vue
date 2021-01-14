<template>
  <div class="forget-container">
    <form class="loginForm">
      <div class="container">
        <div class="form-group loginHead">
          <span class="loginTitle">找回密码</span>
        </div>
        <div class="form-group row login-item">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-lock-fill></b-icon-lock-fill>
              </span>
            </div>
            <input type="password" class="form-control outline-none" placeholder="请输入新密码" aria-label="password" aria-describedby="basic-addon1" v-model="inputInfo.password">
          </div>
        </div>
        <div class="row form-group login-item">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-lock-fill></b-icon-lock-fill>
              </span>
            </div>
            <input type="password" class="form-control outline-none" placeholder="请确认密码" aria-label="password" aria-describedby="basic-addon1" v-model="inputInfo.confirmPassword">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            <Button  type="submit" class="btn-success btn line-input-button" @click="submit">确 认</Button>
          </div>
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
        password: '',
        confirmPassword: ''
      }
    }
  },
  props: ['username'],
  created: function () {
  },
  methods: {
    async submit () {
      const { password, confirmPassword } = this.$data.inputInfo
      const username = this.username
      const confirmCode = localStorage.getItem('confirmCode')
      if (!password || !confirmPassword || password !== confirmPassword) {
        return alert('请填写用户名或者邮箱！')
      }
      await this.$putAjax('/api/user/password', {password, username, confirmCode})
      return this.$router.push('/login')
    }
  }
}
</script>>
<style scoped>
.forget-container {
  position: relative;
  height: 100%;
}
.outline-none {
  border-left: none;
}

.input-group-text {
  color: #41b904;
  font-size:1.1rem;
  background-color: white;
  border-right:none
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

.outline-none {
  border-left: none;
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
