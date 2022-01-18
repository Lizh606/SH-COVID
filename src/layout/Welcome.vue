<template>
  <div id="home">
    <img class="back" src="../../public/back.png" />
    <div id="msg">Welcome to Shanghai COVID-19 map system</div>
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
  top: 60px;
  left: 10px;
  width: 500px;
  height: 100px;
  z-index: 99;
  text-align: center;
  font-size: 40px;
  color: aliceblue;
}
</style>