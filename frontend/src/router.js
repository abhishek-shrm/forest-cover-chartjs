import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var routes=[
  {
    path:'/',
    name:'chart',
    component:()=>import('./components/Chart.vue')
  },
  {
    path:'/data',
    name:'data',
    component:()=>import('./components/Data.vue')
  }
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
