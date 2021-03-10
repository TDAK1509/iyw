<template>
  <div class="relatcive-product hide-on-mobile">
    <span class="relatcive-product__title">Sản phẩm khác</span>
    <div class="row relatcive-product-list">
      <a class="col m-3 l-2 c-6" href="detail.html">
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
      </a>
      <a class="col m-3 l-2 c-6" href="detail.html">
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
      </a>
      <a class="col m-3 l-2 c-6" href="detail.html">
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
      </a>
      <a class="col m-3 l-2 c-6" href="detail.html">
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
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelationProducts",
};
</script>

<style lang="css" scoped>
.relatcive-product {
  margin: 10px 0;
}

.relatcive-product-list {
  margin-top: 10px;
}

.relatcive-product__title {
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
}

.checkbox-img-product {
  display: none;
}
</style>