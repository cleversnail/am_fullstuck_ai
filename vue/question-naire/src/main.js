import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/rem/index.js'
import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
