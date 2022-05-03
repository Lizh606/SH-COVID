<template>
  <!-- <div></div> -->
  <div style="background: #eee; padding: 20px height:100%">
    <Card :bordered="false" class="card">
      <p slot="title">
        <b class="title" style="color: #00bec9">全国新冠疫情数据总览</b>
        <span>数据统计截止至 {{ time }} </span>
        <img
          src="https://n.sinaimg.cn/finance/cece9e13/20200321/0320_intro_icon02.png?a=1"
          class="img"
          alt="数据说明"
          @click="showModal"
        />
      </p>

      <Row>
        <Col span="3" offset="0.9">
          <Card style="background-color: #fffaf7" class="cnCard">
            <b class="cntitle" style="color: #7c7c7c"
              >较上日<span style="color: #e57631"
                >+{{ chinaAdd.localConfirmH5 }}</span
              ></b
            ><br />

            <b style="color: #e57631" class="cndata animated bounce">{{
              localConfirm
            }}</b
            ><br />
            <b class="cntitle">本土现有确诊</b>
          </Card>
        </Col>
        <Col span="3" offset="1">
          <Card style="background-color: #fff8f8" class="cnCard">
            <b class="cntitle" style="color: #7c7c7c"
              >较上日<span style="color: #ff3535"
                >+{{ chinaAdd.nowConfirm }}</span
              ></b
            ><br />

            <b style="color: #ff3535" class="cndata animated bounce">{{
              totalnowConfirm
            }}</b
            ><br />
            <b class="cntitle">现有确诊</b>
          </Card>
        </Col>
        <Col span="3" offset="1">
          <Card style="background-color: #fff4f4" class="cnCard">
            <b class="cntitle" style="color: #7c7c7c"
              >较上日<span style="color: #b10000"
                >+{{ chinaAdd.confirm }}</span
              ></b
            ><br />

            <b style="color: #b10000" class="cndata animated bounce">{{
              totalconfirm
            }}</b
            ><br />
            <b class="cntitle">累计确诊</b>
          </Card>
        </Col>
        <Col span="3" offset="1">
          <Card style="background-color: #fef7ff" class="cnCard">
            <b class="cntitle" style="color: #7c7c7c"
              >较上日<span style="color: #ae3ac6"
                >+{{ chinaAdd.noInfect }}</span
              ></b
            ><br />

            <b style="color: #ae3ac6" class="cndata animated bounce">{{
              wzz
            }}</b
            ><br />
            <b class="cntitle">无症状感染者</b>
          </Card>
        </Col>
        <Col span="3" offset="1">
          <Card style="background-color: #e9f7ec" class="cnCard">
            <b class="cntitle" style="color: #7c7c7c"
              >较上日<span style="color: #13b593">+{{ chinaAdd.heal }}</span></b
            ><br />

            <b style="color: #13b593" class="cndata animated bounce">{{
              curetotal
            }}</b
            ><br />
            <b class="cntitle">累计治愈</b>
          </Card>
        </Col>
        <Col span="3" offset="1">
          <Card style="background-color: #f3f6f8" class="cnCard">
            <b class="cntitle" style="color: #7c7c7c"
              >较上日<span style="color: #666666">+{{ chinaAdd.dead }}</span></b
            ><br />

            <b style="color: #666666" class="cndata animated bounce">{{
              deathtotal
            }}</b
            ><br />
            <b class="cntitle">累计死亡</b>
          </Card>
        </Col>
      </Row>
      <Card :bordered="false" class="table" dis-hover>
        <p slot="title">
          <b class="title" style="color: #00bec9">近期31省区市本土病例</b>
          <Button @click="exportData()" class="tab_btn">导出表单</Button>
        </p>

        <Table
          ref="table"
          border
          stripe
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
      </Card>
    </Card>
    <smModal :modal="modal" @ok="okHandler"></smModal>
  </div>
</template>

<script>
import axios from 'axios'
import smModal from '@/components/Modals/smDataModal.vue'
import { txGet } from '@/api/yq_api/tx_api.js'

