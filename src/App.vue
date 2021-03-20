<template>
  <Header />
  <div class="container">
    <div class="grid wide">
      <router-view></router-view>
    </div>
  </div>
  <router-link to="/">
    <img
      class="icon-home show-on-mobile show-on-tablet"
      alt="Về trang chủ"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABGUlEQVRIie2UwUrDQBCGvzRrH6OEPkIvBannPloVL76DVo36BqX4JCIiFYoIPXhfLxNINxNns8lNB/7LZub/+GeTwF8vB1yJnPJ8C3hg0weSA7di5IEn4CTo8TUllQMexOAg8sAjx8l6gXJgXYPMgRnwRTNZMsgBZQApRHOayZJADrhXIK8iDdYZlAM3AWQCvNSM3oApx2vsBIqBxMBMyB36ukJIJW2NXrxaIdeRSWKSlSgfdR9INGwISBTsIoBYd2JJu7PLEfANvANLYA88S2NqFeKxF89PgrfQSnKqmC4ikjXKWldbWWsEIAsGfqus5TxqbmQ0DVb/oEFAH0bvQjk7M2ZUz3PS/wZtWmmgscB2AwB24jWuzH8A20/xDGagoYIAAAAASUVORK5CYII="
    />
  </router-link>
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
.icon-home {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 5;
  display: none;
}
@import url("assets/css/grid.css");
@import url("assets/css/base.css");
@import url("assets/css/reponsive.css");
.container {
  background-color: var(--background-color);
  margin-top: calc(var(--header-search-height) + 20px);
  margin-bottom: var(--footer-height);
}
</style>
