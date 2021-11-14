import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

createApp(App).use(router).use(store).component('v-style', {
  template: `<style>{{$slots.default}}<style>`
}).mount('#app')
