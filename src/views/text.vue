<template>
  <div class="timeaxis">
    <div v-for="item in list" :key="item.index">
      <div class="box">
        <div class="item">
          <!-- <div class="left">{{ item.warnname }}</div> -->
          <div class="center">{{ item }}</div>
        </div>
        <div class="circular"></div>
        <div class="item2">
          <!-- <div class="bottom">{{ item.standard }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { YQDatePathData } from "@/api/sys.js";

export default {
  data() {
    return {
      //数据
      list: []
    };
  },
  async mounted() {
    const res = await YQDatePathData();
    console.log(res)
    this.list = res.data.trend[1].updateDate
  },
};
</script>
<style scoped lang="less">
.timeaxis {
  width: 1000px;
  height: 100%;
  margin: 100px;
}
.box {
  float: left;
  width: 30px;
}
.circular {
  border: 2px solid #67c23a;
  width: 1px;
  height: 10px;
  border-radius: 10px;
  background: white;
  margin: auto;
  margin-bottom: -4px;
  position: relative;
  top: -8px;
  left: 85px;
}
.item {
  border-bottom: 1px solid #409eff;
  position: relative;
  .left {
    position: absolute;
    left: 55px;
    top: -25px;
  }
  .center {
    position: absolute;
    left: 165px;
    top: -26px;
  }
}
.item2 {
  position: relative;

  .bottom {
    position: absolute;
    left: 75px;
    top: 0px;
  }
}
</style>
