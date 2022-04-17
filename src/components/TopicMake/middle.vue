<template>
   <div class="overlay-container">
    <div class="header" v-if="hasOverlayHeader">
      <p>专题制图</p>
      <NrButton class="close-btn" :level="3" type="back" >返回</NrButton>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.overlay-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 3rem;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}
.header {
//   @include scw(0.83rem, $color1d1d1d, 700);
  position: relative;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid rgba(220, 220, 220, 1);
  padding-left: 20px;
}
.content {
  height: calc(100% - 3rem);
  position: relative;
  flex-shrink: 1;
  flex-grow: 1;
}
.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  margin-right: 2rem;
}
</style>