<template>
  <div class="layout">
    <div slot="title" class="header">
      <b class="title" style="color: #00bec9">上海疫情Echarts表</b>
      <span>数据统计截止至 {{ time }} </span>
    </div>
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

      :SHqh="SHqh"
      :qhAdd="qhAdd"
    />

    <!-- <Tree class="tree" :data="data1" expand-node></Tree> -->
    <ButtonGroup class="btn">
      <Button class="btn1" @click="openCard1()">上海疫情<br />新增趋势</Button>
     
      <Button class="btn1" @click="openCard3()">上海疫情<br />累计趋势</Button>
       <Button class="btn1" @click="openCard2()"
        >上海疫情<br />无症状趋势</Button
      >
    </ButtonGroup>
    <div
      @click="DataShow"
      class="help-icon"
      aria-label="数据说明"
      title="数据说明"
    >
      <IconSvg iconClass="bangzhuyushuoming" class="help"></IconSvg>

      <span class="word" style="color: blue">数据说明</span>
    </div>
    <smModal :modal="modal" @okHandler="okHandler()"></smModal>
  </div>
</template>

<script>
import singleEcharts from './YQEcharts/singleEcharts.vue'
import doubleEcharts from './YQEcharts/doubleEcharts.vue'
import smModal from '@/components/Modals/smDataModal.vue'

import { txDateGet,txGet } from '@/api/yq_api/tx_api.js'

export default {
  name: 'Echarts',
  components: {
    SingleEcharts: singleEcharts,
    DoubleEcharts: doubleEcharts,
    smModal: smModal
  },
  data() {
    return {
      title1: '上海 新增本土确诊趋势',
      card1: false,
      card2: false,
      time: '',
      xdata: [],
      modal: false,
      updateDate: [],
      nowconfirm: [],
      asymptomatic: [], //无症状

      newAdd: {
        confirm: [],
        heal: [],
        dead: []
      },
      total: {
        confirm: [],
        heal: [],
        dead: []
      },
      wzz: {
        wzz: [], //无症状
        wzz_add: []
      },
      legend: ['新增本土'],
      YQdata: [],

      //区数据
      SHqh:[],
      qhAdd:[]
    }
  },
  async mounted() {
    this.getData()
    this.openCard1()
  },

  methods: {
    async getData() {
      const param1 = {
        province: '上海',
        limit: '60'
      }
      const res1 = await txDateGet(param1)
      //截止时间
      this.time = res1.data.data.pop()._mtime
      const obj = {}
      const array = res1.data.data.reduce(function (item, next) {
        obj[next.date] ? '' : (obj[next.date] = true && item.push(next))

        return item
      }, [])
      // console.log(data1);
      array.map((item) => {
        //新增
        this.updateDate.push(item.date)
        this.newAdd.confirm.push(item.confirm_add)
        this.asymptomatic.push(item.wzz_add)
        this.newAdd.heal.push(item.newHeal)
        this.newAdd.dead.push(item.newDead)
        //累计
        this.total.confirm.push(item.confirm)
        this.total.heal.push(item.heal)
        this.total.dead.push(item.dead)
        //无症状
        this.wzz.wzz.push(item.wzz)
        this.wzz.wzz_add.push(item.wzz_add)
      });

      //上海区数据
       const param = {
        modules: 'statisGradeCityDetail,diseaseh5Shelf'
      }
      const res = await txGet(param)
      res.data.data.diseaseh5Shelf.areaTree[0].children[2].children.sort(this.compare('today'))
      res.data.data.diseaseh5Shelf.areaTree[0].children[2].children.map((item)=>{
        this.qhAdd.push(item.today.confirm)
        this.SHqh.push(item.name)
      });
    },
    compare(propertyName) {
     return  function( object1,  object2) {
       var value1  = object1[propertyName].confirm;
       var value2  = object2[propertyName].confirm;
       if (value2  < value1) {
         return  -1;
      }  else  if (value2  > value1) {
         return  1;
      }  else {
         return  0;
      }
    }
  },
    openCard1() {
      this.legend = ['新增确诊', '新增治愈', '新增死亡']
      this.xdata = this.newAdd
      this.title1 = '上海 新增趋势'
      this.card1 = false
      this.card2 = true
    },
    openCard2() {
      this.legend = ['新增无症状', '累计无症状']
      this.xdata = this.wzz
      this.title1 = '上海 无症状趋势'
      this.card2 = false
      this.card1 = true
    },
    openCard3() {
      this.legend = ['累计确诊', '累计治愈', '累计死亡']
      this.xdata = this.total
      this.title1 = '上海 累计趋势'
      this.card1 = false
      this.card2 = true
    },

    DataShow() {
      this.modal = true
    },
    okHandler() {
      // this.$emit("okHandler")
      this.modal = false
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  // height: calc(100%-100px);
}
.header {
  height: 40px;
  margin: 20px 0 0 10px;
}
.title {
  height: 0.35rem;
  color: #4d79f3;
  font-size: 20px;
  margin-right: 0.1rem;
  font-weight: 700;
}
// .mychart {
//   border: #00bec9 2px solid;
//   border-radius: 4px;
//   // position: absolute;
//   width: 100%;
//   height: 100%;
// }
.btn {
  top: 25px;
  left: 400px;
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
  width: 100px;
  position: absolute;
  top: 22px;
  left: 478px;
  color: blue;
}

.help {
  width: 20px;
  height: 20px;
}
.word {
  top: -3px;
  position: relative;
}
/deep/.ivu-modal-header {
  background-color: #00bec9;
}
</style>
