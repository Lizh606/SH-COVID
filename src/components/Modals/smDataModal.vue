<template>
  <Modal v-model="modal1" width="1000">
    <p
      slot="header"
      style="background-color: #00bec9; text-align: center; font-size: 20px"
    >
      <span style="color: #eee">数据说明</span>
    </p>
    <div>
      <p style="font-size: 16px">
        全部数据来源于国家卫健委、各省市区卫健委、各省市区政府以及港澳台官方渠道。<br /><br />实时数据方面，腾讯新闻的统计方法如下：<br />1.本页面的全国疫情数据包括31个省区市、新疆生产建设兵团和港澳台地区的疫情数据。<br />2.国家卫健委公布数据时，全国总数与国家卫健委保持一致。<br />3.各省卫健委陆续公布数据，如果各省数据总和已经超过之前国家卫健委总数，则直接使用各省数据总和作为全国总数。（计算时，各省的“现有确诊”用“现有确诊人数=
        累计确诊人数 - 累计治愈人数
        -累计死亡人数”计算得到，“现有疑似”仅使用国家卫健委每天公布的现有疑似病例总数，而不做新增累计）<br />4.“现有确诊”、“累计确诊”、“现有重症”、“治愈”和“死亡”的“较上日”是指每两天间的新增数值，由当前的全国总数减去国家卫健委前一天公布的数据得到。这个值会随着全国总数的变动而实时变化。<br />5.“现有疑似”的“今日新增”数据取自国家卫健委每日最新公布的“新增疑似病例数”。<br />6.各省卫健委公布数据的发布时间和统计时间段各不相同，故而会在部分时段出现国家总数不等于分省数据之和。
      </p>
      <br />
      <p style="font-size: 2vw; line-height: 2vw; color: #00bec9">
        什么是“现有确诊数”？
      </p>
      <br />
      <p>
        “现有确诊数”口径取自国家卫健委每日公布的“现有确诊病例数”，该数值反映了当前正在治疗中的确诊人数。（含港澳台）<br />实时更新时，我们会用“现有确诊人数
        = 累计确诊人数 - 累计治愈人数 - 累计死亡人数”计算得到。
      </p>
      <br />
      <p style="font-size: 2vw; line-height: 2vw; color: #00bec9">
        什么是“本土现有确诊”？
      </p>
      <br />
      <p>
        “本土现有确诊”为31省本土正在治疗中的确诊人数。（不含港澳台、不含境外输入）
      </p>
      <br />如果大家发现相关数据错误,欢迎即时联系我们。反馈入口:进入微信搜索“腾讯新闻App”微信公众号,直接留言反馈即可。
    </div>
    <div slot="footer">
      <Button @click="okHandler">确定</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
        modal1:false
    }
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    }
  },
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
    okHandler() {
      this.$emit("okHandler")
      this.modal1 = false
      this.modal =false
    }
  }
}
</script>

<style></style>
