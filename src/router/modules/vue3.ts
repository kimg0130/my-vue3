import Vue3Layout from '@/layout/Vue3Layout.vue'

const vue3 = [
  {
    path: '/vue3',
    name: 'vue3',
    component: Vue3Layout,
    children:[
      {
        path:'/vue3/template',
        name: 'vue3/template',
        component: ()=> import('@/views/vue3/Template.vue')
      }
    ]
  }
];

export default vue3
