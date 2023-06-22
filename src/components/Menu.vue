<script>
import Footer from './Footer.vue'
export default {
  name: 'Menu',
  components: {
    Footer
  },
  computed: {
    breeds () {
      return this.$store.getters.getBreeds
    }
  },
  methods: {
    selectChange (e) {
      this.$store.dispatch('selectChange', { breed: e.target.value })
      this.$store.dispatch('singleBreedImages', { breed: e.target.value })
    },
    resetSelect () {
      this.$store.dispatch('clearTopSelect')
    }
  }
}
</script>

<template>
  <div class="menu">
    <ul class="list">
      <li @click="resetSelect"><router-link class="menu-link" to="/">Landing Page</router-link></li>
      <li @click="resetSelect"><router-link class="menu-link" to="/main-page">Main</router-link></li>
      <li @click="resetSelect"><router-link class="menu-link" to="/favorites">Favourites</router-link></li>
      <li for="breed-select">
          <span>Breeds</span>
        <select @change="selectChange" name="breed-select" id="breed-select">
          <option :value="null" selected></option>
          <option :value="breed" v-for="breed in breeds" :key="breed.id">{{breed}}</option>
        </select>
      </li>
    </ul>
  </div>
  <Footer/>
</template>

<style scoped>
  .menu{
    background: rgb(5, 5, 75);
    margin: 0;
    height: 60px;
    display: flex;
  }
  .list{
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    width: 50%;
    margin: auto;
    text-align: center;
  }
  .list li{
    margin: auto;
  }
  .list li{
    margin: auto;
    color: #ffffff;
    text-transform: capitalize;
  }
  .menu-link {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    text-transform: capitalize;
  }
  .list select{
    margin: auto 15px;
    border-radius: 5px;
  }
  .list select, .list select option{
    text-transform: capitalize;
    text-align: center;
    border: none;
    padding: 2px 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  .scrollable-menu {
  max-height: 180px;
  overflow-y: auto;
  background-color: white;
}
</style>
