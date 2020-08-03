<template>
  <div>
    <v-header></v-header>
    <main role="main" class="container">
        <div class="row">
            <v-broadside class="col-md-2 broadside"></v-broadside>
            <v-main class="col-md-9"></v-main>
            <v-rightside class="col-md-1"></v-rightside>
        </div>
    </main>
  </div>
</template>
<script>
import header from './Header'
import broadside from './Broadside'
import main from './Content'
import rightside from './Rightside'
import $ from 'jquery'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-rightside': rightside
  },
  created: function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}
</script>
<style scoped>
  @media (min-width: 1600px) {
    .main-container：{
      width: 1500px;
    }
  }

  .broadside {
    padding: 0;
    position: sticky;
    top: 0
  }
</style>
