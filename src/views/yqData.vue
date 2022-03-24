<template>
  <Table
    ref="table"
    border
    :loading="loading"
    :columns="columns1"
    :height="tableHeight"
    :data="data1"
    row-key="name"
    id="ta"
  >
    <template slot="action">
      <Button
        type="primary"
        size="small"
        style="margin-right: 5px"
        id="btn-country"
        @click="handleThematicMap"
      >
        <!-- 专题渲染 -->
        <font id="zt-font"> 专题渲染 </font>
      </Button>
    </template>
  </Table>
</template>

<script>
import { YQPathData } from "@/api/sys.js";
export default {
  name: "yqData",
  data() {
    return {
      columns1: [
        {
          title: "行政区划",
          key: "name",
          width: 198,
          tree: true,
        },
        {
          title: "现有确诊",
          width: 170,
          key: "nowConfirm",
          sortable: true,
        },
        {
          title: "累计确诊",
          width: 170,
          key: "confirm",
          sortable: true,
        },
        {
          title: "累计死亡",
          width: 170,
          key: "dead",
          sortable: true,
        },
        {
          title: "累计治愈",
          width: 150,
          key: "heal",
          sortable: true,
        },
        {
          title: "操作",
          slot: "action",
          width: 140,
          align: "center",
        },
      ],
      data1: [],
      loading: false,
      tableHeight: 600,
    };
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  methods: {
    async getYQData() {
      this.loading = true;
      let resdata = await YQPathData();
      this.loading = false;
      this.data1 = resdata.data;
    },
    handleThematicMap() {
      const thematicLayerInfo = {
        base: "中国城市累计确诊",
        levelOne: "累计确诊: 0 ~ 5000人",
        levelTwo: "累计确诊: 5000 ~ 10000人",
        levelThree: "累计确诊: 10000 ~ 50000人",
        levelFour: "累计确诊: 50000 ~ 1000000人",
      };
      let groupCollection = {
        levelOne: [],
        levelTwo: [],
        levelThree: [],
        levelFour: [],
        thematicLayerInfo: thematicLayerInfo,
      };
      for (let i = 0; i < this.data1[0].children.length; i++) {
        if (this.data1[0].children[i].children) {
          for (let j = 0; j < this.data1[0].children[i].children.length; j++) {
            let provinceName = this.data1[0].children[i].children[j].name;
            let confirm = this.data1[0].children[i].children[j].confirm;
            let nowConfirm = this.data1[0].children[i].children[j].nowConfirm;
            let dead = this.data1[0].children[i].children[j].dead;
            let heal = this.data1[0].children[i].children[j].heal;

            if (confirm <= 20) {
              if (confirm <= 10) {
                groupCollection.levelOne.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal,
                ]);
              } else {
                groupCollection.levelTwo.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal,
                ]);
              }
            } else {
              if (confirm <= 30) {
                groupCollection.levelThree.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal,
                ]);
              } else {
                groupCollection.levelFour.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal,
                ]);
              }
            }
          }
        }
      }
      // 返回地图界面
      this.$router.push({
        name: "Popup",
        params: {
          id: 2,
          collection: groupCollection,
          keyId: 1,
        },
      });
    },
  },
  mounted() {
    // 设置表格高度
    // this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop
    this.getYQData();
    console.log(this.data1);
  },
};
</script>

<style scoped>
#ta {
  /* overflow: scroll; */
  margin-left: 140px;
  margin-top: 50px;
  margin-right: 47px;
  width: 1014px;
  max-height: 600px;
}
#ta .ivu-table-column-kYfPrO {
  width: 1rem;
}
</style>
