<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-31 14:52:33
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-10-19 10:01:42
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\components\console_dashboard\main.vue
-->
<template>
  <div role="main" class="container-fluid console-container">
    <router-view/>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
import bottom from '../bottom'
export default {
  components: {
    'v-bottom': bottom
  },
  data: function () {
    return {
    }
  },
  created: function () {
  },
  methods: {
  }
}
</script>
<style scoped>
  .console-container {
    position: relative;
    margin-left: 225px;
    padding-left:10px;
    padding-right: 10px;
    min-height: calc(100vh - 40px);
  }
</style>
