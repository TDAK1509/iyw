<template>
  <div class="row">
    <Card />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Home",
  components: { Card },
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