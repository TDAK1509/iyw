<template>
  <header class="header">
    <div class="grid wide">
      <div class="header__search">
        <div class="search__logo hide-on-mobile hide-on-tablet">
          <router-link to="/">
            <img src="../assets/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="header-search__text">
          <SearchInput></SearchInput>
        </div>
        <div class="search__cart">
          <CartIcon></CartIcon>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchInput from "./Search.vue";
import CartIcon from "./CartIcon.vue";
export default {
  name: "Header",
  components: { SearchInput, CartIcon },
};
</script>

<style lang="css" scoped>
/* NavBar */

.header {
  background-color: var(--primary-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: calc(var(--nav-height) + var(--header-search-height));
}

.header__navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
}

/* Search */
.header-search__text {
  flex: 1;
  position: relative;
}
.header__search {
  display: flex;
  align-items: center;
  height: var(--header-search-height);
}

.search__logo {
  width: 120px;
  margin: auto;
  padding-right: 1rem;
}

.search__logo-img {
  max-width: 100%;
  height: auto;
}

.search__cart {
  width: 65px;
  display: flex;
  justify-content: space-around;
}
</style>