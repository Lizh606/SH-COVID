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
&/deep/.ivu-menu-light {
  margin-top: 5px;
}
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
  position: relative;
  font-size: 24px;
  font-weight: bold;
}

.layout-sider {
  position: relative;
  // top: -3px;
  flex: 1 1 100% !important;
}
.sider {
  background: white;
  width: 74px !important;
  min-width: 74px !important;
  max-width: 74px !important;
  flex-basis: 100% !important;
}
.sider:hover {
  background: white;
  width: 170px !important;
  min-width: 170px !important;
  max-width: 170px !important;
  flex-basis: 100% !important;
}
.sider-menu {
  top: 1px;
  width: 74px !important;
  height: 100%;
}

.sider-menu:hover {
  width: 170px !important;
  .sider-item-word,
  .sider-item-word-son {
    display: inline-block;
    text-align: center;
  }
}
.sider-item-svg,
.sider-item-word,
.sider-item-word-son {
  vertical-align: middle;
  line-height: initial;
  display: none;
}
.sider-item-icon {
  font-size: 22px;
  left: -3px;
  position: relative;
}
.sider-item-icon-son {
  font-size: 18px;
  left: -15px;
  position: relative;
}

.sider-item-word {
  left: 6px;
  top: -3px;
  position: relative;
  font-weight: bold;
}
.sider-item-word-son {
  left: -3px;
  position: relative;
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
