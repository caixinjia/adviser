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
            component:resolve => require(['./system/views/advisory/advisoryList.vue'],resolve),
          },
          {
            path:'schoolList',
            component:resolve => require(['./system/views/school/schoolList.vue'],resolve),
          },
          {
            path:'advisoryList',
            component:resolve => require(['./system/views/advisory/advisoryList.vue'],resolve),
          },
          {
            path:'paymentList',
            component:resolve => require(['./system/views/payment/paymentList.vue'],resolve),
          },
          {
            path:'mavinList',
            component:resolve => require(['./system/views/mavin/mavinList.vue'],resolve),
          },
          {
            path:'subjectList',
            component:resolve => require(['./system/views/subject/subjectList.vue'],resolve),
          },
          {
            path:'404',
            component:resolve => require(['./system/views/404.vue'],resolve),
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
