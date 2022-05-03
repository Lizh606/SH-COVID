<template>
<div>
  <header>
        <h1> 全球疫情地图 </h1>
        <div class="showTime"></div>
        <div class="index"><a href="https://pigs_on_the_horizon.gitee.io/">首页</a></div>
    </header>
    <section class="mainbox">
        <!-- 左 -->
        <div class="column">
            <div class="panel bl bar">
                <h2>各洲累计确诊分布（海外）</h2>
                <div class="chart"></div>
                <div class="panelFooter"></div>
            </div>
            <div class="panel bl line">
                <h2>全球疫情趋势（海外）</h2>
                <div class="chart"></div>
                <div class="panelFooter"></div>
            </div>
        </div>
        <!-- 中 -->
        <div class="column">
            <!-- 上模块 -->
            <div class="no">
                <div class="no-hd">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="no-bd">
                    <ul>
                        <li>累计确诊人数</li>
                        <li>累计治愈人数</li>
                    </ul>
                </div>
            </div>
            <!-- 地图模块 -->
            <div class="map">
                <div class="map1"></div>
                <div class="map2"></div>
                <div class="map3"></div>
                <div class="chart" id="viewDiv"></div>
                <div class="panelFooter"></div>
            </div>
        </div>
        <!-- 右 -->
        <div class="column">
            <div class="panel bl bar1">
                <h2>世界疫情确诊情况前十五</h2>
                <div class="chart"></div>
                <div class="panelFooter"></div>
            </div>
        </div>
        <div class="data">数据来源于腾讯，每小时更新一次</div>
    </section>
    </div>
</template>
<script>
import { YQDatePathData } from '@/api/sys.js'
import {
  tdtAdministrative,
  publicTransportPlanning,
  getCoordinate
} from '@/api/tdt_web_api/tdt_api.js'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import TileLayer from '@arcgis/core/layers/TileLayer'
import { changeUserinfo, getUserInfo } from '@/api/login.js'

