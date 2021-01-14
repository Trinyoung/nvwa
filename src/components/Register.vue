<template>
  <el-form class="loginForm" label-width="100px" label-color="" :model="userInfo" :rules="rules" ref="userInfo">
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

  width: 100%;
  padding-bottom: 2rem;
  /* background: white; */
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
.loginHead {
  text-align: center;
}

.loginTitle {
  font-size: 1.5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: inline-block;
  line-height: 3.2rem;
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
