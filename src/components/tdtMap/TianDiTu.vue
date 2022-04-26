<template>
  <div class="layout">
    <div ref="map" id="map"></div>
    <MapTools class="map-tools" />
    <div id="overviewDiv"><div id="extentDiv"></div></div>
  </div>
</template>

<script>
//arcgis api
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Basemap from '@arcgis/core/Basemap'
import Graphic from '@arcgis/core/Graphic'
import * as watchUtils from '@arcgis/core/core/watchUtils'
import BasemapGalleryVM from '@arcgis/core/widgets/BasemapGallery/BasemapGalleryViewModel'
import LocalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource'
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'

import LabelClass from '@arcgis/core/layers/support/LabelClass'
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter'
import FeatureEffect from '@arcgis/core/layers/support/FeatureEffect'
import Query from '@arcgis/core/tasks/support/Query'
import QueryTask from '@arcgis/core/tasks/QueryTask'

//js组件
import createWmtsLayer from './layers/wmtsLayer'
import createTileLayer from './layers/tileLayer'

//组件
import maptool from './MapTool.vue'
import { white } from 'color-name'
// import Swipe from '@arcgis/core/widgets/Swipe';

export default {
  name: 'TianDiTu',
  components: { MapTools: maptool },
  data() {
    return {
      TdtMap: {
        map: null,
        view: null
      }
    }
  },
  provide() {
    return {
      TdtMap: this.TdtMap
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   // if (from.path === '/yqData' || from.path === '/TianDiTu') {
  //   //   next()
  //   // } else {
  //   //   next()

  //   //   if (location.href.indexOf('#reloaded') == -1) {
  //   //     location.href = location.href + '#reloaded'
  //   //     location.reload()
  //   //   }
  //   // }
  // },
  mounted() {
    // if (location.href.indexOf('#reloaded') == -1) {
    //   location.href = location.href + '#reloaded'
    //   location.reload()
    // }
    this.$nextTick(() => {
      setTimeout(() => {
        this.createMap()
      }, 10)
    })
  },

  methods: {
    async createMap() {
      //加载天地图图层
      let vectdtUrl =
        'http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1'
      let imgtdtUrl =
        'http://{subDomain}.tianditu.gov.cn/DataServer?T=img_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1'
      let tertdtUrl =
        'http://{subDomain}.tianditu.gov.cn/DataServer?T=ter_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1'
      let tdtjzUrl =
        'http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1'

      const vectiledLayer = createWmtsLayer(vectdtUrl)
      const imgtiledLayer = createWmtsLayer(imgtdtUrl)
      const tertiledLayer = createWmtsLayer(tertdtUrl)
      const tiledjzLayer = createWmtsLayer(tdtjzUrl)

      //上海地图
      const SHLayer = createTileLayer('/services/SHMAP_D/MapServer', 'SHMAP_D')
      const SHSU = createTileLayer('/SHMAP_SU/MapServer', 'SHMAP_SU')
      const SHLayer_zj = createTileLayer('/SHMAP_DZJ/MapServer', 'SHMAP_DZJ')

      const map = new Map({
        basemap: {
          baseLayers: [vectiledLayer, tiledjzLayer]
        }
      })
      const view = new MapView({
        container: 'map',
        map: map,
        center: [121.477331, 31.2379],
        zoom: 8,
        spatialReference: { wkid: 4326 }
      })
      
      const template = {
        title: '{name}',
        // content: '{center}'
        // fieldInfos: [
        //   {
        //     fieldName: 'time',
        //     format: {
        //       dateFormat: 'short-date-short-time'
        //     }
        //   }
        // ]
      }
      // const renderer = {
      //     // type: "simple",
      //     // field: "name",
      //     // symbol: {
      //     //   type: "simple-marker",
      //     //   color: "orange",
      //     //   outline: {
      //     //     color: "white"
      //     //   }
      //     // },
      //     // visualVariables: [
      //     //   {
      //     //     type: "size",
      //     //     field: "name",
      //     //     stops: [
      //     //       {
      //     //         value: 2.5,
      //     //         size: "4px"
      //     //       },
      //     //       {
      //     //         value: 8,
      //     //         size: "name"
      //     //       }
      //     //     ]
      //     //   }
      //     // ]
      //   };
      const geojsonlayer = new GeoJSONLayer({
        url: 'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=310000_full',
        popupTemplate: template,
        outFields: ['*']
        //  renderer: renderer,
        // copyright: "USGS Earthquakes",
        //   renderer: {
        // type: "simple",  // autocasts as new SimpleRenderer()
        // symbol: {
        //   type: "simple-fill",  // autocasts as new SimpleFillSymbol()
        //   outline: {  // autocasts as new SimpleLineSymbol()
        //     width: 3,
        //   },

        // },
        // visualVariables: [
        //   {
        //     type: "color",
        //     field: "name",
        //     stops: [
        //       {
        //         value: "浦东新区",
        //         color: "blue"
        //       },
        //       {
        //         value: "闵行区",
        //         size: "red"
        //       }
        //     ]
        //   }
        // ]
        // },
      })
      geojsonlayer.on('update-end', function (e) {
        map.setExtent(e.target.extent.expand(1.2));
        console.log(e.target);
      })
      map.add(geojsonlayer) // adds the layer to the map
      // geojsonlayer.definitionExpression = "adcode = 310101";
      const statesLabelClass = new LabelClass({
        labelExpressionInfo: { expression: '$feature.name' },

        // labelPlacement: "above-left",
        // where: "adcode = 310101",
        symbol: {
          type: 'text', // autocasts as new TextSymbol()
          color: 'black',
          haloSize: 10,
          haloColor: 'white'
        }
      })
      //       const featureFilter = new FeatureFilter({
      //   // where: " adcode = 310101"
      // });
      // geojsonlayer.featureEffect = new FeatureEffect({
      //   filter: featureFilter,
      //   includedEffect: "opacity(100%)",
      //   excludedEffect: "opacity(50%)"
      // });
      // geojsonlayer.when(function(){
      //   // view.extent = geojsonlayer.fullExtent;
      // });
      geojsonlayer.labelingInfo = [statesLabelClass]
      console.log(geojsonlayer)
      
      let query = geojsonlayer.createQuery()
      query.where = "name = '浦东新区'"
      query.outFields = ['name']

      geojsonlayer.queryFeatures(query).then(function (response) {
        console.log(response)
       
        
        // returns a feature set with features containing the following attributes
        // STATE_NAME, COUNTY_NAME, POPULATION, POP_DENSITY
      })
    

      // if (field) {
      //   console.log(field.name); // SomeField
      // }
      // 底图逻辑
      const vecBaseMap = new Basemap({
        baseLayers: [vectiledLayer, tiledjzLayer],
        title: '矢量地图',
        id: '矢量地图'
      })
      const imgBaseMap = new Basemap({
        baseLayers: [imgtiledLayer, tiledjzLayer],
        title: '影像地图',
        id: '影像地图'
      })
      const terBaseMap = new Basemap({
        baseLayers: [tertiledLayer, tiledjzLayer],
        title: '地形地图',
        id: '地形地图'
      })
      // const shBaseMap = new Basemap({
      //   baseLayers: [SHSU, SHLayer_zj],
      //   title: '地形地图',
      //   id: '地形地图'
      // })
      const basemapvmodel = new BasemapGalleryVM({
        view: view,
        source: new LocalBasemapsSource({
          basemaps: [vecBaseMap, imgBaseMap, terBaseMap]
        })
      })
      window.BasemapGalleryVM = basemapvmodel
      view.when().then(function () {
        view.on('click', function (event) {
          view.hitTest(event).then(function (event) {
            let results = event.results.filter(function (result) {
              console.log(result) //attributes are contained in result.graphic.attributes
              //you can do data processing here, or bind this result to a data
            })
          })
        })
      })
      //鹰眼
      const overview_zj = createWmtsLayer(tdtjzUrl)
      const overviewmap = new Map({
        basemap: {
          baseLayers: [vectiledLayer, overview_zj]
        }
      })
      const overview_view = new MapView({
        map: overviewmap,
        container: 'overviewDiv',
        center: [121.607331, 31.1879], // Longitude, latitude
        zoom: 6 // Zoom level
      })
      overview_view.ui.components = []
      overview_view.when(() => {
        view.when(() => {
          this.watchoverview()
        })
      })
      const ov = document.getElementById('overviewDiv')
      view.ui.add(ov, {
        position: 'bottom-left'
      })

      window.view = view
      this.TdtMap.map = map
      this.overviewmap = overviewmap
      this.TdtMap.view = view
      this.overview_view = overview_view

      //取消esri的缩放
      view.ui.components = []
      //取消下面esri标志
      view.ui.remove('attribution')
      
    },

    //鹰眼监听
    watchoverview() {
      const extentgraphic = new Graphic({
        geometry: null,
        symbol: {
          type: 'simple-fill',
          color: [0, 0, 0, 0.5],
          outline: null
        }
      })
      this.overview_view.graphics.add(extentgraphic)

      watchUtils.init(
        this.TdtMap.view,
        'extent',
        (extent) => {
          if (this.TdtMap.view.stationary) {
            this.overview_view
              .goTo({
                center: this.TdtMap.view.center,
                scale:
                  this.TdtMap.view.scale *
                  2 *
                  Math.max(
                    this.TdtMap.view.width / this.overview_view.width,
                    this.TdtMap.view.height / this.overview_view.height
                  )
              })
              .catch((error) => {
                if (error.name != 'view:goto-interrupted') {
                  console.error(error)
                }
              })
          }
          extentgraphic.geometry = extent
        },
        { passive: false }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
}
#map {
  width: 100%;
  height: 100%;
  position: relative;
}
//鹰眼
#overviewDiv {
  position: relative;
  left: 20px;
  bottom: 15px;
  width: 180px;
  height: 150px;
  border: 1px solid black;
  z-index: 98;
  overflow: hidden;
  touch-action: none;
}

#extentDiv {
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 99;
  touch-action: none;
}

//esri ui组件
&/deep/.esri-component.esri-home.esri-widget--button.esri-widget {
  position: fixed;
  bottom: 94px;
  right: 20px;
}

&/deep/.esri-component.esri-fullscreen.esri-widget--button.esri-widget {
  position: fixed;
  bottom: 129px;
  right: 20px;
}
&/deep/.esri-expand__container {
  position: fixed;
  bottom: 59px;
  right: 20px;
  transition: 300ms;
}
&/deep/.esri-expand {
  position: fixed;
  bottom: 59px;
  right: 20px;
}
&/deep/.ivu-btn {
  border-radius: 0px;
}
</style>
