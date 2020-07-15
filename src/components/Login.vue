<template>
  <!-- <div class="container"> -->
    <form class="loginForm">
        <div class="container">
          <div class="form-group row loginHead">
            <div class="col-sm-12"><span class="loginTitle">LOGIN</span></div>
          </div>
          <div class="form-group row">
            <div class="col-md-3 col-sm-0"><label for="username" class="line-text-middle labeltitle">Account</label></div>
            <div class="col-md-9 col-sm-12"><input class='form-control line-input-middle' type="text" id="username" v-model="username" placeholder="Enter account" /></div>
          </div>
          <div class="row form-group">
            <div class="col-md-3 col-sm-0"><label for="password" class="line-text-middle labeltitle">password</label></div>
            <div class="col-md-9 col-sm-12">
              <input class='form-control line-input-middle' type="password" id="password" v-model="password" placeholder="Enter password" />
            </div>
          </div>
          <div class="row form-group">
            <div class="col-sm-3"></div>
            <div class='col-sm-6'>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="rememberMe">
              <label class="form-check-label" for="exampleCheck1">remember me</label>
            </div>
            <div class="col-sm-3">
            </div>
            <div class="col-sm-3"></div>
          </div>
          <div class="row form-group">
            <div class="col-sm-2">

            </div>
            <div class="col-sm-4">
              <Button type='submit' class='button-left btn-primary btn line-input-button' v-on:click="login">Login</Button>
            </div>
            <div class="col-sm-4">
              <router-link to="/register">
                <Button  type="submit" class="button-right btn-primary btn line-input-button">Register</Button>
              </router-link>
            </div>
              <div class="col-sm-2">
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
    login: function () {
      console.log(this.username, this.password, this.rememberMe)
      // console.log(username, password, '------------>')
      console.log(this.$route.params.username, '---------->')
      this.$router.push('/home')
      // this.$router.go('/home')
      // axios.post('/api/user/login', {
      //   username,
      //   password
      // }).then(function (result) {
      //   return this.$router
      // })
    }
  }
}
</script>>
<style scoped>
.loginForm {
  background-color: white;
  border-radius: .5rem;
  margin: auto;
  top: 50%;
  position: relative;
  width: 25rem;
  margin-top: -10rem;
  padding-bottom: 0.5rem;
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
  height: 2.5rem;
  display: inline-box;
  line-height: 100%;
}
.button-left {
  margin-right: 0.5rem;
  width: 6rem;
  /* margin-bottom: 0.5rem; */
}

.button-right {
  width: 6rem;
  background: rgb(96, 96, 167);
  /* margin-bottom: 0.5rem; */
}

.line-text-middle {
  display: inline-box;
  line-height: 2.5rem;
  height: 100%;
  font-size:1.1rem;
  font-weight: bold;
}
.line-input-middle {
  display: inline-box;
  line-height: 1.5rem;
  height: 100%;
  font-size:1.1rem;
}

.text-font {
  font-size: 20px;
}

.loginTitle {
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: inline-box;
  line-height: 2.5rem;
  height: 100%;
}

.line-input-button {
  display: inline-box;
  line-height: 1.5rem;
  height: 100%;
  font-size:1.2rem;
}
#rememberMe {
  border: 1px solid green;
  margin-bottom: 2px;
}
</style>
