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
      <div type="button" @click="exportMap" class="export-button" aria-label="导出地图" title="导出地图">
        <IconSvg iconClass="icon_daochu" class="export-button-icon">导出地图</IconSvg>
      </div>
        <!-- <div type="button" @click="takescreen" class="export-button1" aria-label="导出地图" title="导出地图">
        <IconSvg iconClass="icon_daochu" class="export-button-icon">导出地图</IconSvg>
      </div> -->
      <screentake></screentake>
      <change-map></change-map>
    </div>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Basemap from "@arcgis/core/Basemap";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import Search from "@arcgis/core/widgets/Search";
import Graphic from "@arcgis/core/Graphic";
import * as watchUtils from "@arcgis/core/core/watchUtils";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import TileLayer from "@arcgis/core/layers/TileLayer";
import Home from "@arcgis/core/widgets/Home";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import BasemapGalleryVM from "@arcgis/core/widgets/BasemapGallery/BasemapGalleryViewModel";
import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";

import maptool from "./MapTool.vue";
import changemap from "./ChangeMap.vue";
import screentake from './Screentake.vue'

import html2canvas from "html2canvas";
export default {
  name: "TianDiTu",
  components: { ChangeMap: changemap, MapTools: maptool ,Screentake:screentake},
  data() {
    return {
      TdtMap: {
        map: null,
        view: null,
      },
      curScale: "36978669",
      lon: "121.60",
      lat: "31.18",
    };
  },
  provide() {
    return {
      TdtMap: this.TdtMap,
    };
  },
  mounted() {
    this.createMap();
    this.TdtMap.map = window.map;
    this.overviewmap = window.overviewmap;
    this.TdtMap.view = window.view;
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

      let vectdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      let imgtdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=img_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      let tertdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=ter_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      let tdtjzUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";

      const vectiledLayer = new WebTileLayer(vectdtUrl, {
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        tileInfo: tileInfo,
        typ: "vec",
        spatialReference: { wkid: 4326 }, //重点在这一句,如果不指定,那么默认为102100,在前端就会报坐标系的错误
        fullExtent: {
          xmin: -180,
          ymin: -90,
          xmax: 180,
          ymax: 90,
          spatialReference: 4326,
        },
      });
      const imgtiledLayer = new WebTileLayer(imgtdtUrl, {
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
      const tertiledLayer = new WebTileLayer(tertdtUrl, {
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

      const vecBaseMap = new Basemap({
        baseLayers: [vectiledLayer, SHLayer_zj],
        thumbnailUrl: "../../assets/img/vec.png",
        title: "矢量地图",
        id: "矢量地图",
      });
      const imgBaseMap = new Basemap({
        baseLayers: [imgtiledLayer, SHLayer_zj],
        thumbnailUrl: "../../assets/img/img.png",
        title: "影像地图",
        id: "影像地图",
      });
      const terBaseMap = new Basemap({
        baseLayers: [tertiledLayer, SHLayer_zj],
        thumbnailUrl: "../../assets/img/img.png",
        title: "地形地图",
        id: "地形地图",
      });

      const map = new Map({
        basemap: {
          baseLayers: [vectiledLayer, SHLayer_zj],
        },
      });
      // imgtiledLayer.setVisible(false);
      const view = new MapView({
        container: "map",
        map: map,
        center: [121.607331, 31.1879], // Longitude, latitude
        zoom: 11, // Zoom level
        spatialReference: { wkid: 4326 },
      });
      //解决html2canvas截图空白问题
      HTMLCanvasElement.prototype.getContext = (function (origFn) {
        return function (type, attributes) {
          if (type === "webgl") {
            attributes = Object.assign({}, attributes, {
              preserveDrawingBuffer: true,
            });
          }
          return origFn.call(this, type, attributes);
        };
      })(HTMLCanvasElement.prototype.getContext);
      // const basemapGallery = new BasemapGallery({
      //   view: view, //MapView
      //   container: "toggle", // <div id="basemapGalleryDiv"></div>
      //   source: new LocalBasemapsSource({
      //     basemaps: [vecBaseMap, imgBaseMap, terBaseMap],
      //   }),
      // });
      // view.ui.add(basemapGallery, { position: "top-left" });

      const basemapvmodel = new BasemapGalleryVM({
        view: view,
        source: new LocalBasemapsSource({
          basemaps: [vecBaseMap, imgBaseMap, terBaseMap],
        }),
      });
      window.BasemapGalleryVM = basemapvmodel;

      //搜索
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

      view.on("mouse-wheel", function (event) {
        view.hitTest(event).then(function (response) {
          if (response.results.length) {
            // var graphic = response.results.filter(function (result) {
            //   // return (
            //   //   result.graphic.layer === nodesGraLayer ||
            //   //   result.graphic.layer === allPipesGraLayer
            //   // )
            // })[0].graphic
            var graphic = response.results;
            if (graphic) {
              // 在此操作
              console.log(graphic);
            }
          }
        });
      });

      //鹰眼
      const overviewmap = new Map({
        basemap: {
          baseLayers: [vectiledLayer, tiledjzLayer],
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

      //加载json
      // const geoJsonLayer2 = new GeoJSONLayer({
      //   url: 'http://api.tianditu.gov.cn/search?postStr={%22keyWord%22:%22%E5%8C%BB%E9%99%A2%22,%22level%22:%2211%22,%22mapBound%22:%22119.80,30.34,122.28,32.10%22,%22queryType%22:%221%22,%22count%22:%22100%22,%22start%22:%220%22}&type=query&tk=6156b0fb9f9e853e3f64234d82d9abf1',
      // })
      // map.add(geoJsonLayer2),

      view.ui.add(homeWidget, "top-left");

      const fullscreen = new Fullscreen({
        view: view,
      });
      view.ui.add(fullscreen, "top-left");

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

      watchUtils.init(this.TdtMap.view, "extent", (extent) => {
        if (this.TdtMap.view.stationary) {
          this.overview_view
            .goTo({
              center: this.TdtMap.view.center,
              scale:
                this.TdtMap.view.scale *
                2 *
                Math.max(
                  this.TdtMap.view.width / this.overview_view.width,
                  this.TdtMap.view.height / this.overview_view.height
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
    exportMap() {
      this.$nextTick(() => {
        html2canvas(document.getElementById("map"), {
          async: false, // 同步执行
          allowTaint: true, // 是否允许跨域图片污染画布
          imageTimeout: 0, // 禁用加载图像的超时时间
          taintTest: false, // 污染检查
          useCORS: true, // 用CORS服务从某服务中加载图片
        }).then(function (canvas) {
          let dataURL = canvas.toDataURL("image/png");
          let a = document.createElement("a");
          document.body.appendChild(a);
          a.href = dataURL;
          a.download = "ExportedMap";
          a.click();
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 726px;
  position: relative;
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
.loadpoint {
  position: fixed;
  top: 155px;
  right: 83px;
  height: 1.63rem;
  border-radius: 0.21rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 99;
}
//esri ui组件
&/deep/.esri-component.esri-home.esri-widget--button.esri-widget {
  position: fixed;
  bottom: 50px;
  right: 20px;
}

&/deep/.esri-component.esri-fullscreen.esri-widget--button.esri-widget {
  position: fixed;
  bottom: 87px;
  right: 20px;
}
&/deep/.ivu-btn {
  border-radius: 0px;
}
.export-button {
  position: fixed;
  bottom: 23px;
  right: 20px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  font-size: 14px;
  background-color: #fff;
  color: #6e6e6e;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 125ms ease-in-out;
}
.export-button-icon {
  box-sizing: inherit;
  color: rgba(128, 134, 149, 1);
  font-size: 18px;
  content: "";
  color: inherit;
  display: block;
  margin: 0 auto;
  position: relative;
}
.export-button1 {
  position: fixed;
  bottom: 3px;
  right: 50px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  font-size: 14px;
  background-color: #fff;
  color: #6e6e6e;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 125ms ease-in-out;
}
</style>
