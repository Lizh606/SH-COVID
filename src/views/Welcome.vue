<template>
  <div id="home">
    <img class="back" src="../assets/img/上海夜景.jpeg" />
    <!-- <div id="msg">Welcome to Shanghai COVID-19 map system</div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  position: absolute;
}
.back {
  width: 100%;
  height: 100%;
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
