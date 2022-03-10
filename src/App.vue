<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@import "./styles/font/font.css";
html,
body {
  // font-family: "KaiTi";
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
