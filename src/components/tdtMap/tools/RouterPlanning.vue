<template>
  <!-- 导航窗口 -->
  <Modal v-model="modal1" width="1000" class="routemodal">
    <p
      slot="header"
      style="background-color: #00bec9; text-align: center; font-size: 20px"
    >
      <span style="color: #eee">路线规划</span>
    </p>
    <div class="left">
      <div class="sign-center" @keyup.enter="handleSubmit">
        <Form
          id="routeform"
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
        >
          <FormItem label="出发地" prop="origin">
            <i-input
              id="origin"
              type="text"
              v-model="formValidate.origin"
              placeholder="请输入出发地"
            ></i-input>
          </FormItem>
          <FormItem label="目的地" prop="destination">
            <i-input
              id="destination"
              type="text"
              v-model="formValidate.destination"
              placeholder="请输入目的地"
            ></i-input>
          </FormItem>
          <FormItem>
            <Button :loading="loading" class="form-buttom" @click="search()"
              >查询</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
  </Modal>
</template>

<script>
import Graphic from '@arcgis/core/Graphic'
import Polyline from '@arcgis/core/geometry/Polyline'
import {
  tdtAdministrative,
  publicTransportPlanning,
  getCoordinate
} from '@/api/tdt_web_api/tdt_api.js'
export default {
  data() {
    return {
      modal1: false,
      loading: false,
      formValidate: {
        origin: '玉兰香苑三期',
        destination: '外滩'
      },
      ruleValidate: {
        origin: [
          {
            required: true,
            message: '出发地不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ],
        destination: [
          {
            required: true,
            message: '目的地不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ]
      }
    }
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  watch: {
    modal: {
      // immediate:true,
      handler(val) {
        this.modal1 = val
      },
      deep: true // 深度监听父组件传过来对象变化
    }
  },
  methods: {
    async search() {
      window.view.graphics.removeAll()
      const origin = this.formValidate.origin
      const destination = this.formValidate.destination
      const origindata = {
        ds: { keyWord: origin },
        tk: '6156b0fb9f9e853e3f64234d82d9abf1'
      }
      const destinationata = {
        ds: { keyWord: destination },
        tk: '6156b0fb9f9e853e3f64234d82d9abf1'
      }
      const orginzuobiao = await getCoordinate(origindata)
      const destinationzuobiao = await getCoordinate(destinationata)
      const originloc =
        orginzuobiao.data.location.lon + ',' + orginzuobiao.data.location.lat
      const destinationloc =
        destinationzuobiao.data.location.lon +
        ',' +
        destinationzuobiao.data.location.lat
      this.getPoint(origin, originloc)
      this.getPoint(destination, destinationloc)

      //公交规划
      const getbus = {
        type: 'busline',
        postStr: {
          startposition: originloc,
          endposition: destinationloc,
          linetype: '1'
        },
        tk: '6156b0fb9f9e853e3f64234d82d9abf1'
      }
      const res1 = await publicTransportPlanning(getbus)
      if (res1.data.results) {
        const route = res1.data.results[0].lines
        let routerLine = []

        route.map((item) => {
          let pois = []
          let line = []
          let routerLine = []
          // pois.push(item.lineName)
          item.segments.map((item1) => {
            routerLine.push([item1.stationEnd.name, item1.segmentLine[0]])
            pois.push(item1.stationEnd.name)
          })
          routerLine.map((item2) => {
            let linepoint = item2[1].linePoint.split(';')
            let firstName = [item2[0]]

            linepoint.map((item1) => {
              if (item1 !== '') {
                let loc = eval('[' + item1 + ']')
                line.push(loc)
              }
            })
            let paths = line
            const popupTemplate = {
              title: `
              公交/地铁总览：${item.lineName}
具体路线：从${pois[0]}出发,途径${pois.slice(1, pois.length - 1).join(',')},最后到达目的地
              `
            }
            const linegraphics = new Graphic({
              geometry: new Polyline({
                paths: paths,
                spatialReference: window.view.spatialReference
                // popupTemplate: popupTemplate
              }),

              symbol: {
                type: 'simple-line', // autocasts as new SimpleFillSymbol
                color: [255, 116, 3],
                width: 2,
                cap: 'round',
                join: 'round'
              }
            })
            linegraphics.popupTemplate = popupTemplate
            window.view.graphics.add(linegraphics)
            window.view.goTo(
              {
                center: line[0],
                zoom: 11
              },
              2000
            )
          })
        })
        this.$emit('okHandler')
        this.modal1 = false
      } else {
        this.$Message.error('无法查询该目的地')
      }
    },
    getPoint(name, poi) {
      let firstpoint = {
        type: 'point',
        x: poi.split(',')[0], //当底图是投影坐标系时用x,地理坐标系用longitude
        y: poi.split(',')[1], //当底图是投影坐标系时用y,地理坐标系用latitude
        spatialReference: window.view.spatialReference //和底图相同的坐标系
      }
      let pointsymbol = {
        type: 'simple-marker',
        color: [255, 255, 255],
        size: 6,
        outline: {
          color: [255, 0, 0],
          width: 1.5 // points
        }
      }
      const firsttextSymbol = {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: '/目的地.png',
        text: '起点',
        width: '48px',
        height: '48px'
      }
      const popupTemplate = {
        title: name
      }
      let firstTextGraphics = new Graphic({
        geometry: firstpoint,
        symbol: firsttextSymbol,
        popupTemplate: popupTemplate
      })
      let pointGraphics = new Graphic({
        geometry: firstpoint,
        symbol: pointsymbol
      })
      window.view.graphics.add(pointGraphics)
      window.view.graphics.add(firstTextGraphics)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.ivu-modal-footer {
  display: none;
}
/deep/.ivu-modal-header {
  background-color: #00bec9;
}
.form-buttom {
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  width: 200px;
  background-color: #00bec9;
  color: #fff;
}
</style>
