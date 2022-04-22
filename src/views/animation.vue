<template>
  <div class="perspective">
    <div class="wrap" id="imgwrap">
      <!-- 引入图片值页面 -->
      <img class="f1" :src="require('../assets/img/lunbo/img' + item1.slice(1))" v-for="(item1,index) in imgList"  :key="'item1'+index"/>
    
      <!-- 引入图片值页面 -->
      <img class="f2" :src="require('../assets/img/lunbo/img' + item2.slice(1))"  v-for="(item2,index) in imgList"  :key="'item2'+index"/>

      <img class="f3" :src="require('../assets/img/lunbo/img' + item3.slice(1))"   v-for="(item3,index) in imgList"  :key="'item3'+index"/>
      <img class="f4" :src="require('../assets/img/lunbo/img' + item4.slice(1))"   v-for="(item4,index) in imgList"  :key="'item4'+index"/>
      
      <p></p>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  // 使用时请使用 :url.sync=""传值
  data() {
    return {
      imgList: [],

    };
  },
   beforeMount() {
      const files = require
      .context("@/assets/img/lunbo/img", true, /\.jpg$/)
      .keys();
    console.log(files);
    this.imgList = files;
  },
  mounted() {
    //    if (location.href.indexOf("#reloaded") == -1) {
    //   location.href = location.href + "#reloaded";
    //   location.reload();
    // }
    const oImg = document.getElementsByClassName("f1");
    const oImg2 = document.getElementsByClassName("f2");
    const oImg3 = document.getElementsByClassName("f3");
    const oImg4 = document.getElementsByClassName("f4");

    const len = oImg.length;
    console.log(len);
    const deg = 360 / len;

    const oWrap = document.getElementById("imgwrap");
    // let oWrap=document.querySelector('.wrap');

  setTimeout(() => {
        //页面加载完毕在执行的代码
            Array.prototype.forEach.call(oImg, function (ele, index, self) {
        // 旋转并沿Z轴平移
        ele.style.transform =
          "rotateY(" + deg * index + "deg) translateZ(645.75px)";
        //过渡时间1s
        ele.style.transition = "1s " + (len - index) * 0.1 + "s";
      });
      Array.prototype.forEach.call(oImg2, function (ele, index, self) {
        // 旋转并沿Z轴平移
        ele.style.transform =
          "rotateY(" +
          deg * index +
          "deg) translateZ(645.75px) translateY(240px)";
        //过渡时间1s
        ele.style.transition = "1s " + (len - index) * 0.1 + "s";
      });
      Array.prototype.forEach.call(oImg3, function (ele, index, self) {
        // 旋转并沿Z轴平移
        ele.style.transform =
          "rotateY(" +
          deg * index +
          "deg) translateZ(645.75px) translateY(480px)";
        //过渡时间1s
        ele.style.transition = "1s " + (len - index) * 0.1 + "s";
      });
       Array.prototype.forEach.call(oImg4, function (ele, index, self) {
        // 旋转并沿Z轴平移
        ele.style.transform =
          "rotateY(" +
          deg * index +
          "deg) translateZ(645.75px) translateY(720px)";
        //过渡时间1s
        ele.style.transition = "1s " + (len - index) * 0.1 + "s";
      });
  }, 10);
  
    //翻动3D相册
    let newX,
      newY,
      lastX,
      lastY,
      minusX,
      minusY,
      rotX = -20,
      rotY = 0;

    document.onmousedown = function (e) {
      // 点击设置初值
      lastX = e.clientX;
      lastY = e.clientY;

      this.onmousemove = function (e) {
        newX = e.clientX;
        newY = e.clientY;
        minusX = newX - lastX;
        minusY = newY - lastY;

        rotX -= minusY * 0.2;
        rotY += minusX * 0.1;
        oWrap.style.transform =
          "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
        lastX = newX;
        lastY = newY;
      };
      this.onmouseup = function (e) {
        //鼠标松开
        this.onmousemove = null; //清除鼠标移动
      };
    };
  },

 
};
</script>



<style type="text/css">
/* 去掉默认效果 */
* {
  margin: 0;
  padding: 0;
}

body {
  background: #222;
  overflow: hidden;
  /* 取消选中 */
  user-select: none;
}

@keyframes rotate {
  100% {
    transform: rotateY(360deg);
  }
}

.perspective {
  /*子元素透视 场景深度*/
  perspective: 600px;
}

.wrap {
  /* 3d */
  width: 135px;
  height: 240px;
  margin: 100px auto;
  position: relative;
  /* border: 1px solid red; */
  transform: rotateX(-20deg) rotateY(0deg);
  transform-style: preserve-3d;
}

.wrap img {
  display: block;
  /* 绝对定位 */
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(0deg) translateZ(0px);
  background: transparent;
  box-shadow: 0 0 4px #fff;
  border-radius: 5px;

  /* webkit */
}

/* 照片底座 */
.wrap p {
  width: 1200px;
  height: 1200px;
  background: -webkit-radial-gradient(
    center center,
    600px 600px,
    rgba(122, 122, 122, 0.5),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 100%;
  margin-left: -600px;
  margin-top: -600px;
  /* 沿着x轴按倒 */
  transform: rotateX(90deg);
}
</style>
