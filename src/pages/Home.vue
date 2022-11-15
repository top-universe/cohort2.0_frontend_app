<template>
  <navBar class="nav" />
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  components: {
    navBar,
  },
};
</script>

<style scoped>
/* .nav {
  position: fixed;
  top: 0;
} */
.home {
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
}
</style>
