<template>
  <div class="layout">
    <tdt-map ref="mapdata"></tdt-map>
    <Button class="loadpoint" @click="loadpoint">加载医院</Button>
    <Button class="begin" @click="load">加载行政区划</Button>
    <!-- <Modal v-model="showReviewModal">
      <h2>当前审查任务是否通过？</h2>
      <template slot="footer">
        <Button type="primary" size="large">通过</Button>
        <Button size="large">不通过</Button>
      </template>
    </Modal> -->
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import createWmtsLayer from "./layers/wmtsLayer";
import createTileLayer from "./layers/tileLayer";
import data from "../../assets/json/data";
import Point from "@arcgis/core/geometry/Point";
import Polygon from "@arcgis/core/geometry/Polygon";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import GraohicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Extent from "@arcgis/core/geometry/Extent";
import Color from "@arcgis/core/Color";

import shanghai from "@/assets/json/sh.json";

export default {
  name: "dian",

  data() {
    return {
      level: {
        levelOne: "",
        levelTwo: "",
        levelThree: "",
        levelFour: "",
      },
      showReviewModal: false,
      shPolygon: shanghai,
    };
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id === 2) {
      next((vm) => {
        vm.$nextTick(() => {
          vm.map = window.map;
          vm.view = window.view;
          // vm.handleThematicMap(to.params.collection, to.params.keyId);
          console.log(to.params.collection);
          vm.level.levelOne = to.params.collection.levelOne;
          vm.level.levelTwo = to.params.collection.levelTwo;
          vm.level.levelThree = to.params.collection.levelThree;
          vm.level.levelFour = to.params.collection.levelFour;
        });
      });
    } else {
      next();
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.level.levelOne !== "") {
          this.loadroute();
          //   console.log(window.textGraphic)
          //     const textGraohicsLayer = new GraohicsLayer();
          //   textGraohicsLayer.add(window.textGraphic);
          //   window.view.when(() => {
          //  textGraohicsLayer.when(() => {
          //     window.view.goTo(textGraohicsLayer.fullExtent).catch((error) => {
          //       console.log(error);
          //     });
          // });
          // });
        }
      }, 100);
    });
  },
  methods: {
    loadpoint() {
      const hospitalfeature = data.ThemeData.hospital.features;

      for (let i = 0; i < hospitalfeature.length; i++) {
        const ptsymbol = new PictureMarkerSymbol(
          require("@/assets/img/hospital.png"),
          20,
          20
        );

        const lonlat = hospitalfeature[i].geometry.coordinates;
        const lon = lonlat[0];
        const lat = lonlat[1];
        const pt = new Point({
          type: "point",
          longitude: lon,
          latitude: lat,
        });
        const attr = {
          Name: hospitalfeature[i].properties.NAME,
          Addres: hospitalfeature[i].properties.ADDR,
          Phone: hospitalfeature[i].properties.TELEPHONE,
        };

        const pointGraphic = new Graphic({
          geometry: pt,
          symbol: ptsymbol,
          attributes: attr,
          // popupTemplate: popupTemplate,
        });
        const ptGraohicsLayer = new GraohicsLayer();
        ptGraohicsLayer.add(pointGraphic);
        // window.map.add(ptGraohicsLayer)
        window.view.graphics.add(pointGraphic);
      }
    },

    loadroute() {
      for (let j = 0; j < this.shPolygon.features.length; j++) {
        const rings = this.shPolygon.features[j].geometry.coordinates;
        // console.log(rings[0]);
        const polygon = {
          type: "polygon",
          rings: rings[0],
        };
        const getmap = this.$refs.mapdata.TdtMap.map;
        getmap.basemap.baseLayers.items[1].visible = false;
        const textGraohicsLayer = new GraohicsLayer();
        //level one
        for (let a = 0; a < this.level.levelOne.length; a++) {
          const level1 = this.level.levelOne[a];
          console.log[level1];
          const cname = level1[0];
          const nowConfirm = level1[1];
          const confirm = level1[2];
          const dead = level1[3];
          const heal = level1[4];
          const polygonAttr = {
            Name: cname,
            nowConfirm: nowConfirm,
            confirm: confirm,
            dead: dead,
            heal: heal,
          };

          const popupTemplate = {
            title: cname,
            content: [
              {
                // Pass in the fields to display
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "nowConfirm",
                    label: "现有确诊",
                  },
                  {
                    fieldName: "confirm",
                    label: "累计确诊",
                  },
                  {
                    fieldName: "dead",
                    label: "累计死亡",
                  },
                  {
                    fieldName: "heal",
                    label: "累计治愈",
                  },
                ],
              },
            ],
          };
          if (cname === this.shPolygon.features[j].properties.name) {
            const onefillSymbol = {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: new Color("#F5F500"),
              style: "solid",
              outline: {
                width: 2,
                color: [255, 255, 255, 0.5],
              },
            };

            const onepolygonGraphic = new Graphic({
              //创建面图斑
              geometry: polygon,
              symbol: onefillSymbol,
              attributes: polygonAttr,
              popupTemplate: popupTemplate,
            });
            window.view.graphics.add(onepolygonGraphic);
            textGraohicsLayer.add(onepolygonGraphic);
          }
        }
        //level two
        for (let a = 0; a < this.level.levelTwo.length; a++) {
          const level2 = this.level.levelTwo[a];
          const cname = level2[0];
          const nowConfirm = level2[1];
          const confirm = level2[2];
          const dead = level2[3];
          const heal = level2[4];

          if (cname === this.shPolygon.features[j].properties.name) {
            const twofillSymbol = {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: new Color("#F5A300"),
              style: "solid",
              outline: {
                width: 2,
                color: [255, 255, 255, 0.5],
              },
            };
            const polygonAttr2 = {
              Name: cname,
              nowConfirm: nowConfirm,
              confirm: confirm,
              dead: dead,
              heal: heal,
            };

            const popupTemplate2 = {
              title: cname,
              content: [
                {
                  // Pass in the fields to display
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "nowConfirm",
                      label: "现有确诊",
                    },
                    {
                      fieldName: "confirm",
                      label: "累计确诊",
                    },
                    {
                      fieldName: "dead",
                      label: "累计死亡",
                    },
                    {
                      fieldName: "heal",
                      label: "累计治愈",
                    },
                  ],
                },
              ],
            };
            const twopolygonGraphic = new Graphic({
              //创建面图斑
              geometry: polygon,
              symbol: twofillSymbol,
              attributes: polygonAttr2,
              popupTemplate: popupTemplate2,
            });
            window.view.graphics.add(twopolygonGraphic);
            textGraohicsLayer.add(twopolygonGraphic);
          }
        }
        //level three
        for (let a = 0; a < this.level.levelThree.length; a++) {
          const level3 = this.level.levelThree[a];
          const cname = level3[0];
          const nowConfirm = level3[1];
          const confirm = level3[2];
          const dead = level3[3];
          const heal = level3[4];

          if (cname === this.shPolygon.features[j].properties.name) {
            const threefillSymbol = {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: new Color("#F55200"),

              style: "solid",
              outline: {
                width: 2,
                color: [255, 255, 255, 0.5],
              },
            };
            const polygonAttr3 = {
              Name: cname,
              nowConfirm: nowConfirm,
              confirm: confirm,
              dead: dead,
              heal: heal,
            };

            const popupTemplate3 = {
              title: cname,
              content: [
                {
                  // Pass in the fields to display
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "nowConfirm",
                      label: "现有确诊",
                    },
                    {
                      fieldName: "confirm",
                      label: "累计确诊",
                    },
                    {
                      fieldName: "dead",
                      label: "累计死亡",
                    },
                    {
                      fieldName: "heal",
                      label: "累计治愈",
                    },
                  ],
                },
              ],
            };
            const threepolygonGraphic = new Graphic({
              //创建面图斑
              geometry: polygon,
              symbol: threefillSymbol,
              attributes: polygonAttr3,
              popupTemplate: popupTemplate3,
            });
            window.view.graphics.add(threepolygonGraphic);
            textGraohicsLayer.add(threepolygonGraphic);
          }
        }
        //level four
        for (let a = 0; a < this.level.levelFour.length; a++) {
          const level4 = this.level.levelFour[a];
          const cname = level4[0];
          const nowConfirm = level4[1];
          const confirm = level4[2];
          const dead = level4[3];
          const heal = level4[4];
          if (cname === this.shPolygon.features[j].properties.name) {
            const fourfillSymbol = {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: new Color("#FF0000"),
              style: "solid",
              outline: {
                width: 2,
                color: [255, 255, 255, 0.5],
              },
            };
            const polygonAttr4 = {
              Name: cname,
              nowConfirm: nowConfirm,
              confirm: confirm,
              dead: dead,
              heal: heal,
            };

            const popupTemplate4 = {
              title: cname,
              content: [
                {
                  // Pass in the fields to display
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "nowConfirm",
                      label: "现有确诊",
                    },
                    {
                      fieldName: "confirm",
                      label: "累计确诊",
                    },
                    {
                      fieldName: "dead",
                      label: "累计死亡",
                    },
                    {
                      fieldName: "heal",
                      label: "累计治愈",
                    },
                  ],
                },
              ],
            };
            const fourpolygonGraphic = new Graphic({
              //创建面图斑
              geometry: polygon,
              symbol: fourfillSymbol,
              attributes: polygonAttr4,
              popupTemplate: popupTemplate4,
            });
            window.view.graphics.add(fourpolygonGraphic);
            textGraohicsLayer.add(fourpolygonGraphic);
          }
        }
        const textSymbol = {
          type: "text",
          color: "#2152AC",
          haloColor: "#ffffff",
          haloSize: 1,
          backgroundColor: "#ffffff",
          borderLineSize: 1,
          borderLineColor: "#2152AC",
          text: this.shPolygon.features[j].properties.name,

          // font: {
          //   size: 12,
          //   family: "KaiTi",
          // },
        };
        const pointgeo = {
          type: "point",
          longitude: this.shPolygon.features[j].properties.center[0],
          latitude: this.shPolygon.features[j].properties.center[1],
        };
        const textGraphic = new Graphic({
          //创建面图斑
          geometry: pointgeo,
          symbol: textSymbol,
        });

        window.textGraphic = textGraphic;
        window.view.graphics.add(textGraphic);
        let extent = new Extent({
          //获取范围
          xmin: 120.52,
          ymin: 30.5,
          xmax: 122.31,
          ymax: 31.99,
          spatialReference: window.view.spatialReference,
        });
        window.view.goTo({
          //移动地图视点
          target: extent, // target:point
          //zoom:13
        });

        textGraohicsLayer.add(window.textGraphic);
        getmap.add(textGraohicsLayer);

        // console.log(window.map.basemap.baseLayers)
      }
    },
    load() {
      for (let j = 0; j < this.shPolygon.features.length; j++) {
        const rings = this.shPolygon.features[j].geometry.coordinates;
        console.log(rings);
        const polygon = {
          type: "polygon",
          rings: rings[0],
        };
        const fillSymbol = {
          //面的样式
          type: "simple-fill",
          color: [227, 139, 79, 0.8],
          outline: {
            color: [255, 255, 255],
            width: 1,
          },
        };
        const polygonAttr = {
          Name: this.shPolygon.features[j].properties.name,
          // Addres: this.shPolygon.features[j].properties.ADDR,
          // Phone:this.shPolygon.features[j].properties.TELEPHONE,
        };
        const popupTemplate = {
          title: polygonAttr.Name,
        };
        const polygonGraphic = new Graphic({
          //创建面图斑
          geometry: polygon,
          symbol: fillSymbol,
          popupTemplate: popupTemplate,
        });
        window.view.graphics.add(polygonGraphic);
        const textSymbol = {
          type: "text",
          color: "#2152AC",
          haloColor: "#ffffff",
          haloSize: 1,
          backgroundColor: "#ffffff",
          borderLineSize: 1,
          borderLineColor: "#2152AC",
          text: this.shPolygon.features[j].properties.name,
          font: {
            size: 12,
            family: "KaiTi",
          },
        };
        const pointgeo = {
          type: "point",
          longitude: this.shPolygon.features[j].properties.center[0],
          latitude: this.shPolygon.features[j].properties.center[1],
        };
        const textGraphic = new Graphic({
          //创建面图斑
          geometry: pointgeo,
          symbol: textSymbol,
        });
        window.view.graphics.add(textGraphic);
      }
    },
  },
};
</script>

<style scoped>
.layout{
  height: 100%;
}
.loadpoint {
  position: relative;
  left: 14px;
  bottom: 672px;
}
.begin {
  position: relative;
  left: 20px;
  bottom: 672px;
}
</style>
<style lang="scss" scoped>
.ivu-modal {
  .ivu-modal-header {
    padding: 0.2rem 0.7rem;
    .modal-title {
      height: 2rem;
      line-height: 2rem;
      font-size: 1.5rem;
      .quitIcon {
        cursor: pointer;
        margin-top: 0.3rem;
        float: right;
      }
    }
  }
  .ivu-modal-body {
    height: 250px;
    .evaluation-modal-body {
      height: 100%;
      .uploadStyle {
        height: 100%;
        .ivu-upload.ivu-upload-drag {
          height: 100%;
          div {
            padding: 52.5px 0;
          }
        }
      }
    }
  }
}
</style>
