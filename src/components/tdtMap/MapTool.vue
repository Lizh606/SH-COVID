<template>
  <Dropdown class="toolbar-container">
    <Button>
      <Icon custom="iconfont icon-gongjuxiang" />
      <span> 工具箱</span>
    </Button>
    <DropdownMenu slot="list">
      <DropdownItem
        ><div class="distance-btn" @click="measureDistance()">
          <Icon custom="iconfont icon-ceju" />
          <span class="btn-item">测距</span>
        </div>
      </DropdownItem>
      <DropdownItem
        ><div class="area-btn" @click="measureArea()">
          <Icon custom="iconfont icon-cemian" />
          <span class="btn-item">测面</span>
        </div>
      </DropdownItem>
      <DropdownItem
        ><div class="area-btn" @click="clear()">
          <Icon custom="iconfont icon-qingchu" />
          <span class="btn-item">一键清除</span>
        </div>
      </DropdownItem>
      <DropdownItem
        ><div class="locate-btn" @click="locate()">
          <Icon custom="iconfont icon-qingchu" />
          <span class="btn-item">定位街道</span>
        </div>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
import * as locator from "@arcgis/core/rest/locator";
import Draw from "@arcgis/core/views/draw/Draw";
import Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import Polyline from "@arcgis/core/geometry/Polyline";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
export default {
  name: "MapTools",
  inject: ["TdtMap"],
  data() {
    return {
      loc: "",
    };
  },
  created() {},

  mounted() {
    
    this.$nextTick(() => {
      this.map = this.TdtMap.map;
      this.view = this.TdtMap.view
    });
  },

  computed: {},

  methods: {
    measureDistance() {
      const draw = new Draw({
        view: this.view,
      });
      let action = draw.create("polyline"); //画线实例
      this.view.focus();
      let that = this;
      action.on(
        [
          "vertex-add",
          "vertex-remove",
          "cursor-update",
          "redo",
          "undo",
          "draw-complete",
        ],

        function (evt) {
          that.createLine(evt.vertices);
        }
      );
    },
    measureArea() {
      const draw = new Draw({
        view: this.view,
      });
      let action = draw.create("polygon"); //画线实例
      this.view.focus();
      let that = this;
      action.on(
        [
          "vertex-add",
          "vertex-remove",
          "cursor-update",
          "redo",
          "undo",
          "draw-complete",
        ],

        that.createPolygon
      );
    },
    createLine(vertices) {
      // const vertices = event.vertices;
      this.view.graphics.removeAll();
      let pointsymbol = {
        type: "simple-marker",
        color: [255, 255, 255],
        size: 6,
        outline: {
          color: [255, 0, 0],
          width: 1.5, // points
        },
      };

      let graphics = new Graphic({
        geometry: new Polyline({
          paths: vertices,
          spatialReference: this.view.spatialReference,
        }),

        symbol: {
          type: "simple-line", // autocasts as new SimpleFillSymbol
          color: [255, 116, 3],
          width: 2,
          cap: "round",
          join: "round",
        },
      });

      this.view.graphics.add(graphics);

      let firsttextSymbol = {
        type: "text",
        color: "white",
        haloColor: "black",
        haloSize: "2px",
        text: "起点",
        xoffset: "10px",
        yoffset: "10px",
        font: {
          size: 12,
          // family: "sans-serif",
          weight: "bold",
        },
      };

      let firstpoint = {
        type: "point",
        x: vertices[0][0], //当底图是投影坐标系时用x,地理坐标系用longitude
        y: vertices[0][1], //当底图是投影坐标系时用y,地理坐标系用latitude
        spatialReference: this.view.spatialReference, //和底图相同的坐标系
      };
      let firstTextGraphics = new Graphic({
        geometry: firstpoint,
        symbol: firsttextSymbol,
      });
      let firstGraphics = new Graphic({
        geometry: firstpoint,
        symbol: pointsymbol,
      });
      this.view.graphics.add(firstTextGraphics);
      this.view.graphics.add(firstGraphics);

      //
      let path = [];
      let arr1 = [];
      arr1.push(vertices[0][0]);
      arr1.push(vertices[0][1]);
      path.push(arr1);
      for (let i = 1; i < vertices.length; i++) {
        let point = {
          type: "point",
          x: vertices[i][0],
          y: vertices[i][1], //当底图是投影坐标系时用y,地理坐标系用latitude
          spatialReference: this.view.spatialReference, //和底图相同的坐标系
        };
        let mouseGraphics = new Graphic({
          geometry: point,
          symbol: pointsymbol,
        });
        let arr = [];
        arr.push(vertices[i][0]);
        arr.push(vertices[i][1]);

        path.push(arr);

        let line = new Polyline({
          hasZ: false,
          hasM: true,
          paths: path,
          spatialReference: this.view.spatialReference,
        });

        let dislen;
        let unit;
        if (this.view.scale > 5000) {
          dislen = geometryEngine.geodesicLength(line, "kilometers");
          unit = "千米";
        } else {
          dislen = geometryEngine.geodesicLength(line, "meters");
          unit = "米";
        }

        let textSymbol = {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          text: Math.abs(Math.round(dislen * 100) / 100) + unit,
          xoffset: "50px",
          yoffset: "-5px",
          font: {
            size: 12,
            // family: "sans-serif",
            weight: "bold",
          },
        };

        let textGraphics = new Graphic({
          geometry: point,
          symbol: textSymbol,
        });

        let Graphics = new Graphic({
          geometry: point,
          symbol: pointsymbol,
        });

        this.view.graphics.add(textGraphics);
        this.view.graphics.add(Graphics);
        this.view.graphics.add(mouseGraphics);
      }
    },
    createPolygon(event) {
      var vertices = event.vertices;

      var symbol = {
        type: "simple-marker",
        color: [255, 255, 255],
        size: 6,
        outline: {
          color: [255, 0, 0],
          width: 1.5, // points
        },
      };

      var fillSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [3, 255, 240, 0.1],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: [255, 116, 3],
          width: 2,
        },
      };

      var polygon = new Polygon({
        rings: vertices,
        spatialReference: this.view.spatialReference,
      });

      this.view.graphics.removeAll();
      var polygonGraphics = new Graphic({
        geometry: polygon,
        symbol: fillSymbol,
      });

      this.view.graphics.add(polygonGraphics);

      var center = polygon.centroid;

      var area = 0;
      var unit;
      if (this.view.scale > 5000) {
        area = geometryEngine.geodesicArea(
          polygonGraphics.geometry,
          "square-kilometers"
        );
        unit = "平方千米";
      } else {
        area = geometryEngine.geodesicArea(
          polygonGraphics.geometry,
          "square-meters"
        );
        unit = "平方米";
      }

      for (let i = 0; i < vertices.length; i++) {
        var point = {
          type: "point",
          x: vertices[i][0],
          y: vertices[i][1],
          spatialReference: this.view.spatialReference,
        };

        var pointGraphics = new Graphic({
          geometry: point,
          symbol: symbol,
        });
        this.view.graphics.add(pointGraphics);
      }
      var pointcenter = {
        type: "point",
        x: center.x,
        y: center.y,
        spatialReference: this.view.spatialReference,
      };

      var textSymbol = {
        type: "text",
        color: "white",
        haloColor: "black",
        haloSize: "2px",
        text: Math.abs(Math.round(area * 100) / 100) + unit,
        font: {
          size: 12,
          family: "sans-serif",
          weight: "bold",
        },
      };
      var textGraphics = new Graphic({
        geometry: pointcenter,
        symbol: textSymbol,
      });

      this.view.graphics.add(textGraphics);
    },
    clear() {
      this.view.graphics.removeAll();
      this.locate().remove();
    },
    locate() {
      let view = window.view;
      view.popup.autoOpenEnabled = false;
      const loc = view.on("click", (event) => {
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
      return loc;
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  color: #000;
}
.toolbar-container {
  position: fixed;
  top: 95px;
  right: 83px;
  height: 1.63rem;
  border-radius: 0.21rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 99;
}
.btn-item {
  margin-left: 0.5rem;
}
// .area-btn {
//   position: fixed;
//   bottom: 74px;
//   right: 83px;
//   box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 3px;
//   z-index: 2;
// }
// .distance-btn {
//   position: fixed;
//   bottom: 74px;
//   right: 143px;
//   box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 3px;
//   z-index: 2;
// }

// .clear-btn {
//   position: fixed;
//   bottom: 74px;
//   right: 23px;
//   box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 3px;
//   z-index: 2;
// }
</style>
