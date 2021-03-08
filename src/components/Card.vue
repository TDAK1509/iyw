  
<template>
  <router-link to="/detail/aaaaa" class="col m-6 l-3 c-12" href="detail.html">
    <div class="card">
      <img
        src="https://picsum.photos/400"
        alt="Hình sản phẩm"
        class="card__img"
      />
      <h3 class="card__title">Sản phẩm a</h3>
      <div class="card__price">
        <span class="card__price-orign">45.000</span>
        <span class="card__price-now">35.0000</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
.card {
  text-align: center;
  max-width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
}

.card__img {
  max-width: 100%;
}

.card__title {
  color: var(--text-color);
}

.card__price {
}

.card__price-orign {
  text-decoration: line-through;
  opacity: 0.5;
  font-size: 1.5rem;
  margin-right: 10px;
  color: #fff;
}

.card__price-now {
  font-size: 1.6rem;
  color: red;
}
</style>