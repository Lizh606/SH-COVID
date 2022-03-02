<template>
  <div>
    <tdt-map></tdt-map>
    <Button class="loadpoint" @click="loadpoint">加载医院</Button>
    <Button class="begin" @click="loadroute">加载路线</Button>
     <Modal v-model="showReviewModal">
        <h2>当前审查任务是否通过？</h2>
        <template slot="footer">
          <Button
            type="primary"
            size="large"
          >通过</Button>
          <Button
            size="large"
          >不通过</Button>
        </template>
      </Modal>
  </div>
</template>


<script>
import data from '../assets/json/data'
import Point from '@arcgis/core/geometry/Point'
import PictureFillSymbol from '@arcgis/core/symbols/PictureFillSymbol'
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol'
import GraohicsLayer from '@arcgis/core/layers/GraphicsLayer'
import Graphic from '@arcgis/core/Graphic'

import RouteParameters from '@arcgis/core/rest/support/RouteParameters'
import FeatureSet from '@arcgis/core/rest/support/FeatureSet'
import * as route from '@arcgis/core/rest/route'

import * as clusterPopupTemplateCreator from '@arcgis/core/smartMapping/popup/clusters'
import * as clusterLabelCreator from '@arcgis/core/smartMapping/labels/clusters'

export default {
  name: 'dian',

  data() {
    return {
      showReviewModal:false
    }
  },
  mounted() {},
  methods: {
    loadpoint() {
      // const hospoint = hospital.pois[0].lonlat
      // const lon = hospoint.substring(0, 11)
      // const lat = hospoint.substring(11, 21)

      // const lonlat = [lon, lat]
      // //  const symbol  = new PictureMarkerSymbol({
      // //    stations[s].imageUrl, 18, 18
      // //  })
      // const point = {
      //   type: 'point',
      //   longitude: lon,
      //   latitude: lat,
      //   // spatialReference: window.view.spatialReference,
      // }
      // const ptsymbol = {
      //     type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      //     color: [226, 119, 40],
      //     outline: {
      //       // autocasts as new SimpleLineSymbol()
      //       color: [255, 255, 255],
      //       width: 2
      //     }
      //   };

      // const pointGraphic = new Graphic({
      //   geometry: point,
      //   symbol: ptsymbol
      // })
      // window.view.graphics.add(pointGraphic)
      const hospitalfeature = data.ThemeData.hospital.features

      for (let i = 0; i < hospitalfeature.length; i++) {
        // const ptsymbol = {
        //   // type: 'picture-marker', // autocasts as new SimpleMarkerSymbol()
        // url: '../../public/hospital.jpg',
        //   // width: '24px',
        //   // height: '24px',
        //   // outline: {
        //   //   style: 'solid',
        //   // },
        //   type: 'picture-marker',
        //   url: '/hospital.png',

        //   // color: [226, 119, 40],
        //   // outline: {
        //   //   // autocasts as new SimpleLineSymbol()
        //   //   color: [255, 255, 255],
        //   //   width: 1,
        //   // },
        // }
        const ptsymbol = new PictureMarkerSymbol(
          require('../assets/img/hospital.png'),
          20,
          20
        )

        const lonlat = hospitalfeature[i].geometry.coordinates
        const lon = lonlat[0]
        const lat = lonlat[1]
        const pt = new Point({
          type: 'point',
          longitude: lon,
          latitude: lat,
        })
        const attr = {
          Name: hospitalfeature[i].properties.NAME,
          Addres: hospitalfeature[i].properties.ADDR,
          Phone: hospitalfeature[i].properties.TELEPHONE,
        }
        const popupTemplate = {
          title: attr.Name,
          content: [
            {
              // Pass in the fields to display
              type: 'fields',
              fieldInfos: [
                {
                  fieldName: 'Name',
                  label: 'Name',
                },
                {
                  fieldName: 'Addres',
                  label: 'Addres',
                },
                {
                  fieldName: 'Phone',
                  label: 'Phone',
                },
              ],
            },
          ],
        }
        const pointGraphic = new Graphic({
          geometry: pt,
          symbol: ptsymbol,
          attributes: attr,
          popupTemplate: popupTemplate,
        })
        const ptGraohicsLayer = new GraohicsLayer()
        ptGraohicsLayer.add(pointGraphic)
        // window.map.add(ptGraohicsLayer)
        window.view.graphics.add(pointGraphic)
        const clusterConfig = {
          type: 'cluster',
          clusterRadius: '100px',
          popupTemplate: {
            title: 'Cluster summary',
            content: 'This cluster represents {cluster_count} earthquakes.',
            fieldInfos: [
              {
                fieldName: 'cluster_count',
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
            ],
          },
          clusterMinSize: '24px',
          clusterMaxSize: '60px',
          labelingInfo: [
            {
              deconflictionStrategy: 'none',
              labelExpressionInfo: {
                expression: "Text(hospitalfeature.cluster_count, '#,###')",
              },
              symbol: {
                type: 'text',
                color: '#004a5d',
                font: {
                  weight: 'bold',
                  family: 'Noto Sans',
                  size: '12px',
                },
              },
              labelPlacement: 'center-center',
            },
          ],
        }
      }
    },

    loadroute() {
      this.showReviewModal = true
    },
  },
}
</script>

<style scoped>
.loadpoint {
  position: relative;
  left: 15px;
  bottom: 670px;
}
.begin {
  position: relative;
  left: 20px;
  bottom: 670px;
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

