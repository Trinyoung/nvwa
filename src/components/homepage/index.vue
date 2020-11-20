<!--
 * @Author: your name
 * @Date: 2020-11-19 15:06:39
 * @LastEditTime: 2020-11-20 08:55:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\homepage\index.vue
-->
<template>
  <div>
    <v-header/>
    <main role="main" class="container">
      <div class="row">
        <v-broadside class="col-md-2 broadside"  ref="broadSide" ></v-broadside>
        <v-main class="col-md-10"  ></v-main>
      </div>
    </main>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import header from '@/components/Header'
import broadside from '@/components/homepage/broadside'
import main from '@/components/homepage/main'
import bottom from '@/components/bottom'
export default {
  components: {
    'v-header': header,
    'v-broadside': broadside,
    'v-main': main,
    'v-bottom': bottom
  }
}
</script>
<style scoped>
  @media (min-width: 1600px) {
    .main-container：{
      width: 1500px;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: 1300px;
    }
  }

  .broadside {
    padding: 0;
    position: sticky;
    top: 40px
  }
</style>
