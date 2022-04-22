<template>
  <div id="echarts" class="mychart" style="“height:100%;width:100%;”"></div>
</template>

<script>
import { YQDatePathData } from "@/api/sys.js";
export default {
  name: "Echarts",
  data() {
    return {
      myCharts: "",
    };
  },
  props: {
    updateDate: {
      type: Array,
      default: function () {
        return [];
      },
    },
    xdata: {
      type: Array,
      default: function () {
        return [];
      },
    },
     legend: {
      type: Array,
      default: function () {
        return [];
      },
    },
    title1: {
      type: String,
      default: "",
    },
  },
  mounted() {
    if (
      this.myCharts != null &&
      this.myCharts != "" &&
      this.myCharts != undefined
    ) {
      this.myCharts.dispose(); //解决echarts dom已经加载的报错
    }

    this.mycharts(this.myCharts);
  },
  watch: {
    xdata: {
      // immediate: true, // 这句重要
      handler(val) {
        if (
          this.myCharts != null &&
          this.myCharts != "" &&
          this.myCharts != undefined
        ) {
          this.myCharts.dispose(); //解决echarts dom已经加载的报错
        }
        this.xdata = val;
        this.mycharts(this.myCharts);
      },
    },
  },
  methods: {
    mycharts() {
      this.myCharts = this.$echarts.init(document.getElementById("echarts"));

      this.myCharts.setOption({
        title: {
          text: this.title1,
          textStyle: {
            color: "#525A6F",
            fontFamily: "KaiTi",
            fontSize: 16,
            marginLeft: 20,
          },
          padding: [10, 0, 0, 250],
        },
        tooltip: {
          trigger: "axis",
          fontSize: 16,
        }, //鼠标放到上面出现数据
        color: ["red", "yellow", "blue", "green"],
        grid: {
          top: "10%",
          left: "20%",
          right: "20%",
          // bottom: "20%",
          containLabel: true,
        },
        legend: {
          x: "right",
          data:[this.legend[0]],
          padding: [35, 280, 0, 0],
          textStyle: {
            color: "#525A6F",
            fontFamily: "KaiTi",
            fontSize: 14,
          },
        },
        xAxis: {
          data: this.updateDate,
          type: "category", //类目轴，显示所有项目
          boundaryGap: true, //两边六百
          padding: [20, 0, 0, 0],

          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            show: true,

            interval: 5,
            rotate: 45, //倾斜度 -90 至 90 默认为0
            margin: 2,

            textStyle: {
              color: "#525A6F",
              fontFamily: "KaiTi",
              fontSize: 16,
            },
          },
          axisLine: {
            show: true, //这里的show用于设置是否显示x轴那一条线 默认为true
            lineStyle: {
              //lineStyle里面写x轴那一条线的样式
              color: "#6FC6F3",
              width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            },
          },
        },

        yAxis: [
          {
            type: "value",
            name: "单位:例",
            position: "left",
            axisLabel: {
              show: true, //这里的show用于设置是否显示y轴下的字体 默认为true
              textStyle: {
                color: "#525A6F",
                fontFamily: "KaiTi",
                fontSize: 14,
              },
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
                color: "#6FC6F3",
                width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
              },
            },
          },
        ],

        series: [
          {
            name: this.legend[0],
            type: "line", //图类型
            smooth: true,
            data: this.xdata,
            // yAxisIndex: 0,
          },
          //   {
          //     name: "新增无症状",
          //     type: "line", //图类型
          //     smooth: true,
          //     data: this.asymptomatic,
          //     // yAxisIndex: 1,
          //   },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mychart {
  border: #eee 2px solid;
  border-radius: 4px;
  // position: absolute;
  width: 100%;
  height: calc(100% - 100px);
}
</style>
