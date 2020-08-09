<template>
  <div>
    <v-header></v-header>
    <main role="main" class="container">
        <div class="row">
            <v-broadside class="col-md-3"></v-broadside>
            <v-main class="col-md-9"></v-main>
        </div>
    </main>
  </div>
</template>
<script>
import header from './Header'
import broadside from './broadside'
import main from './article'
// import bottom from './bottom'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header
  }
}
</script>
<style scoped>
  @media (min-width: 1600px) {
    .main-container：{
      width: 1500px;
    }
  }
</style>
