<template>
  <div>
    <!-- 切换底图弹窗内容 -->
    <ButtonGroup class="toolbar-container">
      <Dropdown class="btns-common-style">
        <!-- <Button @click="query">
          <Icon custom="iconfont icon-gongjuxiang" />
          <span>属性查询</span>
        </Button> -->
        <a href="javascript:void(0)" style="color:#515A6E"  @click="query">
          <Icon custom="iconfont icon-gongjuxiang" />
          <span>  属性查询</span>
        </a>
      </Dropdown>
      <Dropdown class="btns-common-style">
        <!-- <Button>
          <Icon custom="iconfont icon-gongjuxiang" />
          <span> 工具箱</span>
        </Button> -->
         <a href="javascript:void(0)" style="color:#515A6E">
          <Icon custom="iconfont icon-gongjuxiang" />
          <span>  工具箱</span>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem
            ><div  class="btn-dropdown-style" @click="measureDistance()">
              <Icon custom="iconfont icon-ceju" />
              <span class="btn-item">测距</span>
            </div>
          </DropdownItem>
          <DropdownItem
            ><div class="btn-dropdown-style" @click="measureArea()">
              <Icon custom="iconfont icon-cemian" />
              <span class="btn-item">测面</span>
            </div>
          </DropdownItem>
          <DropdownItem
            ><div class="btn-dropdown-style" @click="clear()">
              <Icon custom="iconfont icon-qingchu" />
              <span class="btn-item">一键清除</span>
            </div>
          </DropdownItem>
          <DropdownItem
            ><div  class="btn-dropdown-style" @click="locate()">
              <Icon custom="iconfont icon-qingchu" />
              <span class="btn-item">定位街道</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
    <!-- 右下角工具 -->
    <!-- 导出地图html2canvas -->
    <div
      type="button"
      @click="exportbtn"
      class="export-button"
      aria-label="导出地图"
      title="导出地图"
    >
      <IconSvg iconClass="icon_daochu" class="export-button-icon"
        >导出地图</IconSvg
      >
    </div>
    <!-- 地图截屏 -->
    <screentake></screentake>
    <!-- 切换底图弹窗内容 -->
    <change-map></change-map>
    <!-- 比例尺和经纬度 -->
    <p id="coordinate-scale" class="coordinate-scale">
      <span id="mouse-position" class="mouse-position"
        >经度:{{ lon }} &nbsp; 纬度:{{ lat }}</span
      >
      <span id="scale" class="scale"> 比例尺 1:{{ curScale }} </span>
    </p>
  </div>
</template>

<script>
import * as locator from "@arcgis/core/rest/locator";
import Draw from "@arcgis/core/views/draw/Draw";
import Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import Polyline from "@arcgis/core/geometry/Polyline";
import Search from "@arcgis/core/widgets/Search";
import Home from "@arcgis/core/widgets/Home";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

import screentake from "./Screentake.vue";
import changemap from "./ChangeMap.vue";

import html2canvas from "html2canvas";

