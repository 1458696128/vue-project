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
  }
};
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