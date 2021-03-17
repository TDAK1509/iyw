<template>
  <div class="number-area" :class="{ numberBelow: showNumberBelow }">
    <div class="select-number">
      <div class="change change--down" v-on:click="onDown">-</div>
      <div class="value">{{ number }}</div>
      <div class="change change--up" v-on:click="onUp">+</div>
    </div>
    <span>Còn {{ max }} sản phẩm</span>
  </div>
</template>

<script>
export default {
  name: "SelectNumber",
  props: { max: Number, value: Number, showNumberBelow: Boolean },
  created() {
    this.number = this.value;
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
  watch: {
    value: function (old, newVal) {
      if (newVal != old) {
        this.number = old;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.number-area {
  display: flex;
  border: none;
  align-items: center;
}
.number-area > span {
  margin-left: 5px;
  font-size: 1.5rem;
}
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
.numberBelow {
  flex-direction: column;
  align-items: flex-start;
}
.numberBelow > span {
  margin-top: 5px;
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