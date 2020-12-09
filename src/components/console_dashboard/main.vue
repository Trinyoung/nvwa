<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-31 14:52:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-09 17:58:31
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
    /* margin-left: 225px; */
    padding-left:5px;
    padding-right: 5px;
    min-height: calc(100vh - 40px);
  }
  @media (min-width:768px) {
    .console-container {
      margin-left: 225px;
    }
  }
</style>
