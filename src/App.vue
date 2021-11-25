<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-10 15:49:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-07 18:00:43
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  height: 100%;
  width: 100%;
  position: absolute;
}
body {
  font-size: 0.95rem;
  height: 100%;
  background: #f8f9fa!important;
}
* {
  margin: 0;
  padding: 0;
}
a:hover {
  text-decoration: none!important;;
}
label {
  margin-bottom: 0!important;
}
a {
  color: #2c3e50;
}
</style>
