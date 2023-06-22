<script>
import Menu from './components/Menu.vue'
import {RouterView} from "vue-router"


export default {
  components: {
    'top-menu': Menu,
  },
  beforeCreate () {
    this.$store.dispatch('mainPageLoader', this.$route.path)
    this.$store.dispatch('getFavourites')
  }
}
</script>

<template>
  <div id="app">
    <top-menu/>
    <RouterView/>
  </div>
</template>

<style>
  body{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
