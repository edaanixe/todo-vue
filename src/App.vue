<template>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<style lang="css">
  @import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css);
</style>

<script>

import router from './router'
import store from './store'

export default {
  router,
  store
}

</script>
