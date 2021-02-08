<template>
  <div class="home">
    <HeaderHome />
    <div class="p-container-1">
      <div class="p-content pc1">
        <div data-aos="fade-up">
          <h1 id="tagline">Great Application <br />To Be The Great Company </h1>
        </div>
        <div class="bott-tri"></div>
        <div class="top-tri"></div>
      </div>
      <div class="p-container-2">
        <div class="p-content pc2">
          <div data-aos="zoom-in">
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
            </div>
          </div>
        </div>
      </div>
      <HomeTeam />
    </div>
  </div>
</template>
<script>
  import HeaderHome from "@/components/Header.vue";
  import HomeTeam from "@/components/HomeTeam.vue";
  import AOS from "aos";

  export default {

    name: "Home",
    components: {
      HeaderHome,
      HomeTeam,
    }

    ,
    mounted() {
      AOS.init({
          duration: 700,
          mirror: true,
        }

      );
    }

    ,
  }

  ;
</script>
<style scoped>
  @import "../assets/home-style.css";
</style>