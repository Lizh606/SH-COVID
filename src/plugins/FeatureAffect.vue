<template>
  <div>
    <div id="map"></div>
    <div id="content">
      <b>空间联系</b><br /><br />
      <label for="layers">选择一个图层</label>
      <div id="layers" class="geometry-options">
        <button
          class="
            esri-widget--button
            esri-icon-map-pin
            layer-button
            geometry-button-selected
          "
          id="point-layer-button"
          value="point"
          title="点要素"
        ></button>
        <button
          class="esri-widget--button esri-icon-polyline layer-button"
          id="line-layer-button"
          value="polyline"
          title="线要素"
        ></button>
        <button
          class="esri-widget--button esri-icon-polygon layer-button"
          id="polygon-layer-button"
          value="polygon"
          title="面要素"
        ></button>
      </div>
      <br />选择一个预定义图层
      <div class="geometry-options">
        <button
          class="esri-widget--button esri-icon-map-pin geometry-button"
          id="point-geometry-button"
          value="point"
          title="以点搜索"
        ></button>
        <button
          class="esri-widget--button esri-icon-polyline geometry-button"
          id="line-geometry-button"
          value="polyline"
          title="以线搜索"
        ></button>
        <button
          class="esri-widget--button esri-icon-polygon geometry-button"
          id="polygon-geometry-button"
          value="polygon"
          title="以面搜索"
        ></button>
      </div>
      <br />
      <label for="relationship-select">空间关系:</label>
      <select id="relationship-select" class="options">
        <option value="intersects" selected>相交</option>
        <option value="contains">包含</option>
        <option value="crosses">十字</option>
        <option value="envelope-intersects">线线、线面、面面相交</option>
        <option value="overlaps">重叠</option>
        <option value="touches">要素一完全包含要素二</option>
        <option value="disjoint">不相交</option>
      </select>
      <br />
      <br />
      <div class="tooltip">
        <label for="distanceNum">改变距离:</label>
        <span id="distanceValueNum">0</span> <br />
        0<input
          id="distanceNum"
          type="range"
          min="0"
          max="2000"
          value="0"
          tabindex="1"
        />2000
      </div>
      <br />
      <br />
      <label for="distance-select">距离单位</label>
      <select id="distance-select" class="options">
        <option value="meters">米</option>
        <option value="kilometers">千米</option>
        <option value="feet">英尺</option>
        <option value="miles">英里</option>
        <option value="nautical-miles">海里</option>
      </select>
      <br /><br /><br />
      <button class="esri-button" id="clearFilter" type="button">清除</button>
    </div>
  </div>
</template>

