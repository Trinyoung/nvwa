<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-31 14:52:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 14:50:29
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \nvwa\src\components\console_dashboard\main.vue
-->
<template>
  <main role="main" class="console-container">
    <router-view @avatarChange="avatarChange"/>
  </main>
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
    avatarChange (url) {
      console.log(url, '----------------?avatarChange')
      this.$emit('avatarChange', url)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
