<template>
  <div>
    <div id="map"></div>
    <div id="instruction" class="esri-widget">点击任意位置获取街道名称</div>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
// 不能用 import locator from‘’
import * as locator from "@arcgis/core/rest/locator";
import Search from "@arcgis/core/widgets/Search";

export default {
  name: "Locator",
  data() {
    return {};
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      const locatorUrl =
        " https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
      //创建地图
      const map = new Map({
        basemap: "streets-navigation-vector",
      });
      //   view
      const view = new MapView({
        container: "map",
        map: map,
        center: [121.607331, 31.1879],
        zoom: 12,
      });
      view.popup.autoOpenEnabled = false;
      view.on("click", (event) => {
        const lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
        const lon = Math.round(event.mapPoint.longitude * 1000) / 1000;
        view.popup.open({
          title: "坐标:[" + lon + "," + lat + "]",
          location: event.mapPoint,
        });
        const params = {
          location: event.mapPoint,
        };
        locator
          .locationToAddress(locatorUrl, params)
          .then((response) => {
            view.popup.content = response.address;
          })
          .catch(() => {
            view.popup.conetnt = "未找到位置";
          });
      });
      const searchWidgets = new Search({
        view: view,
      });
      view.ui.add(searchWidgets, {
        position: "top-left",
      });
      view.ui.remove("attribution");
    },
  },
};
</script>

<style scoped>
#map {
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
}
#instruction {
  z-index: 99;
  position: absolute;
  top: 15px;
  left: 50%;
  padding: 5px;
  margin-left: -175px;
  height: 30px;
  width: 355px;
  background: rgba(25, 25, 25, 0.8);
  color: white;
}
</style>
