<template>
  <Modal v-model="modal1" width="1000" @on-ok="okHandler">
    <p
      slot="header"
      style="background-color: #00bec9; text-align: center; font-size: 20px"
    >
      <span style="color: #eee">修改用户信息</span>
    </p>
    <div class="box">
      <div class="left">
        <div>
          <img :src="imgUrl" class="img" />
        </div>
        <span class="img_info">
          修改头像:<Input
            v-model="url"
            placeholder="请输入头像url"
            style="width: 250px"
          />
          <Button type="primary" class="img_btn" @click="changeImg()"
            >确定</Button
          >
        </span>
      </div>
      <div class="right">
        <div @keyup.enter="handleName">
          <Form
            id="form1"
            ref="formValidate1"
            :model="formValidate1"
            :rules="ruleValidate1"
          >
            <FormItem label="用户名" prop="user">
              <i-input
                id="user"
                type="text"
                style="width: 250px"
                disabled
                v-model="user"
                placeholder="请输入用户名"
              ></i-input>
            </FormItem>
            <FormItem label="昵称" prop="nickName">
              <i-input
                id="user"
                type="text"
                style="width: 250px"
                v-model="formValidate1.nickName"
                placeholder="请输入昵称"
              ></i-input>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                @click="handleName('formValidate1')"
                :loading="loading1"
                class="form-buttom"
                >确认修改</Button
              >
            </FormItem>
          </Form>
        </div>

        <div @keyup.enter="handlePwd">
          <Form
            id="form"
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
          >
            <FormItem label="密码" prop="password">
              <i-input
                id="password"
                type="password"
                style="width: 550px"
                v-model="formValidate.password"
                placeholder="请输入修改的密码"
              ></i-input>
            </FormItem>
            <FormItem label="确认密码" prop="password">
              <i-input
                id="password"
                type="password"
                style="width: 550px"
                v-model="formValidate.retypedPassword"
                placeholder="请确认修改的密码"
              ></i-input>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                @click="handlePwd('formValidate')"
                :loading="loading"
                class="form-buttom"
                >确定修改</Button
              >
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <!-- <div>
      <Button @click="okHandler">确定</Button>
    </div> -->
  </Modal>
</template>

<script>
import { changeUserinfo, getUserInfo } from '@/api/login.js'

export default {
  data() {
    return {
      loading: false,
      loading1: false,
      formValidate1: {
        nickName: this.nickName
      },
      ruleValidate1: {
        nickName: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ]
      },
      formValidate: {
        nickName: '',
        // checkbox:true,
        savePwd: false,
        password: ''
      },
      ruleValidate: {
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
        ],
        retypedPassword: [
          {
            required: true,
            message: '确认密码不能为空',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码不能少于6位',
            trigger: 'blur'
          }
        ],
        nickName: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ]
      },
      user: '',
      nickName:'',
      modal1: false,
      imgUrl: '',
      url: ''
    }
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    userinfos: {
      type: Object,
      default: () => {}
    }
  },
  computed: {},
  watch: {
    userinfos: {
      handler(val) {
        this.user = val.userName
        this.imgUrl = val.imgUrl
        this.formValidate1.nickName = val.nickName
      },
      deep: true // 深度监听父组件传过来对象变化
    },
    modal(val) {
      this.modal1 = val
    }
  },
  mounted() {},
  methods: {
    okHandler() {
      this.modal1 = false
      location.reload()
    },
    async changeImg() {
      const data = {
        imgUrl: this.url
      }
      const res = await changeUserinfo('2', data)
      this.$store.commit('setUserImg', res.data.imgUrl)
    },
    async handleName(info) {
      this.loading1 = true
      const nickName = this.formValidate1.nickName.trim()
      this.$refs[info].validate(async (valid) => {
        if (valid) {
          try {
            const data = {
              nickName: nickName
            }
            const res = await changeUserinfo('2', data)
            if (res) {
              this.$store.commit('setnickName', res.data.nickName)
              this.$Message.success('修改成功')
              this.loading1 = false
            } else {
              this.$Message.error('更改失败')
            }
          } catch (e) {
            this.$Message.error('请求失败')
          }
        }
      })
    },
    async handlePwd(info) {
      this.loading = true
      const password = this.formValidate.password
      //   const loginpwd = this.formValidate.password;

      this.$refs[info].validate(async (valid) => {
        if (valid) {
          try {
            const data = {
              password: password
            }
            const res = await changeUserinfo('2', data)
            if (res) {
              this.$Message.success('修改成功')
              this.loading = false
            } else {
              this.$Message.error('更改失败')
            }
          } catch (e) {
            this.$Message.error('请求失败')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.ivu-modal-header {
  background-color: #00bec9;
}
.box {
  display: flex;
  border: #eee 2px solid;
}
.left {
  width: 400px;
  height: 500px;
  //    display:flex;
  // align-items:center;
  //    background-color:red
  position: relative;
  //   border: #eee 2px solid;
  border-radius: 4px;
  border-right: 1px solid rgba(220, 220, 220, 1);
}
.right {
  flex: 1;
  position: relative;
  margin: 2rem 0 0 2rem;
  //   border: #eee 2px solid;
  border-radius: 4px;
}
.img {
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

  border: #eee 2px solid;
  border-radius: 50%;
  // position: relative;
  // top: 50px;
  position: absolute;
  left: 50%;
  top: 20%;

  transform: translate(-50%, -20%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.img_info {
  position: relative;
  left: 50px;
  top: 235px;
}
.img_btn {
  position: relative;
  left: -180px;
  top: 50px;
}
</style>
