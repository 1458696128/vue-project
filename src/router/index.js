/* 路由器对象模块 */
import Vue from 'vue';
import VueRouter from "vue-router";
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Map from '../pages/map/map.vue'
Vue.use(VueRouter)
export default new VueRouter({
        routes:[
            {
                path:'/msite',
                component : Msite,
                meta :{
                     isfootershow:true
                }
            },
            {
                path:'/order',
                component : Order,
                meta :{
                    isfootershow:true
               }
            },
            {
                path:'/profile',
                component : Profile,
                meta :{
                    isfootershow:true
               }
            },
            {
                path:'/search',
                component : Search,
                meta :{
                    isfootershow:true
               }
            },
            {
                path:'/login',
                component : Login
            },
            {
                path:'/map',
                component : Map,
                meta :{
                    isfootershow:true
               }
            },
           {
               path:'/',
               redirect:'/msite'
           }

        ]
    
})