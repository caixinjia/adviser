import Vue from 'vue'
import App from './App.vue'
import $api from '../api';

// 全局方法
Vue.prototype.$api = $api;
new Vue({
  el: '#app',
  render: h => h(App)
})
