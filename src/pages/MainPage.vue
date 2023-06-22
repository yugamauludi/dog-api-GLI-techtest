<script>
import Head from '../components/Head.vue';
import BreedList from '../components/BreadList.vue';
import LandingPage from '../pages/LandingPage.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'MainPage',
  components: { Head, BreedList, Footer, LandingPage },
  beforeCreate () {
    this.$store.dispatch('loadBreedsList')
  }
}
</script>

<template>
  <div class="main">
    <Head/>
    <BreedList/>
    <Footer/>
  </div>
</template>