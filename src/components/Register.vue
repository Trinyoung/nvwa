<template>
  <!-- <form class="loginForm">
    <div class="container border">
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
            v-model="userInfo.email"/>
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
  </form> -->
  <el-form class="border loginForm" label-width="100px" label-color="" :model="userInfo" :rules="rules" ref="userInfo">
    <div class="form-group loginHead pd-3">
      <span class="loginTitle">用户注册</span>
    </div>
    <el-form-item label="用户名" class="labeltitle" prop="username">
      <el-input v-model="userInfo.username"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="userInfo.email"></el-input>
    </el-form-item>
    <el-form-item label="手机" prop="mobile">
      <el-input v-model="userInfo.mobile"></el-input>
    </el-form-item>
    <el-form-item label="昵称" prop="realName">
      <el-input v-model="userInfo.realName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="userInfo.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword">
      <el-input v-model="userInfo.confirmPassword"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="userInfo.gender">
        <el-radio :label="1" >男</el-radio>
        <el-radio :label="2" >女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="工作">
      <el-input v-model="userInfo.job"></el-input>
    </el-form-item>
    <el-form-item label="生日" class="text-left">
      <el-date-picker
        v-model="userInfo.birthday"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register">确认</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import moment from 'moment'
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
        confirmPassword: '',
        job: ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
        locale: 'zh-cn'
      },
      rules: {
        email: [{
          required: true, message: '请填写邮箱', trigger: 'blur'
        }],
        mobile: [
          {required: true, message: '请填写手机号', trigger: 'blur'}
        ],
        username: [
          {required: true, message: '请填写用户名', trigger: 'blur'}
        ],
        realName: [
          {required: true, message: '请填写昵称', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请填写密码', trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, message: '请填入确认密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    register () {
      this.$refs['userInfo'].validate(async (valid) => {
        let submitForm = {}
        const {password, username, birthday, realName, confirmPassword, email, gender, job, mobile} = this.userInfo
        if (confirmPassword !== password) {
          this.userInfo.password = ''
          this.userInfo.confirmPassword = ''
          return this.$message.error('确认密码与密码不一致， 请修改后再重新提交！')
        }
        if (valid) {
          submitForm = {
            password, username, birthday: moment(birthday).unix, realName, email, gender, job, mobile
          }
          try {
            await this.$postAjax('/api/user/register', submitForm)
            return this.$router.push('/login')
          } catch (err) {
            this.$message.error(err.message)
          }
        }
      })
    }
  }
}
</script>
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

.loginHead {
  text-align: center;
  color: blue;
  background: wheat;
  border-radius: 0.5rem 0.5rem 0 0;
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

.el-form-item {
  margin-right: 40px;
  margin-bottom: 20px;
}

.el-date-picker {
  width: 100%;
  text-align: left;
}
</style>
<style>
  .el-form-item__label {
    color: green!important;
    font-weight: 800;
  }
  .el-date-editor {
    width: 100%!important;
  }
</style>
