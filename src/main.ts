import { createApp } from 'vue'
import { Viewer } from 'v-viewer'
import { createPinia } from 'pinia'
import App from './App.vue'
/* 自定义css */
import '@/assets/base.css'
import router from '@/router'

console.log(
  '%c MuFengBlog %c By MuFeng %c https://github.com/i-mufeng/mufeng-blog',
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000',
  'background:transparent'
)

const app = createApp(App)

/* Viewer 图片查看插件 */
Viewer.setDefaults({
  navbar: true,
  title: true,
  toolbar: {
    prev: true,
    next: true
  }
})
app.use(() => Viewer)

app.use(createPinia())

app.use(router)

app.mount('#app')
