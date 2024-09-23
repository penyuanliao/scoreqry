import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap-vue/dist/bootstrap-vue-icons.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/bootstrap-theme.min.css'
// Import Bootstrap JavaScript
import 'bootstrap'

import 'font-awesome/css/font-awesome.css'

// Optionally, import Popper.js if using Bootstrap JavaScript components that need it
// This step can be skipped if you just need Bootstrap's CSS
import '@popperjs/core'
import VueCryptojs from 'vue-cryptojs'
import { i18n } from './i18n'
const app = createApp(App)
// 宣告使用Pinia
app.use(createPinia())
// 使用加密crypoto
app.use(VueCryptojs)
// 使用vue-router
app.use(router)
// 使用語系i18n物件
app.use(i18n)
// 掛載在 #app class
app.mount('#app')
