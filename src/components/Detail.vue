<template>
  <div class="row product-detail">
    <div class="col l-5 m-5 c-12">
      <label for="cbModal">
        <div class="product-detail__img">
          <img
            v-bind:src="product.images[0]"
            alt=""
            class="product-detail__main-img"
          />
          <div class="row product-detail__small-img">
            <img
              alt=""
              class="product-detail__more-img col l-3 m-3 c-3"
              v-for="(url, index) in product.images"
              :key="index"
              v-bind:src="url"
            />
          </div>
        </div>
      </label>
    </div>
    <div class="col l-7 m-7 c-12">
      <div class="product-detail__infor">
        <h3 class="product-detail__tilte">{{ product.name }}</h3>
        <div class="product-detail__price">
          <!-- <span class="product-detail__orign-price">45.888</span> -->
          <span class="product-detail__now-price">{{
            product.price.toLocaleString()
          }}</span>
        </div>
        <div class="product-detail__description">
          {{ product.description }}
        </div>
        <a href="order.html">
          <button class="btn product-detail__add-cart">Thêm vào giỏ</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../base/api";
export default {
  name: "Detail",
  data() {
    return {
      product: {},
    };
  },
  created() {
    const slug = this.$route.params.slug;
    get(`products/${slug}`).then((data) => {
      this.product = data[0];
    });
  },
};
</script>

<style lang="css" scoped>
.product-detail__main-img {
  cursor: pointer;
}

.product-detail__small-img {
  margin: 10px 0;
  justify-content: center;
}

.product-detail__more-img {
  cursor: pointer;
}

.product-detail__infor {
}

.product-detail__tilte {
  font-size: 4rem;
  line-height: 4rem;
}

.product-detail__price {
  font-size: 2rem;
  line-height: 2rem;
  margin: 1rem auto;
}

.product-detail__orign-price {
  font-size: 2.8rem;
  text-decoration: line-through;
  color: gray;
  margin-right: 1rem;
}

.product-detail__now-price {
  font-size: 3rem;
  color: red;
}

.product-detail__description {
  font-size: 2.8rem;
  line-height: 2.8rem;
}

.product-detail__add-cart {
  margin-top: 2rem;
  font-size: 2.2rem;
  padding: 1rem 2rem;
}
</style>