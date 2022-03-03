<template>
  <div>
    <div class="swap-popup" @click="isSwapOn = !isSwapOn">
      <div class="swap-btn"></div>
      <div class="swap-btn-cover"></div>
    </div>
    <div class="swap-content" v-if="isSwapOn">
      <!--切换行政区划地图按钮-->
      <div class="vec-collection">
        <Button type="primary" class="vec" @click="swapmap(0)"> </Button>
        <p class="swap-content-mask">电子底图</p>
      </div>
      <!--切换遥感影像地图按钮-->
      <div class="img-collection">
        <Button type="primary" class="img" @click="swapmap(1)"></Button>
        <p class="swap-content-mask">影像底图</p>
      </div>
      <!--切换地形地图按钮-->
      <div class="ter-collection">
        <Button type="primary" class="ter" @click="swapmap(2)"></Button>
        <p class="swap-content-mask">地形底图</p>
      </div>
      <p>
        <span class="word">注记</span>
        <i-switch
          v-model="isSwitchOn"
          @on-change="change"
          class="switch"
          size="small"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "changemap",
  inject: ["TdtMap"],
  data() {
    return {
      isSwapOn: false,
      isSwitchOn: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.map = this.TdtMap.map;
      this.view = this.TdtMap.view;
    });
  },
  methods: {
    swapmap(id) {
      this.map.basemap =
        window.BasemapGalleryVM.source.basemaps.get("items")[id];
    },
    change() {
      let zjlayer = this.map.basemap.baseLayers.get("items")[1];
      if (this.isSwitchOn == false) {
        zjlayer.visible = false;
      } else {
        zjlayer.visible = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.swap-popup {
  top: 88px;
  right: 23px;
  position: fixed;
  z-index: 2;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
}
/*切换底图按钮*/
.swap-btn,
.swap-btn-cover {
  width: 42px;
  height: 42px;
  border-radius: 2px;
}
.swap-btn {
  position: relative;
  display: block;
  background: url("../../assets/img/vec.png") no-repeat;
  background-size: 100%;
  margin: 4px auto;
}
.swap-btn-cover {
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
}
/*切换底图弹窗内容*/
.swap-content {
  position: fixed;
  right: 14px;
  top: 143px;
  z-index: 2;
  width: 70px;
  height: 226px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
/*切换底图弹窗内容--按钮*/
.vec-collection,
.img-collection,
.ter-collection {
  position: relative;
  width: 54px;
  height: 54px;
}
.vec-collection {
  top: 8px;
}
.img-collection {
  top: 16px;
}
.ter-collection {
  top: 24px;
}
.vec,
.img,
.ter {
  width: 54px;
  height: 54px;
  border-style: none;
  position: relative;
}
.vec {
  background: url("../../assets/img/vec.png") no-repeat;
  background-size: 100%;
}
.img {
  background: url("../../assets/img/img.png") no-repeat;
  background-size: 100%;
}
.ter {
  background: url("../../assets/img/ter.png") no-repeat;
  background-size: 100%;
}
.swap-content-mask {
  /*底图遮罩*/
  position: absolute;
  top: 27px;
  z-index: 3;
  height: 27px;
  width: 54px;
  background: rgba(0, 0, 0, 0.58);
  border-radius: 2px;
  /*底图标注*/
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 5px 0px 5px 0px;
}
/*切换底图弹窗内容--开关*/
.switch {
  top: 32px;
  position: relative;
}
.word {
  top: 32px;
  position: relative;
  font-size: 13px;
  line-height: 19px;
  color: rgba(82, 90, 111, 1);
}
</style>
