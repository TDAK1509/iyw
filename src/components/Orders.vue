<template>
  <div>
    <div v-for="(item, index) in orders" :key="index" class="row order-item">
      <div class="orders__item col l-6 m-12 c-12">
        <input type="checkbox" />
        <img v-bind:src="item.images[0]" alt="Hình sản phẩm" />
        <div class="name-infor">
          <span>{{ item.name }}</span>
          <div class="show-on-mobile hide-on-pc show-on-tablet">
            <div class="orders__infor col l-6 m-6 c-12">
              <div>{{ item.price.toLocaleString() }}</div>
              <Size />
              <SelectNumber max="10" />
              <span class="orders__action">Xóa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hide-on-mobile hide-on-tablet orders__infor col l-6 m-6 c-12">
        <div class="col l-3 m-3">
          <Size />
        </div>
        <div class="col l-3 m-3">950.000</div>
        <div class="col l-3 m-3">
          <SelectNumber max="10" />
        </div>
        <div class="col l-3 m-3">
          <span class="orders__action">Xóa</span>
        </div>
      </div>
    </div>
  </div>
  <div class="cart-list__summary">
    <div class="cart-list__infor">
      <div class="cart-list__infor-label">Tổng số tiền (3 sản phẩm):</div>
      <div class="cart-list__infor-sum-money">999.000</div>
    </div>
    <div class="cart-list__action">
      <button class="btn">Mua hàng</button>
    </div>
  </div>
</template>

<script>
import SelectNumber from "./SelectNumber";
import Size from "./Size";
export default {
  name: "Orders",
  created() {
    let orders = localStorage.getItem("IYW_ORDER");
    if (orders) {
      orders = JSON.parse(orders);
      this.orders = orders;
      this.$store.commit("SET_ORDER", orders);
    }
  },
  data() {
    return { orders: [] };
  },
  components: { SelectNumber, Size },
};
</script>

<style lang="css" scoped>
.order-item {
  margin-bottom: 5px;
}
.orders__item {
  display: flex;
  align-items: center;
}
.name-infor > span,
.orders__item > input[type="checkbox"] {
  margin: 5px;
  font-size: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.orders__item > img {
  height: 80px;
  width: 80px;
}

.orders__infor {
  display: flex;
}

.l-3,
.m-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.orders__action {
  color: red;
  cursor: pointer;
}

.cart-list__summary {
  display: flex;
  justify-content: flex-end;
}

.cart-list__infor,
.cart-list__action {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.cart-list__infor-label {
  font-size: 1.8rem;
  margin-right: 1rem;
}

.cart-list__infor-sum-money {
  font-size: 3rem;
  color: red;
}
.card__img {
  height: 150px;
}
@media (max-width: 739px) {
  .card__img {
    height: 100px;
    width: 100px;
  }
  .orders__infor {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
  }
  .orders__item > img {
    height: 100px;
    width: 100px;
  }
}

@media (min-width: 740px) and (max-width: 1023px) {
  .card__img {
    height: 100px;
    width: 100px;
  }
  .orders__infor {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
  }
  .orders__item > img {
    height: 100px;
    width: 100px;
  }
}
</style>