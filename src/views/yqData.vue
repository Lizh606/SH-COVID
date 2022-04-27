<template>
  <!-- <div></div> -->
  <div style="background: #eee; padding: 20px height:100%">
    <Card :bordered="false" class="card">
      <p slot="title">
        <b class="title">全国(含港澳台)</b>
        <span>{{ time }}数据统计 </span>
        <img
          src="https://n.sinaimg.cn/finance/cece9e13/20200321/0320_intro_icon02.png?a=1"
          class="img"
          alt="数据说明"
          @click="showModal"
        />
      </p>

      <Row>
        <Col span="3" offset="4">
          <Card style="text-align: center">
            <b slot="title" class="cntitle">现有确诊</b>
            <b style="color: #ff3535" class="cndata animated bounce">{{
              totalnowConfirm
            }}</b>
          </Card>
        </Col>
        <Col span="3" offset="2">
          <Card style="text-align: center">
            <b slot="title" class="cntitle">累计确诊</b>
            <b style="color: #b10000" class="cndata">{{ totalconfirm }}</b>
          </Card>
        </Col>
        <Col span="3" offset="2">
          <Card style="text-align: center">
            <b slot="title" class="cntitle">累计治愈</b>
            <b style="color: #13b593" class="cndata">{{ curetotal }}</b>
          </Card>
        </Col>
        <Col span="3" offset="2">
          <Card style="text-align: center">
            <b slot="title" class="cntitle">累计死亡</b>
            <b style="color: #666666" class="cndata">{{ deathtotal }}</b>
          </Card>
        </Col>
      </Row>
      <Card :bordered="false" class="table" dis-hover>
        <p slot="title">
          <b class="title">近期31省区市本土病例</b>
          <Button @click="exportData()"  class="tab_btn">导出表单</Button>
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
    <Modal v-model="modal" width="1000">
      <p
        slot="header"
        style="background-color: #00bec9; text-align: center; font-size: 20px"
      >
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
import axios from 'axios'

export default {
  name: 'yqData',
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
          className: 'p-header',
          filters: [
            {
              label: '上海',
              value: '上海'
            }
            // {
            //     label: 'London',
            //     value: 'London'
            // },
            // {
            //     label: 'Sydney',
            //     value: 'Sydney'
            // }
          ],
          filterMethod(value, row) {
            return row.name.indexOf(value) > -1
          }
        },
        {
          title: '现有确诊(人)',
          align: 'center',
          width: 170,
          key: 'econNum',
          sortable: true,
          className: 'header'
        },
        {
          title: '累计确诊(人)',
          width: 170,
          align: 'center',
          key: 'value',
          className: 'header',
          sortable: true
        },
        {
          title: '累计死亡(人)',
          width: 170,
          align: 'center',
          key: 'deathNum',
          className: 'header',
          sortable: true
        },
        {
          title: '累计治愈(人)',
          width: 160,
          key: 'cureNum',
          className: 'header',
          align: 'center',

          sortable: true
        },
        {
          title: '操作',
          slot: 'action',
          width: 140,
          className: 'header',
          align: 'center',
          render: (h, params) => {
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
                      this.handleThematicMap(params.index)
                    }
                  }
                },
                '专题渲染'
              )
            ])
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
      deathtotal: ''
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
  },
  methods: {
    async getYQData() {
      this.loading = true
      axios.get('/yq').then((res) => {
        console.log(res.data.data)
        this.time = res.data.data.times
        this.totalnowConfirm = res.data.data.econNum
        this.totalconfirm = res.data.data.gntotal
        this.curetotal = res.data.data.curetotal
        this.deathtotal = res.data.data.deathtotal
        console.log(res.data.data.list)
        this.data1 = res.data.data.list
        console.log(this.data1)
        this.shData = this.data1[14]
        let key = 'children'
        let value = this.data1[14].city
        this.data1[14][key] = value
        let key1 = '_showChildren'
          let value1 = 'true'
          this.data1[14][key1] = value1
        this.data1[14].children.map((item) => {
          let key = 'value'
          let value = item.conNum
          item[key] = value
          
        })
        console.log(this.data1[14].children)
      })
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
      let groupCollection = {
        levelOne: [],
        levelTwo: [],
        levelThree: [],
        levelFour: [],
        thematicLayerInfo: thematicLayerInfo
      }
      for (let i = 0; i < this.data1[0].children.length; i++) {
        if (this.data1[0].children[i].children) {
          for (let j = 0; j < this.data1[0].children[i].children.length; j++) {
            let provinceName = this.data1[0].children[i].children[j].name
            let confirm = this.data1[0].children[i].children[j].confirm
            let nowConfirm = this.data1[0].children[i].children[j].nowConfirm
            let dead = this.data1[0].children[i].children[j].dead
            let heal = this.data1[0].children[i].children[j].heal

            if (confirm <= 20) {
              if (confirm <= 10) {
                groupCollection.levelOne.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal
                ])
              } else {
                groupCollection.levelTwo.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal
                ])
              }
            } else {
              if (confirm <= 30) {
                groupCollection.levelThree.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal
                ])
              } else {
                groupCollection.levelFour.push([
                  provinceName,
                  nowConfirm,
                  confirm,
                  dead,
                  heal
                ])
              }
            }
          }
        }
      }
      // 返回地图界面
      this.$router.push({
        name: 'Popup',
        params: {
          id: 2,
          collection: groupCollection,
          keyId: 1
        }
      })
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
        original: false
      })
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
  margin-left: 180px;
  // margin-top: 60px;
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
/deep/.ivu-table th.header {
  background-color: #00bec9;
  color: #fff;
  font-size: 16px;
}
/deep/.ivu-table th.p-header {
  background-color: #00bec9;
  color: #fff;
  font-size: 16px;
}
// /deep/ .ivu-table .province-name {
//   // background-color: #00bec9;
//   color: #00bec9;
// }
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
/deep/.ivu-card-head p, .ivu-card-head-inner {
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
  color: #393939;
  font-size: 0.2rem;
  // text-align: center;
}
.tab_btn{
  position: relative;
  left: 1000px;
  background-color: #00bec9;
  color: #fff;
}
.cndata {
  font-size: 24px;
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
</style>
