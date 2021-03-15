<template>
  <div class="select-size">
    <div
      class="value"
      @click="selectSize(item.size)"
      v-for="item in sizes"
      :key="item._id"
    >
      {{ item.size }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Size",
  props: ["sizes"],
  data() {
    return {
      selectedSize: null,
    };
  },
  methods: {
    selectSize(size) {
      this.$emit("change", size);
    },
  },
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