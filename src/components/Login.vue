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
            <div class="col-sm-3"><label for="username" class="line-text-middle labeltitle">Account</label></div>
            <div class="col-sm-8"><input class='form-control line-input-middle' type="text" id="username" placeholder="Enter account" /></div>
            <div class="col-sm-1"></div>
          </div>
          <div class="row form-group">
            <div class="col-sm-3"><label for="password" class="line-text-middle labeltitle">password</label></div>
            <div class="col-sm-8">
              <input class='form-control line-input-middle' type="password" id="password" placeholder="Enter password" />
              <!-- <input class='form-control line-text-middle' type="username" id="password" placeholder="Enter password" /> -->
            </div>
            <div class="col-sm-1"></div>
          </div>
          <div class="row form-group">
            <div class="col-sm-3"></div>
            <div class='col-sm-6 line-input-middle'>
              <input type="checkbox" class="form-check-input line-input-middle" id="exampleCheck1">
              <label class="form-check-label line-input-middle" for="exampleCheck1">remember me</label>
            </div>
            <div class="col-sm-3">
            </div>
            <div class="col-sm-3"></div>
          </div>
          <div class="row form-group">
            <div class="col-sm-3">

            </div>
            <div class="col-sm-3">
              <Button type='submit' class='button-left btn-primary btn line-input-button' >Login</Button>
            </div>
            <div class="col-sm-3">
              <Button  type="submit" class="button-right btn-primary btn line-input-button">Register</Button>
            </div>
              <div class="col-sm-3">
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
  width: 40rem;
  margin-top: -15rem;
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
  font-size:25px;
  font-weight: bold;
}
.line-input-middle {
  display: inline-box;
  line-height: 3rem;
  height: 100%;
  font-size:1.2rem;
}

.text-font {
  font-size: 40px;
}

.loginTitle {
  font-size: 40px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: inline-box;
  line-height: 4rem;
  height: 100%;
}

.line-input-button {
  display: inline-box;
  line-height: 2rem;
  height: 100%;
  font-size:1.2rem;
}
</style>
