<template>
  <div id="app">
    <AlbumDashBoard></AlbumDashBoard>
    <!-- <img src="./assets/logo.png">
    <router-view/>-->
  </div>
</template>
<script>
import AlbumDashBoard from "@/components/AlbumDashBoard";
export default {
  components: {
    AlbumDashBoard
  },
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
