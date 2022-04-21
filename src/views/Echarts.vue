<template>
  <div class="layout">
    <SingleEcharts
      v-if="updateDate.length > 0 && card1"
      :updateDate="updateDate"
      :xdata="xdata"
      :legend="legend"
      :title1="title1"
    />
    <DoubleEcharts
      v-if="updateDate.length > 0 && card2"
      :updateDate="updateDate"
      :xdata="xdata"
      :legend="legend"

      :title1="title1"
    />
    <!-- <Tree class="tree" :data="data1" expand-node></Tree> -->
    <ButtonGroup>
      <Button class="btn1" @click="openCard1()" 
        >新增<br />本土确诊趋势</Button
      >
      <Button class="btn1" @click="openCard2()">新增<br />无症状趋势</Button>
      <Button class="btn1" @click="openCard3()">新增<br />确诊趋势</Button>
      <Button class="btn1" @click="openCard4()">确诊/<br />治愈/死亡</Button>
    </ButtonGroup>
    <div
      @click="DataShow"
      class="help-icon"
      aria-label="数据说明"
      title="数据说明"
    >
      <IconSvg iconClass="bangzhuyushuoming" class="help">数据说明</IconSvg>
    </div>
    <Modal v-model="modal" width="1000">
      <p slot="header" style="color: #fff; text-align: center; font-size: 20px">
        <span>数据说明</span>
      </p>
      <div>
        <p style="font-size: 16px">
          1、数据来源：<br />来自国家卫健委、各省市区卫健委、各省市区政府、港澳台官方渠道公开数据；<br /><br />2、数据统计原则：<br />a)
          每日上午全国数据会优先使用国家卫健委公布的数据（此时各省市数据尚未及时更新，会出现全国数据大于各省份合计数的情况）；<br />b)
          当各省公布数据总和大于国家卫健委公布的数据时，则全国数据切换为各省合计数；<br />c
          全国数据含港澳台地区数据；<br /><br />3、数据更新时间：<br />实时更新全国、各省市区数据，因需要核实计算，与官方发布的时间相比，将有一定的时间延迟；<br /><br />4、“较昨日”的新增确诊、新增无症状等数据来源于卫健委发布的新增病例数，其含义是由（各省）卫健委公布的最新数据减去前一日对应的数据所得；由于各省卫健委公布时间及方式各不相同且存在核减情况，故而部分数据可能会有一定的时间延迟；<br /><br />5、国外数据说明：<br />a)
          数据来源：国外疫情数据来自权威机构的公开报道、世卫组织（WHO）、各国官方通报；<br />b)
          统计口径：因各国分不同时区，疫情数据日期统一采用北京时间的日期；新增数据与趋势图数据为昨日数据与前日数据相减的结果，每天更新一次；<br />c)
          更新时间：国外疫情数据因追踪、核实需要，与各国官方的发布时间相比较有一定的延迟。<br /><br />6、百度APP全力以赴提供权威、准确、及时的疫情数据，如有任何疑问，欢迎通过百度APP留言反馈。
        </p>
      </div>
      <div slot="footer">
        <Button @click="okHandler">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import singleEcharts from "./YQEcharts/singleEcharts.vue";
