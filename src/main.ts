import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-theme.min.css'
// Import Bootstrap JavaScript
import 'bootstrap'

// Optionally, import Popper.js if using Bootstrap JavaScript components that need it
// This step can be skipped if you just need Bootstrap's CSS
import '@popperjs/core'
import VueCryptojs from 'vue-cryptojs'
const app = createApp(App)

app.use(createPinia())
app.use(VueCryptojs)
app.use(router)

app.mount('#app')
