<template>
  <div v-if="product">
    <div class="row">
      <div class="col l-5 m-5 c-12">
        <div class="img">
          <div class="main-img">
            <label for="cbModal">
              <img
                v-bind:src="product.images[currentImgIndex]"
                alt="product.name"
              />
            </label>
          </div>
          <div class="row more-img">
            <img
              alt=""
              class="img-more col l-3 m-3 c-3"
              v-for="(url, index) in product.images"
              :key="index"
              v-bind:src="url"
              @click="setShowImage(index)"
            />
          </div>
        </div>
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
          <SelectNumber
            :max="max"
            :value="number"
            v-on:change="setNumber"
            class="number-detail"
          />
          <Size
            :sizes="product.sizes"
            v-on:change="setSize"
            :selectedSize="size"
          />
          <button class="btn add-cart" v-on:click="add">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    <input type="checkbox" id="cbModal" class="checkbox-img-product" />
    <div class="modal">
      <div class="modal-content">
        <label for="cbModal" class="modal-close">&times;</label>
        <div class="row hide-on-tablet hide-on-mobile">
          <div class="col l-6 m-12 c-12 main-img-wrap">
            <img
              v-bind:src="product.images[currentImgIndex]"
              alt="product.name"
            />
          </div>
          <div class="col l-6 m-12 c-12 hide-on-tablet hide-on-mobile">
            <div class="row more-img-dialog">
              <img
                alt=""
                class="col l-3 m-3 c-6 small-img"
                v-for="(url, index) in product.images"
                :key="index"
                v-bind:src="url"
                @click="setShowImage(index)"
              />
            </div>
          </div>
        </div>
        <div class="hide-on-pc img-on-tablet-mobile">
          <img
            v-bind:src="product.images[currentImgIndex]"
            alt="product.name"
          />
          <div class="img-icon icon-previous" @click="prveviousImg">
            &#8249;
          </div>
          <div class="img-icon icon-next" @click="nextImg">&#8250;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../base/api";
import SelectNumber from "./SelectNumber";
import Size from "./Size";
export default {
  name: "Detail",
  components: { SelectNumber, Size },
  data() {
    return {
      product: null,
      number: 1,
      max: 1,
      size: "",
      currentImgIndex: 0,
    };
  },
  created() {
    const slug = this.$route.params.slug;
    get(`products/${slug}`).then((data) => {
      this.product = data.data[0];
    });
  },
  methods: {
    add() {
      if (this.isInvalideSize()) {
        alert("Bạn chưa chọn size");
        return;
      }
      if (!this.validateNumber()) {
        alert(
          "Số lượng chọn nhiều hơn số sản phẩm đang có, bạn kiểm tra lại giỏ hàng nhé"
        );
        return;
      }

      this.$store.commit("ADD_ORDER", {
        ...this.product,
        orderNumber: this.number,
        orderSize: this.size,
        checked: false,
      });
    },
    setNumber(newNumber) {
      this.number = newNumber;
    },
    setSize(newSize) {
      if (this.size !== newSize) {
        this.size = newSize;
        this.number = 1;
        let max = this.product.sizes.filter((x) => x.size === newSize)[0]
          .number;
        this.max = max;
      }
    },
    setShowImage(index) {
      this.currentImgIndex = index;
    },
    isInvalideSize() {
      return this.size === "";
    },
    prveviousImg() {
      if (this.currentImgIndex > 0) {
        this.currentImgIndex--;
      } else {
        this.currentImgIndex = this.product.images.length - 1;
      }
    },
    nextImg() {
      if (this.currentImgIndex < this.product.images.length - 1) {
        this.currentImgIndex++;
      } else {
        this.currentImgIndex = 0;
      }
    },
    validateNumber() {
      let isValid = true;
      const exitOrder = this.$store.state.orders.filter(
        (x) => x.orderSize === this.size
      )[0];
      if (exitOrder) {
        if (
          exitOrder.orderNumber + this.number >
          this.product.sizes.filter((x) => x.size === this.size)[0].number
        ) {
          isValid = false;
        }
      }
      return isValid;
    },
  },
};
</script>

<style lang="css" scoped>
.main-img {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70%;
}

.more-img {
  margin: 10px 0;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
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

.number-detail {
  margin: 10px 0;
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
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
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
  max-height: 200px;
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

@media (max-width: 1023px) {
  .modal {
    z-index: 10;
  }
  .modal-content {
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 12px;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
  }
  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .img-on-tablet-mobile,
  .img-on-tablet-mobile > img {
    max-height: calc(100vh - 24px);
    max-width: calc(100vw - 24px);
  }
  .img-icon {
    position: absolute;
    font-size: 5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .icon-previous {
    left: 25px;
  }
  .icon-next {
    right: 25px;
  }
}
</style>