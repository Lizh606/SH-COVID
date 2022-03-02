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

<style>
@import "./styles/font/font.css";
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  font-family: ”Microsoft YaHei”, Arial, Helvetica, sans-serif, ”宋体”;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
