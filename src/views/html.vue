<template>
  <div id="layout">
    <Layout>
      <!-------------------------------- 页眉 -------------------------------->
      <Header>
        <Menu mode="horizontal" theme="primary">
          <MenuItem name="user" class="user-item">
            <IconSvg iconClass="bangzhuyushuoming" class="menu-item-icon"></IconSvg>
            <span class="menu-item-word">系统说明</span>
          </MenuItem>
          <MenuItem name="feedback" class="feedback-item">
            <IconSvg iconClass="wentifankui" class="menu-item-icon"></IconSvg>
            <span class="menu-item-word">问题反馈</span>
          </MenuItem>
          <MenuItem name="logout" class="logout-item">
            <IconSvg iconClass="yonghu" class="menu-item-icon"></IconSvg>

            <Dropdown class="menu-item-word">
              <a href="javascript:void(0)">
                <span class="menu-item-word">个人中心</span>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
          <MenuItem name="system" class="system-item">
            <img src="../../public/上海logo.jpeg" class="system-icon" @click="GoHome" />
            <span class="system-name">上海市新冠疫情可视化系统</span>
          </MenuItem>
        </Menu>
      </Header>
    </Layout>
    <Content id="layout-content">
      <iframe
        src="http://localhost:8080/public/static/index.html"
        width="100%"
        frameborder="0"
        id="iframename"
        name="iframename"
      ></iframe>
    </Content>
  </div>
</template>

<style></style>

<script>
export default {
  // 使用时请使用 :url.sync=""传值

  mounted() {},

  methods: {
    GoHome() {
      this.$router.push("/Welcome");
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
  // border-radius: 4px;
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

#iframename {
  position: relative;
  height: 718.5px;
  // top: -3px;
  overflow: hidden;
}
#layout-content {
  margin-top: 6px;
  width: 100%;
  position: relative;
  height: 718.5px;
}

#layout {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
