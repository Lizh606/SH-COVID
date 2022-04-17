<template>
  <div class="topic-make">
    <div class="header">
      <b class="title">专题制图</b>
      <Button class="close-btn" type="back">返回</Button>
    </div>
    <div class="oper-panel">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="100"
      >
        <FormItem label="图框模板" prop="maptemplete" class="black">
          <Select v-model="formValidate.maptemplete" placeholder="选择图框模板">
            <Option
              v-for="item in maptempletes"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </FormItem>

        <FormItem label="制图标题" prop="title" class="black">
          <Input v-model="formValidate.title" placeholder="制图标题" />
        </FormItem>
        <FormItem label="标题字体大小" class="black">
          <Select v-model="wordSize" placeholder="选择字体">
            <Option
              v-for="item in wordSizes"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="比例尺" prop="mapScale" class="black">
          <Select v-model="mapScaleValue" placeholder="选择打印比例尺">
            <Option
              v-for="item in mapScaleOption"
              :value="item.value"
              :key="item.value"
              @click.native="scaleSeclectClick(item)"
              >{{ item.label }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="时间" prop="curTime" class="black">
          <DatePicker
            v-model="formValidate.curTime"
            @on-change="changeHandler"
            type="month"
            style="width: 100%"
          ></DatePicker>
        </FormItem>
        <Divider></Divider>
        <FormItem label="地图整饰" class="black"></FormItem>
        <FormItem label="底图" class="grey">
          <i-switch v-model="showBase" />
        </FormItem>
        <FormItem label="置灰" class="grey">
          <i-switch v-model="greyMap" />
        </FormItem>
        <FormItem label="图例" class="grey">
          <i-switch v-model="showLegend" />
        </FormItem>
        <FormItem label="指北针" class="grey">
          <i-switch v-model="showNorth" />
        </FormItem>
        <FormItem label="比例尺" class="grey">
          <i-switch v-model="showScaleBar" />
        </FormItem>
        <FormItem class="confirm">
          <Button
            class="legend-btn confirm-btn"
            v-bind:disabled="disabled"
            :loading="disabled"
            type="primary"
            @click="filterLegend()"
            >图例整理</Button
          >
          <Button
            class="confirm-btn"
            v-bind:disabled="disabled"
            :loading="disabled"
            type="primary"
            @click="handleSubmit('formValidate')"
            >导出图片</Button
          >
        </FormItem>
      </Form>
    </div>
    <div class="preview-panel" ref="prePanel">
      <div class="map-con" ref="mapCon" :style="prevMapSize">
        <p :style="{ 'font-size': wordSize }" class="map-title">
          {{ formValidate.title }}
        </p>
           <tdt-map ref="mapdata" :style="mapStyle" class="tdtmap"></tdt-map>
        <div class="map-bottom-left">2000国家大地坐标系</div>
        <div class="map-bottom">
          <div class="bottom-title">{{ dept }}</div>
          <div class="bottom-time">{{ time }}</div>
        </div>

        <div class="north-wrapper" v-if="showNorth">
          <!-- <img src="@/assets/img/north.png" /> -->
        </div>
        <div
          v-if="showLegend"
          class="pre-map-legend"
          ref="prevLegendPanel"
          :style="preLegendStyle"
        >
          <p class="legend-title">图例</p>
          <ul v-if="renderType !== 'mult'">
            <li class="item" v-for="(item, index) in legendList" :key="index">
              <img :src="item.img" v-if="item.img" />
              <div
                v-if="item.color"
                class="render-item-color"
                :style="'background-color:' + item.color"
              ></div>
              <span class="legend-label">{{
                item.label || item.index || item.quota
              }}</span>
            </li>
          </ul>
          <div v-if="renderType == 'mult'" class="mult-legend">
            <div v-for="(item, index) in legendList" :key="index">
              <div class="render-item-index">{{ item.layerName }}</div>
              <div
                v-for="(render, index) in item.children"
                :key="index"
                :class="
                  item.type === 'circle' ? 'render-circle-item' : 'render-item'
                "
              >
                <!-- <div
                  :class="(item.type === 'circle')?'render-circle-item-color':'render-item-color'"
                  :style="'background-color:' + render.color"
                ></div> -->
                <!-- `data:image/png;base64,${imgInfo.color}` -->
                <img
                  :src="'data:image/png;base64,' + render.color"
                  v-if="render.color"
                />
                <span
                  :class="
                    item.type === 'circle'
                      ? 'render-circle-item-value'
                      : 'render-item-value'
                  "
                  >{{ render.name || render.index || render.quota }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- v-if="printEnable" printMapSize prevMapSize -->
    <!-- </div> -->
  </div>
</template>

<script>
import {
  getPrevMapSize,
  getTemplateInnerSize,
  getLegendScale,
  dataURItoBlob,
} from "./utils";
export default {
  name: "TopicMake",
  data() {
    return {
      formValidate: {
        maptemplete: "A4H",
        title: "上海市新冠疫情可视化专题图",
        basemap: "normal",
        mapScale: "",
        curTime: new Date(),
      },
      ruleValidate: {
        maptemplete: [
          {
            required: true,
            message: "请选择制图模板",
            trigger: "blur",
          },
        ],

        title: [
          {
            required: true,
            message: "制图标题不可为空",
            trigger: "blur",
          },
        ],

        mapScale: [
          {
            required: true,
            message: "选择输出比例尺",
            trigger: "blur",
          },
        ],

        curTime: [
          {
            required: true,
            message: "时间",
            trigger: "blur",
          },
        ],
      },
      // 打印尺寸列表
      maptempletes: [
        {
          value: "A4H",
          label: "A4横幅",
        },
        {
          value: "A4V",
          label: "A4竖幅",
        },
        {
          value: "A3H",
          label: "A3横幅",
        },
        {
          value: "A3V",
          label: "A3竖幅",
        },
        {
          value: "A2H",
          label: "A2横幅",
        },
        {
          value: "A2V",
          label: "A2竖幅",
        },
        {
          value: "A1H",
          label: "A1横幅",
        },
        {
          value: "A1V",
          label: "A1竖幅",
        },
      ],
      wordSizes: [
        {
          label: "1",
          value: "0.6rem",
        },
        {
          label: "2",
          value: "0.9rem",
        },
        {
          label: "3",
          value: "1.2rem",
        },
        {
          label: "4",
          value: "1.5rem",
        },
        {
          label: "5",
          value: "1.8rem",
        },
      ],
      wordSize: "1.5rem",
      mapScaleOption: [],
      mapScaleValue: "",

      fullMap: false,
      fullScreen: false,
      legend: false,
      zoom: false,
      basemapToggle: false,
      extent: {},
      mapStyle: {
        height: `calc(100% - 5rem)`,
        border: "2px solid #000",
      },
      disabled: false, // sumbit按钮是否激活
      wrapperWidth: 0, // 外层容器宽度
      wrapperHeight: 0, // 外层容器高度
      showScaleBar: true, // 是否显示比例尺
      showNorth: true, // 是否显示指北针
      showLegend: true, // 是否显示图例
      mapToImg: "", // 截取的地图base64编码
      printEnable: false, // 当前是否可以打印
      legendScale: 0.8,
      preLegendScale: 0.8,
      legendList: [],
      showBase: true,
      greyMap: false,
      operationLayers: [],
      newLegendInfo: [],
      curScale: "36978669",
      dept: "",
    };
  },
  computed: {
    // 动态计算预览窗口尺寸
    prevMapSize() {
      const paper = this.formValidate.maptemplete.substr(0, 2);
      const direction = this.formValidate.maptemplete.substr(2);
      const size = getPrevMapSize(
        paper,
        direction,
        this.wrapperWidth,
        this.wrapperHeight
      );

      const style = {
        width: `${size.width}px`,
        height: `${size.height}px`,
      };
      return style;
    },
    calScale() {
      const paper = this.formValidate.maptemplete.substr(0, 2);
      const direction = this.formValidate.maptemplete.substr(2);
      const size = getPrevMapSize(
        paper,
        direction,
        this.wrapperWidth,
        this.wrapperHeight
      );
      return size.scale;
    },
    printMapSize() {
      const paper = this.formValidate.maptemplete.substr(0, 2);
      const direction = this.formValidate.maptemplete.substr(2);
      const size = getTemplateInnerSize(paper, direction);
      const style = {
        width: `${size.width}px`,
        height: `${size.height}px`,
      };
      /* const style = {
                              width: `${size.width - 34}px`,
                              height: `${size.height - 24 - 3 * 19.2}px`
                            }; // 减的值为边距+标题高宽 */
      return style;
    },

    legendStyle() {
      /* return {
            transform: `scale(${this.legendScale * this.calScale}, ${this
              .legendScale * this.calScale})`
          }; */
      return {
        transform: `scale(${this.preLegendScale}, ${this.preLegendScale})`,
      };
    },
    preLegendStyle() {
      return {
        transform: `scale(${this.preLegendScale}, ${this.preLegendScale})`,
      };
    },
    titleStyle() {
      return {
        "font-size": `${this.calScale * 1.5}rem`,
        "line-height": `${this.calScale * 3}rem`,
        height: `${this.calScale * 3}rem`,
      };
    },
    time() {
      let year = new Date(this.formValidate.curTime).getFullYear();
      let month = new Date(this.formValidate.curTime).getMonth() + 1;
      return `${year}年${month}月`;
    },
  },
  mounted() {
    let esriUi = document.querySelector(".esri-ui");
    this.cloneEsriUi = esriUi.cloneNode(true);
    this.$refs.mapdata.appendChild(this.cloneEsriUi);
    document.querySelector(".esri-ui-corner-container").style.display = "none";
  },
};
</script>

<style lang="scss" scoped>
/deep/.tdtmap #map{
  height: 100%;
}
/deep/.esri-ui-corner-container {
  display: none ;
}
/deep/.esri-ui-inner-container{
  display: none ;
}
.header {
  //   @include scw(0.83rem, $color1d1d1d, 700);
  position: relative;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid rgba(220, 220, 220, 1);
  padding-left: 20px;
}
.title {
  position: relative;
  right: 350px;
}
.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  margin-right: 2rem;
}
.topic-make {
  width: 100%;
  height: 100%;
  z-index: 100;
}

