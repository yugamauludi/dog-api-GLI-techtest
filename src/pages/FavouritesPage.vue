<script>
export default {
  name: 'FavouritesPage',
  computed: {
    images () {
      return this.$store.getters.getFavourites
    }
  },
  methods: {
    removeFavourite (image) {
      this.$store.dispatch('removeFromFavourites', {src: image})
    }
  },
  beforeCreate () {
    this.$store.dispatch('loadBreedsList')
  }
}
</script>

<template>
  <div>
    <h1>Favourites Dog</h1>
    <div class="breeds-list">
      <div class="images">
        <div class="wrapper" v-for=" image in images" :key="image.id">
          <div class="img-wrapper">
            <img :src="image" alt="image" class="img">
          </div>
          <div class="btn-wrapper">
            <button class="removeBtn" @click="removeFavourite(image)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
  margin-top: 20px;
}
.breeds-list{
  margin-top: 20px;
}
.images{
  text-align: center;
  margin: auto;
}
.wrapper{
  display: inline-block;
  text-align: center;
  margin: 10px;
}
.wrapper:hover img{
  opacity: .5;
}
.wrapper:hover button{
  opacity: 1;
}
.img-wrapper{
  display: inline-block;
  height: 250px;
}
img{
  height: 100%;
  border-radius: 5px;
  transition: opacity .3s ease-in-out;
}
.btn-wrapper{
  height: 0;
  position: relative;
  bottom: 50px;
}
.removeBtn {
  opacity: 0;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: #ffffff;
  cursor: pointer;
  transition: opacity .3s ease-in-out;
}
</style>
