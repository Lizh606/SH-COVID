<template>
  <div class="sign-In">
    <div class="sign-content">
      <div class="signIn-left"></div>
      <div class="signIn-right">
        <div class="sign-qr-code"></div>
        <div class="sign-title">上海市新冠疫情“一张图”系统</div>
        <div class="sign-center" @keyup.enter="handleSubmit">
          <Form ref="formInline" :rules="ruleInline">
            <FormItem label="用户名" prop="user">
              <i-input
                type="text"
                v-model="formInline.user"
                placeholder="请输入用户名"
              ></i-input>
            </FormItem>
            <FormItem label="密码" prop="password">
              <i-input
                type="password"
                v-model="formInline.password"
                placeholder="请输入密码"
              ></i-input>
            </FormItem>
            <FormItem>
              <CheckboxGroup v-model="formInline.checkbox">
                <Checkbox label="记住密码"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit" class="form-buttom"
                >登录</Button
              >
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from "../utils/request";
export default {
  name: "Login",

  data() {
    return {
      url1: "",
      loading: false,
      formInline: {
        user: "",
        checkbox: [],
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "用户密码不能为空",
            trigger: "blur",
          },
          {
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounmounted() {},
  methods: {
    async handleSubmit() {
      this.$router.push("/html");
      try {
        const result = await post("/api/user/login", {
          username: this.formInline.user,
          password: this.formInline.password,
        });
        if (result?.errno === 0) {
          localStorage.isLogin = true;
          this.$router.push("/html");
        } else {
          alert("登陆失败");
        }
      } catch (e) {
        alert("请求失败");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-In {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../public/shanghai.jpg") no-repeat center;
  background-size: cover;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    background-size: cover;
    filter: blur(2px);
    z-index: 1;
  }
  .sign-content {
    width: 60rem;
    height: 35rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: inherit;
    z-index: 11;
    display: flex;
    .signIn-left {
      flex: 1;
      border: 1px #444 dadshed;
    }
    .signIn-right {
      flex: 1;
      background-color: #fff;
      .sign-qr-code {
        width: 4.17rem;
        height: 4.17rem;
        float: right;
        background: url("../../public/erweima.png") no-repeat center;
        background-size: cover;
      }
      .sign-title {
        // @include scfw(1.45rem, rgba(0, 85, 170, 1), 600);
        color: rgba(0, 85, 170, 1);
        text-align: center;
        font-size: 1.5rem;
        margin-top: 5rem;
        line-height: 1.5;
      }
      .sign-center {
        width: 22.32rem;
        margin: 2rem auto 0;
        .form-buttom {
          width: 22.32rem;
          //   background-color: rgba(0, 85, 170, 1);
        }
      }
    }
  }
}
</style>
