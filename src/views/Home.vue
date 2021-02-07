<template>
  <div class="home">
    <HeaderHome />
    <div class="p-container-1">
      <div class="p-content">
        <h1 id="tagline">Great Application <br> To Be The Great Company</h1>
        <div class="bott-tri"></div>
        <div class="top-tri"></div>
      </div>
      <div class="p-container-2">
        <div class="p-content pc2">
          <h1>What We Can Do</h1>
          <div class="service">
            <div class="do">
              <div class="outerring">
                <div class="innerring">
                  <p class="faicon"><i class="fas fa-code fa-4x"></i></p>
                </div>
              </div>
              <h5>Web Development</h5>
            </div>
            <div class="do">
              <div class="outerring">
                <div class="innerring">
                  <p class="faicon"><i class="fas fa-mobile-alt fa-4x"></i></p>
                </div>
              </div>
              <h5>Mobile Development</h5>
            </div>
            <div class="do">
              <div class="outerring">
                <div class="innerring">
                  <p class="faicon"><i class="far fa-object-group fa-4x"></i></p>
                </div>
              </div>
              <h5>UI/UX Design</h5>
            </div>








            <!-- <div class="do">
              <p class="faicon"><i class="fas fa-code fa-7x"></i></p>
              <h5>Web Development</h5>
            </div>
            <div class="do">
              <p class="faicon"><i class="fas fa-mobile-alt fa-7x"></i></p>
              <h5>Mobile Development</h5>
            </div>
            <div class="do">
              <p class="faicon"><i class="far fa-object-group fa-7x"></i></p>
              <h5>UI/UX Design</h5>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderHome from "@/components/Header.vue";

  export default {
    name: "Home",
    components: {
      HeaderHome,
    },
  };
</script>

<style scoped>
  @import "../assets/home-style.css";
</style>