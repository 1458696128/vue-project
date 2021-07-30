import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '../static/css/reset.css';
import Header from "../src/components/Header/Header.vue"
//全局注册组件
Vue.component('Header',Header)


  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
