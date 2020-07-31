<template>
  <div>
    <v-header></v-header>
    <main role="main" class="container">
        <div class="row">
            <v-broadside class="col-md-2"></v-broadside>
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
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-rightside': rightside
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
