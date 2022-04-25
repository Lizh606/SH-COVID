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
html,
body {
  font-family: '楷体';
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
