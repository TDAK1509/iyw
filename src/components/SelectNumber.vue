<template>
  <div class="select-number">
    <div class="change change--down" v-on:click="onDown">-</div>
    <div class="value">{{ number }}</div>
    <div class="change change--up" v-on:click="onUp">+</div>
  </div>
</template>

<script>
export default {
  name: "SelectNumber",
  props: ["max"],
  data() {
    return { number: 1 };
  },
  methods: {
    onUp() {
      if (this.number < this.max) {
        this.number++;
      }
      this.$emit("change", this.number);
    },
    onDown() {
      if (this.number > 1) {
        this.number--;
        this.$emit("change", this.number);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.select-number {
  display: flex;
  border: 1px solid gray;
  align-items: center;
  font-size: 1.6rem;
  width: 90px;
}

.change {
  height: 30px;
  width: 30px;
  padding: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.value {
  height: 30px;
  width: 30px;
  padding: auto;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 739px) {
  .value,
  .change {
    height: 20px;
    widows: 20px;
  }
  .select-number {
    width: 60px;
  }
}
</style>