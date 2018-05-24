import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  	routes:[
      {
          path:'/',
          redirect:'/login'
      },
      {
        path:'/admin',
        component:resolve => require(['./system/views/layout/mainWarp.vue'],resolve),
        children:[
          {
            path:'/',
            component:resolve => require(['./system/views/index/index.vue'],resolve),
          },
          {
            path:'schoolList',
            component:resolve => require(['./system/views/school/schoolList.vue'],resolve),
          }
        ]
      },
      {
        path:'/login',
        component:resolve => require(['./system/views/login/login.vue'],resolve)
      }
      ,
      {
        path:'/pdf',
        component:resolve => require(['./system/views/pdf/pdf.vue'],resolve)
      }
    ]
})
router.beforeEach((to, from, next)=>{
  if(to.path!='/login'){
    if(localStorage.getItem('userId')){
      next()
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
})
export default router
