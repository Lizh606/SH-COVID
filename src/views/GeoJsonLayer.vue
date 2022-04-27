<template>
  <div class="layout">
    <tdt-map ref="mapdata"></tdt-map>
  </div>
</template>

<script>
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'

import LabelClass from '@arcgis/core/layers/support/LabelClass'
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter'
import FeatureEffect from '@arcgis/core/layers/support/FeatureEffect'
import Query from '@arcgis/core/tasks/support/Query'
import QueryTask from '@arcgis/core/tasks/QueryTask'
export default {
  name: 'GeoJsonLayer',

  data() {
    return {
      map: null,
      view: null
    }
  },

  // beforeRouteEnter(to, from, next) {

  //   if (to.params.id === 2) {
  //     next((vm) => {

  //       vm.$nextTick(() => {
  //         vm.map = window.map;
  //         vm.view = window.view;
  //         // vm.handleThematicMap(to.params.collection, to.params.keyId);
  //         console.log(to.params.collection);
  //         vm.level.levelOne = to.params.collection.levelOne;
  //         vm.level.levelTwo = to.params.collection.levelTwo;
  //         vm.level.levelThree = to.params.collection.levelThree;
  //         vm.level.levelFour = to.params.collection.levelFour;
  //       });
  //     });
  //   } else {
  //     next();
  //   }
  // },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.map = this.$refs.mapdata.TdtMap.map
        this.view = this.$refs.mapdata.TdtMap.view
        console.log(this.map, this.view)
        this.addGeoJsonLayer()
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
      }, 1000)
    })
  },
  methods: {
    addGeoJsonLayer() {
      const template = {
        title: '{name}'
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
        this.map.setExtent(e.target.extent.expand(1.2))
        console.log(e.target)
      })
      this.map.add(geojsonlayer) // adds the layer to the map
      // geojsonlayer.definitionExpression = "adcode = 310101";
      const statesLabelClass = new LabelClass({
        labelExpressionInfo: { expression: '$feature.name' },

        // labelPlacement: "above-left",
        // where: "adcode = 310101",
        symbol: {
          type: 'text', // autocasts as new TextSymbol()
          color: 'black',
          haloSize: 10,
          haloColor: 'white',
          // font: {
          //   // autocasts as new Font()
          //   family: '楷体'
          // }
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
      //移除底图

      //    this.map.basemap.baseLayers.items[0].visible =false;
      // this.map.basemap.baseLayers.items[1].visible =false;

      //      geojsonlayer.on("update-end", function(){

      //            this.map.basemap.baseLayers.items[0].visible =false;
      //         this.map.basemap.baseLayers.items[1].visible =false;
      // });
      geojsonlayer.labelingInfo = [statesLabelClass]
      let test =  "浦东新区"
      console.log(geojsonlayer)
    //  geojsonlayer.definitionExpression = "name = '浦东新区'"
      console.log(geojsonlayer,1)
     
    

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
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ivu-layout-content {
  overflow-x: none;
}
.layout {
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
/deep/.ivu-layout-content {
  overflow-x: none;
}
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
