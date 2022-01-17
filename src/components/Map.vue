<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import "@arcgis/core/assets/esri/themes/light/main.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export default {
  name: "Map",
  data() {
    return {};
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      const map = new Map({
        basemap: "topo-vector",
        // ground: "world-elevation",
      });
      const view = new MapView({
        map: map,
        container: "map",
        center: [121.607331, 31.1879], // Longitude, latitude
        zoom: 11, // Zoom level
      });

      //取消下面esri标志
      view.ui.remove("attribution");
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
.esri-popup__inline-actions-container {
  display: none;
}
.esri-view .esri-view-surface--inset-outline:focus::after {
  outline: none;
}
</style>
