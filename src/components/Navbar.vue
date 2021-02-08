<template>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="ul" class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link to="/" class="menu">Home</router-link><span class="line">|</span>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy" class="menu">Ghozy</router-link><span class="line">|</span>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy" class="menu">Rafi</router-link><span class="line">|</span>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy" class="menu">Shiddiq</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        mounted() {
            var navbar = document.getElementById('navbar');
            var ul = document.getElementById('ul');
            let menu = document.getElementsByClassName('menu');
            let line = document.getElementsByClassName('line');
            // let active = document.getElementsByClassName('router-link-exact-active');

            window.onscroll = function () {
                if (window.pageYOffset > 700) {
                    navbar.style.background = "#276678";
                    for (let x = 0, leng = menu.length; x < leng; x++) {
                        menu[x].style.color = "#D9E6EA"
                    }
                    for (let y = 0, leng = line.length; y < leng; y++) {
                        line[y].style.color = "#D9E6EA"
                    }
                    ul.style.margin = "5px 0";
                } else {
                    navbar.style.background = "transparent";
                    for (let x = 0, leng = menu.length; x < leng; x++) {
                        menu[x].style.color = "#1f5766"
                    }
                    for (let y = 0, leng = line.length; y < leng; y++) {
                        line[y].style.color = "#1f5766"
                    }
                    ul.style.margin = "20px 0";
                }
            }
        }
    }
</script>

<style scoped>
    #navbar {
        background-color: transparent;
    }

    #ul {
        margin: 20px 0;
    }

    nav ul li a {
        font-family: 'Montserrat', sans-serif;
        color: #1f5766;
        font-weight: 500;
        text-decoration: none;
        margin: 0 10px;
        transition: ease-in-out;
    }

    nav ul li a.router-link-exact-active,
    nav ul li a:hover {
        font-weight: 800;
        color: #276678;
    }

    nav button.navbar-toggler:focus,
    nav button.navbar-toggler:active {
        outline: none !important;
        border: none !important;
    }

    @media (max-width: 991px) {
        span.line {
            display: none;
        }

        nav ul li {
            margin-bottom: 6px;
        }
    }
</style>