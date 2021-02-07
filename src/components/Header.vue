<template>
    <header id="header">
        <navbar />

        <div class="header-content">
            <img src="../assets/img/PBg.png" id="pbg" alt="" />
            <img src="../assets/img/PLeft.png" id="pl" alt="" />
            <img src="../assets/img/PRight.png" id="pr" alt="" />
            <img src="../assets/img/PKeyboard.png" id="pk" alt="" />
            <img src="../assets/img/PCrown.png" id="cr" alt="" />
            <h1 id="text">GLORYDEV</h1>
        </div>
    </header>
</template>

<script>
    import navbar from "@/components/Navbar.vue";

    export default {
        name: "HeaderHome",
        components: {
            navbar,
        },
        mounted() {
            let pbg = document.getElementById("pbg");
            let pl = document.getElementById("pl");
            let pr = document.getElementById("pr");
            let pk = document.getElementById("pk");
            let text = document.getElementById("text");
            let cr = document.getElementById("cr");

            window.addEventListener("scroll", function () {
                var value = window.scrollY;

                pbg.style.top = value * 0.5 + "px";
                pl.style.left = -value * 0.5 + "px";
                pr.style.left = value * 0.5 + "px";
                pk.style.top = value * 0.15 + "px";
                text.style.top = value * 1 + "px";
                cr.style.top = value * 1 + "px";
            });
        },
        beforeDestroy() {
            let pbg = document.getElementById("pbg");
            let pl = document.getElementById("pl");
            let pr = document.getElementById("pr");
            let pk = document.getElementById("pk");
            let text = document.getElementById("text");
            let cr = document.getElementById("cr");

            window.removeEventListener("scroll", function () {
                var value = window.scrollY;

                pbg.style.top = value * 0.5 + "px";
                pl.style.left = -value * 0.5 + "px";
                pr.style.left = value * 0.5 + "px";
                pk.style.top = value * 0.15 + "px";
                text.style.top = value * 1 + "px";
                cr.style.top = value * 1 + "px";
            });
        },
    };
</script>

<style>
    header {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .header-content {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    header:before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        background: linear-gradient(to top, white, transparent);
        z-index: 10000;
    }

    header img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }

    #text {
        position: relative;
        z-index: 1;
        font-family: "Montserrat", sans-serif;
        color: black;
        font-size: 7em;
        text-align: center;
        font-weight: 600;
    }

    #pk {
        z-index: 2;
    }
</style>