.confirm-btn {
  /* @include btn-super(); */
  top: 75px;
  position: relative;
}

.legend-btn {
  margin-right: 2rem;
}

.oper-panel {
  height: 100%;
  position: relative;
  max-width: 480px;
  width: 25rem;
  padding: 15px;
  padding-right: 25px;

  .black /deep/ .ivu-form-item-label {
    /* color: $color1d1d1d !important; */
    font-size: 0.92rem;
  }

  .grey {
    margin-bottom: 0.5rem;

    & /deep/ .ivu-form-item-label {
      /* color: $color666666 !important; */
      font-size: 0.9rem;
    }

    & /deep/ .ivu-form-item-content {
      margin-left: calc(100% - 1.77rem) !important;
    }
  }

  .confirm {
    position: absolute;
    bottom: 1rem;
    right: 25px;
  }
}

.preview-panel {
  height: 100%;
  float: right;
  min-width: calc(100% - 480px);
  width: calc(100% - 25rem);
  /* background: #666666; */

  position: relative;
  padding: 10px;

  li * {
    vertical-align: middle;
  }
}

.legend-title {
  margin-bottom: 5px;
  /* @include scw(1rem, $color1d1d1d, 700); */
}

.map-con {
  position: absolute;
  top: -600px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  /* background: $colorffffff; */
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  padding: 15px;
  padding-top: 5px;
  z-index: 100;
  /* color: $color1d1d1d; */

  .map-title {
    height: 3rem;
    text-align: center;
    line-height: 1.5rem;
    /* @include scw(1.5rem, $color1d1d1d, 700); */
  }

  .map-bottom-left {
    margin-top: 0.5rem;
    float: left;
    font-size: 0.62rem;
    text-align: left;
  }

  .map-bottom {
    margin-top: 0.5rem;
    float: right;
    font-size: 0.62rem;
    text-align: right;
  }

  /* .bottom-title {
    margin-top: 0.5rem;
    float: right;
    font-size: 0.72rem;
    letter-spacing: 2px;
  } */

  .north-wrapper {
    position: absolute;
    top: 4rem;
    right: 5rem;
    scale: 0.5;
    transform: scale(0.6, 0.6);
  }
}

