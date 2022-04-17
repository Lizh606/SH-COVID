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
        <!-- <font id="zt-font"> 专题渲染 </font> -->
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
          width: 208,
          tree: true,
          font: 12,
          className: "p-header",
        },
        {
          title: "现有确诊(人)",
          align: "center",
          width: 170,
          key: "nowConfirm",
          sortable: true,
          className: "header",
        },
        {
          title: "累计确诊(人)",
          width: 170,
          align: "center",
          key: "confirm",
          className: "header",
          sortable: true,
        },
        {
          title: "累计死亡(人)",
          width: 170,
          align: "center",
          key: "dead",
          className: "header",
          sortable: true,
        },
        {
          title: "累计治愈(人)",
          width: 160,
          key: "heal",
          className: "header",
          align: "center",

          sortable: true,
        },
        {
          title: "操作",
          slot: "action",
          width: 140,
          className: "header",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                    font: {
                      size: 18,
                    },
                    color: "#00bec9",
                  },
                  on: {
                    click: () => {
                      this.handleThematicMap(params.index);
                    },
                  },
                },
                "专题渲染"
              ),
            ]);
          },
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

<style lang="scss" scoped>
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
/deep/.ivu-table td.p-header {
  // background-color: #00bec9;
  color: #10aeb5;
  font-size: 16px;
}
/deep/.ivu-table th.header  {
  background-color: #00bec9;
  color: #fff;
  font-size: 16px;
}
/deep/.ivu-table th.p-header  {
  background-color: #00bec9;
  color: #fff;
  font-size: 16px;
}
// /deep/ .ivu-table .province-name {
//   // background-color: #00bec9;
//   color: #00bec9;
// }
</style>
