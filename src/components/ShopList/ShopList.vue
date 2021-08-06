<template>
  <div>
    <div id="cut-off"></div>
    <div id="buottom-content">
      <div class="merchant">
        <div class="header">
          <span><i class="iconfont icon-sidebar-toggle"></i></span>
          <span> 附近商家 </span>
        </div>
        <div class="merchantList" v-for="( shop,index)  in shops" :key="shop.name">
      
          <div class="merchantItem" :style="{ 'top':  (100*index+1)+'px' }" >
            <img :src="shop.image_path" />
            <div class="merchantItemtop">
              <span class="merchantItemtopleft">品牌</span>
              <h4 class="merchantItemtopcontent">
               {{shop.name}}
              </h4>
              <ul class="shop_detail_ul" v-for="support in shop.supports" :key="support.icon_name">
                <li class="supports">{{support.icon_name}}</li>
          
              </ul>
            </div>
            <div class="shopList">
              <div class="shop_rating">
                <Star :score="shop.rating"/>
                <span class="rating">{{shop.rating}}</span>
                <span class="text">月售{{shop.cost}}单</span>
              </div>
              <section class="shop-right">
                <span class="shop-rightl"></span>
                <span class="shop-rightr">准时达</span>
              </section>
            </div>
            <div class="merchantItembottom">
              <span>￥20起送/免费送费</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'

import star from '../star/star.vue';

export default {
  components: { star, },
  computed:{
    ...mapState(['shops'])
  },
  
};
</script>
<style lang="stylus" scoped>
#cut-off {
  

  left: 0px;
  width: 100%;
  height: 20px;
  background-color: #F5F5F5;
}

#buottom-content {
  position: relative;
  top: 180px;
  left: 0px;
  width: 100%;
  height: 100%;

  .merchant {
    height: 100%;
    position: relative;

    .header {
      height: 20px;
      color: gray;
      font-size: 14px;
      margin-bottom 10px
    }

    .merchantList {
      margin-top: 30px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }

    .merchantItem {
      position: absolute;
      top: 0;
      left: 0;
      height: 15%;
      width: 100%;

      img {
        width: 75px;
        height: 75px;
      }

      .merchantItemtop {
        width: 300px;
        float: right;
      }

      .merchantItemtopleft {
        position: absolute;
        left: 90px;
        top: 10px;
        font-size: 12px;
        background-color: #bfa;
      }

      .merchantItemtopcontent {
        position: absolute;
        left: 120px;
        top: 0px;
        width: 100px;
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .shop_detail_ul {
        float: right;
        display: flex;

        .supports {
          margin: 0 3px;
        }
      }
    }

    .shopList {
      position: absolute;
      margin-top: -48px;
      margin-left: 80px;
      width: 100%;
      height: 30px;
      display: flex;
    }

    .shop_rating {
      display: flex;
      align-items: center;
      float: left;
      width: 50%;

     

      .rating {
        float: right;
        margin: 5px 5px;
        color: red;
        font-size: 14px;
      }

      .text {
        float: right;
        color: gray;
        font-size: 12px;
      }
    }

    .shop-right {
      float: right;
      display: flex;
      align-items: center;
      width: 50%;

      .shop-rightl {
        float: left;
        font-size: 12px;
        color: white;
        background-color: green;
        margin-right: 5px;
      }

      .shop-rightr {
        float: right;
        font-size: 12px;
        border: 1px solid green;
      }
    }

    .merchantItembottom {
      position: absolute;
      top: 55px;
      left: 80px;
      color: gray;
      font-size: 14px;
    }

    .merchantItemtwo {
      position: absolute;
      top: 100px;
      left: 0;
      height: 15%;
      width: 100%;
    }

    .merchantItemthre {
      position: absolute;
      top: 200px;
      left: 0;
      height: 15%;
      width: 100%;
    }
  }
}
</style>