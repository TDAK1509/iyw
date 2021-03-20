<template>
  <div v-if="query.trim() === ''" class="empty">
    Vùi lòng nhập từ khóa vào ô tìm kiếm để tìm kiếm sản phẩm
  </div>
  <div v-if="searched">
    <div class="show-result">
      Tìm thấy {{ count }} kết quả cho từ khóa "{{ query }}"
    </div>
    <div class="row">
      <Card v-for="item in data" :key="item._id" :product="item" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { get } from "../base/api";
export default {
  name: "SearchResults",
  components: { Card },
  data() {
    return {
      query: "",
      data: [],
      count: 0,
      searched: false,
    };
  },
  created() {
    const query = this.$route.params.catchAll;
    if (query && query.trim().length > 0) {
      this.query = query;
      this.searchData();
    }
  },
  methods: {
    searchData() {
      if (this.query && this.query.trim().length > 0) {
        get(`products/search/${this.query.trim()}`).then((data) => {
          this.searched = true;
          this.data = data.data;
          this.count = data.results | 0;
        });
      }
    },
  },
  watch: {
    "$route.params.catchAll": function () {
      if (this.$route.params.catchAll?.trim() !== this.query) {
        this.query = this.$route.params.catchAll;
        this.searched = false;
        this.searchData();
      }
    },
  },
};
</script>

<style lang="css" scoped>
.empty,
.show-result {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 2rem 1rem;
}
</style>