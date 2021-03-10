<template>
  <div class="row">
    <Card v-for="item in products" :key="item._id" :product="item" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { get } from "../base/api";

export default {
  name: "Home",
  components: { Card },
  created() {
    get("products").then((data) => {
      this.products = data;
    });
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="css" scoped>
.main__catalog {
  padding: 10px;
  background-color: #f5f5f5;
}

.main__catalog-title {
  font-size: 2rem;
  padding: 5px;
  margin-bottom: 5px;
}

.main__catalog-list {
  padding-left: 10px;
}

.main__catalog-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}

.main__catalog-item-link {
  color: var(--text-color);
  font-size: 1.3rem;
  display: block;
  padding-top: 10px;
}

.main__catalog-item-link--active,
.main__catalog-item-link:hover {
  color: #961616;
}

.sort-order {
  margin: auto auto 20px auto;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 10px;
}
</style>