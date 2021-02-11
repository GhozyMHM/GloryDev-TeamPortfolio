<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";

export default {
  components: {},
  mounted() {
    AOS.init({
      duration: 700,
      mirror: true,
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

body,
html {
  height: 100%;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>