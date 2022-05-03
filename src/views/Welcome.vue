<template>
  <div id="home">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/welcome_imgs/2.jpg" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/welcome_imgs/1.jpg" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/welcome_imgs/3.gif" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/welcome_imgs/4.jpg" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/welcome_imgs/img3.jpg" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/welcome_imgs/上海夜景.jpg" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      value2: 0
    }
  },
  mounted() {
    const files = require.context('../assets/img/lunbo', true, /\.jpeg$/).keys()
  }
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  position: relative;
}
/deep/.ivu-carousel {
  position: relative;

  width: 100%;
  height: 100%;
  overflow: hidden;
  // height: 100%;
}
.back {
  position: relative;
  width: 100%;
  height: 726px;
}
#msg {
  position: absolute;
  top: 150px;
  left: 0px;
  width: 300px;
  height: 100px;
  z-index: 99;
  text-align: center;
  font-size: 40px;
  color: rgb(162, 228, 39);
}
</style>
