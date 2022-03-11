<template>
  <Table
    ref="table"
    :height="tableHeight"
    :columns="columns1"
    stripe
    :data="data1"
    row-key="name"
    id="ta"
  >
    <template slot-scope="{ row }" slot="action">
      <Button
        type="primary"
        size="small"
        style="margin-right: 5px"
        v-show="row.id == 'b'"
        id="btn-country"
      >
        <!-- 专题渲染 -->
        <font id="zt-font"> 专题渲染 </font>
      </Button>
      <Button
        type="primary"
        size="small"
        style="margin-right: 5px"
        v-show="row.id == 'a'"
        id="btn-province"
      >
        <font id="zt-font"> 专题渲染 </font>
      </Button>
    </template>
  </Table>
</template>

<script>
import {typhoonPathData} from '@/api/sys.js'
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
          width: 170,
          key: "heal",
          sortable: true,
        },
        {
          title: "",
          slot: "action",
          width: 160,
          align: "center",
        },
      ],
      data1: [],
      tableHeight: 700,
    };
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  methods: {
    async getYQData() {
      let data = await typhoonPathData();
      this.data1 = data.data

    }
  },
  mounted() {
    // 设置表格高度
    this.tableHeight =
      window.innerHeight - this.$refs.table.$el.offsetTop;
      this.getYQData()
      console.log(this.data1);

  },
};
</script>

<style scoped>
#ta {
  overflow: scroll;
  border: none;
  margin-left: 140px;
  margin-top: 50px;
  margin-right: 47px;
  width: 1038px;
  max-height: 600px;
}
#ta .ivu-table-column-kYfPrO {
  width: 1rem;
}

</style>
