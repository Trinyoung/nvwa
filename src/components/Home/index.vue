<template>
  <div>
    <v-header></v-header>
    <div class="container">
        <div class="row">
            <v-broadside class="col-md-3"></v-broadside>
            <v-main class="col-md-9"></v-main>
        </div>
    </div>
  </div>
</template>
<script>
import header from './Header'
import broadside from './broadside'
import main from './main'
// import bottom from './bottom'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header
    // 'v-bottom': bottom
  }
}
</script>
