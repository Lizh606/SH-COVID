<template>
  <div>
    <tdt-map></tdt-map>
    <Button class="loadpoint" @click="loadpoint">加载医院</Button>
    <Button class="begin" @click="loadroute">加载路线</Button>
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
import data from "../assets/json/data";
import Point from "@arcgis/core/geometry/Point";
import Polygon from "@arcgis/core/geometry/Polygon";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import GraohicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

import shanghai from "../assets/json/sh.json";
export default {
  name: "dian",

  data() {
    return {
      showReviewModal: false,
      shPolygon: shanghai,
    };
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    loadpoint() {
      const hospitalfeature = data.ThemeData.hospital.features;

      for (let i = 0; i < hospitalfeature.length; i++) {
        const ptsymbol = new PictureMarkerSymbol(
          require("../assets/img/hospital.png"),
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
.loadpoint {
  position: relative;
  left: 15px;
  bottom: 825px;
}
.begin {
  position: relative;
  left: 20px;
  bottom: 825px;
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
