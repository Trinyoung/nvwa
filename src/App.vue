<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
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
  /* margin-top: auto; */
  margin: auto;
  background: darkturquoise;
  /* height: 1100px; */
  height: 100%;
  width: 100%;
  position: absolute;
}
* {
  margin: 0;
  padding: 0;
}
</style>
