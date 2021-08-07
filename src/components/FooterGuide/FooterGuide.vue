<template>
   
 <footer class="footer_guide border-1px">  
  <a href="javascript:;" class="guide_item " :class="{on: $route.path==='/msite'}" @click="goTo('/msite')" >
    <span class="item_icon" >
      <i class="iconfont icon-shop"></i>
    </span>
    <span>外卖</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/search'}" @click="goTo('/search')">
    <span class="item_icon" >
      <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
    </span>
    <span>搜索</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/order'}" @click="goTo('/order')">
    <span class="item_icon"> 
      <i class="iconfont icon-icon-contract"></i>
    </span>
    <span>订单</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
    <span class="item_icon">
      <i class="iconfont icon-ren"></i>
    </span>
    <span>我的</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/map'}" @click="goTo('/map')">
    <span class="item_icon">
      <i class="iconfont icon-tubiao"></i>
    </span>
    <span>地图</span>
  </a>
</footer>

</template>
<script>
export default{
  name:'footerGuide',
  methods: {
     goTo (path) {
      this.$router.replace(path)
     }
   }
  
}
</script>
 <style lang='stylus' rel="stylesheet/stylus">

    .footer_guide
       top-border-1px(#7e8c8d)
       position fixed
       z-index 100
       left 0
       right 0
       bottom 0
       background-color #fff
       width 100%
       height 50px
       display flex

       .guide_item
           display flex
           flex 1
           text-align center
           flex-direction column
           align-items center
           margin 5px
           color #999999

           &.on
               color green
           .item_icon
               font-size 12px
               
               margin-bottom 2px
 
           .iconfont
               font-size 22px
               
</style>
  

