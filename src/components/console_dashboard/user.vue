<template>
  <main class="my-1 shadow-sm bg-white border height-100">
  <div class="container text-left">
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="" alt="" width="72" height="72">
      <!-- <el-badge :value="12">
        <el-avatar class="avatar"></el-avatar>
      </el-badge> -->
      <!-- <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group
        has a validation state that can be triggered by attempting to submit the form without completing it.</p> -->
    </div>

    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">创作信息</span>
          <!-- <span class="badge badge-secondary badge-pill">3</span> -->
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between list-group-item-action" @click="$router.push(`/console/${$route.params.uid}/articles`)">
            <div>
              <h6 class="my-0">文章</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">{{articleCount}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between list-group-item-action">
            <div>
              <h6 class="my-0">日志</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">0</span>
          </li>
          <li class="list-group-item d-flex justify-content-between  list-group-item-action">
            <div>
              <h6 class="my-0">系列</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">0</span>
          </li>
          <li class="list-group-item d-flex justify-content-between  list-group-item-action">
            <div>
              <h6 class="my-0">相册</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">0</span>
          </li>
          <li class="list-group-item d-flex justify-content-between list-group-item-action" @click="$router.push(`/console/${$route.params.uid}/tags`)">
            <div>
              <h6 class="my-0">标签</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">{{tagCount}}</span>
          </li>
        </ul>
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">基础信息</h4>
        <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="120px" class="demo-dataForm" >
          <el-form-item label="用户名" prop="username" >
            <el-input v-model="dataForm.username" :disabled="!isEditing"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="realName" >
            <el-input v-model="dataForm.realName" :disabled="!isEditing"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="mobile" >
            <el-input v-model="dataForm.mobile" :disabled="!isEditing"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" >
            <el-input v-model="dataForm.email" :disabled="!isEditing"></el-input>
          </el-form-item>
          <el-form-item label="工作" prop="job" >
            <el-input v-model="dataForm.job" :disabled="!isEditing"></el-input>
          </el-form-item>
          <el-form-item label="生日" class="text-center" prop="birthday">
            <el-date-picker type="date" placeholder="Pick a date" v-model="dataForm.birthday" style="width: 100%;" :disabled="!isEditing">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="性别" prop="gender" >
            <el-radio-group v-model="dataForm.gender" :disabled="!isEditing">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dataForm')" v-if="isEditing">保存</el-button>
            <el-button type="danger" @click="changeFormStatus" v-if="!isEditing">编辑</el-button>
            <el-button type="warning" @click="resetForm('dataForm')" v-if="isEditing">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  </main>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      dataForm: {
        username: '',
        realName: '',
        birthday: '',
        gender: '',
        mobile: '',
        email: [],
        desc: ''
      },
      initData: {},
      isEditing: false,
      articleCount: 0,
      tagCount: 0,
      rules: {
        username: [
          { required: true, message: '请填写正确的用户名', trigger: 'blur' },
        ],
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getUserInfo()
    this.getArticleCount()
    this.getTagsCount()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const submitData = Object.assign({}, this.dataForm)
          submitData.birthday = moment(submitData.birthday).unix()
          let userInfo = await this.$putAjax(`/api/user/${this.$route.params.uid}`, submitData, true)
          this.dataForm = {
            username: userInfo.username,
            email: userInfo.email,
            mobile: userInfo.mobile,
            realName: userInfo.realName,
            birthday: moment(userInfo.birthday * 1000).format('YYYY-MM-DD'),
            gender: Number(userInfo.gender),
            job: userInfo.job
          }
          this.initData = Object.assign({}, this.dataForm)
          this.isEditing = false
          this.$message.success('修改成功')
        }
      })
    },
    resetForm (formName) {
      this.dataForm = Object.assign({}, this.initData)
      this.isEditing = false
    },
    async getUserInfo () {
      let userInfo = await this.$getAjax(`/api/user/${this.$route.params.uid}`)
      this.dataForm = {
        username: userInfo.username,
        email: userInfo.email,
        mobile: userInfo.mobile,
        realName: userInfo.realName,
        birthday: moment(userInfo.birthday * 1000).format('YYYY-MM-DD'),
        gender: Number(userInfo.gender),
        job: userInfo.job
      }
      this.initData = Object.assign(this.initData, this.dataForm)
    },
    changeFormStatus () {
      this.isEditing = true
    },
    async getArticleCount () {
      const result = await this.$getAjax(`/api/articles/${this.$route.params.uid}/count`, true)
      this.articleCount = result
    },
    async getTagsCount () {
      const result = await this.$getAjax(`/api/tags/${this.$route.params.uid}/count`, true)
      this.tagCount = result
    }
  }
}
</script>
<style scoped>
  .height-100 {
    min-height: calc(100vh - 100px);
  }
  .avatar {
    width: 60px;
    height: 60px;
  }
  .list-group-item:hover {
    cursor:pointer
  }
</style>
