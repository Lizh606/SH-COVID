<template>
  <!-- <div class="timeaxis">
    <div v-for="item in list" :key="item.index">
      <div class="box">
        <div class="item">
          <div class="center">{{ item }}</div>
        </div>
        <div class="circular"></div>
        <div class="item2"></div>
      </div>
    </div>
  </div> -->
  <!-- <div ref="map" id="map"></div> -->
  <div>
    <Input v-model="name" placeholder="shuru" />
    <button type="primary" @click="sure">确定</button>
  </div>
</template>
<script>
import { YQDatePathData } from '@/api/sys.js'

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
    //  axios.get('/yq').then((res)=>{
    //    console.log(res);
    //  })
    //  console.log(res);
  },
  methods: {
    async sure() {
      console.log(this.name);
      const param = {
        nickName: '给劳资更新'
      }
      await changeUserinfo(2, param)
      const res = await getUserInfo()
      console.log(res)
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
#map {
  width: 100%;
  height: 100%;
  position: relative;
}
.timeaxis {
  width: 1000px;
  height: 100%;
  margin: 100px;
}
.box {
  float: left;
  width: 30px;
}
.circular {
  border: 2px solid #67c23a;
  width: 1px;
  height: 10px;
  border-radius: 10px;
  background: white;
  margin: auto;
  margin-bottom: -4px;
  position: relative;
  top: -8px;
  left: 85px;
}
.item {
  border-bottom: 1px solid #409eff;
  position: relative;
  .left {
    position: absolute;
    left: 55px;
    top: -25px;
  }
  .center {
    position: absolute;
    left: 165px;
    top: -26px;
  }
}
.item2 {
  position: relative;

  .bottom {
    position: absolute;
    left: 75px;
    top: 0px;
  }
}
</style>