export default {
  name: 'yqData',
  components: {
    smModal: smModal
  },
  data() {
    return {
      columns1: [
        {
          title: '行政区划',
          key: 'name',
          width: 211.2,
          tree: true,
          resizable: true,
          font: 12,
          className: 'p-header'
          // filters: [
          //   {
          //     label: '中国',
          //     value: '上海'
          //   }
          // ],
          // filterMethod(value, row) {
          //   row.children.map((item) =>{
          //     if(item.name.indexOf(value) > -1){
          //        return item.name.indexOf(value) > -1
          //     }
          //   })
          //   // return row.children.name.indexOf(value) > -1
          // }
        },
        {
          title: '新增确诊(人)',
          align: 'center',
          width: 150,
          sortable: true,
          className: 'confirm',
          render: (h, params) => {
            return h('span', '+' + params.row.today.confirm)
          }
        },
        {
          title: '新增无症状(人)',
          align: 'center',
          width: 170,
          sortable: true,
          className: 'wzz',
          render: (h, params) => {
            if (
              params.row.today.wzz_add !== '' &&
              params.row.today.wzz_add !== undefined
            ) {
              return h('span', '+' + params.row.today.wzz_add)
            } else {
              return h('span', '暂无具体数据')
            }
          }
        },
        {
          title: '现有确诊(人)',
          align: 'center',
          width: 150,
          sortable: true,
          className: 'header',
          render: (h, params) => {
            return h('span', params.row.total.nowConfirm)
          }
        },
        {
          title: '累计确诊(人)',
          width: 150,
          align: 'center',
          className: 'header',
          sortable: true,
          render: (h, params) => {
            return h('span', params.row.total.confirm)
          }
        },
        {
          title: '累计死亡(人)',
          width: 150,
          align: 'center',
          key: 'deathNum',
          className: 'header',
          sortable: true,
          render: (h, params) => {
            return h('span', params.row.total.dead)
          }
        },
        {
          title: '累计治愈(人)',
          width: 150,
          className: 'header',
          align: 'center',
          sortable: true,
          render: (h, params) => {
            return h('span', params.row.total.heal)
          }
        },
        {
          title: '操作',
          slot: 'action',
          width: 140,
          className: 'header',
          align: 'center',
          render: (h, params) => {
            if (params.row.name === '上海') {
              return h('div', [
                h(
                  'Button',
                  {
                    props: {
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      font: {
                        size: 18
                      },
                      color: '#00bec9'
                    },
                    on: {
                      click: () => {
                        this.handleThematicMap()
                      }
                    }
                  },
                  '专题渲染'
                )
              ])
            } else {
              return h('div', [
                h(
                  'Button',
                  {
                    props: {
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      font: {
                        size: 18
                      },
                      color: '#00bec9'
                    },
                    on: {
                      click: () => {
                        this.$Message.info('暂无操作哦！')
                      }
                    }
                  },
                  '查看详情'
                )
              ])
            }
          }
        }
      ],
      data1: [],
      loading: false,
      tableHeight: 430,
      shData: {},
      time: '',
      modal: false,
      //全国数据
      totalnowConfirm: '',
      totalconfirm: '',
      curetotal: '',
      deathtotal: '',
      localConfirm: '',
      wzz: '',
      //新增数据
      chinaAdd: {}
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
  },
  methods: {
    async getYQData() {
      this.loading = true
      //表格数据处理
      const param = {
        modules: 'statisGradeCityDetail,diseaseh5Shelf'
      }
      const res = await txGet(param)
      this.time = res.data.data.diseaseh5Shelf.lastUpdateTime
      this.totalnowConfirm = res.data.data.diseaseh5Shelf.chinaTotal.nowConfirm
      this.totalconfirm = res.data.data.diseaseh5Shelf.chinaTotal.confirm
      this.curetotal = res.data.data.diseaseh5Shelf.chinaTotal.heal
      this.deathtotal = res.data.data.diseaseh5Shelf.chinaTotal.dead
      this.wzz = res.data.data.diseaseh5Shelf.chinaTotal.noInfect
      this.localConfirm = res.data.data.diseaseh5Shelf.chinaTotal.localConfirm

      this.data1 = [res.data.data.diseaseh5Shelf.areaTree[0]]
      console.log(this.data1[0].children)
      this.data1[0].children.map((item) => {
        if (item.name !== '上海') {
          delete item.children
        }
      })
      let key = '_showChildren'
      let value = 'true'
      this.data1[0][key] = value

      //中国新增数据
      let key1 = 'wzz_add'
      let value1 = res.data.data.diseaseh5Shelf.chinaAdd.noInfect
      res.data.data.diseaseh5Shelf.chinaAdd[key1] = value1
      this.data1[0].today = res.data.data.diseaseh5Shelf.chinaAdd
      this.chinaAdd = res.data.data.diseaseh5Shelf.chinaAdd

      this.loading = false
    },
    handleThematicMap() {
      const thematicLayerInfo = {
        base: '中国城市累计确诊',
        levelOne: '累计确诊: 0 ~ 5000人',
        levelTwo: '累计确诊: 5000 ~ 10000人',
        levelThree: '累计确诊: 10000 ~ 50000人',
        levelFour: '累计确诊: 50000 ~ 1000000人'
      }
      let groupCollection = []
      for (let i = 0; i < this.data1[0].children[2].children.length; i++) {
        if (this.data1[0].children[2].children[i]) {
          let cityInfos = this.data1[0].children[2].children[i]
          let newConfirm = cityInfos.today.confirm
          let cityName = cityInfos.name
          let confirm = cityInfos.total.confirm
          let nowConfirm = cityInfos.total.nowConfirm
          let dead = cityInfos.total.dead
          let heal = cityInfos.total.heal
          groupCollection.push([
            cityName,
            nowConfirm,
            confirm,
            dead,
            heal,
            newConfirm
          ])
        }
        // 返回地图界面
        this.$router.push({
          name: 'GeoJsonLayer',
          params: {
            id: 2,
            collection: groupCollection,
            keyId: 1
          }
        })
      }
    },
    showModal() {
      this.modal = true
    },
    okHandler() {
      this.modal = false
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: '新冠疫情数据表',
        data: this.data1,
        columns: this.columns1,
        original: false
      })
      //花钱导出
      // this.$Table.export({
      //   type: 'xlsx',
      //   filename: '新冠疫情数据表',
      //   data: this.data1,
      //   columns: this.columns1
      // })
    }
  },
  mounted() {
    // 设置表格高度
    // this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop
    this.getYQData()
    console.log(this.data1)
  }
}
</script>

