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
  /* background: darkturquoise; */
  /* height: 1100px; */
  height: 100%;
  width: 100%;
  position: absolute;
}
body {
  font-size: 0.95rem;
  height: 100%;
  background-color:turquoise;
}
* {
  margin: 0;
  padding: 0;
}
.broadSide {
  border-radius: 5px 5px 5px 5px;
}
</style>
