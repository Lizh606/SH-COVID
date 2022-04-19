<template>
  <div>
    <Header>
      <Menu mode="horizontal" theme="primary">
        <!-- <div class="time-item">{{ nowDate }}</div> -->
        <MenuItem name="user" class="user-item">
          <Dropdown class="menu-item-word">
            <IconSvg iconClass="bianji" class="menu-item-icon"></IconSvg>
            <a href="javascript:void(0)">
              <span class="menu-item-word">系统说明</span>
            </a>
          </Dropdown>
        </MenuItem>
        <MenuItem name="feedback" class="feedback-item">
          <Dropdown class="menu-item-word">
            <IconSvg iconClass="pinglun" class="menu-item-icon"></IconSvg>
            <a href="javascript:void(0)">
              <span class="menu-item-word">问题反馈</span>
            </a>
          </Dropdown>
        </MenuItem>
        <MenuItem name="logout" class="logout-item">
          <Dropdown class="menu-item-word">
            <IconSvg iconClass="zhanghao1" class="menu-item-icon"></IconSvg>
            <a href="javascript:void(0)">
              <span class="menu-item-word">{{ username }}</span>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>个人中心</DropdownItem>
              <DropdownItem>修改密码</DropdownItem>
              <DropdownItem>
                <!-- <IconSvg iconClass="tuichu"></IconSvg> -->
                <div @click="ToLogin()">退出登录</div></DropdownItem
              >
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
        <MenuItem name="system" class="system-item">
          <IconSvg iconClass="ziyuan" class="system-icon"></IconSvg>
          <span class="system-name" @click="GoHome"
            >上海市新冠疫情可视化系统</span
          >
        </MenuItem>
      </Menu>
    </Header>
   <!-- <middle /> -->
    <TopicMake />
  </div>
</template>

<script>
import middle from "./middle.vue"
import TopicMake from "./TopicMake.vue";
export default {
  name: "Topic",
  components: {
    TopicMake,
    // middle
  },
  data () {
    return {
      username:""
    }
  },
  mounted () {
     this.$nextTick(() => {
      this.username = window.localStorage
        .getItem("userName")
        .replaceAll('"', "");
    });
  },
  methods: {
      GoHome() {
      this.$router.push("/Welcome");
    },
    ToLogin() {
      if (this.$store.state.token) {
        this.$store.commit("del_token");
        this.$router.push("/");
      } else {
        this.$router.push("/");
      }
    },
  }
};
</script>

<style lang="less" scoped>
.layout-first {
  // border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
/deep/.ivu-menu-horizontal {
  background-color: #00bec9;
}
/deep/ .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color: #fff;
    border-bottom: none;
}
.time-item {
  float: left !important;
  color: #ffffff;
  right: 125px;
  width: 200px;
}
.user-item {
  right: 125px;
}
.feedback-item {
  right: -38px;
}
.logout-item {
  right: -200px;
}
.user-item,
.feedback-item,
.logout-item {
  width: 100px;
  top: 13px;
  font-size: 14px;
  float: right !important;
}
.menu-item-icon {
  margin: 0 auto;
  position: relative;
  display: block;
  font-size: 25px;
}
.menu-item-word {
  text-align: center;
  color: white;
  line-height: 40px;
  display: block;
}
&/deep/.ivu-select-dropdown {
  margin: -10px 0;
}
.system-item {
  left: 0px;
  height: 70px;
}
// &/deep/.ivu-menu-light {
//   margin-top: 5px;
// }
&/deep/.ivu-layout-header {
  padding: 0;
}
&/deep/.ivu-menu-horizontal {
  height: 70px;
  line-height: 70px;
}
.system-icon {
  width: 50px;
  height: 40px;
  vertical-align: -10px;
  fill: currentColor;
  overflow: hidden;
}
.system-name {
  // left: 10px;
  color: #f5f7f9;
  position: relative;
  font-size: 24px;
  font-weight: bold;
}

&/deep/.ivu-icon-ios-arrow-down {
  display: none;
}

#layout {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