<style lang="scss" scoped>
#ta {
  overflow-x: hidden;
  margin-left: 20px;
  margin-right: 50px;
  width: 1267px;
  max-height: 600px;
}
#ta .ivu-table-column-kYfPrO {
  width: 1rem;
}
/deep/.ivu-table-tbody {
  // background-color: #00bec9;
  // color: #10aeb5;
  font-size: 1.2vw;
}
/deep/.ivu-table td.p-header {
  // background-color: #00bec9;
  color: #10aeb5;
  font-size: 1.2vw;
}
/deep/.ivu-table td.confirm,
/deep/.ivu-table td.wzz {
  // background-color: #00bec9;
  color: red;
  font-size: 1.5vw;
}
/deep/.ivu-table th.header {
  background-color: #00bec9;
  color: #fff;
  font-size: 16px;
}
/deep/.ivu-table th.p-header,
/deep/.ivu-table th.confirm,
/deep/.ivu-table th.wzz {
  background-color: #00bec9;
  color: #fff;
  font-size: 16px;
}
.title {
  height: 0.35rem;
  color: #4d79f3;
  font-size: 20px;
  margin-right: 0.1rem;
  font-weight: 700;
}
.img {
  height: 16px;
  top: 2px;
  position: relative;
}
/deep/.ivu-modal-header {
  background-color: #00bec9;
}
/deep/.ivu-table-overflowX {
  overflow-x: hidden;
}
.card {
  height: 100%;
}
.table {
  top: 10px;
}
/deep/.ivu-card-head p,
.ivu-card-head-inner {
  display: inline-block;
  width: 100%;
  height: 32px;
  line-height: 20px;
  font-size: 16px;
  color: #17233d;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cntitle {
  font-size: 0.9vw;
  height: 0.2vw;
  line-height: 0.2vw;
  color: #222;
  // text-align: center;
}
.tab_btn {
  position: relative;
  left: 1000px;
  background-color: #00bec9;
  color: #fff;
}
.cndata {
  font-size: 30px;
  // animation: twinkle 1s 1 alternate;
}
@keyframes twinkle {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
/deep/.ivu-card-body {
  // text-align: center;
  padding: 16px;
}
.cnCard {
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

  border-radius: 50%;
  text-align: center;
}
</style>
