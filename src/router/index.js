/* 路由器对象模块 */
import Vue from 'vue';
import VueRouter from "vue-router";
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
Vue.use(VueRouter)
export default new VueRouter({
        routes:[
            {
                path:'/msite',
                component : Msite
            },
            {
                path:'/order',
                component : Order
            },
            {
                path:'/profile',
                component : Profile
            },
            {
                path:'/search',
                component : Search
            },
           {
               path:'/',
               redirect:'/msite'
           }
        ]
    
})