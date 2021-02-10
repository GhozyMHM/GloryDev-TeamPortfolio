<template>
  <div class="home">
    <HeaderHome />

    <div class="p-container-1">
      <div class="p-content pc1">
        <div data-aos="fade-up">
          <h1 id="tagline">Great Application <br />To Be The Great Company</h1>
        </div>
        <div class="bott-tri"></div>
        <div class="top-tri"></div>
      </div>
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
                  <p class="faicon">
                    <i class="fas fa-mobile-alt fa-4x"></i>
                  </p>
                </div>
              </div>
              <h5>Mobile Development</h5>
            </div>
            <div class="do">
              <div class="outerring">
                <div class="innerring">
                  <p class="faicon">
                    <i class="far fa-object-group fa-4x"></i>
                  </p>
                </div>
              </div>
              <h5>UI/UX Design</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeTeam />

    <FooterContent />
  </div>
</template>
<script>
import HeaderHome from "@/components/Header.vue";
import HomeTeam from "@/components/HomeTeam.vue";
import FooterContent from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderHome,
    HomeTeam,
    FooterContent,
  },

  mounted() {
    window.onscroll = function () {
      var navbar = document.getElementById("navbar");
      var ul = document.getElementById("ul");
      var dropmenu = document.getElementById("dropdown-menu");
      let menu = document.getElementsByClassName("menu");
      let line = document.getElementsByClassName("line");
      // let active = document.getElementsByClassName('router-link-exact-active');

      if (window.pageYOffset > 700) {
        navbar.style.background = "#276678";
        dropmenu.style.background = "#276678";
        for (let x = 0, leng = menu.length; x < leng; x++) {
          menu[x].style.color = "#D9E6EA";
        }
        for (let y = 0, leng = line.length; y < leng; y++) {
          line[y].style.color = "#D9E6EA";
        }
        ul.style.margin = "5px 0";
      } else {
        navbar.style.background = "transparent";
        dropmenu.style.background = "rgb(140, 207, 252)";
        for (let x = 0, leng = menu.length; x < leng; x++) {
          menu[x].style.color = "#1f5766";
        }
        for (let y = 0, leng = line.length; y < leng; y++) {
          line[y].style.color = "#1f5766";
        }
        ul.style.margin = "20px 0";
      }
    };
  },
};
</script>
<style scoped>
@import "../assets/home-style.css";
</style>