<template>
  <div>
    <div class="search__cart-order">
      <span class="orders-number">{{ count }}</span>
      <svg
        class="search__cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 172 172"
        style="fill: #000000"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#ffffff">
            <path
              d="M10.75,10.66602v10.75h21.5c2.30957,0 4.28321,1.51172 5.03906,3.69531l10.03614,89.56933c0.92382,8.10449 7.89453,14.31933 16.04101,14.31933h65.63379v-10.75h-65.63379c-2.77148,0 -5.03906,-2.01562 -5.333,-4.74511l-0.67187,-6.00489h68.19531c7.64257,0 14.31933,-5.45898 15.83105,-12.93359l10.28808,-51.56641h-101.5791l-2.30956,-20.49219l-0.16797,-0.50391c-2.05763,-6.71875 -8.31446,-11.2959 -15.36915,-11.33789zM118.25,129c-5.9209,0 -10.75,4.8291 -10.75,10.75c0,5.9209 4.8291,10.75 10.75,10.75c5.9209,0 10.75,-4.8291 10.75,-10.75c0,-5.9209 -4.8291,-10.75 -10.75,-10.75zM64.5,129c-5.9209,0 -10.75,4.8291 -10.75,10.75c0,5.9209 4.8291,10.75 10.75,10.75c5.9209,0 10.75,-4.8291 10.75,-10.75c0,-5.9209 -4.8291,-10.75 -10.75,-10.75zM51.31446,53.75h87.25976l-7.72656,38.6748c-0.5459,2.56153 -2.6875,4.3252 -5.29101,4.3252h-69.41309z"
            ></path>
          </g>
        </g>
      </svg>
      <div class="search__cart-order-infor">
        <img
          alt=""
          class="search__cart-order-infor-no-item-icon"
          src="data:image/png;base64,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"
        />

        <span class="search__cart-order-infor-no-item-label"
          >Chưa có sản phẩm nào</span
        >
      </div>
    </div>
    <svg
      class="search__cart-icon search__cart-icon--acount"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 172 172"
      style="fill: #000000"
    >
      <g
        fill="none"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
      >
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#ffffff">
          <circle
            cx="12"
            cy="12"
            transform="scale(7.16667,7.16667)"
            r="10"
            opacity="0.35"
          ></circle>
          <circle
            cx="12"
            cy="9"
            transform="scale(7.16667,7.16667)"
            r="3"
          ></circle>
          <path
            d="M128.1615,113.11867c-2.2145,-7.3745 -8.97983,-12.78533 -17.07817,-12.78533h-50.16667c-8.09833,0 -14.86367,5.41083 -17.07817,12.78533c8.9225,13.85317 24.45267,23.048 42.1615,23.048c17.70883,0 33.239,-9.19483 42.1615,-23.048z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "CartIcon",
  created() {
    let local = localStorage.getItem("IYW_ORDER");
    if (isNaN(local)) {
      local = 0;
    }
    this.$store.commit("SET_ORDER", local);
    localStorage.setItem("IYW_SEARCH", local);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="css" scoped>
.search__cart-order {
  position: relative;
  cursor: pointer;
}

.search__cart-icon {
  cursor: pointer;
}

.search__cart-order:hover .search__cart-order-infor {
  display: block;
}

.search__cart-order-infor::before {
  content: "";
  border: 12px solid;
  border-color: transparent transparent #fff transparent;
  position: absolute;
  right: 0px;
  top: -20px;
}

.search__cart-order::after {
  content: "";
  border: 5px solid transparent;
  position: absolute;
  top: calc(100%);
  right: 0;
  min-width: 50px;
}

.search__cart-order-infor {
  position: absolute;
  display: none;
  background-color: var(--white-color);
  padding: 10px;
  right: 0;
  top: calc(100% + 10px);
  width: 200px;
  border-radius: 2px;
  animation: grow linear 0.5;
  width: 300px;
}

.search__cart-order-infor-no-item-icon {
  margin: auto;
  display: block;
}

.search__cart-order-infor-no-item-label {
  text-align: center;
  display: block;
  font-size: 1.6rem;
}

.search__cart-icon--acount {
  display: none;
}
.orders-number {
  position: absolute;
  top: -11px;
  right: -2px;
  padding: 5px;
  color: #ffff;
  font-weight: 600;
}
</style>