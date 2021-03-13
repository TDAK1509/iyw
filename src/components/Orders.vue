<template>
  <div>
    <div class="cart-list">
      <div class="cart-item">
        <div class="row">
          <div class="col l-3 m-12 c-12 dpfl">
            <div class="cart-tem__select">
              <input class="cart-tem__checkbox" type="checkbox" />
            </div>
            <div class="cart-tem__image">
              <img
                src="https://picsum.photos/80"
                alt="Hình sản phẩm"
                class="card__img"
              />
            </div>
            <div class="cart-tem__name">
              <span>Túi xách nữ LEMINO LE2220442</span>
            </div>
          </div>
          <div class="col l-3 m-12 c-12">
            <div class="cart-tem__type">Size: <Size /></div>
          </div>
          <div class="col l-3 m-12 c-12">
            <div class="cart-tem__price">
              <div class="cart-tem__price--now">950.000</div>
            </div>
            <div class="cart-tem__count">
              <div class="pruduct-detail__select-number">
                <SelectNumber />
              </div>
            </div>
            <div class="cart-tem__sum">950.000</div>
          </div>
          <div class="col l-3 m-12 c-12">
            <div class="cart-tem__action">Xóa</div>
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
  </div>
</template>

<script>
import SelectNumber from "./SelectNumber";
import Size from "./Size";
export default {
  name: "Orders",
  components: { SelectNumber, Size },
};
</script>

<style lang="css" scoped>
.cart-list {
}

.cart-item {
  margin-bottom: 1rem;
}

.cart-tem__select,
.cart-tem__action {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}

.cart-tem__checkbox {
}

.cart-tem__name {
  padding-left: 10px;
  flex: 1;
  font-size: 1.8rem;
}

.cart-tem__type,
.cart-tem__price,
.cart-tem__count,
.cart-tem__sum {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.8rem;
}

.cart-tem__price--orign {
  color: gray;
  text-decoration: line-through;
  padding-right: 1rem;
}

.cart-tem__action {
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
  }
}
</style>