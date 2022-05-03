<template>
  <!-- 搜索栏 -->
  <div id="search">
    <Poptip trigger="focus" placement="bottom" v-if="func1" v-model="pop">
      <Input
        v-model="searchValue"
        placeholder="查询地址或地点"
        style="width: auto"
      >
        <Icon type="md-paper-plane" slot="prefix" @click="changeFunc()" />

        <Icon type="ios-search" slot="suffix" @click="getPois()" />
      </Input>
      <div
        slot="content"
        v-if="pop1"
        @click="locateToCurrentLocation"
        style="white-space: normal"
      >
        <IconSvg iconClass="dingwei-" slot="prefix"></IconSvg>
        {{ searchName }}
      </div>

      <div slot="content" v-if="pop2" style="white-space: normal">
        <div
          class="search_list"
          v-for="(item, index) in pois"
          :key="index"
          @click="locateToLocation(item)"
        >
          <IconSvg iconClass="dingwei-" slot="prefix"></IconSvg>
          {{ item.name }}
        </div>
      </div>
    </Poptip>
    <Poptip trigger="focus" placement="bottom" v-if="func2" v-model="pop">
      <Input
        v-model="searchValue"
        placeholder="输入查询范围"
        style="width: auto"
      >
        <Icon type="md-arrow-round-back" slot="prefix" @click="changeFunc()" />
        <Icon type="ios-search" slot="suffix" @click="getPois()" />
      </Input>
      <div
        slot="content"
        v-if="pop1"
        @click="locateToCurrentLocation"
        style="white-space: normal"
      >
        <IconSvg iconClass="dingwei-" slot="prefix"></IconSvg>
        {{ searchName }}
      </div>

      <div slot="content" v-if="pop2" style="white-space: normal">
        <div
          class="search_list"
          v-for="(item, index) in pois"
          :key="index"
          @click="locateToLocation(item)"
        >
          <IconSvg iconClass="dingwei-" slot="prefix"></IconSvg>
          {{ item.name }}
        </div>
      </div>
    </Poptip>
  </div>
  
</template>