export default {
  name: "MapTools",
  components: { ChangeMap: changemap, Screentake: screentake },
  inject: ["TdtMap"],
  data() {
    return {
      loc: "",
      curScale: "36978669",
      lon: "121.60",
      lat: "31.18",
    };
  },
  created() {},

  mounted() {
    this.$nextTick(() => {
      this.map = this.TdtMap.map;
      this.view = this.TdtMap.view;
      //经纬度
      let that = this;
      this.view.on("pointer-move", function (event) {
        let mapPoistion = that.view.toMap({
          x: event.x,
          y: event.y,
        });

        let lon = mapPoistion.x;
        let lat = mapPoistion.y;
        that.lon = lon.toFixed(2);
        that.lat = lat.toFixed(2);
      });
      //搜索
      const searchWidgets = new Search({
        view: this.view,
      });
      this.view.ui.add(searchWidgets, {
        position: "top-left",
      });
      const homeWidget = new Home({
        view: this.view,
      });

      this.view.ui.add(homeWidget);

      const fullscreen = new Fullscreen({
        view: this.view,
      });
      this.view.ui.add(fullscreen);
    });
    //解决html2canvas截图空白问题
    HTMLCanvasElement.prototype.getContext = (function (origFn) {
      return function (type, attributes) {
        if (type === "webgl") {
          attributes = Object.assign({}, attributes, {
            preserveDrawingBuffer: true,
          });
        }
        return origFn.call(this, type, attributes);
      };
    })(HTMLCanvasElement.prototype.getContext);
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

      let linegraphics = new Graphic({
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

      this.view.graphics.add(linegraphics);

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
      const vertices = event.vertices;

      const symbol = {
        type: "simple-marker",
        color: [255, 255, 255],
        size: 6,
        outline: {
          color: [255, 0, 0],
          width: 1.5, // points
        },
      };

      const fillSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [3, 255, 240, 0.1],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: [255, 116, 3],
          width: 2,
        },
      };

      const polygon = new Polygon({
        rings: vertices,
        spatialReference: this.view.spatialReference,
      });

      this.view.graphics.removeAll();
      const polygonGraphics = new Graphic({
        geometry: polygon,
        symbol: fillSymbol,
      });

      this.view.graphics.add(polygonGraphics);

      const center = polygon.centroid;

      let area = 0;
      let unit;
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
        const point = {
          type: "point",
          x: vertices[i][0],
          y: vertices[i][1],
          spatialReference: this.view.spatialReference,
        };

        const pointGraphics = new Graphic({
          geometry: point,
          symbol: symbol,
        });
        this.view.graphics.add(pointGraphics);
      }
      const pointcenter = {
        type: "point",
        x: center.x,
        y: center.y,
        spatialReference: this.view.spatialReference,
      };

      const textSymbol = {
        type: "text",
        color: "white",
        haloColor: "black",
        haloSize: "2px",
        text: Math.abs(Math.round(area * 100) / 100) + unit,
        font: {
          size: 12,
          // family: "sans-serif",
          weight: "bold",
        },
      };
      const textGraphics = new Graphic({
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
    exportbtn() {
      this.$Modal.confirm({
        title: "提示",
        content: "<p>是否导出地图？</p>",
        onOk: () => {
          this.exportMap();
        },
        onCancel: () => {},
      });
    },
    exportMap() {
      this.$nextTick(() => {
        html2canvas(document.getElementById("map"), {
          async: false, // 同步执行
          allowTaint: true, // 是否允许跨域图片污染画布
          imageTimeout: 0, // 禁用加载图像的超时时间
          taintTest: false, // 污染检查
          useCORS: true, // 用CORS服务从某服务中加载图片
        }).then(function (canvas) {
          let dataURL = canvas.toDataURL("image/png");
          let a = document.createElement("a");
          document.body.appendChild(a);
          a.href = dataURL;
          a.download = "ExportedMap";
          a.click();
        });
      });
    },
    query() {
      let that = this;
      that.view.on("click", function (evt) {
        that.view.hitTest(evt).then(function (response) {
          let result = response.results[0];
          if (result && result.graphic) {
            console.log(result);
            let graphic = result.graphic;

            //自定义高亮
            //这里的几何图形是面状，配置graphic的symbol为fillSymbol
            graphic.symbol = {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              color: [226, 119, 40],
              outline: {
                // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 2,
              },
            };
            graphic.popupTemplate = {
              title: graphic.attributes.Name,
              content: [
                {
                  // Pass in the fields to display
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "Name",
                      label: "Name",
                    },
                    {
                      fieldName: "Addres",
                      label: "Addres",
                    },
                    {
                      fieldName: "Phone",
                      label: "Phone",
                    },
                  ],
                },
              ],
            };
            // that.view.graphics.removeAll(); //清除上一次点击目标
            that.view.graphics.add(graphic); //添加新的点击目标
          }
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  color: #000;
}
.toolbar-container {
  position: absolute;
  top: 1.83rem;
  right: 5.1rem;
  height: 2.63rem;
  border-radius: 0.21rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
}
.toolbar-container .btn-common-style {
  border-radius: 0;
  border-style: none;
  height: 2.63rem;
  // width: 2.44rem;
  padding: 0;
  line-height: 2.63rem;
  vertical-align: initial;
  .tool-icon-style {
    font-size: 1.05rem;
    color: rgba(102, 102, 102, 1);
  }
  .tool-icon-style.active {
    color: rgba(24, 144, 255, 1);
  }
  .tool-icon-style:hover {
    color: rgba(24, 144, 255, 1);
  }
}
.toolbar-container .btn-common-style:first-child {
  border-radius: 0.21rem;
}
.toolbar-container .btn-common-style:focus {
  box-shadow: 0 0 0 0 rgba(45, 140, 240, 0);
}
.toolbar-container .btns-common-style {
  margin: 0 10px;
  height: 2.63rem;
  // width: 2.44rem;
  line-height: 2.63rem;
  text-align: center;
  cursor: pointer;
  .tools-icon-style {
    color: rgba(102, 102, 102, 1);
    font-size: 1.05rem;
  }
  .tools-icon-arrow {
    color: rgba(102, 102, 102, 1);
    vertical-align: middle;
  }
  .dropdown-icon {
    font-size: 1.05rem;
    padding-left: 0.55rem;
    padding-right: 0.55rem;
  }
}
// //属性查询
// .toolbar-query {
//   position: fixed;
//   top: 95px;
//   right: 183px;
//   height: 1.63rem;
//   border-radius: 0.21rem;
//   background: rgba(255, 255, 255, 1);
//   box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
//   display: flex;
//   z-index: 99;
// }
// //工具箱
// .toolbar-container {
//   position: fixed;
//   top: 95px;
//   right: 83px;
//   height: 1.63rem;
//   border-radius: 0.21rem;
//   background: rgba(255, 255, 255, 1);
//   box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
//   display: flex;
//   z-index: 99;
// }
.btn-item {
  margin-left: 0.5rem;
}
//导出地图html2canvas
.export-button {
  position: fixed;
  bottom: 24px;
  right: 20px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  font-size: 14px;
  background-color: #fff;
  color: #6e6e6e;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 125ms ease-in-out;
}
.export-button-icon {
  box-sizing: inherit;
  color: rgba(128, 134, 149, 1);
  font-size: 18px;
  content: "";
  color: inherit;
  display: block;
  margin: 0 auto;
  position: relative;
}
//坐标和比例尺
.coordinate-scale {
  position: fixed;
  bottom: 24px;
  right: 65px;
  z-index: 2;
  width: 290px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  text-align: center;
  padding: 6px 0px 7px 0px;
  font-size: 12px;
  color: rgba(128, 134, 149, 1);
  line-height: 19px;
}
.mouse-position {
  width: 160px;
  float: left;
}
.scale {
  width: 130px;
  float: right;
}
</style>
