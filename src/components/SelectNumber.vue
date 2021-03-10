<template>
  <div>
    <div class="pruduct-detail__select-number">
      <div
        class="product-detail__change-number product-detail__change-number--change"
      >
        -
      </div>
      <span class="product-detail__change-number">2</span>
      <div
        class="product-detail__change-number product-detail__change-number--change"
      >
        +
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectNumber",
};
</script>

<style lang="css" scoped>
.pruduct-detail__select-number {
  display: flex;
  margin: 10px 0;
}

.product-detail__change-number {
  height: 40px;
  width: 40px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 2rem;
  margin-right: 10px;
}

.product-detail__change-number--change {
  cursor: pointer;
}
</style>