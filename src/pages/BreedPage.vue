<script>
export default {
  name: 'BreedPage',
  data () {
    return {
      bottom: false,
    }
  },
  computed: {
    images () {
      return this.$store.getters.setImages
    },
    breedType() {
      return this.$route.params.breed
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  methods: {
    addToFavourites (image, e) {
      this.$store.dispatch('addToFavourites', { src: image, btn: e.target })
    },
    loadMore (breed) {
      this.$store.dispatch('addImages', breed)
    },
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.loadMore(document.querySelector('#breed-select').value)
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('loadBreedsList')
  }
}
</script>

<template>
  <h1>Hello I'am a Dog with breed type "{{ breedType }}"</h1>
  <div class="breeds-list">
    <div v-if="breedType === 'shiba'">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="2000">
        <div class="carousel-inner wrapper">
          <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ 'active': index === 0 }">
            <img class="d-block w-100 img-wrapper landscape" :src="image" alt="Slide">
            <div class="carousel-caption">
              <button class="addBtn" @click="addToFavourites(image, $event)">Add</button>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div v-else-if="breedType.includes('terrier')">
      <div id="carouselExampleControls" class="carousel slide">
        <div class="carousel-inner wrapper">
          <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ 'active': index === 0 }">
            <img class="d-block w-100 img-wrapper landscape" :src="image" alt="Slide">
            <div class="carousel-caption">
              <button class="addBtn" @click="addToFavourites(image, $event)">Add</button>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div v-else>
      <div class="images">
        <div class="wrapper" v-for="image in images" :key="image.id">
          <div class="img-wrapper">
            <img :src="image" alt="image" class="img">
          </div>
          <div class="btn-wrapper">
            <button class="addBtn" @click="addToFavourites(image, $event)">Add</button>
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
    margin: 50px auto auto auto;
  }
  .images{
    text-align: center;
    margin: 0 auto;
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
    max-width: 700px;
    max-height: 400px;
    border-radius: 5px;
    transition: opacity .3s ease-in-out;
  }
  .btn-wrapper{
    height: 0;
    position: relative;
    bottom: 50px;
  }
  .addBtn {
    opacity: 0;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #2c3e50;
    color: #ffffff;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
  }
  #carouselExampleControls{
    width: 700px; 
    height: 400px; 
    margin: 0 auto;
    align-items: center;
    margin-top: 80px;
  }
  .landscape {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  }
</style>
