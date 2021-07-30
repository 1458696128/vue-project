<template>
  <div id="food" class="main show">
   <Header title="上海市松江区泗泾镇新凯家园">
     <span slot="left"><i class="iconfont icon-xingtaiduICON_sousuo--"></i></span>
     <ul class="login" slot="right">
      <li class="loginleft"><a href="javascript:;">登录</a></li>
      <li><a href="javascript:;">注册 </a></li>
    </ul> 
   </Header>
    
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ul class="swiper-slide">
          <li class="slideItem">
            <img src="../../common/images/nav/7.jpg" alt="饮品" />
            <span class="itemText">甜品饮品</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/14.jpg" alt="饮品" />
            <span class="itemText">水果蔬菜</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/9.jpg" alt="饮品" />
            <span class="itemText">简餐便当</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/6.jpg" alt="饮品" />
            <span class="itemText">汉堡披萨</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/11.jpg" alt="饮品" />
            <span class="itemText">特色小吃</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/8.jpg" alt="饮品" />
            <span class="itemText">轻食沙拉</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/10.jpg" alt="饮品" />
            <span class="itemText">地方特色</span>
          </li>
          <li class="slideItem">
            <img src="../../common/images/nav/11.jpg" alt="饮品" />
            <span class="itemText">麻辣烫</span>
          </li>
        </ul>
        <ul class="swiper-slide">
          
        </ul>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div id="cut-off"></div>
    <div id="buottom-content">
      <div class="merchant">
        <div class="header">
          <span><i class="iconfont icon-sidebar-toggle"></i></span>
          <span> 附近商家 </span>
        </div>
        <div class="merchantList">
          <div class="merchantItem">
            <img src="../../common/images/shop/1.jpg" />
            <div class="merchantItemtop">
              <span class="merchantItemtopleft">品牌</span>
              <h4 class="merchantItemtopcontent">
                锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦
              </h4>
              <ul class="shop_detail_ul">
                <li class="supports">准</li>
                <li class="supports">时</li>
                <li class="supports">宝</li>
              </ul>
            </div>
            <div class="shopList">
              <div class="shop_rating">
                <ul class="stars">
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                </ul>
                <span class="rating">3.6</span>
                <span class="text">月售216单</span>
              </div>
              <section class="shop-right">
                <span class="shop-rightl">兰骑士专送</span>
                <span class="shop-rightr">准时达</span>
              </section>
            </div>
            <div class="merchantItembottom">
              <span>￥20起送/免费配送费</span>
            </div>
          </div>
          <div class="merchantItem merchantItemtwo">
            <img src="../../common/images/shop/2.jpg" />
            <div class="merchantItemtop">
              <span class="merchantItemtopleft">品牌</span>
              <h4 class="merchantItemtopcontent">亲丫头西安名小吃肉夹馍</h4>
              <ul class="shop_detail_ul">
                <li class="supports">准</li>
                <li class="supports">时</li>
                <li class="supports">宝</li>
              </ul>
            </div>
            <div class="shopList">
              <div class="shop_rating">
                <ul class="stars">
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                </ul>
                <span class="rating">4.5</span>
                <span class="text">月售216单</span>
              </div>
              <section class="shop-right">
                <span class="shop-rightl">兰骑士专送</span>
                <span class="shop-rightr">准时达</span>
              </section>
            </div>
            <div class="merchantItembottom">
              <span>￥20起送/免费配送费</span>
            </div>
          </div>
          <div class="merchantItem merchantItemthre">
            <img src="../../common/images/shop/3.jpg" />
            <div class="merchantItemtop">
              <span class="merchantItemtopleft">品牌</span>
              <h4 class="merchantItemtopcontent">千里香馄饨王(城置路店)</h4>
              <ul class="shop_detail_ul">
                <li class="supports">准</li>
                <li class="supports">时</li>
                <li class="supports">宝</li>
              </ul>
            </div>
            <div class="shopList">
              <div class="shop_rating">
                <ul class="stars">
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                </ul>
                <span class="rating">5.0</span>
                <span class="text">月售216单</span>
              </div>
              <section class="shop-right">
                <span class="shop-rightl">兰骑士专送</span>
                <span class="shop-rightr">准时达</span>
              </section>
            </div>
            <div class="merchantItembottom">
              <span>￥20起送/免费配送费</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header/Header.vue';
export default {
  components: { Header },
   mounted:()=>{
    var shop_rating=document.getElementsByClassName("shop_rating")
  console.log(shop_rating)
  
for (let element of shop_rating) {
  var rating=  element.getElementsByClassName('rating')[0];
  var star= element.getElementsByClassName('star');
  var num=rating.innerText;
  for( var i=0;i<Math.ceil(num)*1;i++){
    if(i>Math.floor(num)-1){
      star[i].classList.add('half')
    }else{
      star[i].classList.add('on')
    }
  }

}


   }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >

.main {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 45px 0px 50px 0px;
  box-sizing: border-box;
  display: none;
  .login{
    font-size 14px
    .loginleft{
      margin-right 5px
    }
  }

  

  .swiper-container {
    height: 200px;

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

#cut-off {
  position: absolute;
  top: 250px;
  left: 0px;
  width: 100%;
  height: 20px;
  background-color: #F5F5F5;
}

#buottom-content {
  position: relative;
  top: 30px;
  left: 0px;
  width: 100%;
  height: 100%;

  .merchant {
    height: 100%;
    position: relative;

    .header {
      height: 20px;
      color: gray;
      font-size: 15px;
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

      .stars {
        display: flex;
      }

      .star {
        width: 10px;
        height: 10px;
        background-size: 100% 100%;
        background-image: url('../../common/images/stars/star24_off@2x.png');

        &.half {
          background-image: url('../../common/images/stars/star24_half@2x.png');
        }

        &.on {
          background-image: url('../../common/images/stars/star24_on@2x.png');
        }
      }

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

