<template>
  <div>
    <v-header></v-header>
    <main role="main" class="container-fluid">
      <div class="row">
        <v-broadside></v-broadside>
        <v-main></v-main>
      </div>
    </main>
  </div>
</template>
<script>
import header from './Header'
import broadside from './broadside'
import main from './main'
import bottom from '../bottom'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-bottom': bottom
  }
}
</script>
<style scoped>
  @media (min-width: 1600px) {
    .container {
      max-width: 1440px;
    }
  }
</style>
