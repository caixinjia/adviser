import Vue from 'vue'
import Router from 'vue-router'
import mainWarp from './system/views/layout/mainWarp.vue';
import login from './system/views/login/login.vue';
import index from './system/views/index/index.vue';
import schoolList from './system/views/school/schoolList.vue';
Vue.use(Router)

const router = new Router({
  	routes:[
      {
          path:'/',
          redirect:'/login'
      },
      {
        path:'/admin',
        component:mainWarp,
        children:[
          {
            path:'/',
            component:index,
          },
          {
            path:'schoolList',
            component:schoolList,
          }
        ]
      },
      {
        path:'/login',
        component:login
      }
    ]
})
export default router
