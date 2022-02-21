<template>
  <div id="map"></div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import TileLayer from "@arcgis/core/layers/TileLayer";

import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import Point from "@arcgis/core/geometry/Point";
export default {
  name: "Popup",
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
      //上海地图
      const SHLayer = new TileLayer({
        url: "/MapServer",
        id: "SHMAP_D",
      });
      const SHLayer_zj = new TileLayer({
        url: "https://mape.shanghai-map.net/arcgis/rest/services/SHMAP_DZJ/MapServer",
        // id: "SHMAP_DZJ",
        // crossOrigin: "anonymous",
      });

      const map = new Map({
        basemap: {
          baseLayers: [SHLayer],
        },
      });
      const view = new MapView({
        container: "map",
        map: map,
        center: [121.6, 31.2], // Longitude, latitude
        zoom: 9, // Zoom level
        spatialReference: { wkid: 4326 },
      });
      console.log(view.spatialReference.wkid);
      view.ui.components = [];
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
</style>
