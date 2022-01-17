<template>
  <div>
    <div id="map"></div>
    <span id="layerToggle" class="esri-widget">
      <input type="checkbox" id="streetsLayer" /> Transportation
    </span>
  </div>
</template>

<script>
import "@arcgis/core/assets/esri/themes/light/main.css";
import TileLayer from "@arcgis/core/layers/TileLayer";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
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
      const transportationLayer = new TileLayer({
        url: "https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer",
        id: "streets",
        visible: false,
      });
      const housingLayer = new TileLayer({
        url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
        id: "ny-housing",
        opacity: "0.9",
      });
      const map = new Map({
        basemap: "oceans",
        layers: [housingLayer],
      });
      map.add(transportationLayer);

      const view = new SceneView({
        map: map,
        container: "map",
        // scale: 50000000, // Longitude, latitude
        // center: [121.607331, 31.1879],
      });
      view.on("layerview-create", (event) => {
        if (event.layer.id === "ny-housing") {
          console.log("population");
        }
        if (event.layer.id === "streets") {
          console.log("streets");
        }
      });
      view.when(() => {
        housingLayer.when(() => {
          view.goTo(housingLayer.fullExtent).catch((error) => {
            console.log(error);
          });
        });
      });
      const streetsLayerToggle = document.getElementById("streetsLayer");
      streetsLayerToggle.addEventListener("change", () => {
        transportationLayer.visible = streetsLayerToggle.checked;
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
#layerToggle {
  top: 20px;
  right: 20px;
  position: absolute;
  z-index: 99;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  opacity: 0.75;
}
.esri-popup__inline-actions-container {
  display: none;
}
.esri-view .esri-view-surface--inset-outline:focus::after {
  outline: none;
}
</style>
