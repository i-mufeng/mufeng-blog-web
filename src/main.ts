import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
const app = createApp(App)
app.use(createPinia())
console.log("test")
await new Promise(resolve => setTimeout(resolve, 1200))
app.mount('#app')
