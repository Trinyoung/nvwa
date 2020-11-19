<!--
 * @Author: your name
 * @Date: 2020-11-19 15:06:21
 * @LastEditTime: 2020-11-19 16:29:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\homepage\main.vue
-->
<template>
  <main role="main" class="container border my-2"></main>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  .container {
    position: relative;
    /* top: 20px; */
  }
  .media-body {
    text-align: left;
  }
  .col-title {
    text-align: left;
  }

  .justify-content-center {
    background-color: aliceblue;
    top: 50px;
    position: sticky;
    z-index: 10;
    /* opacity: 0.5; */
  }
  .item-title {
    /* color: white; */
    color: gray;
    font-size: 1.1rem;
  }

  .item-title:hover {
    cursor: pointer;
    color: blue;
  }
  .container {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }
</style>
