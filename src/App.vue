<template>
  <Header />
  <div class="container">
    <div class="grid wide">
      <router-view></router-view>
    </div>
  </div>

  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("assets/css/grid.css");
@import url("assets/css/base.css");
@import url("assets/css/reponsive.css");
</style>
