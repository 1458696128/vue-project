<template>
  <div id="my" class="main">
    <Header title="我的"></Header>
    <div id="mycontent">
      <div class="content-header">
        <span class="iconfontstyle"><i class="iconfont icon-ren"></i></span>
        <h3>登录/注册</h3>
        <span class="iconfont-ipone"
          ><i class="iconfont icon-icon-contract"></i
        ></span>
        <span class="iconfont-text">暂无绑定手机号</span>
        <span class="iconfont-contract"
          ><i class="iconfont icon-jiantou3"></i
        ></span>
      </div>
      <ul class="content-list">
        <a href="javascript" class="info-item">
          <span class="info-left"
            ><span class="info-innertext">0.00</span>元</span
          >
          <span class="info-test">我的余额</span>
        </a>
        <a href="javascript" class="info-item itemtwo">
          <span class="info-left"
            ><span class="info-innertext info-innertexttwo">0</span>个</span
          >
          <span class="info-test">我的优惠</span>
        </a>
        <a href="javascript" class="info-item itemthree">
          <span class="info-left"
            ><span class="info-innertext info-innertexthree">0</span>分</span
          >
          <span class="info-test">我的积分</span>
        </a>
      </ul>
      <div class="mine-for">
        <div class="mine-foritem">
          <span class="mine-forleft"
            ><i class="iconfont icon-icon-contract"></i>我的订单</span
          >
          <span class="mine-forright"
            ><i class="iconfont icon-jiantou3"></i
          ></span>
        </div>
        <div class="mine-foritem">
          <span class="mine-forleft"
            ><i class="iconfont icon-sidebar-toggle iconstyleone"></i
            >积分商城</span
          >
          <span class="mine-forright"
            ><i class="iconfont icon-jiantou3"></i
          ></span>
        </div>
        <div class="mine-foritem">
          <span class="mine-forleft"
            ><i class="iconfont icon-vip5-copy iconstyletwo"></i>会员专区</span
          >
          <span class="mine-forright"
            ><i class="iconfont icon-jiantou3"></i
          ></span>
        </div>
        <div class="mine-foritem mine-foritemtop">
          <span class="mine-forleft"
            ><i class="iconfont icon-fangwu"></i>服务中心</span
          >
          <span class="mine-forright"
            ><i class="iconfont icon-jiantou3"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

#mycontent {
  width: 100%;
  height: 100%;
  background-color: #f0f0f4;

  .content-header {
    top-border-1px(white);
    position: relative;
    width: 100%;
    height: 100px;
    top:46px
    background-color: green;

    .iconfontstyle {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      display: block;
      left: 10px;
      width: 62px;
      height: 63px;
      background-color: #e4e4e4;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;

      i {
        font-size: 50px;
        font-weight: bold;
      }
    }
  }

  h3 {
    float: left;
    position: absolute;
    top: 20px;
    left: 80px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
  }

  .iconfont-ipone {
    float: left;
    position: absolute;
    top: 60px;
    left: 80px;
    font-size: 12px;
    color: white;
  }

  .iconfont-text {
    float: left;
    position: absolute;
    top: 60px;
    left: 100px;
    font-size: 14px;
    color: #fff;
  }

  .iconfont-contract {
    float: right;
    width: 30px;
    height: 30px;

    i {
      float: right;
      position: absolute;
      top: 50%;
      font-size: 20px;
      color: white;
      transform: translateY(-50%);
    }
  }

  .content-list {
    position: relative;
    width: 100%;
    height: 80px;
    top:60px

    .info-item {
      position: relative;
      
      display: flex;
      width: 33%;
      height: 80px;
      background-color: #fff;

      .info-left {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 16px;
      }

      .info-innertext {
        font-weight: bold;
        color: #f90;
        line-height: 30px;
        font-size: 30px;
      }

      .info-test {
        position: absolute;
        top: 50px;
        left: 20px;
      }
    }

    .itemtwo {
      position: absolute;
      top: 0;
      left: 33%;
      margin-left: 1px;

      .info-innertexttwo {
        color: #ff5f3e;
      }
    }

    .itemthree {
      margin-left: 2px;
      position: absolute;
      top: 0;
      left: 66%;

      .info-innertexthree {
        color: #6ac20b;
      }
    }
  }
}

.mine-for {
  margin-top: 8px;

  .mine-foritem {
    width: 100%;
    height: 53px;
    background-color: #fff;
    margin-bottom: 1px;
    line-height: 53px;

    .mine-forleft {
      display: inline-block;
      vertical-align: middle;
      padding-left: 10px;

      i {
        color: #02a774;
      }

      .iconstyleone {
        color: red;
      }

      .iconstyletwo {
        color: gold;
      }
    }

    .mine-forright {
      float: right;
      top: 50%;

      i {
        font-size: 20px;
        color: gray;
      }
    }
  }
}

.mine-foritemtop {
  margin-top: 10px;
}
</style>
