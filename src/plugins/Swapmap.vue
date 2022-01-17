<template>
  <div id="map"></div>
</template>

<script>
import { loadModules } from "esri-loader";

export default {
  name: "SwapMap",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const options = {
        url: "https://js.arcgis.com/4.22/",
        css: "https://js.arcgis.com/4.22/esri/themes/light/main.css",
      };
      loadModules(
        ["esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle"],
        options
      ).then(([Map, MapView, BasemapToggle]) => {
        const map = new Map({
          basemap: "oceans",
        });
        const view = new MapView({
          center: [121.607331, 31.1879],
          container: "map",
          map: map,
          zoom: 12,
        });

        const toggle = new BasemapToggle({
          view: view,
          nextBasemap: "streets-vector",
        });
        view.ui.components = [];
        view.ui.add(toggle, "top-left");
      });
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
</style>