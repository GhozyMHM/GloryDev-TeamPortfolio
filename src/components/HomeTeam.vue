<template>
    <div class="home-team">
        <div class="p-container-3">
            <div class="p-content pc3">
                <div data-aos="fade-down" class="theteam">
                    <h1>The Team</h1>
                    <p><i class="fas fa-caret-down animate__animated animate__fadeOutDown animate__infinite"></i></p>
                </div>
                <div class="top-tri"></div>
            </div>
        </div>
        <div class="p-container-4">
            <div class="sp-cont">
                <div data-aos="fade-left" class="row row-sp-cont">
                    <div class="col-lg-5 col-sm-12 col-12 spc1">
                        <img class="selfpict" src="../assets/img/ghozy.gif" alt="" />
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12 spc2">
                        <h1>Ghozy Muhammad Hanzhalah Muchjidi</h1>
                        <div class="row-bio">
                            <div class="bio bio-tech">
                                <h3>Web Developer</h3>
                                <p>Major Skills :</p>
                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/JS.png" alt="" />
                                    <span class="tooltiptext">Javascript</span>
                                </div>

                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/Vue Js.png" alt="" />
                                    <span class="tooltiptext">Vue.js</span>
                                </div>

                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/Nodejs.png" alt="" />
                                    <span class="tooltiptext">Node.js</span>
                                </div>

                            </div>
                            <div class="bio bio-contact">
                                <div class="contact-icon">
                                    <a href="">
                                        <p class="contact"><i class="fab fa-github"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-linkedin"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-instagram"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-whatsapp"></i></p>
                                    </a>
                                </div>
                                <router-link to="/ghozy" class="see-works">See Works</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-container-4">
            <div class="sp-cont">
                <div data-aos="fade-right" class="row row-sp-cont">
                    <div class="col-md-6 col-sm-12 col-12 spc2">
                        <h1>Muhamad Rafi Rahmat Alghifari</h1>
                        <div class="row-bio">
                            <div class="bio bio-tech">
                                <h3>UI Designer</h3>
                                <p>Major Skills :</p>
                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/figma.png" alt="" />
                                    <span class="tooltiptext">Figma</span>
                                </div>

                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/Invision.png" alt="" />
                                    <span class="tooltiptext">Invision</span>
                                </div>

                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/Photoshop.png" alt="" />
                                    <span class="tooltiptext">Photoshop</span>

                                </div>
                            </div>
                            <div class="bio bio-contact">
                                <div class="contact-icon">
                                    <a href="">
                                        <p class="contact"><i class="fab fa-github"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-linkedin"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-instagram"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-whatsapp"></i></p>
                                    </a>
                                </div>
                                <router-link to="/rafi" class="see-works">See Works</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12 col-12 spc1 spc1b">
                        <img class="selfpict" src="../assets/img/Rafi.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="p-container-4">
            <div class="sp-cont">
                <div data-aos="fade-left" class="row row-sp-cont">
                    <div class="col-md-5 col-sm-12 col-12 spc1">
                        <img class="selfpict" src="../assets/img/Shiddiq.gif" alt="" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-12 spc2">
                        <h1>Muhammad Shiddiq Fathullah</h1>
                        <div class="row-bio">
                            <div class="bio bio-tech">
                                <h3>UX Researcher</h3>
                                <p>Major Skills :</p>
                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/figma.png" alt="" />
                                    <span class="tooltiptext">Figma</span>
                                </div>

                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/HTML.png" alt="" />
                                    <span class="tooltiptext">HTML</span>
                                </div>

                                <div class="icon-tech">
                                    <img class="tech" src="../assets/img/Tailwindcss.png" alt="" />
                                    <span class="tooltiptext">Tailwind</span>
                                </div>
                            </div>
                            <div class="bio bio-contact">
                                <div class="contact-icon">
                                    <a href="">
                                        <p class="contact"><i class="fab fa-github"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-linkedin"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-instagram"></i></p>
                                    </a>
                                    <a href="">
                                        <p class="contact"><i class="fab fa-whatsapp"></i></p>
                                    </a>
                                </div>
                                <router-link to="/shiddiq" class="see-works">See Works</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeTeam",
        components: {},
    };
</script>

<style scoped>
    @import "../assets/home-style.css";
    @import "../assets/home-team.css";
</style>