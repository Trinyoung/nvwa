<template>
  <form class="loginForm">
    <div class="container">
      <div class="form-group row loginHead pd-3">
        <div class="col-sm-12">
          <span class="loginTitle">用户注册</span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3 line-text-right">
          <label for="email" class="line-text-middle labeltitle">邮箱</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="email"
            placeholder="Enter email"
            v-model="userInfo.email"
          />
        </div>
        <div class="col-sm-1">
          <span class="line-text-middle labeltitle text-warning">*</span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3 line-text-right">
          <label for="mobile" class="line-text-middle labeltitle">手机</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            v-model="userInfo.mobile"
            id="mobile"
            placeholder="Enter Your Mobile"
          />
        </div>
        <div class="col-sm-1">
          <span class="line-text-middle labeltitle text-warning">*</span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3 line-text-right">
          <label for="username" class="line-text-middle labeltitle">账号</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="username"
            v-model="userInfo.username"
            placeholder="Enter account"
          />
        </div>
        <div class="col-sm-1">
          <span class="line-text-middle labeltitle text-warning">*</span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3 line-text-right">
          <label for="realName" class="line-text-middle labeltitle">真实姓名</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            v-model="userInfo.realName"
            id="realName"
            placeholder="Enter real name"
          />
        </div>
        <div class="col-sm-1">
          <!-- <span class="line-text-middle labeltitle text-warning">*</span> -->
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3 line-text-right">
          <label for="password" class="line-text-middle labeltitle">密码</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="password"
            v-model="userInfo.password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div class="col-sm-1">
          <span class="line-text-middle labeltitle text-warning">*</span>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-3 line-text-right">
          <label for="confirm-password" class="line-text-middle labeltitle">确认密码</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="password"
            id="confirm-password"
            v-model="userInfo.confirmPassword"
            placeholder="Enter password again"
          />
        </div>
        <div class="col-sm-1">
          <span class="line-text-middle labeltitle text-warning">*</span>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-3 line-text-right">
          <label for="gender" class="labeltitle text-font">性别</label>
        </div>
        <div class="col-sm-3">
          <input type="radio" name="gender" id="gender" v-model="userInfo.gender" value="1"/> male
        </div>
        <div class="col-sm-3">
          <input type="radio" name="gender" id="gender" v-model="userInfo.gender" value="2"/> female
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-3 line-text-right">
          <label for="job" class="line-text-middle labeltitle">工作</label>
        </div>
        <div class="col-sm-7">
          <input
            class="form-control line-input-middle"
            type="text"
            id="job"
            v-model="userInfo.job"
            placeholder="Enter Your Job"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-3 line-text-right">
          <label for="birthday" class="line-text-middle labeltitle">生日</label>
        </div>
        <div class="col-sm-7">
          <date-picker v-model="userInfo.birthday" :config="options" id="birthday"></date-picker>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <Button type="submit" class="button-right btn-primary btn line-input-button" @click="register">注 册</Button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </form>
</template>
<script>
import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  components: {
    datePicker
  },
  data: function () {
    return {
      userInfo: {
        email: '',
        mobile: '',
        username: '',
        realName: '',
        birthday: new Date(),
        gender: 0,
        password: '',
        confirmPassword: ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
        locale: 'zh-cn'
      }
    }
  },
  methods: {
    register: function () {
      const userInfo = this.userInfo
      console.log(userInfo, 'userInfo-------------->')
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

      if (!userInfo.mobile) {
        alert('请填写手机号码')
        return
      }
      axios.post('http://localhost:3000/api/user/register', userInfo).then((result) => {
        console.log(result, 'result+++++++++++>')
        if (result.data.code !== '000') {
          return alert('注册失败，请填写正确的注册信息！')
        }
        return this.$router.push('/login')
      })
    }
  }
}
</script>>
<style scoped>
.loginForm {
  border-radius: 0.5rem;
  margin: auto;
  margin-top: 60px;
  position: relative;
  width: 40rem;
  padding-bottom: 2rem;
  background: white;
}

.labeltitle {
  font-size: 1.2rem;
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
  margin-bottom: 0.5rem;
}

.button-right {
  width: 6rem;
  background: rgb(96, 96, 167);
  margin-bottom: 0.5rem;
}

.line-text-middle {
  display: inline-block;
  line-height: 2.5rem;
  text-align: right;
  font-weight: bold;
}
.line-input-middle {
  display: inline-block;
  height: 90%;
  font-size: 1rem;
}
.line-text-right {
  text-align: right;
}
.text-font {
  font-weight: bold;
}

.loginTitle {
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 4rem;
  height: 100%;
}

.line-input-button {
  display: inline-block;
  line-height: 2rem;
  height: 100%;
  font-size: 1.2rem;
}
.text-warning {
  color: red
}
.line-text-center {
  text-align: center;
}
</style>
