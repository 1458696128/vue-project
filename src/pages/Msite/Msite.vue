<template>
  <div id="food" class="main show">
    <Header :title="address.name">
      <span slot="left"
        ><i class="iconfont icon-xingtaiduICON_sousuo--"></i
      ></span>
      <ul class="login" slot="right">
        <li class="loginleft"><a href="javascript:;">登录</a></li>
        <li><a href="javascript:;">注册 </a></li>
      </ul>
    </Header>

    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <ul class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index"> 
          <li class="slideItem" v-for="category in categorys" :key="category.title">
            <img :src="category.image_url"  />
            <span class="itemText">{{category.title}}</span>
          </li>
          
        </ul>
        <ul class="swiper-slide"></ul>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    
    <ShopList></ShopList>
  </div>
</template>

<script>
import ShopList from "../../components/ShopList/ShopList.vue";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import {mapState} from 'vuex'

export default {
  name: "Msite",
  computed:{
    ...mapState(['address']),
     ...mapState(['categorys']),
     /* 根据分类的一维数组生成二维数组
     小数组的最大长度为8
     */
    categorysArr () {
           const bigArr=[]
           let smallArr=[]
           const {categorys}=this 
           for(var i=0;i<categorys.length;i++){
            smallArr.push(categorys[i])
            if(smallArr.length % 8===0){
              bigArr.push(smallArr);
              smallArr=[];
            }
           }
           bigArr.push(smallArr);
     return bigArr;
    }
  },
   async mounted() {
     this.$store.dispatch('getShops')
     await this.$store.dispatch('getCategory')
    // eslint-disable-next-line no-unused-vars
     new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    });
   
   
   
  },
 
  components: {
    ShopList,
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >
.swiper-button-next {
  color: red;
}

.main {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 45px 0px 50px 0px;
  box-sizing: border-box;
  display: none;

  .login {
    font-size: 14px;

    .loginleft {
      margin-right: 5px;
    }
  }

  .swiper-container {
    height: 200px;
    width 100%
    
    


   
    .swiper-slide {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
      
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 72px;

        img {
          width: 50px;
          height: 50px;
        }

        .itemText {
          font-size: 12px;
        }
      }
    }
  }

  &.show {
    display: block;
  }
}
</style>

