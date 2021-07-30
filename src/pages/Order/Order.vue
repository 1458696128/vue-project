<template>
  <div id="order" class="main">
    <Header title="订单"></Header>
    <div id="order-content">
      <img src='../../common/images/order/person.png'>
      <span class="order-text">登录后查看外卖订单</span>
      <button class="order-button">立即登录</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>


#order-content {
  position: relative;
  width: 100%;
  height: 100%;

  img{
      position absolute
      top:100px
     
      left 50%
      transform :translateX(-50%) 
      }
  
  .order-text {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #6a6a6a;
    font-size: 17px;
  }

  .order-button {
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: green;
    width: 96px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
