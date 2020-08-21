<template>
  <div>
    <v-header></v-header>
    <main role="main" class="container">
      <div class="row">
        <v-broadside class="col-md-2 broadside"></v-broadside>
        <v-main class="col-md-9" :articleId="articleId"></v-main>
        <v-rightside class="col-md-1" :articleId="articleId"></v-rightside>
      </div>
    </main>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import header from './Header'
import broadside from './Broadside'
import main from './Content'
import rightside from './Rightside'
import bottom from '../bottom'
import $ from 'jquery'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-rightside': rightside,
    'v-bottom': bottom
  },
  props: ['articleId'],
  created: function () {
    console.log(this.articleId, '------------>')
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}
</script>
<style scoped>
  @media (min-width: 1400px) {
    .container {
      max-width: 1300px;
    }
  }

  .broadside {
    padding: 0;
    position: sticky;
    top: 0
  }
</style>