<script>
import "@arcgis/core/assets/esri/themes/light/main.css";
import WebMap from "@arcgis/core/WebMap";
import GraohicsLayer from "@arcgis/core/layers/GraphicsLayer";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import watchUtils from "@arcgis/core/core/watchUtils";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
export default {
  name: "FeatureAffect",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    //定义变量
    init() {
      let bufferGraphic, featureLayerView; //缓冲图形  特征图层
      let featureFilter = {}; //特征过滤
      let layerViews = {};
      let filterGeometries = {}; //过滤几何

      //特征过滤器变量
      let filterGeometry = null;
      let geometryRel = "intersects";
      let distance = 0;
      let unit = "meters";

      let map = new WebMap({
        portalItem: {
          id: "971eae060595416283eaac4ad54cbbda",
        },
      });

      let bufferGeometriesLayer = new GraohicsLayer();

      map.load().then(function () {
        //加载 webmap 后将图形图层添加到顶部
        map.layers.unshift(bufferGeometriesLayer); //unshift可向数组的开头添加一个或更多元素，并返回新的长度。
        //遍历webmap的layer
        // 遍历所有层视图，将它们添加到全局变量中
        // 以便以后可以访问它们以进行过滤
        map.layers.forEach(function (layer, index) {
          view.whenLayerView(layer).then(function (layerView) {
            if (layer.type === "feature") {
              const type = layer.geometryType;
              layerView[type] == layerView;
              if (layerView.layer.geometryType === "point") {
                //点图层作为默认图层
                featureLayerView = layerView;
              }
            }
          });
        });
      });
      const view = new MapView({
        map: map,
        container: "map",
        padding: { right: 260 },
      });
      // geometry filter distance UI components
      const distanceNum = document.getElementById("distanceNum");
      const distanceUnit = document.getElementById("distance-select");
      const spatialRelType = document.getElementById("relationship-select");
      const distanceValueNum = document.getElementById("distanceValueNum");

      //从与距离相关的选项中获取用户输入的值

      function distanceVariablesChanged() {
        unit = distanceUnit.value;
        distance = parseInt(distanceNum.value);
        distanceValueNum.innerHTML = distance;
        geometryRel = spatialRelType.value;
        updateBuffer();
      }

      //   如果用户按距离过滤，则更新缓冲区图形
      function updateBuffer() {
        if (distance > 0 && filterGeometry) {
          var newBufferGeometry = geometryEngine.geodesicBuffer(
            filterGeometry,
            distance,
            unit
          );
          bufferGeometriesLayer.graphics.getItemAt(0).geometry =
            newBufferGeometry;
          updateFilter();
        } else {
          bufferGraphic.geometry = null;
          updateFilter();
        }
      }

      //在可见的 FeatureLayerView 上设置几何过滤器
      function updateFilter() {
        featureFilter = {
          // 自动转换到 FeatureFilter
          geometry: filterGeometry,
          spatialRelationship: geometryRel,
          distance: distance,
          units: unit,
        };
        // 设置对排除特征的影响
        // 使它们变灰和透明
        if (featureLayerView) {
          featureLayerView.effect = {
            filter: featureFilter,
            excludedEffect: "grayscale(100%) opacity(30%)",
          };
        }
      }

      //图层类型按钮的单击事件
      document.getElementById("point-layer-button").onclick =
        layersChangedClickHandler;
      document.getElementById("line-layer-button").onclick =
        layersChangedClickHandler;
      document.getElementById("polygon-layer-button").onclick =
        layersChangedClickHandler;
      // Make the selected layerview visible while setting the other layerviews invisible
      function layersChangedClickHandler(event) {
        for (var key in layerViews) {
          layerViews[key].visible = false;
        }
        const geometryType = event.target.value;
        var layerView = layerViews[geometryType];
        layerView.visible = true;
        featureLayerView = layerView;
        updateBuffer();
        setActiveButton(this);
      }

      // geometry buttons - use the selected geometry to set effect
      document.getElementById("point-geometry-button").onclick =
        geometryButtonsClickHandler;
      document.getElementById("line-geometry-button").onclick =
        geometryButtonsClickHandler;
      document.getElementById("polygon-geometry-button").onclick =
        geometryButtonsClickHandler;
      function geometryButtonsClickHandler(event) {
        const geometryType = event.target.value;
        var filterGraphic;
        for (var key in filterGeometries) {
          filterGeometries[key].visible = false;
        }
        var filterGraphic = filterGeometries[geometryType];
        filterGraphic.visible = true;
        filterGeometry = filterGraphic.geometry;

        updateBuffer();
        setActiveButton(this);
      }

      document.getElementById("clearFilter").onclick = function () {
        filterGeometry = null;
        bufferGraphic.geometry = null;
        for (var key in filterGeometries) {
          filterGeometries[key].visible = false;
        }
        updateFilter();
        setActiveButton();
      };

      function setActiveButton(selectedButton) {
        // focus the view to activate keyboard shortcuts for sketching
        var elements = document.getElementsByClassName(
          "geometry-button-selected"
        );
        if (selectedButton) {
          for (var i = 0; i < elements.length; i++) {
            if (
              elements[i].classList.contains("layer-button") &&
              selectedButton.classList.contains("layer-button")
            ) {
              elements[i].classList.remove("geometry-button-selected");
            } else if (
              elements[i].classList.contains("geometry-button") &&
              selectedButton.classList.contains("geometry-button")
            ) {
              elements[i].classList.remove("geometry-button-selected");
            }
            selectedButton.classList.add("geometry-button-selected");
          }
        } else if (!selectedButton) {
          for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains("geometry-button")) {
              elements[i].classList.remove("geometry-button-selected");
            }
          }
        }
      }

      // add predefined point, line and polygon features
      view.when(function () {
        const polygon = {
          type: "polygon",
          rings: [
            [-8369152.108088223, 4858625.975183949],
            [-8364871.261276581, 4858713.161169337],
            [-8365068.4747812, 4855823.856429268],
            [-8369472.561371844, 4856045.031150761],
            [-8369152.108088223, 4858625.975183949],
          ],
          spatialReference: view.spatialReference,
        };
        const polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [51, 51, 204, 0.4],
            style: "solid",
            outline: {
              color: "white",
              width: 1,
            },
          },
          visible: false,
        });
        filterGeometries[polygonGraphic.geometry.type] = polygonGraphic;

        const line = {
          type: "polyline",
          paths: [
            [
              polygonGraphic.geometry.extent.xmin,
              polygonGraphic.geometry.extent.ymin,
            ],
            [
              polygonGraphic.geometry.extent.xmax,
              polygonGraphic.geometry.extent.ymax,
            ],
          ],
          spatialReference: view.spatialReference,
        };
        const lineGraphic = new Graphic({
          geometry: line,
          symbol: {
            type: "simple-line",
            color: [51, 51, 204, 0.5],
            width: "4px",
          },
          visible: false,
        });
        filterGeometries[lineGraphic.geometry.type] = lineGraphic;

        const point = {
          type: "point",
          x: polygonGraphic.geometry.centroid.x,
          y: polygonGraphic.geometry.centroid.y,
          spatialReference: view.spatialReference,
        };

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: {
            type: "text",
            color: [51, 51, 204, 0.9],
            text: "\ue61d",
            font: {
              size: 24,
              family: "calcite-web-icons",
            },
          },
          visible: false,
        });
        filterGeometries[pointGraphic.geometry.type] = pointGraphic;

        bufferGraphic = new Graphic({
          symbol: {
            type: "simple-fill",
            color: [151, 151, 204, 0.5],
            style: "solid",
            outline: {
              color: "white",
              width: 1,
            },
          },
          visible: true,
        });
        bufferGeometriesLayer.addMany([
          bufferGraphic,
          polygonGraphic,
          lineGraphic,
          pointGraphic,
        ]);
        document.getElementById("map").style.display = "block";
      });
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: "Avenir Next W00", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
#content {
  background-color: white;
  padding: 10px;
  width: 250px;
  margin: 5px;
  position: absolute;
  bottom: 15px;
  right: 10px;
  font-size: 14px;
  display: none;
}
.geometry-options {
  display: flex;
  flex-direction: row;
}

.geometry-button,
.layer-button {
  flex: 1;
  border-style: solid;
  border-width: 1px;
  border-image: none;
}

.geometry-button-selected {
  background-color: #4c4c4c;
  color: #fff;
}

.options {
  max-width: 260px;
  width: 100%;
  height: 25px;
}

#distanceNum {
  width: 80%;
}
</style>