import doubleEcharts from "./YQEcharts/doubleEcharts.vue";
import { YQDatePathData } from "@/api/sys.js";
export default {
  name: "Echarts",
  components: {
    SingleEcharts: singleEcharts,
    DoubleEcharts: doubleEcharts,
  },
  data() {
    return {
      title1: "上海 新增本土确诊趋势",
      card1: false,
      card2: false,
      xdata: [],
      modal: false,
      updateDate: [],
      newconfirm: [],
      nowconfirm: [],
      asymptomatic: [], //无症状
      infos: {
        confirm: [],
        heal: [],
        dead: [],
      },
      nameinfo: {
        localName: "",
        wzzName: "",
        cName: "",
        confirmName: "",
        healName: "",
        deadName: "",
      },
      legend: ["新增本土"],
      YQdata:[]
    };
  },
  async mounted() {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
      const res = await YQDatePathData();
      this.YQdata =res.data
    this.getData();
    this.openCard1()
  },
  //自定义指令  v-trigger
  // directives: {
  //   trigger: {
  //     inserted(el) {
  //       el.click();
  //       el.focus();
  //     },
  //   },
  // },

  methods: {
    async getData() {
      const res = await YQDatePathData();
      res.data.trend[1].updateDate.map((item) => {
        this.updateDate.push(item);
        //返回的是[__ob__: Observer] 可视察数组 需要转为正常数组 JSON.parse(JSON.stringify()
        // console.log(this.division);
      });
      res.data.trend[2].list[0].data.map((item) => {
        this.infos.confirm.push(item);
      }),
        res.data.trend[2].list[1].data.map((item) => {
          this.infos.heal.push(item);
        }),
        res.data.trend[2].list[2].data.map((item) => {
          this.infos.dead.push(item);
        }),
        res.data.trend[2].list[3].data.map((item) => {
          this.newconfirm.push(item);
        }),
        res.data.trend[2].list[4].data.map((item) => {
          this.nowconfirm.push(item);
        }),
        res.data.trend[2].list[5].data.map((item) => {
          this.asymptomatic.push(item);
        }),
        (this.updateDate = JSON.parse(JSON.stringify(this.updateDate))),
        (this.newconfirm = JSON.parse(JSON.stringify(this.newconfirm))),
        (this.asymptomatic = JSON.parse(JSON.stringify(this.asymptomatic)));
      this.nowconfirm = JSON.parse(JSON.stringify(this.nowconfirm));
      // this.mycharts();
    },
    openCard1() {
      this.legend = [this.YQdata.trend[2].list[4].name],

      this.xdata = this.newconfirm;
      this.title1 = "上海 新增本土趋势";

      this.card2 = false;

      this.card1 = true;
    },
    openCard2() {
      this.legend = [this.YQdata.trend[2].list[5].name];
        this.xdata = this.asymptomatic;
      this.title1 = "上海 新增无症状趋势";
      this.card2 = false;
      this.card1 = true;
    },
    openCard3() {
      this.legend = [this.YQdata.trend[2].list[3].name];
      this.xdata = this.nowconfirm;
      this.title1 = "上海 新增确诊(包含本土)趋势";
      this.card1 = true;
      this.card2 = false;
    },
    openCard4() {
      this.nameinfo.confirmName = this.YQdata.trend[2].list[0].name;
      this.nameinfo.healName = this.YQdata.trend[2].list[1].name;
      this.nameinfo.deadName = this.YQdata.trend[2].list[2].name;
      this.legend = this.nameinfo;
      this.xdata = this.infos;
      this.title1 = "上海 累计确诊/治愈/死亡趋势";
      this.card1 = false;
      this.card2 = true;
    },
    //  openCard3(){
    //    this.card1 = true;
    //   this.xdata = this.asymptomatic
    // },
    // mycharts() {
    //   this.myCharts = this.$echarts.init(document.getElementById("echarts"));

    //   this.myCharts.setOption({
    //     title: {
    //       text: "上海市新冠疫情统计表",
    //       textStyle: {
    //         color: "#525A6F",
    //         fontFamily: "KaiTi",
    //         fontSize: 16,
    //         marginLeft: 20,
    //       },
    //       padding: [20, 0, 0, 20],
    //     },
    //     tooltip: {
    //       trigger: "axis",
    //       fontSize: 16,
    //     }, //鼠标放到上面出现数据
    //     color: ["red", "yellow", "blue", "green"],
    //     grid: {
    //       left: "20%",
    //       right: "20%",
    //       bottom: "5%",
    //       containLabel: true,
    //     },
    //     legend: {
    //       // x: {"left",
    //       data: ["新增本土","新增无症状"],
    //       padding: [20, 0, 0, 0],
    //       textStyle: {
    //         color: "#525A6F",
    //         fontFamily: "KaiTi",
    //         fontSize: 14,
    //       },
    //     },
    //     xAxis: {
    //       data: this.updateDate,
    //       type: "category", //类目轴，显示所有项目
    //       boundaryGap: true,//两边六百
    //            padding: [20, 0, 0, 0],

    //       axisTick: {
    //         alignWithLabel: true,
    //       },
    //       axisLabel: {
    //        show: true,

    //         interval: 5,
    //         rotate: 45, //倾斜度 -90 至 90 默认为0
    //         margin: 2,

    //         textStyle: {
    //           color: "#525A6F",
    //           fontFamily: "KaiTi",
    //           fontSize: 16,

    //         },
    //       },
    //       axisLine:{
    //        show:true,  //这里的show用于设置是否显示x轴那一条线 默认为true
    //        lineStyle:{ //lineStyle里面写x轴那一条线的样式
    //          color:'#6FC6F3',
    //          width:2,    //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
    //        }
    //    },
    //     },

    //     yAxis: [
    //     //   {
    //     //     type: "value",
    //     //     name: "累计确诊",
    //     //     min: 0,
    //     //     max: 5000,
    //     //     position: "right",
    //     //     axisLabel: {
    //     //       formatter: "{value} 人",
    //     //       textStyle: {
    //     //         color: "#525A6F",
    //     //         fontFamily: "KaiTi",
    //     //         fontSize: 14,
    //     //       },
    //     //     },
    //     //   },
    //     //   {
    //     //     type: "value",
    //     //     name: "现有确诊",
    //     //     min: 0,
    //     //     max: 700,
    //     //     position: "left",
    //     //     axisLabel: {
    //     //       formatter: "{value} 人",
    //     //       textStyle: {
    //     //         color: "#525A6F",
    //     //         fontFamily: "KaiTi",
    //     //         fontSize: 14,
    //     //       },
    //     //     },
    //     //   },
    //     {
    //       type:"value",
    //        axisLabel:{
    //          show:true,  //这里的show用于设置是否显示y轴下的字体 默认为true
    //          textStyle:{   //textStyle里面写y轴下的字体的样式
    //             color:'#333',
    //             fontSize:13
    //          }
    //       },
    //   //用于设置y轴的那一条线
    //       axisLine:{
    //         show:true,  //这里的show用于设置是否显示y轴那一条线 默认为true
    //         lineStyle:{ //lineStyle里面写y轴那一条线的样式
    //           color:'#6FC6F3',
    //           width:2,    //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
    //         }
    //       }
    //     }],

    //     series: [
    //       {
    //         name: "新增本土",
    //         type: "line", //图类型
    //         smooth: true,
    //         data: this.newconfirm,
    //         // yAxisIndex: 0,
    //       },
    //       {
    //         name: "新增无症状",
    //         type: "line", //图类型
    //         smooth: true,
    //         data: this.asymptomatic,
    //         // yAxisIndex: 1,
    //       },
    //       // {
    //       //   name: "累计死亡",
    //       //   type: "line", //图类型
    //       //   smooth: true,
    //       //   data: this.dead,
    //       // },
    //       // {
    //       //   name: "累计治愈",
    //       //   type: "line", //图类型
    //       //   smooth: true,
    //       //   data: this.heal,
    //       // },

    //       // {
    //       //   name: '价格',
    //       //   type: 'bar', //图类型
    //       //   data: [1200, 2200, 3200, 4200, 5200]
    //       // },
    //       // {
    //       //   name: '人气',
    //       //   type: 'bar', //图类型
    //       //   data: [1300, 2300, 3300, 4300, 5300]
    //       // }
    //     ],
    //   });
    // },
    DataShow() {
      this.modal = true;
    },
    okHandler() {
      this.modal = false;
    },
  },
};
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  // height: calc(100%-100px);
}

// .mychart {
//   border: #00bec9 2px solid;
//   border-radius: 4px;
//   // position: absolute;
//   width: 100%;
//   height: 100%;
// }
/deep/.ivu-btn-group {
  top: 25px;
  left: 300px;
}

/deep/.ivu-btn {
  width: 180px;
  height: 48px;
  // left: 300px;
}

/deep/.ivu-btn:focus {
  background-color: #00bec9;
  color: aliceblue;
}

/deep/.ivu-btn + .ivu-btn-group,
.ivu-btn-group .ivu-btn + .ivu-btn,
.ivu-btn-group + .ivu-btn,
.ivu-btn-group + .ivu-btn-group {
  margin-left: 5px;
}

// .btn1{
//    border: #eee 1px solid;
//   border-radius: 10px;
// }
.help-icon {
  width: 20px;
  position: absolute;
  top: 38px;
  left: 346px;
}

.help {
  width: 20px;
  height: 20px;
}

/deep/.ivu-modal-header {
  background-color: #00bec9;
}
</style>
