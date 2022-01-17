<template>
  <div>
    <div id="map"></div>
    <Dropdown trigger="click" id="weatherDropdown">
      <Button type="primary"> Select Weather </Button>
      <DropdownMenu slot="list" ref="select">
        <DropdownItem id="Sunny">Sunny</DropdownItem>
        <DropdownItem id="Cloudy" active>Cloudy</DropdownItem>
        <DropdownItem id="Rainy">Rainy</DropdownItem>
        <DropdownItem id="Foggy">Foggy</DropdownItem>
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
    console.log(this.$refs.select);
  },
  methods: {
    init() {
      const map = new Map({
        basemap: "satellite",
        ground: "world-elevation",
      });
      const sceneLayer = new SceneLayer({
        url: "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0",
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
      const weatherDropdown = document.getElementById("weatherDropdown");
      view.ui.add(weatherDropdown, "top-left");

      const daylightExpand = new Expand({
        view: view,
        content: new Daylight({
          view: view,
        }),
      });
      view.ui.add(daylightExpand, "top-left");
      console.log(weatherDropdown);
      weatherDropdown.addEventListener("select", () => {
        //   console.log(e);
        // Read the id of the current selected item
        let selectedWeather = weatherDropdown.selectedItems[0].id;
        console.log("selectedWeather");
        // Get the new weather instance and set it to the weather property of the view
        view.environment.weather = setWeather(selectedWeather);
      });
      // console.log(selectedWeather);
      function setWeather(selectedWeather) {
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
      }
      view.ui.remove("attribution");
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