import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import sample from "@/router/modules/sample";
import vue3 from "@/router/modules/vue3";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: AppLayout
    },
    ...sample,
    ...vue3
  ]
})

export default router