import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import { GET } from '@/utils/axios.js'
import axios from 'axios'
export default {
  data() {
    return {
      //数据
      list: [],
      name: ''
    }
  },
  async mounted() {
      const origin = "玉兰香苑三期" ;
      const destination ='东方明珠电视塔'
        const origindata = {
      ds: { keyWord: origin },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
      const destinationata = {
      ds: { keyWord: destination },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    const orginzuobiao = await getCoordinate(origindata);
    const destinationzuobiao = await getCoordinate(destinationata)
    const originloc = orginzuobiao.data.location.lon + ',' + orginzuobiao.data.location.lat
    const destinationloc = destinationzuobiao.data.location.lon + ',' + destinationzuobiao.data.location.lat
    console.log(originloc,destinationloc);
      //公交规划
    const getbus = {
      type: 'busline',
      postStr: {
        startposition: originloc,
        endposition: destinationloc,
        linetype: '1'
      },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    const res1 = await publicTransportPlanning(getbus)
     console.log(res1);
  },
  methods: {
    async sure() {
      //https://5fou.com/i/2022/04/29/lol3vn.jpeg
      const data = {
        imgUrl:this.name
      }
      const res = await changeUserinfo('2', data)
      this.$store.commit('setUserInfo', res.data.nickName)
      this.$store.commit('setUserImg', res.data.imgUrl)
      const res1 = await getUserInfo()
      console.log(res)
      console.log(res1);
    },
    async init() {
      // const url = '/services'
      // axios.get(url)
      //   .then((res) => {
      //     console.log(res)
      //   })
      // // console.log(res)
      // const shmap  = new TileLayer({
      //   url:'/services'
      // });
      //   this.$http.get('/SHMAP_SU/MapServer' + "?f=json").then(res => {
      //   console.log
      // });

      const map = new Map({
        // basemap: "oceans",
        // layers: [shmap]
      })

      const view = new MapView({
        container: 'map',
        map: map,
        center: [121.477331, 31.2379],
        zoom: 8,
        spatialReference: { wkid: 4326 }
      })
    }
  }
}
</script>
<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

/* 声明字体*/
// @font-face {
//     font-family: electronicFont;
//     // src: url(../font/DS-DIGIT.TTF);
// }

body {
    /* 覆盖整个页面 */
    background-size: cover;
    margin: 0;
    padding: 0;
    background-color: rgba(21, 25, 101);
}

header {
    position: relative;
    // background: url('../images/head_bg.png') no-repeat top center;
    height: 1.25rem;
    /* 🔺缩放比例 100% */
    background-size: 100% 100%;
}

header h1 {
    color: white;
    font-size: 0.475rem;
    /* 文字居中 */
    text-align: center;
    line-height: 1.0rem;
}

.showTime {
    position: absolute;
    top: 0;
    right: 0.375rem;
    text-align: center;
    line-height: 0.9375rem;
    color: rgba(255, 255, 255);
    font-size: 0.25rem;
}

.index a {
    position: absolute;
    top: 0;
    left: 0.375rem;
    text-align: center;
    line-height: 0.9375rem;
    color: rgba(255, 255, 255);
    font-size: 0.25rem;
    text-decoration: none;
}
.data {
    position: absolute;
    color: rgba(255, 255, 255);
    font-size: 0.2rem;
    bottom: 0;
    right: 0.1rem;
    padding-top: 0.5rem;
}

.mainbox {
    min-width: 1024px;
    max-width: 1920px;
    padding: 0.125rem 0.125rem 0;
    display: flex;
    position: relative;
    /* background-color: lightpink; */
}

.mainbox .column {
    flex: 3;
}
.column:nth-child(2) {
    flex: 6;
    margin: 0 0.125rem 0.1875rem;
    overflow: hidden;
    /* position: relative; */
}

.panel {
    position: relative;
    height: 5rem;
    /* width: 100%; */
    border: 1px solid rgba(25, 186, 139, 0.17);
    // background: rgba(21, 25, 101, 0.5) url('../images/line(1).png');
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.3rem;
}

/* 蓝色小框 */
.bl::before {
    position: absolute;
    top: 0;
    /* 要给内容 */
    content: "";
    left: 0;
    height: 10px;
    width: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
}

.bl::after {
    position: absolute;
    top: 0;
    /* 要给内容 */
    content: "";
    right: 0;
    height: 10px;
    width: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
}

.panelFooter {
    position: absolute;
    bottom: 0;
    left: 0;
    /* background-color: pink; */
    height: 10px;
    width: 100%;
}

.panelFooter::before {
    position: absolute;
    top: 0;
    /* 要给内容 */
    content: "";
    left: 0;
    height: 10px;
    width: 10px;
    border-bottom: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
}

.panelFooter::after {
    position: absolute;
    top: 0;
    /* 要给内容 */
    content: "";
    right: 0;
    height: 10px;
    width: 10px;
    border-bottom: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
}

.panel h2 {
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0;
    color: white;
    font-size: 0.25rem;
    text-align: center;
    font-weight: 400;
}

.panel .chart {
    height: 4.5rem;
    /* margin: 0 0.1875rem; */
    /* background-color: pink; */
}

.bar1 {
    height: 10.3rem;
}

.bar1 .chart {
    height: 10.3rem;
}

.no {
    background-color: rgba(101, 132, 226, 0.1);
    padding: 0.15rem;
}

.no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
}

.no-hd::before {
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
    width: 0.375rem;
    height: 0.125rem;
}

.no-hd::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: " ";
    border-bottom: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
    width: 0.375rem;
    height: 0.125rem;
}

.no-hd ul {
    display: flex;
}

.no-hd ul li {
    position: relative;
    flex: 1;
    font-size: 0.6rem;
    height: 0.5rem;
    text-align: center;
    color: #ffeb7b;
    font-family: electronicFont;
}

.no-hd ul li:nth-child(1)::after {
    content: "";
    position: absolute;
    top: 25%;
    right: 0;
    background-color: rgba(255, 255, 255, 0.2);
    width: 1px;
    height: 50%;
}

.no-bd ul {
    display: flex;
}

.no-bd ul li {
    flex: 1;
    height: 0.5rem;
    color: rgba(255, 255, 255);
    font-size: 0.225rem;
    padding-top: 0.125rem;
    text-align: center;
}

.map {
    height: 8.95rem;
    position: relative;
    /* border: 2px solid #02a6b5; */
}

.map .chart {
    /* background-color: #151965; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8.95rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes rotate1 {
    from {
        transform: translate(-50%, -50%) rotate(0deg)
    }

    to {
        transform: translate(-50%, -50%) rotate(-360deg)
    }
}

@media screen and (max-width: 1024px) {
    html {
        font-size: 42px !important;
    }
}

@media screen and (min-width: 1920) {
    html {
        font-size: 80px !important;
    }
}

</style>
