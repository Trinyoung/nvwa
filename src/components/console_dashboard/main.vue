<!--
 * @Author: Trinyoung.Lu
 * @Date: 2020-08-31 14:52:33
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-29 18:39:04
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
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/all.css'
import bottom from '../bottom'
import $ from 'jquery'
export default {
  components: {
    datePicker,
    'v-bottom': bottom
  },
  data: function () {
    return {
      newestList: [],
      hotList: [],
      searchInfo: {
        startDate: new Date(),
        endDate: new Date(),
        tags: [],
        published: '',
        keyword: ''
      },
      options: {
        format: 'YYYY-MM-DD HH:mm:ss',
        useCurrent: false,
        locale: 'zh-cn'
      }
    }
  },
  created: function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
      $.extend(true, $.fn.datetimepicker.defaults, {
        icons: {
          time: 'far fa-clock',
          date: 'far fa-calendar',
          p: 'fas fa-arrow-up',
          down: 'fas fa-arrow-down',
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fas fa-calendar-check',
          clear: 'far fa-trash-alt',
          close: 'far fa-times-circle'
        }
      })
    })
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    },
    showDatePickResult: function () {
      console.log(this.searchInfo.date)
    }
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
