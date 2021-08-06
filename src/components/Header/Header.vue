<template>
  <header id="header">
    <slot name="left"></slot>
    <span class="add">{{title}}</span>
    <slot name="right"></slot>
  </header>
</template>
<script>

export default {
  
  name: "Header",
  props: {
      title:String,
  },
  // mounted(){
  //   //点击按钮获取地理位置信息
  //     //getCurrentPosition与定时器setInterval类似多次请求，因为位置需要不间断的获取
  //     //直接navigator.geolocation表示单次获取位置
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log( "经度" + position.coords.longitude);
  //     console.log( "纬度" + position.coords.latitude);
  //       mapState.longitude= position.coords.longitude;
  //       mapState.latitude= position.coords.latitude;
  //       this.$store.dispatch('getAddress');
  //     }

  // }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >
 #header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: green;
    color: white;
    font-size: 20px;
    z-index 10
    .iconfont {
      font-size: 25px;
    }

    .add {
      width: 188px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 20px;
      text-align center;
      line-height 20px
    }

    .login {
      display: flex;

      a {
        color: white;
      }
    }
  }
</style>