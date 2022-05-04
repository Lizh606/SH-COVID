<template>
  <div>
        <Header>
        <Menu mode="horizontal" class="layout-header">
          <MenuItem name="logout" class="menu-item-word">
            <Dropdown>
              <a href="javascript:void(0)">
                <span>
                  <span style="color: aliceblue" class="info_name">{{
                    userinfos.nickName
                  }}</span>
                  <img
                    :src="userinfos.imgUrl"
                    style="height: 50px; border-radius: 50%"
                    class="menu-item-icon"
                    @click="GoHome"
                  />
                  <!-- <IconSvg iconClass="xiala" class="xiala-icon"></IconSvg> -->
                </span>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem
                  ><div @click="changeInfos()">修改信息</div></DropdownItem
                >
                <DropdownItem>
                  <!-- <IconSvg iconClass="tuichu"></IconSvg> -->
                  <div @click="ToLogin()">退出登录</div></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
          <MenuItem name="system" class="system-item">
            <IconSvg iconClass="ziyuan" class="system-icon"></IconSvg>
            <span class="system-name" @click="welcome()"
              >上海市新冠疫情动态分布可视化系统</span
            >
          </MenuItem>
        </Menu>
      </Header>
   <!-- <middle /> -->
    <TopicMake />
  </div>
</template>

<script>
import { getUserInfo } from '@/api/login.js'

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
      userinfos: {
        userName: '',
        nickName: '',
        imgUrl: '',
    }
    }
  },
  async mounted () {
     const getinfo = await getUserInfo()
    this.info = getinfo
    // 使页面更新后导航菜单的active-name与页面内容匹配
    this.$nextTick(() => {
      this.userinfos.userName = this.info.username
      this.userinfos.nickName = this.info.nickName
      this.userinfos.imgUrl = this.info.imgUrl
      let path = this.$route.path.split('/')
      this.changeActiveName(path)
    })
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
<style lang="scss" scoped>
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
/deep/ .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  color: #fff;
  border-bottom: none;
}

.menu-item-icon {
  float: right !important;
  position: relative;
  top: 7px;
  // font-size: 25px;
  right: 60px;
  font-size: 32px;
}
.info_name {
  position: relative;
  right: 65px;
}
.menu-item-word {
  float: right !important;
  position: relative;
  right: -70px;
  text-align: center;
  font-size: 20px;
}

.xiala-icon {
  font-size: 20px;
  color: #f5f7f9;
}
.system-item {
  left: 0px;
  height: 70px;
}

/deep/.ivu-layout-header {
  padding: 0;
}
/deep/.ivu-menu-horizontal {
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
  top: 5px;
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
  top: -3px;
  left: -3px;
  position: relative;
  font-weight: bold;
}
/deep/.ivu-icon-ios-arrow-down {
  display: none;
}
.content {
  position: flex;
  left: 150px;
  height: 100%;
}
#layout-content {
  height: 100%;
  overflow: unset;
}
#layout {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>