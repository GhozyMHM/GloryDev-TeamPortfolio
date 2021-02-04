<template>
  <div class="home">
    <div class="identity">
      <img class="main-logo" alt="GloryDev Logo" src="../assets/logo fix.png" />
      <h1>Great Application <br> to be The Great Company</h1>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: "Home",
    components: {
      // HelloWorld,
    },
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

  .identity {
    height: 89vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  img.main-logo {
    width: 200px;
  }

  .identity h1 {
    color: #FEAD09;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 20px;
  }
</style>