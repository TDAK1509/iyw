<template>
  <div class="pruduct-detail__size">
    <div class="change-number change-number--change">S</div>
    <div class="change-number change-number--change">M</div>
    <div class="change-number change-number--change">L</div>
    <div class="change-number change-number--change">XL</div>
  </div>
</template>

<script>
export default {
  name: "Size",
};
</script>

<style lang="css" scoped>
.pruduct-detail__size {
  display: flex;
}
.select-number {
  display: flex;
  margin: 10px 0;
}

.change-number {
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

.change-number--change {
  cursor: pointer;
}
</style>