@mixin legend-panel {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  min-width: 150px;
  padding: 10px;
  bottom: 2.9rem;
  right: 0.9rem;
  transform-origin: bottom right;
}

.render-item-color {
  width: 1.05rem;
  height: 1.05rem;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}

.mult-legend {
  .render-item-index {
    position: relative;
    height: 1.05rem;
    line-height: 1.05rem;
    margin-bottom: 0.26rem;
    font-size: 0.74rem;
    padding-left: 0.26rem;
    color: #1d1d1d;
  }

  .render-item {
    display: flex;
    height: 1.15rem;
    line-height: 1.15rem;
    padding-left: 1.05rem;
  }

  .render-circle-item {
    display: flex;
    height: 1.316rem;
    padding-left: 0.9rem;
  }

  .render-circle-item-color {
    width: 1.05rem;
    height: 1.05rem;
    border-radius: 0.525rem;
  }
}

.print-temp {
  position: absolute;
  /* left: -2999px; */
  right: 0;
  z-index: -1000;
  padding: 15px;
  padding-top: 5px;
  /* color: $color1d1d1d; */
  border: 2px solid #000;

  .print-map {
    &-title {
      height: 3rem;
      text-align: center;
      line-height: 1.5rem;
      /* @include scw(1.5rem, $color1d1d1d, 700); */
    }

    &-bottom-title {
      margin-top: 0.25rem;
      float: right;
      font-size: 0.62rem;
    }

    &-map-bottom {
      margin-top: 0.5rem;
      float: right;
      font-size: 0.62rem;
      text-align: right;
    }

    &-map-bottom-left {
      margin-top: 0.5rem;
      float: left;
      font-size: 0.62rem;
      text-align: left;
    }

    &-cont {
      height: calc(100% - 150px);
      border: 2px solid #000;
    }

    &-north-wrapper {
      position: absolute;
      top: 4rem;
      right: 5rem;
      scale: 0.5;
      transform: scale(0.6, 0.6);
    }

    &-legend {
      /* @include legend-panel; */

      .item {
        margin: 3px;
      }

      /*  .legend-label {
          vertical-align: super;
        } */
    }
  }
}

.pre-map-legend {
  /* @include legend-panel; */

  .item {
    margin: 3px;
  }
}
</style>
