<template>
  <div id="layout">
    <Layout class="layout-first">
      <!-------------------------------- 页眉 -------------------------------->
      <Header>
        <Menu mode="horizontal" theme="primary">
          <MenuItem name="user" class="user-item">
            <Dropdown class="menu-item-word">
              <IconSvg
                iconClass="bangzhuyushuoming"
                class="menu-item-icon"
              ></IconSvg>
              <a href="javascript:void(0)">
                <span class="menu-item-word">系统说明</span>
              </a>
            </Dropdown>
          </MenuItem>
          <MenuItem name="feedback" class="feedback-item">
            <Dropdown class="menu-item-word">
              <IconSvg iconClass="wentifankui" class="menu-item-icon"></IconSvg>
              <a href="javascript:void(0)">
                <span class="menu-item-word">问题反馈</span>
              </a>
            </Dropdown>
          </MenuItem>
          <MenuItem name="logout" class="logout-item">
            <Dropdown class="menu-item-word">
              <IconSvg iconClass="yonghu" class="menu-item-icon"></IconSvg>
              <a href="javascript:void(0)">
                <span class="menu-item-word">个人中心</span>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem>修改密码</DropdownItem>
                <DropdownItem
                  ><div @click="ToLogin()">退出登录</div></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
          <MenuItem name="system" class="system-item">
            <img
              src="../../public/上海logo.jpeg"
              class="system-icon"
              @click="GoHome"
            />
            <span class="system-name">上海市新冠疫情可视化系统</span>
          </MenuItem>
        </Menu>
      </Header>
      <Layout class="layout-sider">
        <Sider hide-trigger class="sider">
          <Menu
            theme="light"
            :active-name="siderActiveName"
            ref="siderMenu"
            class="sider-menu"
          >
            <Submenu name="1">
              <template slot="title">
                <!-- <IconSvg iconClass="ditu2" class="sider-item-icon"></IconSvg> -->
                <Icon custom="iconfont icon-ditu2" class="sider-item-icon" />
                <span class="sider-item-word">地图展示</span>
              </template>
              <MenuItem name="mapgroup" @click.native="tomap">
                <IconSvg
                  iconClass="erweiditu"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">二维地图</span>
              </MenuItem>
              <MenuItem name="gaodemap" @click.native="togaode">
                <IconSvg
                  iconClass="sanweiditu"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">三维地图</span>
              </MenuItem>
              <MenuItem name="tiandutu" @click.native="totianditu">
                <IconSvg
                  iconClass="mapOfGaud"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">天地图</span>
              </MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon custom="iconfont icon-gongneng" class="sider-item-icon" />
                <span class="sider-item-word">功能列表</span>
              </template>
              <MenuItem name="locator" @click.native="tolocator">
                <Icon
                  custom="iconfont icon-dingwei-"
                  class="sider-item-icon-son"
                />
                <span class="sider-item-word-son">定位道路</span>
              </MenuItem>
              <MenuItem name="Swapmap" @click.native="toswapmap">
                <Icon
                  custom="iconfont icon-qiehuan"
                  class="sider-item-icon-son"
                />
                <span class="sider-item-word-son">切换底图</span>
              </MenuItem>
              <MenuItem name="sidetable3" @click.native="toweather">
                <Icon
                  custom="iconfont icon-tianqi"
                  class="sider-item-icon-son"
                />
                <span class="sider-item-word-son">天气可视化</span>
              </MenuItem>
              <MenuItem name="changeview" @click.native="tochangeview">
                <Icon
                  custom="iconfont icon-relitu"
                  class="sider-item-icon-son"
                />
                <span class="sider-item-word-son">23D切换</span>
              </MenuItem>
              <MenuItem name="featureaffect" @click.native="tofeatureaffect">
                <Icon
                  custom="iconfont icon-sanweihuanchongqu"
                  class="sider-item-icon-son"
                />
                <span class="sider-item-word-son">缓冲区</span>
              </MenuItem>
              <MenuItem name="popup" @click.native="topopup">
                <Icon
                  custom="iconfont icon-sanweihuanchongqu"
                  class="sider-item-icon-son"
                />
                <span class="sider-item-word-son">弹窗</span>
              </MenuItem>
            </Submenu>
          </Menu>
          <!-- </Col>
          </Row> -->
        </Sider>
        <!-------------------------------- 地图页/表格页 -------------------------------->
        <Content id="layout-content">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "LayOut",
  data() {
    return {
      siderActiveName: null,
    };
  },
  mounted() {
    // 使页面更新后导航菜单的active-name与页面内容匹配
    this.$nextTick(() => {
      let path = this.$route.path.split("/");
      this.changeActiveName(path);
    });
  },
  watch: {
    // 解决手动改路径时，导航菜单的active-name不更新的问题
    // 这一监听也作用于router.push
    $route(val) {
      let path = val.path.split("/");
      this.changeActiveName(path);
    },
  },
  methods: {
    GoHome() {
      this.$router.push("/Welcome");
    },
    ToLogin() {
      this.$router.push("/");
    },
    changeActiveName(path) {
      let length = path.length;
      let name = path[length - 1];
      if (name == "layout") {
        this.siderActiveName = "Map";
      } else {
        this.siderActiveName = name;
      }
    },
    tomap() {
      // 避免跳转到当前页面
      if (this.$route.path == "/Map") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/Map");
    },
    togaode() {
      // 避免跳转到当前页面
      if (this.$route.path == "/SceneMap") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/SceneMap");
    },
    totianditu() {
      // 避免跳转到当前页面
      if (this.$route.path == "/TianDiTu") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/TianDiTu");
    },
    tolocator() {
      // 避免跳转到当前页面
      if (this.$route.path == "/Locator") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/Locator");
    },
    toswapmap() {
      // 避免跳转到当前页面
      if (this.$route.path == "/Swapmap") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/Swapmap");
    },
    toweather() {
      // 避免跳转到当前页面
      if (this.$route.path == "/Weather") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/Weather");
    },
    tochangeview() {
      // 避免跳转到当前页面
      if (this.$route.path == "/ChangeView") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/ChangeView");
    },
    tofeatureaffect() {
      // 避免跳转到当前页面
      if (this.$route.path == "/FeatureAffect") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/FeatureAffect");
    },
    topopup() {
      // 避免跳转到当前页面
      if (this.$route.path == "/Popup") {
        console.log(
          "ROUTER WARNIND: I'd forget my page if it wasn't attached."
        );
        return;
      }
      this.$router.push("/Popup");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.layout-first {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
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
  top: 9px;
  font-size: 14px;
  float: right !important;
}
.menu-item-icon {
  margin: 0 auto;
  position: relative;
  display: block;
  font-size: 30px;
}
.menu-item-word {
  text-align: center;
  color: white;
  line-height: 40px;
  display: block;
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
  left: 10px;
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
  left: 2px;
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
.content {
  position: flex;
  left: 150px;
  height: 100%;
}
#layout-content {
  top: -6px;
  width: 945px;
  // height: 689px;
}
#layout {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
