<template>
  <div>
    <div id="map"></div>
    <Dropdown id="Dropdown" @on-click="weatherDropdown">
      <Button type="primary"> Select Weather </Button>
      <DropdownMenu slot="list">
        <DropdownItem name="Sunny">Sunny</DropdownItem>
        <DropdownItem name="Cloudy" active>Cloudy</DropdownItem>
        <DropdownItem name="Rainy">Rainy</DropdownItem>
        <DropdownItem name="Foggy">Foggy</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import "@arcgis/core/assets/esri/themes/light/main.css";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import Expand from "@arcgis/core/widgets/Expand";
import Daylight from "@arcgis/core/widgets/Daylight";
export default {
  name: "Weather",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init(selectedWeather) {
      const map = new Map({
        basemap: "satellite",
        ground: "world-elevation",
      });
      const sceneLayer = new SceneLayer({
        url:
          "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0",
        title: "San Francisco Downtown",
        popupEnabled: false,
      });
      map.add(sceneLayer);
      const initCamera = {
        position: {
          longitude: -122.38907,
          latitude: 37.7755,
          z: 74.83047,
        },
        heading: 333.84,
        tilt: 92.84,
      };
      const view = new SceneView({
        container: "map",

        map: map,
        camera: initCamera,
        qualityProfile: "high",
        environment: {
          atmosphere: {
            quality: "high",
          },
          weather: {
            type: "sunny",
            cloudCover: 0.4, // autocasts as new CloudyWeather({ cloudCover: 0.4 })
          },
        },
      });

      const daylightExpand = new Expand({
        view: view,
        content: new Daylight({
          view: view,
        }),
      });
      view.ui.add(daylightExpand, "top-left");

      const weatherClick = document.getElementById("Dropdown");
      weatherClick.addEventListener("click", () => {
        view.environment.weather = this.setWeather(selectedWeather);
      });

      view.ui.remove("attribution");
    },
    weatherDropdown(name) {
      let selectedWeather = name;
      // console.log(selectedWeather); //得到选中天气
      this.init(selectedWeather);
    },
    setWeather(selectedWeather) {
      // console.log(selectedWeather); //=>获取选中天气
      switch (selectedWeather) {
        case "Sunny":
          return { type: "sunny", cloudCover: 0.8 }; // autocasts as new SunnyWeather({ cloudCover: 0.8 })
        case "Cloudy":
          return { type: "cloudy", cloudCover: 0.4 }; // autocasts as new CloudyWeather({ cloudCover: 0.4})
        case "Rainy":
          return { type: "rainy", cloudCover: 0.4 }; // autocasts as new RainyWeather({ cloudCover: 0.4 })
        case "Foggy":
          return { type: "foggy", fogStrength: 0.6 }; // autocasts as new FoggyWeather({ fogStrength: 0.6 })
      }
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
#Dropdown {
  left: 60px;
  top: 10px;
  width: 100px;
  height: 50px;
  position: relative;
}
</style>
