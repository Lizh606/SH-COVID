<template>
  <div class="sign-In">
    <div class="sign-content">
      <div class="signIn-left"></div>
      <div class="signIn-right">
        <div class="sign-qr-code"></div>
        <div class="sign-title">
          上海市新冠疫情COVID-19<br />动态分布可视化系统
        </div>
        <div class="sign-center" @keyup.enter="handleSubmit">
          <Form
            id="form"
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
          >
            <FormItem label="用户名" prop="user">
              <i-input
                id="user"
                type="text"
                v-model="formValidate.user"
                placeholder="请输入用户名"
              ></i-input>
            </FormItem>
            <FormItem label="密码" prop="password">
              <i-input
                id="password"
                type="password"
                v-model="formValidate.password"
                placeholder="请输入密码"
              ></i-input>
            </FormItem>
            <FormItem>
              <CheckboxGroup>
                <Checkbox
                  label="记住密码"
                  id="remeberPwd"
                  v-model="formValidate.savePwd"
                  @click.native="change()"
                ></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                @click="handleSubmit('formValidate')"
                :loading="loading"
                class="form-buttom"
                >登录</Button
              >
            </FormItem>
          </Form>
          <div type="‘button’" class="register" @click="ToRegister">
            立即注册
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getUserInfo } from '../api/login.js'
export default {
  name: 'Login',

  data() {
    return {
      loading: false,
      formValidate: {
        user: '',
        // checkbox:true,
        savePwd: false,
        password: ''
      },
      ruleValidate: {
        user: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '用户密码不能为空',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码不能少于6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    // 清掉所有的localStorage
    // localStorage.removeAll();
    // sessionStorage.removeAll();
  },

  mounted() {
    //页面初始化时，如果帐号密码cookie存在则填充
    if (this.getCookie('user') && this.getCookie('password')) {
      this.formValidate.user = this.getCookie('user')
      this.formValidate.password = this.getCookie('password')
      this.formValidate.savePwd === true
    }
  },
  methods: {
    //复选框勾选状态发生改变时，如果未勾选则清除cookie
    change() {
      if (this.formValidate.savePwd === true) {
        this.formValidate.savePwd === false
        // this.delCookie("user");
        // this.delCookie("password");
      } else {
        this.formValidate.savePwd === true
        this.delCookie('user')
        this.delCookie('password')
      }
    },
    setCookie(name, value, day) {
      var date = new Date()
      date.setDate(date.getDate() + day)
      document.cookie = name + '=' + value + ';expires=' + date
    },
    getCookie(name) {
      var reg = RegExp(name + '=([^;]+)')
      var arr = document.cookie.match(reg)
      if (arr) {
        return arr[1]
      } else {
        return ''
      }
    },
    delCookie(name) {
      this.setCookie(name, null, -1)
    },
    async handleSubmit(info) {
      this.loading = true
      const loginname = this.formValidate.user.trim()
      const loginpwd = this.formValidate.password
      if (this.formValidate.savePwd === true) {
        this.setCookie('user', loginname, 7) //保存帐号到cookie，有效期7天
        this.setCookie('password', loginpwd, 7) //保存密码到cookie，有效期7天
      } else {
        this.delCookie('user')
        this.delCookie('password')
      }
      this.$refs[info].validate(async (valid) => {
        if (valid) {
          try {
            const result = await login({
              username: loginname,
              password: loginpwd
            })
            this.loading = false

            if (result.token) {
              // 存储token开始时间
              
              let nowData = Date.now()
              this.$store.commit('set_TimeStamp', nowData)
              this.$store.commit('set_token', result.token)
              const userinfo = await getUserInfo()
              this.$store.commit('setuserid', userinfo.id)
              this.$store.commit('setuserName', userinfo.username)
              this.$store.commit('setnickName', userinfo.nickName)
              this.$store.commit('setUserImg', userinfo.imgUrl)
              this.setCookie('realname', userinfo.nickName, 7)
              this.$router.push('/animation')
            } else {
              alert('登陆失败')
            }
          } catch (e) {
            alert('请求失败')
          }
        }
      })
    },
    ToRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-In {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('/imgs/shanghai.jpg') no-repeat center;
  background-size: cover;
  &:after {
    content: '';
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
        background: url('/imgs/erweima.png') no-repeat center;
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
.register {
  text-align: center;
}
</style>
