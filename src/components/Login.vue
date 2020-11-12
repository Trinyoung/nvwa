<template>
  <form class="loginForm border">
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
      <div class="row form-group width-8 mb-3 font-8">
        <div class='col-sm-6'>
          <input type="checkbox" class="form-check-input"  v-model="rememberMe" value=true>
          <label class="form-check-label" for="exampleCheck1" id="rememberMe">记住我</label>
        </div>
        <div class="col-sm-6">
          <router-link to="forgetPassword" class="link form-check-label d-inline-block">
            忘记密码？
          </router-link>
          <!-- <el-link :underline="false" to="forgetPassword">
            忘记密码？
          </el-link> -->
        </div>
      </div>
      <div class="row form-group mb-3">
        <div class="col-sm-2">

        </div>
        <div class="col-sm-8">
          <!-- <Button class='btn-success btn width-8' @click="login()">登 录</Button> -->
          <el-button type="success" class="width-8 line-input-button" @click="login">登 录</el-button>
        </div>
        <div class="col-sm-2">
        </div>
      </div>
      <div class="row form-group mb-0">
        <div class="col-sm-12 font-8">
          <router-link to="/register" class="link">
            还没有注册？ 申请注册
          </router-link>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
// import axios from 'axios'
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
    async login () {
      const request = {username: this.username, password: this.password, rememberMe: this.rememberMe}
      try {
        const result = await this.$postAjax('/api/user/login', request)
        localStorage.setItem('userInfo', JSON.stringify(result.userInfo))
        localStorage.setItem('token', result.token)
        // if (window.history.length > 1) {
        //   console.log(window.history.length, '----------------->')
        //   // return this.$router.go(-1)
        // }
        this.$router.push(`/home/${result.userInfo.uid}`)
      } catch (err) {
        this.$message.error(err.message)
      }
      // localStorage.setItem('userInfo', result)
      // localStorage.setItem('token', )
      // axios.post('/api/user/login',
      //   {username: this.username, password: this.password, rememberMe: this.rememberMe}
      // ).then((result) => {
      //   if (result.status !== 200 || result.data.code !== '000') {
      //     return this.$message.error('登录失败, 请检查用户名和密码')
      //   }
      //   localStorage.setItem('userInfo', JSON.stringify(result.data.userInfo))
      //   localStorage.setItem('token', result.data.token)
      //   // window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/home')
      //   if (window.history.length > 1) {
      //     return this.$router.go(-1)
      //   }
      //   this.$router.push('/home/')
      //   // if () {}
      //   // this.$router.push('/home')
      // }).catch(err => {
      //   this.$message.error('登录出现错误', err.msg)
      // })
    }
  }
}
</script>>
<style scoped>
  .font-8 {
    font-size: .8rem;
  }
  .loginForm {
    background-color: aliceblue;
    border-radius: .5rem;
    margin: auto;
    top: 50%;
    position: relative;
    width: 30rem;
    margin-top: -10rem;
    padding-bottom: 0.5rem;
  }
  .link {
    outline: none;
    color: gray;
  }
  .link:hover {
    color: blue;
  }
  .form-check-label {
    color: gray;
    margin-top: 2px;
  }

  .loginHead {
    text-align: center;
    background: aliceblue;
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
    font-size:1.2rem;
    padding: 0.5rem;
  }
  #rememberMe {
    /* border: 1px solid green; */
    /* margin-bottom: 3px; */
    margin-top: 2px;
  }
</style>
