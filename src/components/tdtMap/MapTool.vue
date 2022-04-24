/* eslint-disable no-control-regex */
<template>
  <div>
    <!-- 切换底图弹窗内容 -->
    <ButtonGroup class="toolbar-container" id="toolbar">
      <Dropdown class="btns-common-style">
        <a href="javascript:void(0)" style="color: #515a6e" @click="topicmake">
          <IconSvg iconClass="zhuantitu"></IconSvg>
          <span> 专题制图</span>
        </a>
      </Dropdown>
      <Dropdown class="btns-common-style">
        <a href="javascript:void(0)" style="color: #515a6e" @click="swipemap">
          <IconSvg iconClass="ditujuanlian"></IconSvg>
          <span> 卷帘分析</span>
        </a>
      </Dropdown>
      <Dropdown class="btns-common-style">
        <!-- <Button @click="query">
          <Icon custom="iconfont icon-gongjuxiang" />
          <span>属性查询</span>
        </Button> -->
        <a href="javascript:void(0)" style="color: #515a6e" @click="query">
          <IconSvg iconClass="tishishuoming"></IconSvg>
          <span> 属性查询</span>
        </a>
      </Dropdown>
      <Dropdown class="btns-common-style">
        <!-- <Button>
          <Icon custom="iconfont icon-gongjuxiang" />
          <span> 工具箱</span>
        </Button> -->
        <a href="javascript:void(0)" style="color: #515a6e">
          <Icon custom="iconfont icon-gongjuxiang" />
          <span> 工具箱</span>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem
            ><div class="btn-dropdown-style" @click="measureDistance()">
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
              <IconSvg iconClass="qingkong"></IconSvg>
              <span class="btn-item">一键清除</span>
            </div>
          </DropdownItem>
          <DropdownItem
            ><div class="btn-dropdown-style" @click="locate()">
              <IconSvg iconClass="ditu3"></IconSvg>
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
      id="export"
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
    <p id="scale" class="coordinate-scale">
      <Poptip v-model="pop">
        <!-- 坐标定位 -->

        <span @click="locateCoordinate()">
          <IconSvg iconClass="sousuo" class="export-button-icon"></IconSvg>
        </span>

        <div slot="title"><b>坐标定位</b></div>
        <div slot="content">
          经度:
          <Input
            v-model="longitude"
            placeholder="请输入经度"
            style="width: 200px"
          /><br />
          <slot></slot>
          纬度:
          <Input
            v-model="latitude"
            placeholder="请输入纬度"
            style="width: 200px"
            class="pop_input"
          /><br />
          <Button class="pop_btn" @click="Coordinate">搜索</Button>
        </div>
      </Poptip>

      <span id="mouse-position" class="mouse-position"
        >经度:{{ lon }} &nbsp; 纬度:{{ lat }}</span
      >
      <span id="scale" class="scale"> 比例尺 1:{{ curScale }} </span>
    </p>
    <!-- 导出底图 -->
    <div ref="exportDiv" class="map-export-div-default"></div>
    <!-- 搜索框 -->
    <Search />
  </div>
</template>

<script>
import * as locator from '@arcgis/core/rest/locator'
import Draw from '@arcgis/core/views/draw/Draw'
import Polygon from '@arcgis/core/geometry/Polygon'
import Graphic from '@arcgis/core/Graphic'
import Polyline from '@arcgis/core/geometry/Polyline'
import Search from '@arcgis/core/widgets/Search'
import Home from '@arcgis/core/widgets/Home'
import Fullscreen from '@arcgis/core/widgets/Fullscreen'
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine'
import Swipe from '@arcgis/core/widgets/Swipe'
import Legend from '@arcgis/core/widgets/Legend'
import LegendViewModel from '@arcgis/core/widgets/Legend/LegendViewModel'
import Expand from '@arcgis/core/widgets/Expand'
import * as watchUtils from '@arcgis/core/core/watchUtils'

import createWmtsLayer from './layers/wmtsLayer'

import search from './tools/Search.vue'
import screentake from './tools/Screentake.vue'
import changemap from './tools/ChangeMap.vue'

import html2canvas from 'html2canvas'

