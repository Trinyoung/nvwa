<template>
  <form class="loginForm">
    <div class="container">
      <div class="form-group row loginHead">
        <div class="col-sm-12">
          <span class="loginTitle">REGISTER</span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <label for="username" class="line-text-middle labeltitle">Email</label>
          <span>*</span>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="username"
            placeholder="Enter email"
          />
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <label for="username" class="line-text-middle labeltitle">Phone</label>
          <span>*</span>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="username"
            placeholder="Enter Your Phone"
          />
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <label for="username" class="line-text-middle labeltitle">Username</label>
          <span>*</span>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="username"
            placeholder="Enter account"
          />
        </div>
        <!-- <div class="col-sm-1"></div> -->
      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <label for="username" class="line-text-middle labeltitle">RealUsername</label>
          <span>*</span>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="username"
            placeholder="Enter real name"
          />
        </div>
        <!-- <div class="col-sm-1"></div> -->
      </div>
      <div class="row form-group">
        <div class="col-sm-4">
          <label for="password" class="line-text-middle labeltitle">password</label>
          <span>*</span>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <!-- <div class="col-sm-1"></div> -->
      </div>
      <div class="row form-group">
        <div class="col-sm-4">
          <label for="password" class="line-text-middle labeltitle">confirm password</label>
          <span>*</span>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="password"
            id="password"
            placeholder="Enter password again"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">
          <label for="username" class="labeltitle text-font">gender</label>
        </div>
        <div class="col-sm-3">
          <input type="radio" name="gender" /> male
        </div>
        <div class="col-sm-3">
          <input type="radio" name="gender" /> female
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">
          <label for="password" class="line-text-middle labeltitle">Job</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="password"
            id="password"
            placeholder="Enter Your Job"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <Button type="submit" class="button-right btn-primary btn line-input-button">Register</Button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </form>
  <!-- </div> -->
</template>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      email: '',
      phone: '',
      username: '',
      birthday: '',
      gender: 0,
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register: function () {
      // if ($data.email){}
      const userInfo = this.data
      if (!userInfo.username) {
        alert('缺少用户名')
        return
      }

      if (!userInfo.password) {
        alert('请填写密码')
        return
      }

      if (
        userInfo.password &&
        userInfo.confirmPassword &&
        userInfo.password !== userInfo.confirmPassword
      ) {
        alert('请保持密码与确认密码一致')
        return
      }

      if (!userInfo.email) {
        alert('请填写邮箱')
        return
      }

      if (userInfo.phone) {
        alert('请填写手机号码')
        return
      }
      axios.post('localhost:3000/api/user/register', userInfo).then((result) => {
        window.location('/')
      })
    }
  }
}
</script>>
<style scoped>
.loginForm {
  background-color: white;
  border-radius: 0.5rem;
  margin: auto;
  top: 50%;
  position: relative;
  width: 40rem;
  margin-top: -20rem;
  padding-bottom: 2rem;
}

.labeltitle {
  font-size: 1.2rem;
  color: green;
  margin-right: 0.2rem;
}

.loginHead {
  text-align: center;
  color: blue;
  /* background: wheat; */
  height: 4rem;
  display: inline-box;
  line-height: 100%;
}
.button-left {
  margin-right: 0.5rem;
  width: 6rem;
  margin-bottom: 0.5rem;
}

.button-right {
  width: 6rem;
  background: rgb(96, 96, 167);
  margin-bottom: 0.5rem;
}

.line-text-middle {
  display: inline-box;
  line-height: 3rem;
  height: 100%;
  /* font-size:25px; */
  font-weight: bold;
}
.line-input-middle {
  display: inline-box;
  line-height: 3rem;
  height: 100%;
  font-size: 1.2rem;
}

.text-font {
  /* font-size: 40px; */
  font-weight: bold;
}

.loginTitle {
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: inline-box;
  line-height: 4rem;
  height: 100%;
}

.line-input-button {
  display: inline-box;
  line-height: 2rem;
  height: 100%;
  font-size: 1.2rem;
}
</style>
