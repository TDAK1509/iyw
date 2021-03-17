<template>
  <div>Search Work {{ query }}</div>
</template>

<script>
export default {
  name: "SearchResults",
  data() {
    return {
      query: "",
    };
  },
  created() {
    const query = this.$route.params.query;
    if (query) {
      this.query = query;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>