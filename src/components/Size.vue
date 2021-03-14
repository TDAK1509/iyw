<template>
  <div class="select-size">
    <div class="value">S</div>
    <div class="value">M</div>
    <div class="value">L</div>
    <div class="value">XL</div>
  </div>
</template>

<script>
export default {
  name: "Size",
};
</script>

<style lang="css" scoped>
.select-size {
  display: flex;
  width: auto;
}
.value {
  height: 30px;
  width: 30px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
}
@media (max-width: 739px) {
  .value {
    height: 20px;
    width: 20px;
  }
}
</style>