<template>
  <div class="header-search__text">
    <input
      type="text"
      class="header-search__text-input"
      placeholder="Tìm sản phẩm"
    />
    <div class="header-search__history">
      <span class="header-search__history-text">Lịch sử tìm kiếm</span>
      <ul class="header-search__history-list-item">
        <li class="header-search__history-item">Abc</li>
        <li class="header-search__history-item">YAdd</li>
        <li class="header-search__history-item">AAA</li>
        <li class="header-search__history-item">AAAA</li>
        <li class="header-search__history-item">AAAA</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
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
}

.header-search__history-item:hover {
  background-color: #fff2ee;
}
</style>