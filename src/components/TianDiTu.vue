<template>
  <div>
    <div id="map"></div>
    <!-- <div id="instruction" class="esri-widget">点击任意位置获取街道名称</div> -->
    <Locate :view="view" />
  </div>
</template>

<script>
//调用天地图
import "@arcgis/core/assets/esri/themes/light/main.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import locate from "../plugins/locate.vue";

export default {
  name: "TianDiTu",
  components: {
    Locate: locate,
  },
  data() {
    return {
      map: null,
      view: null,
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      const locatorUrl =
        " https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

      const tiledLayer = new WebTileLayer({
        urlTemplate:
          "http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_w&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],

        crossOrigin: "anonymous",
      });
      const tiledLayer_poi = new WebTileLayer({
        urlTemplate:
          "http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_w&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],

        crossOrigin: "anonymous",
      });
      const map = new Map({
        basemap: {
          baseLayers: [tiledLayer, tiledLayer_poi],
        },
        // crossOrigin: "anonymous",
      });

      const view = new MapView({
        map: map,
        container: "map",
        center: [121.607331, 31.1879], // Longitude, latitude
        zoom: 11, // Zoom level
      });
      view.ui.components = [];
      //取消下面esri标志
      view.ui.remove("attribution");
      this.view = view;
      // console.log(view);
    },
  },
};
</script>

<style scoped>
#map {
  /* padding: 0;
  margin: 0;
  height: 100%;
  width: 100%; */

  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
