<template>
  <div id="layout">
    <Layout class="layout-first">
      <!-------------------------------- 页眉 -------------------------------->
      <Header>
        <Menu mode="horizontal" class="layout-header">
          <MenuItem name="logout" class="menu-item-word">
            <Dropdown>
              <a href="javascript:void(0)">
                <span>
                  <span style="color: aliceblue" class="info_name">{{ userinfos.nickName }}</span>
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
                <IconSvg iconClass="diqiu" class="sider-item-icon"></IconSvg>
                <!-- <Icon custom="iconfont icon-diqiu" class="sider-item-icon" /> -->
                <span class="sider-item-word"> 地图展示</span>
              </template>
              <MenuItem name="tiandutu" @click.native="totianditu">
                <IconSvg
                  iconClass="ditu4"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">天地图</span>
              </MenuItem>
              <MenuItem name="shanghai" @click.native="toSH">
                <IconSvg
                  iconClass="ditu3"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">上海底图</span>
              </MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <!-- <Icon custom="iconfont icon-gongneng" class="sider-item-icon" /> -->
                <IconSvg iconClass="liebiao" class="sider-item-icon"></IconSvg>
                <span class="sider-item-word">功能列表</span>
              </template>
              <MenuItem name="popup" @click.native="tohos">
                <IconSvg
                  iconClass="yiyuan"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">疫情可视化</span>
              </MenuItem>
              <MenuItem name="yq" @click.native="todata">
                <IconSvg
                  iconClass="biaoge"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">疫情数据表</span>
              </MenuItem>
              <MenuItem name="Echarts" @click.native="toEcharts">
                <IconSvg
                  iconClass="shuzhuangtu"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">Echarts</span>
              </MenuItem>
              <MenuItem name="text" @click.native="text">
                <IconSvg
                  iconClass="shuzhuangtu"
                  class="sider-item-icon-son"
                ></IconSvg>
                <span class="sider-item-word-son">测试页</span>
              </MenuItem>
            </Submenu>
          </Menu>
          <!-- </Col>
          </Row> -->
        </Sider>
        <!-------------------------------- 地图页/表格页 -------------------------------->
        <Content id="layout-content">
          <router-view v-slot="{ Component, path }">
            <keep-alive>
              <component :is="Component" :key="path" />
            </keep-alive>
          </router-view>
        </Content>
      </Layout>
    </Layout>
    <infosModal :modal="modal"  :userinfos="userinfos"></infosModal>
  </div>
</template>

<script>
import {
  tdtAdministrative,
  publicTransportPlanning,
  getCoordinate
} from '@/api/tdt_web_api/tdt_api.js'
import { getUserInfo } from '@/api/login.js'
import infosModal from './infosModal.vue'
export default {
  name: 'LayOut',
  data() {
    return {
      path: this.$route.path,
      siderActiveName: null,
      nowDate: '', // 当前日期
      info: {},
      userinfos: {
        userName:'',
        nickName: '',
        imgUrl: ''
      },
      modal: false
    }
  },
  components: {
    infosModal: infosModal
  },

  async mounted() {
    console.log(this.userinfos.imgUrl)
    this.currentTime()
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

    //获取行政区划
    //请求参数
    const getAdministrative = {
      postStr: {
        searchWord: '上海市',
        searchType: '1',
        needSubInfo: 'true',
        needAll: 'true',
        needPolygon: 'true',
        needPre: 'true'
      },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    const res = await tdtAdministrative(getAdministrative)
    console.log(res)
   
    // console.log(res1)
    //地名获取坐标
    const data = {
      ds: { keyWord: '玉兰香苑' },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    const res2 = await getCoordinate(data)
    // console.log(res2)
    //坐标获取地名
    const data1 = {
      postStr: { lon: 121.63121, lat: 31.19935, ver: 1 },
      type: 'geocode',
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    // const res3 = await getCoordinate(data1)
    // console.log(res3)
  },
  watch: {
    // 解决手动改路径时，导航菜单的active-name不更新的问题
    // 这一监听也作用于router.push
    $route(val) {
      let path = val.path.split('/')
      this.changeActiveName(path)
    }
  },
  methods: {
    changeInfos() {
      this.modal = true
    },
    currentTime() {
      setInterval(this.formatDate, 500)
    },
    formatDate() {
      let date = new Date()
      let year = date.getFullYear() // 年
      let month = date.getMonth() + 1 // 月
      let day = date.getDate() // 日
      let week = date.getDay() // 星期
      let weekArr = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      let hour = date.getHours() // 时
      hour = hour < 10 ? '0' + hour : hour // 如果只有一位，则前面补零
      let minute = date.getMinutes() // 分
      minute = minute < 10 ? '0' + minute : minute // 如果只有一位，则前面补零
      let second = date.getSeconds() // 秒
      second = second < 10 ? '0' + second : second // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`
    },
    async GoHome() {
      const res = await getUserInfo()
      this.userinfos.imgUrl = res.imgUrl
      this.$router.push('/animation1')
      // await logintext()
    },
    welcome() {
      this.$router.push('/Welcome')
    },
    ToLogin() {
      if (window.localStorage.token) {
        this.$store.commit('del_token')
        this.$router.push('/')
      } else {
        this.$router.push('/')
      }
    },
    changeActiveName(path) {
      let length = path.length
      let name = path[length - 1]
      if (name == 'layout') {
        this.siderActiveName = 'Map'
      } else {
        this.siderActiveName = name
      }
    },

    totianditu() {
      // 避免跳转到当前页面
      if (this.$route.path == '/TianDiTu') {
        this.$Message.error('当前页面已经打开')
        return
      }
      this.$router.push('/TianDiTu')
    },
    toSH() {
      // 避免跳转到当前页面
      if (this.$route.path == '/GeoJsonLayer') {
        this.$Message.error('当前页面已经打开')
        return
      }
      this.$router.push('/GeoJsonLayer')
    },
    tohos() {
      // 避免跳转到当前页面
      if (this.$route.path == '/Popup') {
        this.$Message.error('当前页面已经打开')

        return
      }
      this.$router.push('/Popup')
    },
    todata() {
      // 避免跳转到当前页面
      if (this.$route.path == '/yqData') {
        this.$Message.error('当前页面已经打开')

        return
      }
      this.$router.push('/yqData')
    },
    toEcharts() {
      // 避免跳转到当前页面
      if (this.$route.path == '/Echarts') {
        this.$Message.error('当前页面已经打开')

        return
      }
      this.$router.push('/Echarts')
    },
    text() {
      // 避免跳转到当前页面
      if (this.$route.path == '/text') {
        this.$Message.error('当前页面已经打开')

        return
      }
      this.$router.push('/text')
    }
  }
}
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
.info_name{
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
