<template>
  <div id="instruction" class="esri-widget">点击任意位置获取街道名称</div>
</template>

<script>
import "@arcgis/core/assets/esri/themes/light/main.css";
import * as locator from "@arcgis/core/rest/locator";
import Search from "@arcgis/core/widgets/Search";
export default {
  name: "locate",
  //   props: ["view"],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.view = window.view;
      //   console.log(view);
      this.locate();
    });
  },
  methods: {
    locate() {
      let view = window.view;
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
        const locatorUrl =
          " https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

        locator
          .locationToAddress(locatorUrl, params)
          .then((response) => {
            view.popup.content = response.address;
          })
          .catch(() => {
            view.popup.content = "未找到位置";
          });
      });
      const searchWidgets = new Search({
        view: view,
      });
      view.ui.add(searchWidgets, {
        position: "top-left",
      });
    },
  },
};
</script>

<style scoped>
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