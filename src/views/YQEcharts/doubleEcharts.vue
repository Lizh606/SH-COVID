<template>
  <div style="height: calc(100% - 150px); display: flex">
    <div id="echarts" class="mychart" style="“height:100%;width:50%;”"></div>
    <div id="echarts2" class="mychart1" style="“height:100%;width:50%;”"></div>
  </div>
</template>

<script>
const colors = [
  ['rgba(240, 7, 100, 1)', 'rgba(0, 215, 229, 1)'],
  ['rgba(240, 7, 100, 1)', 'rgba(0, 215, 229, 1)'],
  ['rgba(240, 7, 100, 1)', 'rgba(0, 215, 229, 1)'],
  ['rgba(240, 7, 100, 1)', 'rgba(0, 215, 229, 1)'],
];
export default {
  name: 'Echarts',
  data() {
    return {
      confirm: null,
      heal: null,
      dead: null
    }
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
    SHqh: {
      type: Array,
      default: () => []
    },
    qhAdd: {
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
        // if (
        //   this.myCharts1 != null &&
        //   this.myCharts1 != '' &&
        //   this.myCharts1 != undefined
        // ) {
        //   this.myCharts1.dispose() //解决echarts dom已经加载的报错
        // }
        const source = [
          ['date', ...this.updateDate],
          [this.legend[0], ...[this.xdata.confirm][0]],
          [this.legend[1], ...[this.xdata.heal][0]],
          [this.legend[2], ...[this.xdata.dead][0]]
        ]
        this.mycharts(this.myCharts, this.myCharts1, source)
      },
      deep: true // 深度监听父组件传过来对象变化
    },
    qhAdd: {
      // immediate:true,
      handler(val) {
        // if (
        //   this.myCharts != null &&
        //   this.myCharts != '' &&
        //   this.myCharts != undefined
        // ) {
        //   this.myCharts.dispose() //解决echarts dom已经加载的报错
        // }
        if (
          this.myCharts1 != null &&
          this.myCharts1 != '' &&
          this.myCharts1 != undefined
        ) {
          this.myCharts1.dispose() //解决echarts dom已经加载的报错
        }
        const source = [
          ['date', ...this.updateDate],
          [this.legend[0], ...[this.xdata.confirm][0]],
          [this.legend[1], ...[this.xdata.heal][0]],
          [this.legend[2], ...[this.xdata.dead][0]]
        ]
        this.mycharts(this.myCharts, this.myCharts1, source)
      },
      deep: true // 深度监听父组件传过来对象变化
    },
  },
  mounted() {
    let myCharts
    let myCharts1
    if (myCharts != null && myCharts != '' && myCharts != undefined) {
      myCharts.dispose() //解决echarts dom已经加载的报错
    }
    if (myCharts1 != null && myCharts1 != '' && myCharts1 != undefined) {
      myCharts1.dispose() //解决echarts dom已经加载的报错
    }
    const source = [
      ['date', ...this.updateDate],
      [this.legend[0], ...[this.xdata.confirm][0]],
      [this.legend[1], ...[this.xdata.heal][0]],
      [this.legend[2], ...[this.xdata.dead][0]]
    ]
    this.mycharts(myCharts, myCharts1, source)
  },

  methods: {
    mycharts(myCharts, myCharts1, source) {
      console.log(source)
      ;(myCharts = this.$echarts.init(document.getElementById('echarts'))),
      myCharts.clear();
        myCharts.setOption({
          title: {
            text: this.title1,
            color: '#525A6F',
            fontFamily: '楷体',
            fontSize: 16,
            marginLeft: 20
            // padding: [10, 0, 0, 250]
          },
          
          legend: {
            // x: 'right',
            // data: this.legend,
            // padding: [35, 280, 0, 0],
            color: '#525A6F',
            fontFamily: '楷体',
            fontSize: 14
          },
          color: ['red', 'green', 'black'],

          tooltip: {
            trigger: 'axis',
            showContent: true
          },
          dataset: {
            source: source
          },
          xAxis: {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              show: true,
              // interval: 3,
              // rotate: 30, //倾斜度 -90 至 90 默认为0
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
            { gridIndex: 0 },
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
            grid: {
          top: '55%',
          // right: '20%',
          bottom: '5%',
          containLabel: true
        },
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },

            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              emphasis: {
                focus: 'self'
              },
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'date',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        })
      myCharts.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          myCharts.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              },
              itemStyle: {
                color: function (colors) {
                  var colorList = ['red', 'green', 'black']
                  return colorList[colors.dataIndex]
                }
              }
            }
          })
        }
      })
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
          op.dataset[0].source.map((item) => {
            handleVal.push(item[handleIndex+1])
          })
          console.log(handleVal);
        }
      })
      //饼状图
      myCharts1 = this.$echarts.init(document.getElementById('echarts2'))
      myCharts1.clear();

      myCharts1.setOption({
        title: {
          text: '上海各区今日新增情况',
          color: '#525A6F',
          fontFamily: '楷体',
          fontSize: 16,
          marginLeft: 20
          // padding: [10, 0, 0, 250]
        },
       tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        color: ['red', 'green', 'black'],
        grid: {
          top: '10%',
          // right: '20%',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          x: 'right',
          data: ['新增确诊'],
          // padding: [35, 280, 0, 0],
          color: '#525A6F',
          fontFamily: '楷体',
          fontSize: 14
        },
        yAxis: {
          data: this.SHqh,
            type: 'category',
            inverse: true, //倒叙
            axisLabel: {

              // color: '#02CFFCFF',
              // fontFamily: 'TencentSans',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                // color: '#02CFFCFF',
              },
            },
            // splitLine: {
            //   show: true,
            //   lineStyle: {
            //     type: 'dotted',
            //     color: 'rgba(71, 126, 171, 1)',
            //   },
            // }
        },

        xAxis: [
          {
           type: 'value',
          axisLabel: {
            show: true,
            // color: '#02CFFCFF',
            fontFamily: 'TencentSans',
          },
          axisLine: {
            show: true,
            lineStyle: {
              // color: '#02CFFCFF',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(71, 126, 171, 1)',
            },
          },
          }
        ],

        series: [
          {
            name: '新增确诊',

             type: 'bar',
            barWidth: 15,
            label: {
          textStyle: { //数值样式
            fontSize: '2rpx',
            height:'20',
            color: '#666'
          },
          padding: [3, 10, 10, 5],
          normal: {
            show: true,
            position: 'right',
            // formatter: '{c}cm'//c后面加单位{a}{b}:
            formatter: function (params) {
              let key=params.name+params.data
              // let unit=echarList[key]===null?'':echarList[key]
              return params.data 

            }
          },},
            // label: {
            //   position: ['98%', -20],
            //   show: true,
            //   color: '#fff',
            //   fontFamily: 'TencentSans',
            // },
            data: this.qhAdd,
            itemStyle: {
              color(params) {
                const { dataIndex } = params;
                let color = {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: colors[dataIndex] ? colors[dataIndex][0] : 'red',
                    },
                    {
                      offset: 1,
                      color: colors[dataIndex] ? colors[dataIndex][1] : 'red',
                    },
                  ],
                };
                return color;
              },
            },
            // yAxisIndex: 0,
          },
        ]
      })

      myCharts1.on('click', function (params) {
        // console.log(params)
      }),
        myCharts1.getZr().off('click')
      myCharts1.getZr().on('click', function (params) {
        console.log(params)

        let point = [params.offsetX, params.offsetY]

        if (myCharts1.containPixel('grid', point)) {
          let pointInGrid = myCharts1.convertFromPixel(
            { seriesIndex: 0 },
            point
          )[0]
          let handleIndex = Number(pointInGrid)
          let op = myCharts1.getOption()
          let handleVal = []
          op.series.map((item) => {
            let yVal = item.data[handleIndex]
            handleVal.push(yVal)
          })
          let date = op.xAxis[0].data[handleIndex]
          handleVal.push(date)
          console.log(handleVal)
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
  position: relative;

  // position: absolute;
  // width: 100%;
  height: 100%;
}
.mychart1 {
  border: #eee 2px solid;
  border-radius: 4px;
  flex: 1;
  position: relative;

  // position: absolute;
  // width: 100%;
  height: 100%;
}
</style>
