<template>
  <!-- <div class="container"> -->
    <form class="loginForm">
        <!-- <table class="loginTable">
            <tbody>
            <tr>
              <th colSpan="2" class="loginHead"><span>LOGIN</span></th>
            </tr>
            <tr>
              <td><label class="labeltitle">Account</label></td>
              <td><input class='form-control inputType' type="username" placeholder="Enter account" /></td>
            </tr>
            <tr>
              <td><label class="labeltitle">Password</label></td>
              <td><input class="form-control inputType" type="password" placeholder="Password" /></td>
            </tr>
            <tr>
              <td colSpan="2"><input type="checkbox" label="rememer password" /> 记住我</td>
            </tr>
            <tr>
              <td class="formBottom" colSpan="2">
                <Button  type='submit' class='button-left btn-primary btn' >Login</Button>
                <Button  type="button" class="button-right btn-primary btn">Register</Button>
              </td>
            </tr>
          </tbody>
        </table> -->
        <div class="container">
          <div class="form-group row loginHead">
            <div class="col-sm-12"><span class="loginTitle">LOGIN</span></div>
          </div>
          <div class="form-group row">
            <div class="col-md-3 col-sm-0"><label for="username" class="line-text-middle labeltitle">Account</label></div>
            <div class="col-md-9 col-sm-12"><input class='form-control line-input-middle' type="text" id="username" placeholder="Enter account" /></div>
          </div>
          <div class="row form-group">
            <div class="col-md-3 col-sm-0"><label for="password" class="line-text-middle labeltitle">password</label></div>
            <div class="col-md-9 col-sm-12">
              <input class='form-control line-input-middle' type="password" id="password" placeholder="Enter password" />
            </div>
          </div>
          <div class="row form-group">
            <div class="col-sm-3"></div>
            <div class='col-sm-6'>
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="">remember me</label>
            </div>
            <div class="col-sm-3">
            </div>
            <div class="col-sm-3"></div>
          </div>
          <div class="row form-group">
            <div class="col-sm-2">

            </div>
            <div class="col-sm-4">
              <Button type='submit' class='button-left btn-primary btn line-input-button' >Login</Button>
            </div>
            <div class="col-sm-4">
              <Button  type="submit" class="button-right btn-primary btn line-input-button">Register</Button>
            </div>
              <div class="col-sm-2">
            </div>
          </div>
        </div>
    </form>
</template>
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