export default {
  name: 'MapTools',
  components: { ChangeMap: changemap, Screentake: screentake ,Search :search },
  inject: ['TdtMap'],
  data() {
    return {
      loc: '',
      curScale: '36978669',
      lon: '121.60',
      lat: '31.18',
      pop: false,
      //坐标定位值
      longitude: 121.477331,
      latitude: 31.2379,
    }
  },
  created() {},

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.map = this.TdtMap.map
        this.view = this.TdtMap.view
        //经纬度
        let that = this
        this.view.on('pointer-move', function (event) {
          let mapPoistion = that.view.toMap({
            x: event.x,
            y: event.y
          })

          let lon = mapPoistion.x
          let lat = mapPoistion.y
          that.lon = lon.toFixed(2)
          that.lat = lat.toFixed(2)
        })
        //比例尺
        watchUtils.whenTrue(this.view, 'stationary', () => {
          if (this.view.extent) {
            this.curScale = this.view.viewpoint.scale.toFixed(0)
            this.$store.commit('set_scale', this.curScale)
          }
        })
        const scale = document.getElementById('scale')
        this.view.ui.add(scale, {
          position: 'top-left'
        })
        //toolbar
        const toolbar = document.getElementById('toolbar')
        this.view.ui.add(toolbar)
        //导出地图
        const exportbtn = document.getElementById('export')
        this.view.ui.add(exportbtn, {
          position: 'bottom-right'
        })
       
        //图例
        const legendvm = new LegendViewModel({
          view: this.view
        })
        const legend = new Legend({
          view: this.view,
          layerInfos: {
            title: '中国城市累计确诊',
            levelOne: '累计确诊: 0 ~ 5000人',
            levelTwo: '累计确诊: 5000 ~ 10000人',
            levelThree: '累计确诊: 10000 ~ 50000人',
            levelFour: '累计确诊: 50000 ~ 1000000人'
          }
        })
        legend.style = {
          type: 'card',
          layout: 'auto'
        }
        const legendExpand = new Expand({
          // view: this.view,
          // content: legend,
          view: this.view,
          mode: 'floating',
          content: legend,
          collapseIconClass: 'esri-icon-overview-arrow-bottom-right',
          collapseTooltip: '隐藏图例',
          expandIconClass: 'esri-icon-media',
          expandTooltip: '显示图例'
        })
        this.view.ui.add(legendExpand, {
          position: 'bottom-right'
        })

        // 搜索
        // const searchWidgets = new Search({
        //   view: this.view
        // })
        // this.view.ui.add(searchWidgets)
        const homeWidget = new Home({
          view: this.view
        })

        this.view.ui.add(homeWidget)

        const fullscreen = new Fullscreen({
          view: this.view
        })
        this.view.ui.add(fullscreen)
      }, 100)
    })
    //解决html2canvas截图空白问题
    HTMLCanvasElement.prototype.getContext = (function (origFn) {
      return function (type, attributes) {
        if (type === 'webgl') {
          attributes = Object.assign({}, attributes, {
            preserveDrawingBuffer: true
          })
        }
        return origFn.call(this, type, attributes)
      }
    })(HTMLCanvasElement.prototype.getContext)
  },

  

  methods: {
    measureDistance() {
      const draw = new Draw({
        view: this.view
      })
      let action = draw.create('polyline') //画线实例
      this.view.focus()
      let that = this
      action.on(
        [
          'vertex-add',
          'vertex-remove',
          'cursor-update',
          'redo',
          'undo',
          'draw-complete'
        ],

        function (evt) {
          that.createLine(evt.vertices)
        }
      )
    },
    measureArea() {
      const draw = new Draw({
        view: this.view
      })
      let action = draw.create('polygon') //画线实例
      this.view.focus()
      let that = this
      action.on(
        [
          'vertex-add',
          'vertex-remove',
          'cursor-update',
          'redo',
          'undo',
          'draw-complete'
        ],

        that.createPolygon
      )
    },
    createLine(vertices) {
      this.view.graphics.removeAll()
      let pointsymbol = {
        type: 'simple-marker',
        color: [255, 255, 255],
        size: 6,
        outline: {
          color: [255, 0, 0],
          width: 1.5 // points
        }
      }

      let linegraphics = new Graphic({
        geometry: new Polyline({
          paths: vertices,
          spatialReference: this.view.spatialReference
        }),

        symbol: {
          type: 'simple-line', // autocasts as new SimpleFillSymbol
          color: [255, 116, 3],
          width: 2,
          cap: 'round',
          join: 'round'
        }
      })

      this.view.graphics.add(linegraphics)

      let firsttextSymbol = {
        type: 'text',
        color: 'white',
        haloColor: 'black',
        haloSize: '2px',
        text: '起点',
        xoffset: '10px',
        yoffset: '10px',
        font: {
          size: 12,
          family: 'KaiTi',
          weight: 'bold'
        }
      }

      let firstpoint = {
        type: 'point',
        x: vertices[0][0], //当底图是投影坐标系时用x,地理坐标系用longitude
        y: vertices[0][1], //当底图是投影坐标系时用y,地理坐标系用latitude
        spatialReference: this.view.spatialReference //和底图相同的坐标系
      }
      let firstTextGraphics = new Graphic({
        geometry: firstpoint,
        symbol: firsttextSymbol
      })
      let firstGraphics = new Graphic({
        geometry: firstpoint,
        symbol: pointsymbol
      })
      this.view.graphics.add(firstTextGraphics)
      this.view.graphics.add(firstGraphics)

      //
      let path = []
      let arr1 = []
      arr1.push(vertices[0][0])
      arr1.push(vertices[0][1])
      path.push(arr1)
      for (let i = 1; i < vertices.length; i++) {
        let point = {
          type: 'point',
          x: vertices[i][0],
          y: vertices[i][1], //当底图是投影坐标系时用y,地理坐标系用latitude
          spatialReference: this.view.spatialReference //和底图相同的坐标系
        }
        let mouseGraphics = new Graphic({
          geometry: point,
          symbol: pointsymbol
        })
        let arr = []
        arr.push(vertices[i][0])
        arr.push(vertices[i][1])

        path.push(arr)

        let line = new Polyline({
          hasZ: false,
          hasM: true,
          paths: path,
          spatialReference: this.view.spatialReference
        })

        let dislen
        let unit
        if (this.view.scale > 5000) {
          dislen = geometryEngine.geodesicLength(line, 'kilometers')
          unit = '千米'
        } else {
          dislen = geometryEngine.geodesicLength(line, 'meters')
          unit = '米'
        }

        let textSymbol = {
          type: 'text',
          color: 'white',
          haloColor: 'black',
          haloSize: '2px',
          text: Math.abs(Math.round(dislen * 100) / 100) + unit,
          xoffset: '50px',
          yoffset: '-5px',
          font: {
            size: 12,
            // family: "sans-serif",
            weight: 'bold'
          }
        }

        let textGraphics = new Graphic({
          geometry: point,
          symbol: textSymbol
        })

        let Graphics = new Graphic({
          geometry: point,
          symbol: pointsymbol
        })

        this.view.graphics.add(textGraphics)
        this.view.graphics.add(Graphics)
        this.view.graphics.add(mouseGraphics)
      }
    },
    createPolygon(event) {
      const vertices = event.vertices

      const symbol = {
        type: 'simple-marker',
        color: [255, 255, 255],
        size: 6,
        outline: {
          color: [255, 0, 0],
          width: 1.5 // points
        }
      }

      const fillSymbol = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: [3, 255, 240, 0.1],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: [255, 116, 3],
          width: 2
        }
      }

      const polygon = new Polygon({
        rings: vertices,
        spatialReference: this.view.spatialReference
      })

      this.view.graphics.removeAll()
      const polygonGraphics = new Graphic({
        geometry: polygon,
        symbol: fillSymbol
      })

      this.view.graphics.add(polygonGraphics)

      const center = polygon.centroid

      let area = 0
      let unit
      if (this.view.scale > 5000) {
        area = geometryEngine.geodesicArea(
          polygonGraphics.geometry,
          'square-kilometers'
        )
        unit = '平方千米'
      } else {
        area = geometryEngine.geodesicArea(
          polygonGraphics.geometry,
          'square-meters'
        )
        unit = '平方米'
      }

      for (let i = 0; i < vertices.length; i++) {
        const point = {
          type: 'point',
          x: vertices[i][0],
          y: vertices[i][1],
          spatialReference: this.view.spatialReference
        }

        const pointGraphics = new Graphic({
          geometry: point,
          symbol: symbol
        })
        this.view.graphics.add(pointGraphics)
      }
      const pointcenter = {
        type: 'point',
        x: center.x,
        y: center.y,
        spatialReference: this.view.spatialReference
      }

      const textSymbol = {
        type: 'text',
        color: 'white',
        haloColor: 'black',
        haloSize: '2px',
        text: Math.abs(Math.round(area * 100) / 100) + unit,
        font: {
          size: 12,
          // family: "sans-serif",
          weight: 'bold'
        }
      }
      const textGraphics = new Graphic({
        geometry: pointcenter,
        symbol: textSymbol
      })

      this.view.graphics.add(textGraphics)
    },
    clear() {
      this.view.graphics.removeAll()
      this.map.basemap.baseLayers.items[1].visible = true
    },
    locate() {
      let view = this.view
      view.popup.autoOpenEnabled = false
      const loc = view.on('click', (event) => {
        const lat = Math.round(event.mapPoint.latitude * 1000) / 1000
        const lon = Math.round(event.mapPoint.longitude * 1000) / 1000
        view.popup.open({
          title: '坐标:[' + lon + ',' + lat + ']',
          location: event.mapPoint,
          symbol: {
            font: {
              family: 'KaiTi'
            }
          }
        })
        const params = {
          location: event.mapPoint
        }
        const locatorUrl =
          ' https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'

        locator
          .locationToAddress(locatorUrl, params)
          .then((response) => {
            view.popup.content = response.address
          })
          .catch(() => {
            view.popup.content = '未找到位置'
          })
        watchUtils.whenTrue(view.popup, 'visible', function () {
          watchUtils.whenFalseOnce(view.popup, 'visible', function () {
            view.popup = {
              // collapseEnabled: false, // 移除title点击折叠功能
              // dockOptions: {
              //   buttonEnabled: false, // 隐藏固定标签页
              // },
              actions: [] // 清空事件按钮 （缩放至、...）
            }
          })
        })
      })
      return loc
    },
    exportbtn() {
      this.$Modal.confirm({
        title: '提示',
        content: '<p>是否导出地图？</p>',
        onOk: () => {
          this.exportMap()
        },
        onCancel: () => {}
      })
    },
    async exportMap() {
      // this.$nextTick(() => {
      //   html2canvas(document.getElementById("map"), {
      //     async: false, // 同步执行
      //     allowTaint: true, // 是否允许跨域图片污染画布
      //     imageTimeout: 0, // 禁用加载图像的超时时间
      //     taintTest: false, // 污染检查
      //     useCORS: true, // 用CORS服务从某服务中加载图片
      //   }).then(function (canvas) {
      //     let dataURL = canvas.toDataURL("image/png");
      //     let a = document.createElement("a");
      //     document.body.appendChild(a);
      //     a.href = dataURL;
      //     a.download = "ExportedMap";
      //     a.click();
      //   });
      // });
      this.$Spin.show({
        render: (h) => {
          return h('div', [
            h('Icon', {
              class: 'map-spin-icon-load',
              props: {
                type: 'ios-loading',
                size: 38
              }
            }),
            h(
              'div',
              {
                class: 'map-load-text'
              },
              '正在保存地图图片...'
            )
          ])
        }
      })
      this.$refs.exportDiv.classList.remove('map-export-div-default')
      this.$refs.exportDiv.classList.add('map-export-div')

      let esriUi = document.querySelector('.esri-ui')
      this.cloneEsriUi = esriUi.cloneNode(true)
      this.$refs.exportDiv.appendChild(this.cloneEsriUi)
      document.querySelector('.esri-ui-corner-container').style.display = 'none'
      // const canvas = document.getElement("canvas");
      const resCanvas = await this.view.takeScreenshot(false)
      let dataURL = resCanvas.dataUrl
      let blob = this.dataURItoBlob(dataURL)

      let aLink = document.createElement('a')
      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('click', true, true) // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
      aLink.download = 'map.png'
      aLink.href = URL.createObjectURL(blob)

      aLink.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
      ) // 兼容火狐
      this.$refs.exportDiv.classList.remove('map-export-div')
      this.$refs.exportDiv.classList.add('map-export-div-default')
      document.querySelector('.esri-ui-corner-container').style.display = 'flex'
      if (this.cloneEsriUi) {
        this.$refs.exportDiv.removeChild(this.cloneEsriUi)
        this.cloneEsriUi = null
      }
      this.$Spin.hide()
    },
    dataURItoBlob(dataURI) {
      let byteString = atob(dataURI.split(',')[1])
      let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      let ab = new ArrayBuffer(byteString.length)
      let dw = new DataView(ab)
      for (let i = 0; i < byteString.length; i++) {
        dw.setUint8(i, byteString.charCodeAt(i))
      }
      return new Blob([ab], { type: mimeString })
    },
    query() {
      let that = this
      that.view.on('click', function (evt) {
        that.view.hitTest(evt).then(function (response) {
          let result = response.results[0]
          if (result && result.graphic) {
            if (result.graphic.symbol.type === 'simple-fill') {
              let graphic = result.graphic
              graphic.symbol = {
                type: 'simple-fill', // autocasts as new SimpleMarkerSymbol()
                // color: [226, 119, 40],
                outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: [255, 255, 255],
                  width: 1
                }
              }
              // graphic.popupTemplate = {
              //   title: graphic.attributes.Name,
              //   content: [
              //     {
              //       // Pass in the fields to display
              //       type: "fields",
              //       fieldInfos: [
              //         {
              //           fieldName: "Name",
              //           label: "Name",
              //         },
              //         {
              //           fieldName: "Addres",
              //           label: "Addres",
              //         },
              //         {
              //           fieldName: "Phone",
              //           label: "Phone",
              //         },
              //       ],
              //     },
              //   ],
              // };
              // that.view.graphics.removeAll(); //清除上一次点击目标
              that.view.graphics.add(graphic) //添加新的点击目标
            } else {
              let graphic = result.graphic

              //自定义高亮
              //这里的几何图形是面状，配置graphic的symbol为fillSymbol
              graphic.symbol = {
                type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40],
                outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: [255, 255, 255],
                  width: 2
                }
              }
              graphic.popupTemplate = {
                title: graphic.attributes.Name,
                content: [
                  {
                    // Pass in the fields to display
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'Name',
                        label: 'Name'
                      },
                      {
                        fieldName: 'Addres',
                        label: 'Addres'
                      },
                      {
                        fieldName: 'Phone',
                        label: 'Phone'
                      }
                    ]
                  }
                ]
              }
              // that.view.graphics.removeAll(); //清除上一次点击目标
              that.view.graphics.add(graphic) //添加新的点击目标
            }
          }
        })
      })
    },
    topicmake() {
      this.$router.push('/TopicMake')
    },
    swipemap() {
      //卷帘、
      this.view.ui.remove('swipe')
      let imgtdtUrl =
        'http://{subDomain}.tianditu.gov.cn/DataServer?T=img_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1'
      const imgtiledLayer = createWmtsLayer(imgtdtUrl)
      let tdtjzUrl =
        'http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=6156b0fb9f9e853e3f64234d82d9abf1'
      const tiledjzLayer = createWmtsLayer(tdtjzUrl)
      this.map.add(tiledjzLayer)
      this.map.add(imgtiledLayer)

      const swipe = new Swipe({
        leadingLayers: this.map.basemap.baseLayers,
        trailingLayers: [tiledjzLayer, imgtiledLayer],
        // direction:"vertical",
        position: 50,
        view: this.view
      })
      this.view.ui.add(swipe)
      // this.view.ui.remove(swipe);
    },
    locateCoordinate() {},
    Coordinate() {
      if (this.longitude !== '' && this.latitude !== '') {
        this.longitude = parseFloat(this.longitude)
        this.latitude = parseFloat(this.latitude)
        let center = [this.longitude, this.latitude]
        //  const ptsymbol = new PictureMarkerSymbol(
        //       require("@/assets/img/定位.png"),
        //       200,
        //       200,
        //     );
        const ptsymbol = {
          type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
          url: '/定位.png',
          width: '64px',
          height: '64px'
        }
        let point = {
          type: 'point',
          longitude: this.longitude, //当底图是投影坐标系时用x,地理坐标系用longitude
          latitude: this.latitude, //当底图是投影坐标系时用y,地理坐标系用latitude
          spatialReference: this.view.spatialReference //和底图相同的坐标系
        }
        let graphic = new Graphic({
          geometry: point, // Add the geometry created in step 4
          symbol: ptsymbol // Add the symbol created in step 5
          //attributes: lineAtt // Add the attributes created in step 6
        })
        this.view.goTo(
          {
            center: center,
            zoom: 14
          },
          2000
        )
        this.view.graphics.add(graphic)
        this.pop = false
      } else {
        this.$Message.error('请输入经纬度')
      }
    },
    
  }
}
</script>
<style lang="less" scoped>
.title {
  color: #000;
}
.toolbar-container {
  position: absolute;
  top: 0.9rem;
  right: 4.8rem;
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

.btn-item {
  margin-left: 0.5rem;
}
&/deep/.ivu-dropdown-item {
  white-space: nowrap;
}
&/deep/.ivu-select-dropdown {
  margin: 5px 0;
}
// 导出地图html2canvas
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
  content: '';
  color: inherit;
  display: block;
  margin: 0 auto;
  position: relative;
}
//坐标和比例尺
.coordinate-scale {
  position: fixed;
  bottom: 30.5px;
  right: 65px;
  z-index: 2;
  width: 320px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  text-align: center;
  padding: 6px 0px 7px 7px;
  font-size: 13px;
  color: rgba(128, 134, 149, 1);
  line-height: 19px;
  display: flex;
}
.mouse-position {
  width: 160px;
  float: left;
}
.scale {
  width: 130px;
  float: right;
}
.map-spin-icon-load {
  animation: ani-map-spin 1s linear infinite;
}
.map-load-text {
  padding-top: 0.526rem;
  font-size: 0.74rem;
}
//esri ui

.pop_btn,
.pop_input {
  margin-top: 3px;
}
.pop_btn {
  float: right;
}


</style>
