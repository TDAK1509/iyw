  
<template>
  <router-link v-bind:to="`/detail/${product.slug}`" class="col m-6 l-3 c-12">
    <div class="card">
      <img
        v-bind:src="product.images[0]"
        alt="Hình sản phẩm"
        class="card__img"
      />
      <h3 class="card__title">{{ product.name }}</h3>
      <div class="card__price">
        <span class="card__price-now">{{
          product.price.toLocaleString()
        }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["product"],
};
</script>

<style>
.card {
  text-align: center;
  max-width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  padding-bottom: 10px;
  box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
}

.card__img {
  max-width: 100%;
  height: 200px;
}

.card__title {
  color: var(--text-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.card__price-orign {
  text-decoration: line-through;
  opacity: 0.5;
  font-size: 1.5rem;
  margin-right: 10px;
  color: gray;
}

.card__price-now {
  font-size: 1.6rem;
  color: red;
}
</style>