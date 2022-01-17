<template>
  <div>
    <Button class="area-btn" @click="area">面积</Button>
    <Button class="distance-btn" @click="beginCalDistance">
      <!-- <Icon custom="iconfont icon-ceju " class="ceju-icon" /> -->
      距离
    </Button>
    <Button class="clear-btn" @click="clear">清除</Button>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import Layer from "ol/layer/Layer";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorLayer, Image as ImageLayer } from "ol/layer";
import { WMTS as WMTS, Vector as VectorSource, ImageStatic } from "ol/source";
import Feature from "ol/Feature";
import { getTopLeft, getWidth } from "ol/extent";
import { fromLonLat, get as getProjection } from "ol/proj";
import { Point, MultiLineString, LineString, Polygon, Circle } from "ol/geom";
import { Fill, Circle as CircleStyle, Style, Stroke } from "ol/style";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import Overlay from "ol/Overlay";
import Draw from "ol/interaction/Draw";
import { unByKey } from "ol/Observable";
import { getLength, getArea } from "ol/sphere";

export default {
  name: "Distance",
  data() {
    return {
      map: null,
      lastShowSolar: null,
      lastZoomPoint: null,
      typhoonData: {},
      tfOverlay: null,
      drawLayers: [],
      drawDoms: [],
      radarDataLength: 0,
      imageLayer: null,
      dealTimeArray: [],
      dealPathArray: [],
      value: 0,
      marks: {},
      step: 10,
      max: 100,
    };
  },

  methods: {
    //测面积
    area() {
      let map = window.map;
      let arr = map.getLayers().array_;
      let projection = arr[0].getSource().getProjection();
      this.projection = projection;

      const source = new VectorSource();
      const layer = new VectorLayer({
        source: source,
        style: new Style({
          fill: new Fill({
            color: "rgba(255, 255, 255, 0.2)",
          }),
          stroke: new Stroke({
            color: "#ffcc33",
            width: 2,
          }),
          image: new CircleStyle({
            radius: 7,
            fill: new Fill({
              color: "#ffcc33",
            }),
          }),
        }),
      });
      console.log(layer);

      let _this = this;
      let feature;
      // overlay
      let helpTooltip;
      let measureTooltip;
      // dom节点
      let helpTooltipElement;
      let measureTooltipElement;
      // 交互类 绘制
      let draw;
      let listener;

      let pointermoveListener = map.on("pointermove", function (ev) {
        let helpMsg = "点击地图作为目标点";
        if (feature) {
          helpMsg = "双击地图作为结束点";
        }
        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(ev.coordinate);
        helpTooltipElement.classList.remove("hidden");
      });

      draw = new Draw({
        source,
        type: "Polygon",
        style: new Style({
          fill: new Fill({
            color: "rgba(255, 255, 255, 0.2)",
          }),
          stroke: new Stroke({
            color: "rgba(0, 0, 0, 0.5)",
            lineDash: [10, 10],
            width: 2,
          }),
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({
              color: "rgba(0, 0, 0, 0.7)",
            }),
            fill: new Fill({
              color: "rgba(255, 255, 255, 0.2)",
            }),
          }),
        }),
      });

      // 监听开始绘制 、
      draw.on("drawstart", function (evt) {
        // set sketch
        feature = evt.feature;

        let tooltipCoord = evt.coordinate;

        listener = feature.getGeometry().on("change", function (evt) {
          const geom = evt.target;
          let output = formatArea(geom);
          tooltipCoord = geom.getLastCoordinate();
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      });

      map.getViewport().addEventListener("mouseout", function () {
        helpTooltipElement.classList.add("hidden");
      });

      draw.on("drawend", function () {
        measureTooltipElement.className = "ol-tooltip ol-tooltip-static";
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        feature = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        map.removeInteraction(draw);
        unByKey(listener);
        unByKey(pointermoveListener);
      });

      // 格式化长度
      const formatArea = function (polygon) {
        let sourceProj = map.getView().getProjection();
        const area = getArea(polygon, {
          projection: sourceProj,
          // radius: 1000
        });
        let output;
        if (area > 10000) {
          output = Math.round((area / 1000000) * 100) / 100 + " " + "km<sup>2</sup>";
        } else {
          output = Math.round(area * 100) / 100 + " " + "m<sup>2</sup>";
        }
        return output;
      };

      function createHelpTooltip() {
        if (helpTooltipElement) {
          helpTooltipElement.parentNode.removeChild(helpTooltipElement);
        }
        helpTooltipElement = document.createElement("div");
        helpTooltipElement.className = "ol-tooltip hidden";
        helpTooltip = new Overlay({
          element: helpTooltipElement,
          offset: [15, 0],
          positioning: "center-left",
        });
        map.addOverlay(helpTooltip);
      }
      function createMeasureTooltip() {
        if (measureTooltipElement) {
          measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement("div");
        measureTooltipElement.className = "ol-tooltip ol-tooltip-measure";
        measureTooltip = new Overlay({
          element: measureTooltipElement,
          offset: [0, -15],
          positioning: "bottom-center",
          stopEvent: false,
          insertFirst: false,
        });
        _this.drawDoms.push(measureTooltipElement);
        map.addOverlay(measureTooltip);
      }
      createHelpTooltip();
      createMeasureTooltip();

      map.addInteraction(draw);
      _this.drawLayers.push(layer);
      map.addLayer(layer);
    },

    beginCalDistance() {
      let map = window.map;
      let arr = map.getLayers().array_;
      let projection = arr[0].getSource().getProjection();
      this.projection = projection;

      const source = new VectorSource();

      const layer = new VectorLayer({
        source: source,
        style: new Style({
          fill: new Fill({
            color: "rgba(255, 255, 255, 0.2)",
          }),
          stroke: new Stroke({
            color: "#ffcc33",
            width: 2,
          }),
          image: new CircleStyle({
            radius: 7,
            fill: new Fill({
              color: "#ffcc33",
            }),
          }),
        }),
      });
      console.log(layer);

      let _this = this;

      let feature;
      // overlay
      let helpTooltip;
      let measureTooltip;
      // dom节点
      let helpTooltipElement;
      let measureTooltipElement;
      // 交互类 绘制
      let draw;
      let listener;

      let pointermoveListener = map.on("pointermove", function (ev) {
        let helpMsg = "点击地图作为目标点";
        if (feature) {
          helpMsg = "双击地图作为结束点";
        }
        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(ev.coordinate);
        helpTooltipElement.classList.remove("hidden");
      });
      draw = new Draw({
        source,
        type: "LineString",
        style: new Style({
          fill: new Fill({
            color: "rgba(255, 255, 255, 0.2)",
          }),
          stroke: new Stroke({
            color: "rgba(0, 0, 0, 0.5)",
            lineDash: [10, 10],
            width: 2,
          }),
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({
              color: "rgba(0, 0, 0, 0.7)",
            }),
            fill: new Fill({
              color: "rgba(255, 255, 255, 0.2)",
            }),
          }),
        }),
      });

      // 监听开始绘制 、
      draw.on("drawstart", function (evt) {
        // set sketch
        feature = evt.feature;

        let tooltipCoord = evt.coordinate;

        listener = feature.getGeometry().on("change", function (evt) {
          const geom = evt.target;
          let output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      });

      map.getViewport().addEventListener("mouseout", function () {
        helpTooltipElement.classList.add("hidden");
      });

      draw.on("drawend", function () {
        measureTooltipElement.className = "ol-tooltip ol-tooltip-static";
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        feature = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        map.removeInteraction(draw);
        unByKey(listener);
        unByKey(pointermoveListener);
      });

      // 格式化长度
      const formatLength = function (line) {
        let sourceProj = map.getView().getProjection();
        const length = getLength(line, {
          projection: sourceProj,
          // radius: 1000
        });

        let output;
        if (length > 1000) {
          output = Math.round((length / 1000) * 100) / 100 + " " + "km";
        } else {
          output = Math.round(length * 100) / 100 + " " + "m";
        }
        return output;
      };

      function createHelpTooltip() {
        if (helpTooltipElement) {
          helpTooltipElement.parentNode.removeChild(helpTooltipElement);
        }
        helpTooltipElement = document.createElement("div");
        helpTooltipElement.className = "ol-tooltip hidden";
        helpTooltip = new Overlay({
          element: helpTooltipElement,
          offset: [15, 0],
          positioning: "center-left",
        });
        map.addOverlay(helpTooltip);
      }
      function createMeasureTooltip() {
        if (measureTooltipElement) {
          measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement("div");
        measureTooltipElement.className = "ol-tooltip ol-tooltip-measure";
        measureTooltip = new Overlay({
          element: measureTooltipElement,
          offset: [0, -15],
          positioning: "bottom-center",
          stopEvent: false,
          insertFirst: false,
        });
        _this.drawDoms.push(measureTooltipElement);
        map.addOverlay(measureTooltip);
      }
      createHelpTooltip();
      createMeasureTooltip();

      map.addInteraction(draw);
      _this.drawLayers.push(layer);
      map.addLayer(layer);
    },

    // 清除

    clear: function () {
      let layers = this.drawLayers;
      console.log(this.drawDoms);
      for (let i = 0; i < layers.length; i++) {
        map.removeLayer(layers[i]);
      }
      for (let i = 0; i < this.drawDoms.length; i++) {
        this.drawDoms[i].parentNode.removeChild(this.drawDoms[i]);
      }
      this.drawDoms = [];
    },
  },
};
</script>

<style lang="less">
.area-btn {
  position: fixed;
  bottom: 74px;
  right: 143px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  z-index: 2;
}
.distance-btn {
  position: fixed;
  bottom: 74px;
  right: 83px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  z-index: 2;
}

.clear-btn {
  position: fixed;
  bottom: 74px;
  right: 23px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  z-index: 2;
}

.hidden {
  display: none;
}
.ol-tooltip {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
  opacity: 0.7;
  white-space: nowrap;
  font-size: 12px;
  cursor: default;
  user-select: none;
}
.ol-tooltip-measure {
  opacity: 1;
  font-weight: bold;
}
.ol-tooltip-static {
  background-color: #ffcc33;
  color: black;
  border: 1px solid white;
}
.ol-tooltip-measure:before,
.ol-tooltip-static:before {
  border-top: 6px solid rgba(0, 0, 0, 0.5);
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  content: "";
  position: absolute;
  bottom: -6px;
  margin-left: -7px;
  left: 50%;
}
.ol-tooltip-static:before {
  border-top-color: #ffcc33;
}
.tooltipClass {
  background: salmon !important;
  font-weight: bold !important;
  border-radius: 10px !important;
}
</style>
