<template>
  <div>
    <div id="map"></div>
    <div id="infomap">
      <input
        type="button"
        class="esri-component esri-widget--button esri-widget esri-interactive"
        id="switch-btn"
        value="3D"
      />
    </div>
  </div>
</template>

<script>
import "@arcgis/core/assets/esri/themes/light/main.css";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import WebMap from "@arcgis/core/WebMap";
import WebScene from "@arcgis/core/WebScene";
export default {
  name: "ChangeView",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const switchButton = document.getElementById("switch-btn");

      const appConfig = {
        mapView: null,
        sceneView: null,
        activeView: null,
        container: "map",
      };
      const initialViewParms = {
        zoom: 12,
        center: [-122.43759993450347, 37.772798684981126],
        container: appConfig.container,
      };
      const webmap = new WebMap({
        portalItem: {
          id: "7ee3c8a93f254753a83ac0195757f137",
        },
      });

      const scene = new WebScene({
        portalItem: {
          id: "c8cf26d7acab4e45afcd5e20080983c1",
        },
      });

      //创建2D
      appConfig.mapView = createView(initialViewParms, "2d");
      appConfig.mapView.map = webmap;
      appConfig.activeView = appConfig.mapView;

      //创建3D
      initialViewParms.container = null;
      initialViewParms.map = scene;
      appConfig.sceneView = createView(initialViewParms, "3d");

      //点击监听
      switchButton.addEventListener("click", () => {
        switchView();
      });

      function switchView() {
        const is3D = appConfig.activeView.type === "3d";
        const activeViewpoint = appConfig.activeView.viewpoint.clone();

        appConfig.activeView.container = null;

        if (is3D) {
          appConfig.mapView.viewpoint = activeViewpoint;
          appConfig.mapView.container = appConfig.container;
          appConfig.activeView = appConfig.mapView;
          switchButton.value = "3D";
        } else {
          appConfig.sceneView.viewpoint = activeViewpoint;
          appConfig.sceneView.container = appConfig.container;
          appConfig.activeView = appConfig.sceneView;
          switchButton.value = "2D";
        }
      }

      function createView(params, type) {
        let view;
        if (type === "2d") {
          view = new MapView(params);
          return view;
        } else {
          view = new SceneView(params);
          return view;
        }
      }
      view.ui.remove("attribution");
    },
  },
};
</script>

<style scoped>
#map {
  position: absolute;
  width: 100%;
  height: 100%;
}
#infomap {
  position: absolute;
  top: 15px;
  left: 120px;
}
#infomap input {
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px;
}
</style>