<template>
  <footer class="footer">
    <div class="grid">
      <span>In your way 2021</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="css" scoped>
/* Footer */

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-height);
  background-color: var(--primary-color);
  display: flex;
  margin: auto;
}

.footer > .grid {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 2.5rem;
  color: var(--white-color);
}
</style>