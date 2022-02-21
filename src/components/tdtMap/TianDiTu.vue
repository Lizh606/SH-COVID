<template>
  <div>
    <div ref="map" id="map">
      <MapTools class="map-tools" />
      <p id="coordinate-scale" class="coordinate-scale">
        <span id="mouse-position" class="mouse-position"
          >经度:{{ lon }} &nbsp; 纬度:{{ lat }}</span
        >
        <span id="scale" class="scale"> 比例尺 1:{{ curScale }} </span>
      </p>
      <div id="overviewDiv"><div id="extentDiv"></div></div>
      <change-map></change-map>
    </div>
  </div>
</template>

<script>

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import Search from "@arcgis/core/widgets/Search";
import Graphic from "@arcgis/core/Graphic";
import * as watchUtils from "@arcgis/core/core/watchUtils";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import TileLayer from "@arcgis/core/layers/TileLayer";
import Home from "@arcgis/core/widgets/Home";
import Popup from "@arcgis/core/widgets/Popup";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

import maptool from "./MapTool.vue";
import changemap from "./ChangeMap.vue";

export default {
  name: "TianDiTu",
  components: { ChangeMap: changemap, MapTools: maptool },
  data() {
    return {
      map: null,
      view: null,
      curScale: "36978669",
      lon: "121.60",
      lat: "31.18",
    };
  },
  mounted() {
    this.createMap();
    this.map = window.map;
    this.overviewmap = window.overviewmap;
    this.view = window.view;
    this.overview_view = window.overview_view;
  },
  methods: {
    createMap() {
      let tileInfo = new TileInfo({
        dpi: 90.71428571427429,
        rows: 256,
        cols: 256,
        compressionQuality: 0,
        origin: {
          x: -180,
          y: 90,
        },
        spatialReference: {
          wkid: 4326,
        },
        lods: [
          {
            level: 0,
            levelValue: 1,
            resolution: 0.703125,
            scale: 295497593.05875003,
          },
          {
            level: 1,
            levelValue: 2,
            resolution: 0.3515625,
            scale: 147748796.52937502,
          },
          {
            level: 2,
            levelValue: 3,
            resolution: 0.17578125,
            scale: 73874398.264687508,
          },
          {
            level: 3,
            levelValue: 4,
            resolution: 0.087890625,
            scale: 36937199.132343754,
          },
          {
            level: 4,
            levelValue: 5,
            resolution: 0.0439453125,
            scale: 18468599.566171877,
          },
          {
            level: 5,
            levelValue: 6,
            resolution: 0.02197265625,
            scale: 9234299.7830859385,
          },
          {
            level: 6,
            levelValue: 7,
            resolution: 0.010986328125,
            scale: 4617149.8915429693,
          },
          {
            level: 7,
            levelValue: 8,
            resolution: 0.0054931640625,
            scale: 2308574.9457714846,
          },
          {
            level: 8,
            levelValue: 9,
            resolution: 0.00274658203125,
            scale: 1154287.4728857423,
          },
          {
            level: 9,
            levelValue: 10,
            resolution: 0.001373291015625,
            scale: 577143.73644287116,
          },
          {
            level: 10,
            levelValue: 11,
            resolution: 0.0006866455078125,
            scale: 288571.86822143558,
          },
          {
            level: 11,
            levelValue: 12,
            resolution: 0.00034332275390625,
            scale: 144285.93411071779,
          },
          {
            level: 12,
            levelValue: 13,
            resolution: 0.000171661376953125,
            scale: 72142.967055358895,
          },
          {
            level: 13,
            levelValue: 14,
            resolution: 8.58306884765625e-5,
            scale: 36071.483527679447,
          },
          {
            level: 14,
            levelValue: 15,
            resolution: 4.291534423828125e-5,
            scale: 18035.741763839724,
          },
          {
            level: 15,
            levelValue: 16,
            resolution: 2.1457672119140625e-5,
            scale: 9017.8708819198619,
          },
          {
            level: 16,
            levelValue: 17,
            resolution: 1.0728836059570313e-5,
            scale: 4508.9354409599309,
          },
          {
            level: 17,
            levelValue: 18,
            resolution: 5.3644180297851563e-6,
            scale: 2254.4677204799655,
          },
          {
            level: 18,
            levelValue: 19,
            resolution: 2.68220901489257815e-6,
            scale: 1127.23386023998275,
          },
          {
            level: 19,
            levelValue: 20,
            resolution: 1.341104507446289075e-6,
            scale: 563.616930119991375,
          },
        ],
      });
      let tdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      //此处天地图的坐标系为CGCS2000
      let tdtjzUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      const tiledLayer = new WebTileLayer(tdtUrl, {
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        tileInfo: tileInfo,
        spatialReference: { wkid: 4326 }, //重点在这一句,如果不指定,那么默认为102100,在前端就会报坐标系的错误
        fullExtent: {
          xmin: -180,
          ymin: -90,
          xmax: 180,
          ymax: 90,
          spatialReference: 4326,
        },
      });
      const tiledjzLayer = new WebTileLayer(tdtjzUrl, {
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        tileInfo: tileInfo,
        spatialReference: { wkid: 4326 }, //重点在这一句,如果不指定,那么默认为102100,在前端就会报坐标系的错误
      });


      //上海地图
      const SHLayer = new TileLayer({
        url: "/services/SHMAP_D/MapServer",
        id: "SHMAP_D",
      });
      const SHSU = new TileLayer({
        url: "/services/SHMAP_SU/MapServer",
      });
      const SHLayer_zj = new TileLayer({
        url: "/services/SHMAP_DZJ/MapServer",
        id: "SHMAP_DZJ",
        // crossOrigin: "anonymous",
      });

      // map.add(SHSU);
      // map.add(SHLayer_zj);
      const map = new Map({
        basemap: {
          baseLayers: [tiledLayer, SHLayer_zj],
        },
      });
      const view = new MapView({
        container: "map",
        map: map,
        center: [121.607331, 31.1879], // Longitude, latitude
        zoom: 11, // Zoom level
        spatialReference: { wkid: 4326 },
      });

      const searchWidgets = new Search({
        view: view,
      });
      view.ui.add(searchWidgets, {
        position: "top-left",
      });

      //经纬度
      let that = this;
      view.on("pointer-move", function (event) {
        let mapPoistion = view.toMap({
          x: event.x,
          y: event.y,
        });

        let lon = mapPoistion.x;
        let lat = mapPoistion.y;
        that.lon = lon.toFixed(2);
        that.lat = lat.toFixed(2);
      });

      //鹰眼
      const overviewmap = new Map({
        basemap: {
          baseLayers: [tiledLayer, tiledjzLayer],
        },
      });
      const overview_view = new MapView({
        map: overviewmap,
        container: "overviewDiv",
        center: [121.607331, 31.1879], // Longitude, latitude
        zoom: 6, // Zoom level
      });
      window.map = map;
      window.overviewmap = overviewmap;
      window.view = view;
      window.overview_view = overview_view;
      overview_view.ui.components = [];
      overview_view.when(() => {
        view.when(() => {
          this.set();
        });
      });
      let homeWidget = new Home({
        view: view,
      });
      view.ui.add(homeWidget, "top-left");

      view.ui.components = [];
      //取消下面esri标志
      view.ui.remove("attribution");
    },
    set() {
      const extentgraphic = new Graphic({
        geometry: null,
        symbol: {
          type: "simple-fill",
          color: [0, 0, 0, 0.5],
          outline: null,
        },
      });
      this.overview_view.graphics.add(extentgraphic);

      watchUtils.init(this.view, "extent", (extent) => {
        if (this.view.stationary) {
          this.overview_view
            .goTo({
              center: this.view.center,
              scale:
                this.view.scale *
                2 *
                Math.max(
                  this.view.width / this.overview_view.width,
                  this.view.height / this.overview_view.height
                ),
            })
            .catch((error) => {
              // ignore goto-interrupted errors
              if (error.name != "view:goto-interrupted") {
                console.error(error);
              }
            });
        }
        extentgraphic.geometry = extent;
      });
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  position: absolute;
}
#area {
  position: fixed;
  top: 86px;
  right: 83px;
  width: 140px;
  height: 50px;
  background-color: #2d8cf0;
  padding: 14px 0px 14px 0px;
  text-align: center;
  z-index: 2;
}
#loc-area-font {
  font-size: 16px;
  color: white;
}
.coordinate-scale {
  position: fixed;
  bottom: 24px;
  right: 65px;
  z-index: 2;
  width: 290px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  text-align: center;
  padding: 6px 0px 7px 0px;
  font-size: 12px;
  color: rgba(128, 134, 149, 1);
  line-height: 19px;
}
.mouse-position {
  width: 160px;
  float: left;
}
.scale {
  width: 130px;
  float: right;
}
#overviewDiv {
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 180px;
  height: 150px;
  border: 1px solid black;
  z-index: 98;
  overflow: hidden;
}

#extentDiv {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99;
}
</style>
