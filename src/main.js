import { createApp } from 'vue';
import App from './App.vue';
import { store } from "./store";
import router from './router/router';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App)
  .use(router)
  .use(store)
  // .use(BootstrapVue)
  .mount('#app')