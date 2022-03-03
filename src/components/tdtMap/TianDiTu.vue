<template>
  <div>
    <div ref="map" id="map"></div>
    <MapTools class="map-tools" />

    <div id="overviewDiv"><div id="extentDiv"></div></div>
  </div>
</template>

<script>
//arcgis api
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Basemap from "@arcgis/core/Basemap";
import Graphic from "@arcgis/core/Graphic";
import * as watchUtils from "@arcgis/core/core/watchUtils";
import BasemapGalleryVM from "@arcgis/core/widgets/BasemapGallery/BasemapGalleryViewModel";
import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
//js组件
import createWmtsLayer from "./layers/wmtsLayer";
import createTileLayer from "./layers/tileLayer";

//组件
import maptool from "./MapTool.vue";

export default {
  name: "TianDiTu",
  components: { MapTools: maptool },
  data() {
    return {
      TdtMap: {
        map: null,
        view: null,
      },
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
    this.TdtMap.view = window.view;
    this.overviewmap = window.overviewmap;
    this.overview_view = window.overview_view;
  },
  methods: {
    async createMap() {
      //加载天地图图层
      let vectdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      let imgtdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=img_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      let tertdtUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=ter_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";
      let tdtjzUrl =
        "http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1";

      const vectiledLayer = createWmtsLayer(vectdtUrl);
      const imgtiledLayer = createWmtsLayer(imgtdtUrl);
      const tertiledLayer = createWmtsLayer(tertdtUrl);
      const tiledjzLayer = createWmtsLayer(tdtjzUrl);

      //上海地图
      const SHLayer = createTileLayer("/services/SHMAP_D/MapServer", "SHMAP_D");
      const SHSU = createTileLayer("/services/SHMAP_SU/MapServer", "SHMAP_SU");
      const SHLayer_zj = createTileLayer(
        "/services/SHMAP_DZJ/MapServer",
        "SHMAP_DZJ"
      );

      const map = new Map({
        basemap: {
          baseLayers: [vectiledLayer, SHLayer_zj],
        },
      });
      const view = new MapView({
        container: "map",
        map: map,
        center: [121.607331, 31.1879],
        zoom: 11,
        spatialReference: { wkid: 4326 },
      });

      // 底图逻辑
      const vecBaseMap = new Basemap({
        baseLayers: [vectiledLayer, SHLayer_zj],
        title: "矢量地图",
        id: "矢量地图",
      });
      const imgBaseMap = new Basemap({
        baseLayers: [imgtiledLayer, SHLayer_zj],
        title: "影像地图",
        id: "影像地图",
      });
      const terBaseMap = new Basemap({
        baseLayers: [tertiledLayer, SHLayer_zj],
        title: "地形地图",
        id: "地形地图",
      });
      const basemapvmodel = new BasemapGalleryVM({
        view: view,
        source: new LocalBasemapsSource({
          basemaps: [vecBaseMap, imgBaseMap, terBaseMap],
        }),
      });
      window.BasemapGalleryVM = basemapvmodel;

      // view.on("mouse-wheel", function (event) {
      //   view.hitTest(event).then(function (response) {
      //     if (response.results.length) {
      //       // var graphic = response.results.filter(function (result) {
      //       //   // return (
      //       //   //   result.graphic.layer === nodesGraLayer ||
      //       //   //   result.graphic.layer === allPipesGraLayer
      //       //   // )
      //       // })[0].graphic
      //       var graphic = response.results;
      //       if (graphic) {
      //         // 在此操作
      //         console.log(graphic);
      //       }
      //     }
      //   });
      // });

      view.on("click", function (evt) {
        view.hitTest(evt).then(function (response) {
          // view.graphics.removeAll(); //清除上一次点击目标
          var result = response.results[0];
          if (result && result.graphic) {
            console.log(result);
            var graphic = result.graphic;
            //自定义高亮
            //这里的几何图形是面状，配置graphic的symbol为fillSymbol
            graphic.symbol = {
              style: "circle",
              //点填充颜色，颜色说明详见线样式
              color: "#33cc33",
              //点大小，值类型详见线样式的width
              size: "8px",
              //边框线样式，具体同线的样式
              outline: {
                // color: [255, 255, 0],
                width: 3,
              },
            };
          }

          view.graphics.add(graphic); //添加新的点击目标
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
      overview_view.ui.components = [];
      overview_view.when(() => {
        view.when(() => {
          this.watchoverview();
        });
      });

      window.map = map;
      window.overviewmap = overviewmap;
      window.view = view;
      window.overview_view = overview_view;

      //取消esri的缩放
      view.ui.components = [];
      //取消下面esri标志
      view.ui.remove("attribution");
    },
    //鹰眼监听
    watchoverview() {
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

<style lang="less" scoped>
#map {
  width: 100%;
  height: 726px;
  position: relative;
}
//鹰眼
#overviewDiv {
  position: relative;
  bottom: 177px;
  left: 18px;
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

//esri ui组件
&/deep/.esri-component.esri-home.esri-widget--button.esri-widget {
  position: fixed;
  bottom: 59px;
  right: 20px;
}

&/deep/.esri-component.esri-fullscreen.esri-widget--button.esri-widget {
  position: fixed;
  bottom: 94px;
  right: 20px;
}
&/deep/.ivu-btn {
  border-radius: 0px;
}
</style>
