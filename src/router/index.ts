import AppBody from '@/views/AppBody/AppBody.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'AppBody',
       component: AppBody 
     },
     
  ],
  scrollBehavior(to, from, savedPosition) {
      return {top:0}
  }
})

export default router
