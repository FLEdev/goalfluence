import './assets/main.css'
import './assets/fontello/css/fontello.css';
// import "vuetify/styles";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@tailwindplus/elements';
import router from './router';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
