<template>
  <!-- 导航窗口 -->
  <Modal v-model="modal1" width="1000" class="routemodal">
    <p
      slot="header"
      style="background-color: #00bec9; text-align: center; font-size: 20px"
    >
      <span style="color: #eee">路线规划</span>
    </p>
    <div class="left">
      <div class="sign-center" @keyup.enter="handleSubmit">
        <Form
          id="routeform"
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
        >
          <FormItem label="出发地" prop="origin">
            <i-input
              id="origin"
              type="text"
              v-model="formValidate.origin"
              placeholder="请输入出发地"
            ></i-input>
          </FormItem>
          <FormItem label="目的地" prop="destination">
            <i-input
              id="destination"
              type="text"
              v-model="formValidate.destination"
              placeholder="请输入目的地"
            ></i-input>
          </FormItem>
          <FormItem>
            <Button :loading="loading" class="form-buttom" @click="search()">查询</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </Modal>
</template>

<script>
import {
  tdtAdministrative,
  publicTransportPlanning,
  getCoordinate
} from '@/api/tdt_web_api/tdt_api.js'
export default {
  data() {
    return {
      modal1: false,
      loading: false,
      formValidate: {
        origin: '玉兰香苑三期',
        destination: '外滩'
      },
      ruleValidate: {
        origin: [
          {
            required: true,
            message: '出发地不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ],
        destination: [
          {
            required: true,
            message: '目的地不能为空',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ]
      }
    }
  },
   props: {
    modal: {
      type: Boolean,
      default: false
    },
  },
  computed: {},
  watch: {
    
    modal:{
      // immediate:true,
      handler(val) {
        this.modal1=val
      },
      deep: true // 深度监听父组件传过来对象变化
    }
  },
  methods: {
   async search(){
            const origin = this.formValidate.origin ;
      const destination =this.formValidate.destination
        const origindata = {
      ds: { keyWord: origin },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
      const destinationata = {
      ds: { keyWord: destination },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    const orginzuobiao = await getCoordinate(origindata);
    const destinationzuobiao = await getCoordinate(destinationata)
    const originloc = orginzuobiao.data.location.lon + ',' + orginzuobiao.data.location.lat
    const destinationloc = destinationzuobiao.data.location.lon + ',' + destinationzuobiao.data.location.lat
    console.log(originloc,destinationloc);
      //公交规划
    const getbus = {
      type: 'busline',
      postStr: {
        startposition: originloc,
        endposition: destinationloc,
        linetype: '1'
      },
      tk: '6156b0fb9f9e853e3f64234d82d9abf1'
    }
    const res1 = await publicTransportPlanning(getbus)
    console.log(res1);
    const route = res1.data.results[0].lines
    route.map((item)=>{
        item.segments.map((item1)=>{
            // console.log(item1.stationEnd.name);
             item1.segmentLine.map((item2) =>{
                 console.log(item1.stationEnd.name,item2);
             })
        })
        
    })
    console.log(route);
   }
  }
}
</script>

<style lang="scss" scoped>

/deep/.ivu-modal-footer{
  display: none;
}
/deep/.ivu-modal-header {
  background-color: #00bec9;
}
.form-buttom{
   position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 200px;
     background-color: #00bec9;
     color: #fff;
}</style>
