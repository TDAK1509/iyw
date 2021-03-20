<template>
  <form v-on:submit.prevent="checkout" v-if="!isSuccess">
    <div v-if="ordersInfor.length === 0" class="no-order">
      <img
        alt="Cart"
        src="data:image/png;base64,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"
      />
      <h1>Bạn chưa chọn sản phẩm</h1>
    </div>
    <div v-if="ordersInfor.length > 0">
      <div v-for="item in ordersInfor" :key="item._id" class="row order-item">
        <div class="orders__item col l-6 m-12 c-12">
          <img v-bind:src="item.images[0]" alt="Hình sản phẩm" />
          <div class="name-infor">
            <router-link v-bind:to="`/detail/${item.slug}`">{{
              item.name
            }}</router-link>
            <div class="show-on-mobile show-on-tablet hide-on-pc">
              <div class="orders__infor col l-6 c-6 c-12">
                <div class="orders__price-size">Size: {{ item.orderSize }}</div>
                {{ item.price.toLocaleString() }} x {{ item.orderNumber }}
              </div>
            </div>
          </div>
          <span class="hide-on-pc orders__action">{{
            (item.orderNumber * item.price).toLocaleString()
          }}</span>
        </div>
        <div
          class="hide-on-mobile hide-on-tablet orders__infor col l-6 m-6 c-12"
        >
          <div class="col l-3 m-3">Size: {{ item.orderSize }}</div>
          <div class="col l-3 m-3">{{ item.price.toLocaleString() }}</div>
          <div class="col l-3 m-3">{{ item.orderNumber }}</div>
          <div class="col l-3 m-3">
            <span class="orders__action">{{
              (item.orderNumber * item.price).toLocaleString()
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="ordersInfor && ordersInfor.length > 0" class="summary">
      <div class="summary__infor">
        <div class="summary__infor-span">
          Tổng ({{ count.toLocaleString(0) }} sản phẩm):
        </div>
        <div class="summary__infor-sum-money">{{ sum.toLocaleString(0) }}</div>
      </div>
    </div>

    <div v-if="ordersInfor && ordersInfor.length > 0" class="user-infor">
      <div class="group">
        <h4 class="title">Tên của bạn</h4>
        <input
          type="text"
          class="text"
          maxlength="50"
          minlength="2"
          v-model="name"
          required
        />
      </div>
      <div class="group">
        <h4 class="title">Số điện thoại</h4>
        <input
          type="text"
          v-model="phone"
          class="text"
          maxlength="11"
          pattern="^(0|84|\+84)\d{9,10}$"
          required
        />
      </div>
      <div class="group">
        <h4 class="title">Địa chỉ</h4>
        <textarea
          class="text"
          v-model="address"
          maxlength="200"
          minlength="10"
          required
        ></textarea>
      </div>
      <div class="group">
        <h4 class="title">Ghi chú</h4>
        <input type="tel" class="text" v-model="note" />
      </div>
    </div>
    <button
      v-if="ordersInfor && ordersInfor.length > 0"
      class="btn btn-action"
      type="submit"
    >
      Đặt hàng
    </button>
  </form>
  <div v-else class="success">
    <img
      id="icon-success"
      alt="Icon success"
      src="https://alfredomedia.com/wp-content/uploads/2018/01/ok.png"
    />
    <h3>Đơn hàng đã được đặt thành công, mình sẽ liên hệ bạn xác nhận nhé</h3>
  </div>
</template>

<script>
import { post } from "../base/api";
export default {
  name: "Checkout",
  created() {
    if (this.$store.state.orders) {
      this.ordersInfor = this.$store.state.orders.filter((x) => x.checked);
    }
  },
  data() {
    return {
      ordersInfor: [],
      name: "",
      phone: "",
      address: "",
      note: "",
      price: 0,
      isSuccess: false,
    };
  },
  computed: {
    count() {
      let count = 0;
      this.ordersInfor.forEach((order) => {
        if (order.checked) {
          count += order.orderNumber;
        }
      });
      return count;
    },
    sum() {
      let sum = 0;
      this.ordersInfor.forEach((order) => {
        if (order.checked) {
          sum += order.price * order.orderNumber;
        }
      });
      return sum;
    },
  },
  methods: {
    checkout() {
      if (!this.validate()) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      const deliverInfor = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        note: this.note,
      };
      let orderInfor = [];
      this.ordersInfor.forEach((item) => {
        orderInfor.push({
          id: item._id,
          slug: item.slug,
          name: item.name,
          price: item.price,
          number: item.orderNumber,
          size: item.orderSize,
        });
      });
      const orderObject = {
        total: this.sum,
        count: this.count,
        deliverInfor,
        orderInfor,
      };
      post("orders", orderObject).then((data) => {
        this.updateStore();
        this.udateOrderedIte(data.data);
        this.isSuccess = true;
      });
    },
    updateStore() {
      const newOrders = this.$store.state.orders;
      newOrders.forEach((item, index) => {
        if (item.checked) {
          newOrders.splice(index, 1);
        }
      });
      this.$store.commit("SET_ORDER", newOrders);
    },
    udateOrderedIte(data) {
      let ordered = JSON.parse(localStorage.getItem("IYW_ORDERED"));
      if (ordered && Array.isArray(ordered)) {
        ordered.push(data);
      } else {
        ordered = [data];
      }
      localStorage.setItem("IYW_ORDERED", JSON.stringify(ordered));
      console.log(JSON.parse(localStorage.getItem("IYW_ORDERED")));
    },
    validate() {
      return (
        this.name.trim().length > 0 &&
        this.phone.trim().length &&
        this.address.trim().length
      );
    },
  },
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
.name-infor {
  flex: 1;
}
.name-infor > a,
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

.summary {
  display: flex;
  justify-content: flex-end;
}

.summary__infor,
.summary__action {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.summary__infor-span {
  font-size: 1.8rem;
  margin-right: 1rem;
}

.summary__infor-sum-money {
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
    justify-content: space-around;
  }
  .orders__item > img {
    height: 100px;
    width: 100px;
  }
}
.no-order {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.text {
  padding: 7px;
  width: 100%;
}

.text:focus {
  outline-color: var(--primary-color);
}
.btn-action {
  margin: 10px 0;
  margin-left: 5px;
}

.user-infor {
  padding: 5px;
}

.success {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.success > img {
  max-width: 300px;
  height: auto;
}

#icon-success {
  max-width: 60px;
  height: auto;
}

@media (min-width: 740px) and (max-width: 1023px) {
  .card__img {
    height: 100px;
    width: 100px;
  }
  .orders__infor {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .orders__item > img {
    height: 100px;
    width: 100px;
  }
  .orders__price-size {
    font-size: 1.5rem;
    color: var(--primary-color);
    padding: 5px 0;
  }
}
</style>