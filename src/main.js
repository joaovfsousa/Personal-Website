import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

createApp(App).use(router).use(mdiVue, {
  icons: mdijs
}).component('v-style', {
  template: `<style>{{$slots.default}}<style>`
}).mount('#app')
