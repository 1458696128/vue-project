<template>
  <ul class="stars">
    <li class="star" v-for="(c,index) in starclasses" :key="index" :class="c"></li>
    <!-- <li class="star"></li>
    <li class="star"></li>
    <li class="star"></li>
    <li class="star"></li> -->
  </ul>
</template>
<script>
export default {
props:{
    //需要传过来一个评分,和一个尺寸
    score:Number,
    size :Number
},
computed:{
 
   starclasses () {
       const {score}=this
       const Arr =[]
       const  scoreInteger= Math.floor(score)
       //添加n个on 
       for(let i=0;i<scoreInteger;i++){
          Arr.push("on")

       }
       //添加1个或者0个half
       if(score*10-scoreInteger*10>=5){
           Arr.push("half")
       }
       if(Arr.length<5){
            Arr.push("off")
      }
    //    while(Arr.length<5){
    //        Arr.push("off")
    //    }
       return Arr
   }
  
}

};
</script>
<style lang="stylus" scoped>
 .stars {
        display: flex;
      }

      .star {
        width: 10px;
        height: 10px;
        background-size: 100% 100%;
        

        &.half {
          background-image: url('../../common/images/stars/star24_half@2x.png');
        }

        &.on {
          background-image: url('../../common/images/stars/star24_on@2x.png');
        }
        &.off {
        background-image: url('../../common/images/stars/star24_off@2x.png');
        }
      }</style>>