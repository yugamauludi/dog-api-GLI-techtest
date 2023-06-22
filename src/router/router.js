import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import MainPage from '../pages/MainPage.vue'
import FavouritesPage from '../pages/FavouritesPage.vue'
import BreedPage from '../pages/BreedPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/main-page',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/favorites',
      name: 'FavouritesPage',
      component: FavouritesPage
    },
    {
      path: '/:breed',
      component: BreedPage
    }
  ]
})

export default router
