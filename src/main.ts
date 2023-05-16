import { createApp } from 'vue'
import { Viewer } from 'v-viewer'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/base.css'
import router from '@/router'
// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css"
// element icons
import * as Icons from "@element-plus/icons-vue";

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
//滚动至页面顶部，使用 Element-Plus 回到顶部 组件中的算法
const cubic = (value: number) => Math.pow(value, 3);
const easeInOutCubic = (value: number) => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
app.config.globalProperties.scrollToTop = function () {
  const el = document.documentElement
  const beginTime = Date.now()
  const beginValue = el.scrollTop
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
  const frameFunc = () => {
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      rAF(frameFunc)
    } else {
      el.scrollTop = 0
    }
  }
  rAF(frameFunc)
}
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
/* 路由、Vue 存储库、Viewer 图片查看插件、element-plus*/
app.use(router).use(createPinia()).use(() => Viewer).use(ElementPlus).mount("#app");
