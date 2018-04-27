import Vue from 'vue'
import App from './App.vue'
import $api from '../api';
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// 全局方法
Vue.prototype.$api = $api;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
