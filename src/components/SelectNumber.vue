<template>
  <div class="select-number">
    <div class="change-number change-number--change" v-on:click="onDown">-</div>
    <span class="change-number">{{ number }}</span>
    <div class="change-number change-number--change" v-on:click="onUp">+</div>
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