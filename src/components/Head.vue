<script>
export default {
  name: 'Head',
  data() {
    return {
      selectedBreed: 'all', // Variable to store the selected breed
    }
  },
  computed: {
    breeds () {
      return this.$store.getters.getBreeds
    },
    breedType() {
      if (this.selectedBreed === 'all') {
        return 'All Breeds';
      } else {
        return 'Breed Type: ' + this.selectedBreed;
      }
    }
  },
  methods: {
    changeSort: function (e) {
      this.selectedBreed = e.target.value; // Update the selected breed
      this.$store.dispatch('changeSort', { breed: this.selectedBreed })
    }
  },
  mounted () {
    this.$store.dispatch('initialSort')
  }
}
</script>

<template>
  <header>
    <label for="selectByBreed">
      <h3 class="head">
        Dog Breeds Album
      </h3>
      <h2>{{ breedType }}</h2>  
    </label>
    <br>
    <select @change="changeSort" class="scrollable-menu">
      <option :value="all" selected>All</option>
      <option :value="breed" v-for="breed in breeds" :key="breed.id">{{breed}}</option>
    </select>
  </header>
</template>

<style scoped>
.head {
  margin-bottom: 40px;
}
header {
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 30px;
}
header select{
  margin: auto 15px;
  border-radius: 5px;
}
header select, header select option{
  text-transform: capitalize;
  text-align: center;
  border: none;
  padding: 2px 5px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: black;
}
.scrollable-menu {
  max-height: 300px; /* Adjust the max-height value as needed */
  overflow-y: auto;
  padding: 10px;
}

</style>
