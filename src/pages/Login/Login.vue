<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">饭来了外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{ on: logintype }"
            @click="logintype = true"
            >短信登录</a
          >
          <a
            href="javascript:;"
            :class="{ on: !logintype }"
            @click="logintype = false"
            >密码登录</a
          >
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{ on: logintype }">
            <section class="login_message">
              <!-- <input
                type="text"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
                name="phone"
                v-validate="{ required: true, regex: /^1\d{10}$/ }"
              /> -->
                <input v-validate="{ required: true, regex: /^1\d{10}$/ }"  v-model="phone" data-vv-as="手机号" name="phone" type="text" >
                <span style="color:red">{{ errors.first("phone") }}</span>

              <button
                :disabled="!isright || count_down > 0"
                class="get_verification"
                :class="{ PhoneNumberverification: isright }"
                @click.prevent="sendcode"
              >
                {{
                  count_down > 0 ? `已发送验证码${count_down}s` : "获取验证码"
                }}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login_hint">
              温馨提示：未注册好滋味外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !logintype }">
            <section>
              <section class="login_message">
                <!-- <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                /> -->
                <input v-validate="'alpha_num'" name="username" type="text" data-vv-as="手机/邮箱/用户名" placeholder="手机/邮箱/用户名"/>
                <span style="color:red ">{{ errors.first("username") }}</span>
              </section>
              <section class="login_verification">
                <input
                  :type="isShowPassword ? 'password' : 'text'"
                  maxlength="8"
                  placeholder="密码"
                />
                <div
                  class="switch_button off"
                  :class="isShowPassword ? 'off' : 'on'"
                  @click="isShowPassword = !isShowPassword"
                >
                  <div
                    class="switch_circle"
                    :class="{ right: isShowPassword }"
                  ></div>
                  <span class="switch_text">{{
                    isShowPassword ? "" : "ABC"
                  }}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" />
                <img
                  class="get_verification"
                  :src="image"
                  alt="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-arrow-right1"></i>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
 import zh_CN from 'vee-validate/dist/locale/zh_CN'
import {reqimgOnce} from '../../api/index'
Vue.use(VeeValidate);

    VeeValidate.Validator.localize('zh_CN', {
      messages: zh_CN.messages,
      attributes: {
        phone: '手机号',
        code: '验证码'

      },
     
  
    })
export default {
  data() {
    return {
      logintype: true, //登录类型,短信登录/密码登录
      phone: "", //手机号
      count_down: 0, //倒计时
      isShowPassword: true, //是否显示密码,初始值为显示密码
      image:null
    };
  },
  computed: {
    isright() {
      return /^1\d{10}$/.test(this.phone);
    },
  },

  methods: {
    sendcode() {
      this.count_down = 10;
      const timer = setInterval(() => {
        this.count_down--;
        if (this.count_down === 0) {
          clearInterval(timer);
        }
      }, 1000);
    },
    // isRequired(value) {
    //   return value ? true : "This field is required";
    // },
  },
  async mounted(){
     const result=  await reqimgOnce()
     console.log(result)
     
    this.image='data:image/jpg;base64,'+result.image;
    this.randomstr=result.randomstr;
  }
  
};
</script>
<style lang="stylus" scoped>
@import '../../common/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}

.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;

  .login_header {
    .login_logo {
      font-size: 40px;
      font-weight: bold;
      color: #02a774;
      text-align: center;
    }

    .login_header_title {
      padding-top: 40px;
      text-align: center;

      >a {
        color: #333;
        font-size: 14px;
        padding-bottom: 4px;

        &:first-child {
          margin-right: 40px;
        }

        &.on {
          color: #02a774;
          font-weight: 700;
          border-bottom: 2px solid #02a774;
        }
      }
    }
  }

  .login_content {
    >form {
      >div {
        display: none;

        &.on {
          display: block;
        }

        input {
          width: 100%;
          height: 100%;
          padding-left: 10px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 4px;
          outline: 0;
          font: 400 14px Arial;

          &:focus {
            border: 1px solid #02a774;
          }
        }

        .login_message {
          position: relative;
          margin-top: 16px;
          height: 48px;
          font-size: 14px;
          background: #fff;

          .get_verification {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            border: 0;
            color: #ccc;
            font-size: 14px;
            background: transparent;

            &.PhoneNumberverification {
              color: #000;
            }
          }
        }

        .login_verification {
          position: relative;
          margin-top: 16px;
          height: 48px;
          font-size: 14px;
          background: #fff;

          .switch_button {
            font-size: 12px;
            border: 1px solid #ddd;
            border-radius: 8px;
            transition: background-color 0.3s, border-color 0.3s;
            padding: 0 6px;
            width: 30px;
            height: 16px;
            line-height: 16px;
            color: #fff;
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);

            &.off {
              background: #fff;

              .switch_text {
                float: right;
                color: #ddd;
              }
            }

            &.on {
              background: #02a774;
            }

            >.switch_circle {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 16px;
              height: 16px;
              border: 1px solid #ddd;
              border-radius: 50%;
              background: #fff;
              box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
              transition: transform 0.3s;

              &.right {
                transform: translateX(27px);
              }
            }
          }
        }

        .login_hint {
          margin-top: 12px;
          color: #999;
          font-size: 14px;
          line-height: 20px;

          >a {
            color: #02a774;
          }
        }
      }

      .login_submit {
        display: block;
        width: 100%;
        height: 42px;
        margin-top: 30px;
        border-radius: 4px;
        background: #4cd96f;
        color: #fff;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
        border: 0;
      }
    }

    .about_us {
      display: block;
      font-size: 12px;
      margin-top: 20px;
      text-align: center;
      color: #999;
    }
  }

  .go_back {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;

    >.iconfont {
      font-size: 20px;
      color: #999;
    }
  }
}
</style>
