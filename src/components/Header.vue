<template>
    <header id="header">
        <navbar />

        <div class="header-content">
            <img src="../assets/img/PBg.png" id="pbg" alt="" />

            <img src="../assets/img/PLeft.png" id="pl" alt="" />
            <img src="../assets/img/PLeft Ipad.png" id="pli" alt="" />
            <img src="../assets/img/PLeft Mobile.png" id="plm" alt="" />

            <img src="../assets/img/PRight.png" id="pr" alt="" />
            <img src="../assets/img/PRight Ipad.png" id="pri" alt="" />
            <img src="../assets/img/PRight Mobile.png" id="prm" alt="" />

            <img src="../assets/img/PKeyboard.png" id="pk" alt="" />
            <img src="../assets/img/PKeyboard Ipad.png" id="pki" alt="" />

            <img src="../assets/img/PCrown.png" id="cr" alt="" />
            <img src="../assets/img/PCrown Ipad.png" id="crown" alt="">
            <img src="../assets/img/PCrown Mobile.png" id="crm" alt="">
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
        mounted: function () {
            let pbg = document.getElementById("pbg");

            let pl = document.getElementById("pl");
            let pli = document.getElementById("pli");
            let plm = document.getElementById("plm");

            let pr = document.getElementById("pr");
            let pri = document.getElementById("pri");
            let prm = document.getElementById("prm");

            let pk = document.getElementById("pk");
            let pki = document.getElementById("pki");

            let text = document.getElementById("text");

            let cr = document.getElementById("cr");
            let crown = document.getElementById("crown");
            let crm = document.getElementById("crm");

            window.addEventListener("scroll", function () {
                var value = window.scrollY;

                pbg.style.top = value * 0.5 + "px";

                pl.style.left = -value * 0.5 + "px";
                pli.style.left = -value * 0.5 + "px";
                plm.style.left = -value * 0.5 + "px";

                pr.style.left = value * 0.5 + "px";
                pri.style.left = value * 0.5 + "px";
                prm.style.left = value * 0.5 + "px";

                pk.style.top = value * 0.15 + "px";
                pki.style.top = value * 0.15 + "px";

                text.style.top = value * 1 + "px";

                cr.style.top = value * 1 + "px";
                crown.style.top = value * 1 + "px";
                crm.style.top = value * 1 + "px";
            }, )

            // if (window.innerWidth <= 700) {
            //     pl.src = "../assets/img/PLeft Ipad.png"
            //     // pk.style.top = value * 0 + "px";
            // }
        },
        // beforeDestroy() {
        //     let pbg = document.getElementById("pbg");
        //     let pl = document.getElementById("pl");
        //     let pr = document.getElementById("pr");
        //     let pk = document.getElementById("pk");
        //     let text = document.getElementById("text");
        //     let crown = document.getElementById("crown");
        //     let cr = document.getElementById("cr");

        //     window.removeEventListener("scroll", function () {
        //         var value = window.scrollY;

        //         pbg.style.top = value * 0.5 + "px";
        //         pl.style.left = -value * 0.5 + "px";
        //         pr.style.left = value * 0.5 + "px";
        //         pk.style.top = value * 0.15 + "px";
        //         text.style.top = value * 1 + "px";
        //         crown.style.top = value * 1 + "px";
        //         cr.style.top = value * 1 + "px";
        //     });
        // },
    };
</script>

<style>
    header {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    #crown,
    #pli,
    #plm,
    #pri,
    #prm,
    #pki,
    #crm {
        display: none;
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
        height: 50px;
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

    @media (max-width: 1030px) {
        #text {
            font-size: 80px;
        }

        #crown,
        #pli,
        #pri,
        #pki {
            display: block;
        }

        #cr,
        #pl,
        #plm,
        #pr,
        #prm,
        #pk,
        #crm {
            display: none;
        }
    }

    @media (max-width: 700px) {
        #text {
            font-size: 50px;
        }

        #pl,
        #pli,
        #pr,
        #pri,
        #pk,
        #pki,
        #cr,
        #crown {
            display: none;
        }

        #prm,
        #crm,
        #plm {
            display: block;
        }
    }
</style>