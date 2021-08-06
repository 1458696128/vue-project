import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '../static/css/reset.css';
import Header from "../src/components/Header/Header.vue"
import Star  from './components/star/star.vue'

import store from './vuex/store';
// 解决报错
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
//全局注册组件

Vue.component('Header',Header)
Vue.component('Star',Star)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
