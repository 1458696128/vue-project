<template>
    <div id="app">
        <router-view/>
        <FooterGuide></FooterGuide>
    </div>
</template>
<script>
import FooterGuide  from './components/FooterGuide/FooterGuide.vue'
export default{
    name:'App',
    data (){
        return{
            msg :'App compont'
        }
    },
   components:{
       FooterGuide
   }
}
</script>

 <style lang='stylus' rel="stylesheet/stylus">
</style>


