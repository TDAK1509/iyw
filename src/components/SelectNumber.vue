<template>
  <div class="select-number">
    <div
      class="change-number change-number--change"
      v-on:click="number > 1 ? number-- : (number = 1)"
    >
      -
    </div>
    <span class="change-number">{{ number }}</span>
    <div class="change-number change-number--change" v-on:click="number++">
      +
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectNumber",
  data() {
    return { number: 1 };
  },
};
</script>

<style lang="css" scoped>
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