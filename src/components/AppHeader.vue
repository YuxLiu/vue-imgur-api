<template>
<div class="ui secondary pointing menu">
  <a href="" class="active item">Image Storage</a>
  <div class="right menu">
    <a href="#" class="ui item" @click="login">Login</a>
  </div>
</div>
</template>

<script>
// 94 wire up component to store.actions
import { mapActions } from 'vuex';

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(['login']),
  }
}
</script>

<style scoped>

</style>