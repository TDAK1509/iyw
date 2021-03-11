<template>
  <div v-if="product">
    <div class="row">
      <div class="col l-5 m-5 c-12">
        <label for="cbModal">
          <div class="img">
            <div class="main-img">
              <img v-bind:src="product.images[0]" alt="product.name" />
            </div>
            <div class="row more-img">
              <img
                alt=""
                class="img-more col l-3 m-3 c-3"
                v-for="(url, index) in product.images"
                :key="index"
                v-bind:src="url"
              />
            </div>
          </div>
        </label>
      </div>
      <div class="col l-7 m-7 c-12">
        <div class="infor">
          <h3 class="tilte">{{ product.name }}</h3>
          <div class="price">
            <span class="now-price">{{ product.price.toLocaleString() }}</span>
          </div>
          <div class="description">
            {{ product.description }}
          </div>
          <SelectNumber></SelectNumber>
          <button class="btn add-cart">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    <input type="checkbox" id="cbModal" class="checkbox-img-product" />
    <div class="modal">
      <div class="modal-content">
        <label for="cbModal" class="modal-close">&times;</label>
        <div class="row">
          <div class="col l-6 m-12 c-12 main-img-wrap">
            <img v-bind:src="product.images[0]" alt="product.name" />
          </div>
          <div class="col l-6 m-12 c-12">
            <div class="row">
              <img
                alt=""
                class="col l-3 m-3 c-6 small-img"
                v-for="(url, index) in product.images"
                :key="index"
                v-bind:src="url"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../base/api";
import SelectNumber from "./SelectNumber";
export default {
  name: "Detail",
  components: { SelectNumber },
  data() {
    return {
      product: null,
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
.main-img {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-img {
  margin: 10px 0;
  justify-content: center;
}

.img-more {
  cursor: pointer;
}

.tilte {
  font-size: 4rem;
  line-height: 4rem;
}

.price {
  font-size: 2rem;
  line-height: 2rem;
  margin: 1rem auto;
}

.orign-price {
  font-size: 2.8rem;
  text-decoration: line-through;
  color: gray;
  margin-right: 1rem;
}

.now-price {
  font-size: 3rem;
  color: red;
}

.description {
  font-size: 2.8rem;
  line-height: 2.8rem;
}

.add-cart {
  margin-top: 2rem;
  font-size: 2rem;
}

/* Modal */

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */

.modal-content {
  background-color: #fefefe;
  margin: 5vh auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  height: 90%;
  display: block;
}

/* The Close Button */

.modal-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.main-img-wrap {
  display: block;
  text-align: center;
  height: calc(90vh - 40px);
}

input:checked ~ div {
  display: block;
}

.small-img {
  max-height: 300px;
  max-width: 200px;
  margin-bottom: 10px;
  cursor: pointer;
}

.modal-close:hover,
.modal-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.checkbox-img-product {
  display: none;
}

@media (max-width: 739px) {
  .modal {
    z-index: 10;
  }
  .modal-content {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 12px;
  }
  .main-img-wrap {
    height: auto;
  }
}
</style>