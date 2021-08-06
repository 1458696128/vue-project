<template>
    <div id="app">
        <router-view/>
        <FooterGuide v-if="$route.meta.isfootershow"></FooterGuide>
    </div>
</template>
<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'

export default{
    name:'App',
    data (){
        return{
            msg :'App compont'
        }
    },
   components:{
       FooterGuide
   },
   async mounted(){
   this.$store.dispatch('getAddress')
   }
   
}
</script>

 <style lang='stylus' rel="stylesheet/stylus">
</style>