<script>
import Graphic from '@arcgis/core/Graphic'
import { getSearch, getCoordinate } from '@/api/tdt_web_api/tdt_api.js'
export default {
  name: 'Search',
  inject: ['TdtMap'],
  data() {
    return {
      searchValue: '',
      lon: '',
      lat: '',
      pois: [],
      pop: false,
      pop1: true,
      pop2: false,
      cureentinfos: [],
      func1:true,
      func2:false
    }
  },
  computed: {
    searchName() {
      if (this.searchValue === '') {
        return '定位到当前位置'
      } else {
        if (this.pois.length > 0) {
          const list = this.pois.map((item) => {
            return item
          })
          return list
        } else {
          return '暂无搜索结果'
        }
      }
    }
  },
  watch: {
    searchValue: {
      // immediate: true, // 这句重要
      handler(val) {
        if (val === '') {
          this.pop = true
          this.pop1 = true
          this.pop2 = false
        } else {
          this.pop = false
          this.pop1 = false
          this.pop2 = true
        }

        //   this.searchName = val
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.map = this.TdtMap.map
        this.view = this.TdtMap.view
        console.log(this.map)
        //搜索栏
        const search = document.getElementById('search')
        this.view.ui.add(search)
      }, 60)
    })
  },
  methods: {
    changeFunc(){ 
        if(this.func1 === true){
          this.func2 = true,
          this.func1 = false
        } else {
          this.func2 = false,
          this.func1 = true
        }
    },
    locate(item) {
      this.view.graphics.removeAll()
      console.log(item)
      let center = [this.lng, this.lat]
      const ptsymbol = {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: '/定位.png',
        width: '64px',
        height: '64px'
      }
      let point = {
        type: 'point',
        longitude: this.lng, //当底图是投影坐标系时用x,地理坐标系用longitude
        latitude: this.lat, //当底图是投影坐标系时用y,地理坐标系用latitude
        spatialReference: this.view.spatialReference //和底图相同的坐标系
      }

      const polygonAttr = {
        Name: item.name,
        address: item.address,
        ename: item.ename,
        lonlat: item.lonlat
      }
      const popupTemplate = {
        title: item.name,
        content: [
          {
            // Pass in the fields to display
            type: 'fields',
            fieldInfos: [
              {
                fieldName: 'address',
                label: '详细地址'
              },

              {
                fieldName: 'ename',
                label: '英文名'
              },
              {
                fieldName: 'lonlat',
                label: '经纬度'
              }
            ]
          }
        ]
      }
      if (item.phone !== '') {
        const info = {
          fieldName: 'phone',
          label: '联系方式'
        }
        polygonAttr['phone'] = item.phone
        popupTemplate.content[0].fieldInfos.push(info)
      }
      let graphic = new Graphic({
        geometry: point, // Add the geometry created in step 4
        symbol: ptsymbol, // Add the symbol created in step 5
        attributes: polygonAttr,
        popupTemplate: popupTemplate
      })
      this.view.graphics.add(graphic)

      this.view.goTo(
        {
          center: center,
          zoom: 16
        },
        2000
      )
    },
    async locateToCurrentLocation() {
      //定位到当前位置

      if (navigator.geolocation) {
        // regular get location
        navigator.geolocation.watchPosition(
          (position) => {
            console.log(position)
            // 纬度
            this.lat = position.coords.latitude
            // 经度
            this.lng = position.coords.longitude
            // performance
            this.view.graphics.removeAll()
            let center = [this.lng, this.lat]
            //   //坐标获取地名
            //   const data1 = {
            //     postStr: { lon: this.lng, lat: this.lat, ver: 1 },
            //     type: 'geocode',
            //     tk: '6156b0fb9f9e853e3f64234d82d9abf1'
            //   }
            //  this.getData(data1);
            //     console.log(this.cureentinfos.length >0)

            const ptsymbol = {
              type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
              url: '/定位.png',
              width: '64px',
              height: '64px'
            }

            let point = {
              type: 'point',
              longitude: this.lng, //当底图是投影坐标系时用x,地理坐标系用longitude
              latitude: this.lat, //当底图是投影坐标系时用y,地理坐标系用latitude
              spatialReference: this.view.spatialReference //和底图相同的坐标系
            }

            const polygonAttr = {
              location: center
            }
            const popupTemplate = {
              title: '当前位置',
              content: [
                {
                  // Pass in the fields to display
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'location',
                      label: '经纬度'
                    }
                  ]
                }
              ]
            }
            let graphic = new Graphic({
              geometry: point, // Add the geometry created in step 4
              symbol: ptsymbol, // Add the symbol created in step 5
              attributes: polygonAttr,
              popupTemplate: popupTemplate
            })
            this.view.graphics.add(graphic)

            this.view.goTo(
              {
                center: center,
                zoom: 16
              },
              2000
            )
          },
          (err) => {
            this.$Message.error('无法获取当前位置')
          }
        )
      } else {
        this.$Message.error('无法获取当前位置')
      }
    },
    async getData(data1) {
      const res3 = await getCoordinate(data1)
      this.cureentinfos = res3.data
      console.log(this.cureentinfos)
    },
    locateToLocation(item) {
      const res = item.lonlat.split(/\s+/)
      console.log(res)
      this.lng = parseFloat(res[0])
      this.lat = parseFloat(res[1])

      this.locate(item)
    },
    async getPois() {
      console.log(this.searchValue)
      //地名获取坐标
      const data = {
        postStr: {
          keyWord: this.searchValue,
          level: 12,
          mapBound: '120.878948,31.882906,121.97232,30.690742999999998',
          queryType: 1,
          start: 0,
          count: 10
        },
        type: 'query',
        tk: '6156b0fb9f9e853e3f64234d82d9abf1'
      }
      const res = await getSearch(data)
      console.log(res)
      this.pois = []
      for (let i = 0; i < res.data.pois.length; i++) {
        this.pois.push(res.data.pois[i])
      }
      console.log(this.pois)
      this.pop = true
      this.pop2 = true
      return res.data.pois
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ivu-input-suffix {
  left: auto;
  right: 0;
  box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
}
/deep/.ivu-input-with-suffix {
  padding-right: 100px;
}
#search {
  width: 200pxx;
  top: 20px;
  left: 35px;
}
.search_list {
  border-bottom: 1px solid rgba(220, 220, 220, 1);
}
</style>
