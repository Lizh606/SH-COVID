<template>
  <div id="home">
    <!-- <img class="back" src="../assets/img/上海夜景.jpeg" /> -->
    <Carousel autoplay v-model="value2" loop>
   
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/img1.webp" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/img2.jpeg" />
      </CarouselItem>
      <CarouselItem>
        <img class="back" src="../assets/img/lunbo/img3.jpeg" />
      </CarouselItem>
         <CarouselItem>
        <img class="back" src="../assets/img/lunbo/上海夜景.jpeg" />
      </CarouselItem>
    </Carousel>
    <!-- <iframe
      src="http://localhost:8080/public/static/index.html"
      width="100%"
      height="800"
      frameborder="0"
      scrolling="auto"
      id="iframename"
      name="iframename"
    ></iframe> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value2: 0,
    };
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  position: relative;
}
&/deep/.ivu-carousel {
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
