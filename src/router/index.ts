import AppBody from '@/views/AppBody/AppBody.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginView  from '@/views/Login/LoginView.vue';
import Register from '@/views/Register/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'AppBody',
       component: AppBody 
     },
     {
       path: '/Login', 
       name: 'Login', 
       component: LoginView 
     },
     {
        path:'/Register' , 
        name:'Register' , 
        component: Register , 
     }
     
  ],
  scrollBehavior(to, from, savedPosition) {
      return {top:0}
  }
})

export default router
