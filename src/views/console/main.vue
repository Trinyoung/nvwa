<template>
  <main role="main" class="main-container">
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
      this.$emit('avatarChange', url)
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-container {
    height: calc(100vh - 120px);
  }
</style>
