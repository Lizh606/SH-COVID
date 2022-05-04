<template>
  <div class="layout">
    <tdt-map ref="mapdata"></tdt-map>
  </div>
</template>

<script>
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import GraohicsLayer from '@arcgis/core/layers/GraphicsLayer'
import Graphic from '@arcgis/core/Graphic'
import Color from '@arcgis/core/Color'
import Polygon from '@arcgis/core/geometry/Polygon'
import Extent from '@arcgis/core/geometry/Extent'
import FeatureSet from '@arcgis/core/rest/support/FeatureSet'
import LabelClass from '@arcgis/core/layers/support/LabelClass'
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter'
import FeatureEffect from '@arcgis/core/layers/support/FeatureEffect'
import Query from '@arcgis/core/rest/support/Query'
import QueryTask from '@arcgis/core/tasks/QueryTask'
import Legend from '@arcgis/core/widgets/Legend'
import Expand from '@arcgis/core/widgets/Expand'

import shanghai from '@/assets/json/sh.json'
import axios from 'axios'
export default {
  name: 'GeoJsonLayer',

  data() {
    return {
      map: null,
      view: null,
      data1: null,
      func1: false,
      shPolygon: shanghai
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id === 2) {
      next((vm) => {
        vm.$nextTick(() => {
          vm.map = window.map
          vm.view = window.view
          vm.data1 = to.params.collection
        })
      })
    } else {
      next()
    }
  },
  mounted() {
    this.$nextTick(() => {
      // setTimeout(() => {
        this.$refs.mapdata.TdtMap.map.add(this.$store.getters.featureLayer)
        this.map = this.$refs.mapdata.TdtMap.map
        this.view = this.$refs.mapdata.TdtMap.view
        // this.addGeoJsonLayer()
        //  this.map.basemap.baseLayers.items[0].visible =false;
        // this.map.basemap.baseLayers.items[1].visible = false
        if (this.data1) {
          this.loadroute()
        } else {
          this.addGeoJsonLayer()
        }
      // }, 1000)
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
      })
      window.BasemapGalleryVM.source.basemaps.get('items').push(geojsonlayer)
      this.map.basemap.baseLayers.add(geojsonlayer)
      // this.map.add(geojsonlayer) // adds the layer to the map
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

      //      geojsonlayer.on("update-end", function(){

      //            this.map.basemap.baseLayers.items[0].visible =false;
      //         this.map.basemap.baseLayers.items[1].visible =false;
      // });
      geojsonlayer.labelingInfo = [statesLabelClass]
      let test = '浦东新区'

      let query = geojsonlayer.createQuery()
      query.where = "name = '浦东新区'"
      query.outFields = ['name']

      geojsonlayer.queryFeatures(query).then(function (response) {
      })
    },
    loadroute() {
      let features = []
      for (let j = 0; j < this.shPolygon.features.length; j++) {
        const rings = this.shPolygon.features[j].geometry.coordinates
        const polygon = new Polygon({
          rings: rings[0]
        })
        if (this.shPolygon.features[j].properties.name === '浦东新区') {
          polygon.addRing([
            [121.943244, 31.215465],
            [121.941826, 31.207678],
            [121.942619, 31.198465],
            [121.944843, 31.186878],
            [121.948027, 31.176405],
            [121.952629, 31.1672],
            [121.959637, 31.159278],
            [121.965685, 31.15754],
            [121.970773, 31.157552],
            [121.975862, 31.158834],
            [121.99573, 31.1608],
            [121.999554, 31.165079],
            [122.010593, 31.188004],
            [122.012011, 31.192043],
            [122.012609, 31.210002],
            [122.011038, 31.217405],
            [122.008563, 31.220987],
            [121.989655, 31.224521],
            [121.980659, 31.22809],
            [121.969188, 31.230282],
            [121.957259, 31.230414],
            [121.951044, 31.228821],
            [121.946595, 31.224365],
            [121.943244, 31.215465]
          ])
          polygon.addRing([
            [121.882625, 31.240857],
            [121.880873, 31.23633],
            [121.882541, 31.225611],
            [121.885155, 31.22052],
            [121.889271, 31.214997],
            [121.901645, 31.20146],
            [121.908777, 31.195266],
            [121.913852, 31.19384],
            [121.918788, 31.194319],
            [121.922445, 31.196859],
            [121.925448, 31.205438],
            [121.927519, 31.224017],
            [121.926727, 31.229731],
            [121.923557, 31.233863],
            [121.915451, 31.236558],
            [121.897363, 31.242115],
            [121.88991, 31.242594],
            [121.882625, 31.240857]
          ])
        } else if (this.shPolygon.features[j].properties.name === '崇明区') {
          polygon.addRing([
            [121.778862, 31.310196],
            [121.785494, 31.311058],
            [121.791042, 31.308353],
            [121.796701, 31.30736],
            [121.798772, 31.310352],
            [121.795866, 31.329976],
            [121.796478, 31.33542],
            [121.796005, 31.345624],
            [121.793002, 31.355074],
            [121.792377, 31.363304],
            [121.790875, 31.367059],
            [121.787886, 31.37164],
            [121.780572, 31.380154],
            [121.774135, 31.386982],
            [121.76938, 31.390749],
            [121.760857, 31.395185],
            [121.753725, 31.400362],
            [121.742185, 31.407212],
            [121.737485, 31.408814],
            [121.729296, 31.410356],
            [121.723707, 31.412364],
            [121.708316, 31.419728],
            [121.697193, 31.423995],
            [121.688294, 31.425883],
            [121.673835, 31.427748],
            [121.621752, 31.444145],
            [121.606319, 31.449403],
            [121.599812, 31.450681],
            [121.585561, 31.454672],
            [121.58303, 31.456262],
            [121.575828, 31.463813],
            [121.572811, 31.469452],
            [121.567347, 31.4835],
            [121.562356, 31.486367],
            [121.549926, 31.489747],
            [121.521132, 31.493976],
            [121.516933, 31.494298],
            [121.513457, 31.493355],
            [121.509355, 31.489795],
            [121.509105, 31.485352],
            [121.510134, 31.482581],
            [121.516849, 31.477313],
            [121.529515, 31.471172],
            [121.537413, 31.466704],
            [121.54328, 31.462403],
            [121.549773, 31.457062],
            [121.558463, 31.448793],
            [121.572255, 31.436066],
            [121.590371, 31.427545],
            [121.601425, 31.421855],
            [121.641036, 31.401115],
            [121.686682, 31.376591],
            [121.727933, 31.354799],
            [121.740766, 31.346486],
            [121.744659, 31.343675],
            [121.751166, 31.337801],
            [121.76076, 31.320344],
            [121.76425, 31.315306],
            [121.770951, 31.31168],
            [121.778862, 31.310196]
          ]),
            polygon.addRing([
              [122.242018, 31.419082],
              [122.243562, 31.417839],
              [122.247149, 31.419333],
              [122.245369, 31.421318],
              [122.242018, 31.419082]
            ])
          polygon.addRing([
            [121.801775, 31.356976],
            [121.802693, 31.342789],
            [121.803152, 31.332106],
            [121.80375, 31.328445],
            [121.806642, 31.324173],
            [121.81319, 31.316228],
            [121.822617, 31.307372],
            [121.832043, 31.301711],
            [121.833601, 31.299653],
            [121.840566, 31.29544],
            [121.852885, 31.292364],
            [121.856681, 31.292818],
            [121.860782, 31.294949],
            [121.865968, 31.294937],
            [121.88959, 31.292028],
            [121.900755, 31.291167],
            [121.932261, 31.283147],
            [121.975779, 31.279998],
            [122.016447, 31.282285],
            [122.072005, 31.266829],
            [122.087285, 31.257538],
            [122.097769, 31.255658],
            [122.105207, 31.262136],
            [122.122684, 31.307205],
            [122.121975, 31.315438],
            [122.116678, 31.321229],
            [122.078012, 31.323527],
            [122.04107, 31.323814],
            [122.001556, 31.329246],
            [121.951726, 31.337274],
            [121.913074, 31.350445],
            [121.870376, 31.366007],
            [121.858516, 31.369379],
            [121.852885, 31.371376],
            [121.845586, 31.374582],
            [121.831752, 31.375526],
            [121.828401, 31.376447],
            [121.824744, 31.378588],
            [121.817445, 31.380585],
            [121.803458, 31.381219],
            [121.796756, 31.381075],
            [121.793864, 31.380477],
            [121.792808, 31.377571],
            [121.797674, 31.369642],
            [121.800566, 31.363997],
            [121.801775, 31.356976]
          ])
          polygon.addRing([
            [121.627049, 31.444993],
            [121.631512, 31.445101],
            [121.634001, 31.445937],
            [121.636295, 31.449881],
            [121.635044, 31.452988],
            [121.631609, 31.456823],
            [121.625172, 31.462212],
            [121.61366, 31.471339],
            [121.608571, 31.474446],
            [121.602134, 31.476835],
            [121.595293, 31.478292],
            [121.586896, 31.479535],
            [121.577149, 31.479343],
            [121.575814, 31.478197],
            [121.57612, 31.474768],
            [121.577886, 31.472486],
            [121.58627, 31.464076],
            [121.594153, 31.458568],
            [121.613855, 31.447885],
            [121.616872, 31.446643],
            [121.627049, 31.444993]
          ])
        }
        this.data1.map((item) => {
          const cname = item[0]
          const nowConfirm = item[1]
          const confirm = item[2]
          const dead = item[3]
          const heal = item[4]
          const newConfirm = item[5]
          if (this.shPolygon.features[j].properties.name.indexOf(cname) > -1) {
            const polygonAttr = {
              Name: cname,
              newConfirm: newConfirm,
              nowConfirm: nowConfirm,
              confirm: confirm,
              dead: dead,
              heal: heal
            }
            const popupTemplate = {
              title: cname,
              content: [
                {
                  // Pass in the fields to display
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'newConfirm',
                      label: '新增确诊'
                    },
                    {
                      fieldName: 'nowConfirm',
                      label: '现有确诊'
                    },
                    {
                      fieldName: 'confirm',
                      label: '累计确诊'
                    },
                    {
                      fieldName: 'dead',
                      label: '累计死亡'
                    },
                    {
                      fieldName: 'heal',
                      label: '累计治愈'
                    }
                  ]
                }
              ]
            }
            const onepolygonGraphic = new Graphic({
              //创建面图斑
              geometry: polygon,
              attributes: polygonAttr,
              popupTemplate: popupTemplate
            })
            //  this.$refs.mapdata.TdtMap.view.graphics.add(onepolygonGraphic)
            features.push(onepolygonGraphic)
          }
        })
        const textSymbol = {
          type: 'text', // autocasts as new TextSymbol()
          color: 'black',
          haloSize: 10,
          haloColor: 'white',
          text: this.shPolygon.features[j].properties.name
        }
        const pointgeo = {
          type: 'point',
          longitude: this.shPolygon.features[j].properties.centroid[0],
          latitude: this.shPolygon.features[j].properties.centroid[1]
        }
        const textGraphic = new Graphic({
          //创建面图斑
          geometry: pointgeo,
          symbol: textSymbol
        })

        window.textGraphic = textGraphic
        // window.view.graphics.add(textGraphic)
        let extent = new Extent({
          //获取范围
          xmin: 120.52,
          ymin: 30.5,
          xmax: 122.31,
          ymax: 31.99,
          spatialReference: this.view.spatialReference
        })
        // this.view.goTo({
        //   //移动地图视点
        //   target: extent // target:point
        //   //zoom:13
        // })

        // textGraohicsLayer.add(window.textGraphic)
        // getmap.add(textGraohicsLayer)
      }

      const fields = [
        {
          name: 'ObjectID',
          alias: 'ObjectID',
          type: 'oid' //   每个要素必须的字段，字段值必须唯一，当做是整数类型。。。
        },
        {
          name: 'Name',
          alias: 'Name',
          type: 'string' //字符串类型
        },
        {
          name: 'size', //可以用来渲染符号大小
          alias: 'size',
          type: 'integer' //整数类型
        }
      ] //除了上面的三种类型，还有 double、date。。。
      const res = Object.keys(features[0].attributes)
      res.map((item1) => {
        fields.push({
          name: item1,
          alias: item1,
          type: 'string'
        })
      })
      let Symbol1 = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: new Color('#F5F500'),
        style: 'solid',
        outline: {
          width: 2,
          color: [255, 255, 255, 0.5]
        }
      }
      let Symbol2 = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: new Color('#F5A300'),

        style: 'solid',
        outline: {
          width: 2,
          color: [255, 255, 255, 0.5]
        }
      }
      let Symbol3 = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: new Color('#F55200'),

        style: 'solid',
        outline: {
          width: 2,
          color: [255, 255, 255, 0.5]
        }
      }
      let Symbol4 = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: new Color('#FF0000'),

        style: 'solid',
        outline: {
          width: 2,
          color: [255, 255, 255, 0.5]
        }
      }
      const renderer = {
        type: 'class-breaks',
        field: 'confirm',
        classBreakInfos: [
          {
            minValue: 0,
            maxValue: 2000,
            symbol: Symbol1
          },
          {
            minValue: 2001,
            maxValue: 4000,
            symbol: Symbol2
          },
          {
            minValue: 4001,
            maxValue: 6000,
            symbol: Symbol3
          },
          {
            minValue: 6001,
            maxValue: 50000,
            symbol: Symbol4
          }
        ]
      }

      let featureLayer = new FeatureLayer({
        source: features,
        fields: fields,
        renderer: renderer
        // popupTemplate: popupTemplate
        // geometryType: 'polygon',
        // objectIdField: 'ObjectID'
      })
      let that = this
      window.view.on('click', function (evt) {
        window.view.hitTest(evt).then(function (response) {
          let result = response.results[0]
          const Name = result.graphic.attributes.Name
          let data = []

          features.map((item) => {
            if (item.attributes.Name === result.graphic.attributes.Name) {
              data.push(item.attributes)
            }
          })
          //  data.push (result.graphic.attributes)
          if (data[0].Name) {
            delete data[0].Name
            delete data[0].ObjectID
            if (document.getElementById('echart')) {
              //每次点击都判断是否存在echart容器div，如果存在，则删除
              let div = document.getElementById('echart')
              div.parentNode.removeChild(div)
            }
            let divChart = document.createElement('div') //创建容器div
            divChart.id = 'echart' //赋予id
            divChart.style = 'width:380px;height:240px;' //容器size大小
            document.body.appendChild(divChart) //添加到节点
            //根据div创建echart实例和配置
            let myChart = that.$echarts.init(document.getElementById('echart')) //根据id创建echart实例
            let option = {
              //配置，本例采用最简单的柱状图
              title: {
                text: Name + '区详细疫情数据'
              },
              tooltip: {},
              color: ['red'],
              legend: {
                data: Object.keys(data[0])
              },
              xAxis: {
                type: 'category',

                data: Object.keys(data[0]),
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  show: true,
                  // interval: 3,
                  rotate: 45, //倾斜度 -90 至 90 默认为0
                  margin: 2,

                  color: '#525A6F',
                  fontFamily: '楷体',
                  fontSize: 12
                },
                axisLine: {
                  show: true, //这里的show用于设置是否显示x轴那一条线 默认为true
                  lineStyle: {
                    //lineStyle里面写x轴那一条线的样式
                    color: '#6FC6F3',
                    width: 2 //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
                  }
                }
              },
              yAxis: {
                type: 'value'
              },
              grid: {
                top: '15%',
                // right: '20%',
                bottom: '15%',
                containLabel: true
              },
              series: [
                {
                  name: Object.keys(data[0]),
                  type: 'bar',
                  data: Object.values(data[0]),
                  label: {
                    textStyle: {
                      //数值样式
                      fontSize: '2rpx',
                      height: '20',
                      color: '#666'
                    },
                    padding: [3, 10, 10, 5],
                    normal: {
                      show: true,
                      position: 'top',
                      // formatter: '{c}cm'//c后面加单位{a}{b}:
                      formatter: function (params) {
                        let key = params.name + params.data
                        // let unit=echarList[key]===null?'':echarList[key]
                        return params.data
                      }
                    }
                  }
                }
              ]
            }

            myChart.setOption(option) //echart实例加载配置

            const popupTemplate = {
              content: divChart
            }
            featureLayer.popupTemplate = popupTemplate
          }
        })
      })

      const statesLabelClass = new LabelClass({
        labelExpressionInfo: { expression: '$feature.name' },
        symbol: {
          type: 'text', // autocasts as new TextSymbol()
          color: 'black',
          haloSize: 10,
          haloColor: 'white'
        }
      })
      featureLayer.source.get('items').map((item) => {
      })
      featureLayer.labelingInfo = [statesLabelClass]
      const getmap = this.$refs.mapdata.TdtMap.map
      getmap.add(featureLayer)
      let legend = new Legend({
        view: window.view,
        layerInfos: [
          {
            layer: featureLayer,
            title: 'Legend'
          }
        ]
      })

      // window.view.ui.add(legend, 'bottom-right')
      const legendExpand = new Expand({
        // view: this.view,
        // content: legend,
        view: this.view,
        mode: 'floating',
        content: legend,
        autoCollapse:true,
        expanded:true,
        collapseIconClass: 'esri-icon-overview-arrow-bottom-right',
        collapseTooltip: '隐藏图例',
        expandIconClass: 'esri-icon-media',
        expandTooltip: '显示图例'
      })
      window.view.ui.add(legendExpand, {
        position: 'bottom-right'
      }),
        //监听
        featureLayer.on('click', function (evt) {
          //获取图层属性信息
        }),
        this.$store.commit('setfeatureLayer',featureLayer)
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
