<template>
  <div class="header-search__text">
    <input
      type="text"
      class="header-search__text-input"
      placeholder="Tìm sản phẩm"
      maxlength="150"
      v-model="key"
      v-on:keyup.enter="search"
    />
    <div class="header-search__history">
      <span class="header-search__history-text">Lịch sử tìm kiếm</span>
      <ul class="header-search__history-list-item">
        <li
          v-for="(item, index) in searchHistory"
          v-bind:key="index"
          class="header-search__history-item"
          v-on:click="onSelect(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return { searchHistory: [], key: "", isHide: false };
  },
  created() {
    const history = localStorage.getItem("IYW_SEARCH");
    if (history) {
      this.searchHistory = history.split(",");
    }
  },
  methods: {
    search: function () {
      let textSearch = this.key.trim();
      if (textSearch === "") {
        return;
      }
      if (this.searchHistory.filter((x) => x === textSearch).length > 0) {
        this.searchHistory.splice(
          this.searchHistory.findIndex((x) => x === textSearch),
          1
        );
      }
      if (this.searchHistory.length > 9) {
        this.searchHistory.length = 9;
      }
      this.searchHistory.unshift(textSearch);
      localStorage.setItem("IYW_SEARCH", this.searchHistory);
      this.$router.push({ path: `/search/${this.key}` });
    },
    onSelect(text) {
      this.searchHistory.splice(
        this.searchHistory.findIndex((x) => x === text),
        1
      );
      this.searchHistory.unshift(text);
      localStorage.setItem("IYW_SEARCH", this.searchHistory);
      this.isHide = true;
      this.$router.push({ path: `/search/${text}` });
    },
  },
};
</script>

<style lang="css" scoped>
.header-search__text-input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1.6rem;
}

.header-search__text-input:focus {
  outline: none;
}

.header-search__history:hover,
.header-search__text-input:focus ~ div {
  display: block;
}

.header-search__history {
  position: absolute;
  background-color: #fff;
  width: 100%;
  border-radius: 2px;
  color: var(--text-color);
  display: none;
  animation: grow linear 0.5;
  margin-top: 0.6rem;
  padding-top: 0.6rem;
}

.header-search__history-text {
  padding-left: 10px;
  font-size: 1.6rem;
}

.header-search__history-list-item {
  padding-left: 0;
  font-size: 1.6rem;
}

.header-search__history-item {
  padding-top: 2px;
  cursor: pointer;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.header-search__history-item:hover {
  background-color: #fff2ee;
}
</style>