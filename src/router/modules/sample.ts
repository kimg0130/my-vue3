import SampleLayout from '@/layout/SampleLayout.vue'

const sample = [
  {
    path: '/sample',
    name: 'sample',
    component: SampleLayout,
    children:[
      {
        path:'/sample/hello',
        name: 'sample/hello',
        component: ()=> import('@/views/sample/HelloWorld.vue')
      },
      {
        path: '/sample/simpleComponent',
        name: 'sample/simpleComponent',
        component: ()=> import('@/views/sample/SimpleComponent.vue')
      },
      {
        path: '/sample/form',
        name: 'sample/form',
        component: ()=> import('@/views/sample/FormSamplePage.vue')
      }
    ]
  }
];

export default sample
