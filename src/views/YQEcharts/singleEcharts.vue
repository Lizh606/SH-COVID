<template>
  <div id="echarts" class="mychart" style="“height:100%;width:100%;”"></div>
</template>

<script>
export default {
  name: 'Echarts',
  data() {
    return {}
  },
  props: {
    updateDate: {
      type: Array,
      default: function () {
        return []
      }
    },
    xdata: {
      type: Object,
      default: () => {}
    },
    legend: {
      type: Array,
      default: () => []
    },
    title1: {
      type: String,
      default: ''
    }
  },
  watch: {
    xdata: {
      // immediate:true,
      handler(val) {
        if (
          this.myCharts != null &&
          this.myCharts != '' &&
          this.myCharts != undefined
        ) {
          this.myCharts.dispose() //解决echarts dom已经加载的报错
        }
        this.xdata = val
        this.mycharts(this.myCharts)
      },
      deep: true // 深度监听父组件传过来对象变化
    }
  },
  mounted() {
    let myCharts
    if (myCharts != null && myCharts != '' && myCharts != undefined) {
      myCharts.dispose() //解决echarts dom已经加载的报错
    }

    this.mycharts(myCharts)
  },

  methods: {
    mycharts(myCharts) {
      myCharts = this.$echarts.init(document.getElementById('echarts'))

      myCharts.setOption({
        title: {
          text: this.title1,
            color: '#525A6F',
            fontFamily: '楷体',
            fontSize: 16,
            marginLeft: 20,
          padding: [10, 0, 0, 250]
        },
        tooltip: {
          trigger: 'axis',
          fontSize: 16
        }, //鼠标放到上面出现数据
        color: ['red', 'orange', 'black'],
        grid: {
          top: '10%',
          left: '20%',
          right: '20%',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          x: 'right',
          data: this.legend,
          padding: [35, 280, 0, 0],
              color: '#525A6F',
              fontFamily: '楷体',
              fontSize: 14
        },
        xAxis: {
          data: this.updateDate,
          type: 'category', //类目轴，显示所有项目
          boundaryGap: true, //两边六百
          padding: [20, 0, 0, 0],

          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            show: true,

            interval: 5,
            rotate: 45, //倾斜度 -90 至 90 默认为0
            margin: 2,

              color: '#525A6F',
              fontFamily: '楷体',
              fontSize: 16
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

        yAxis: [
          {
            type: 'value',
            name: '单位:例',
            position: 'left',
            axisLabel: {
              show: true, //这里的show用于设置是否显示y轴下的字体 默认为true
                color: '#525A6F',
                fontFamily: '楷体',
                fontSize: 14
            },
            // textStyle: {
            //   //textStyle里面写y轴下的字体的样式
            //   color: "#333",
            //   fontSize: 13,
            // },

            //用于设置y轴的那一条线
            axisLine: {
              show: true, //这里的show用于设置是否显示y轴那一条线 默认为true
              lineStyle: {
                //lineStyle里面写y轴那一条线的样式
                color: '#6FC6F3',
                width: 2 //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
              }
            }
          }
        ],

        series: [
          {
            name: this.legend[0],
            type: 'bar', //图类型
            smooth: true,
            data: this.xdata.wzz_add
            // yAxisIndex: 0,
          },
          {
            name: this.legend[1],
            type: 'line', //图类型
            smooth: true,
            data: this.xdata.wzz
            // yAxisIndex: 1,
          }
        ]
      }),
        myCharts.on('click', function (params) {
          // console.log(params)
        }),
        myCharts.getZr().off('click')
      myCharts.getZr().on('click', function (params) {

        let point = [params.offsetX, params.offsetY]

        if (myCharts.containPixel('grid', point)) {
          let pointInGrid = myCharts.convertFromPixel(
            { seriesIndex: 0 },
            point
          )[0]
          let handleIndex = Number(pointInGrid)
          let op = myCharts.getOption()
          let handleVal = []
          op.series.map((item) => {
            let yVal = item.data[handleIndex]
            handleVal.push(yVal)
          })
          let date = op.xAxis[0].data[handleIndex]
          handleVal.push(date)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mychart {
  border: #eee 2px solid;
  border-radius: 4px;
  // position: absolute;
  width: 100%;
  height: calc(100% - 150px);
}
</style>
