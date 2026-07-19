import { createRouter, createWebHistory  } from 'vue-router'
import { type RouteRecordRaw } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../Pages/Home.vue'), meta: {title: '首页 - Lanxi'}},
    { path: '/about', component: () => import('../Pages/About.vue'), meta: {title: '关于 - Lanxi'}},
    { path: '/links', component: () => import('../Pages/Links.vue'), meta: {title: '友情链接 - Lanxi'}},
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router