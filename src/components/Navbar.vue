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
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle menu team-menu" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Teams
                        </a>
                        <ul id="dropdown-menu" class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="nav-item">
                                <router-link to="/ghozy" class="menu">Ghozy</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/ghozy" class="menu">Rafi</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/ghozy" class="menu">Shiddiq</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <span class="line">|</span>
                        <router-link to="/contact" class="menu">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
    };
</script>

<style scoped>
    #navbar {
        background-color: transparent;
    }

    #ul {
        margin: 20px 0;
    }

    nav li.nav-item a.nav-link {
        display: inline;
        padding: 0 !important;
        color: #1f5766;
        font-weight: 500;
    }

    nav a {
        font-family: "Montserrat", sans-serif !important;
        color: #1f5766;
        font-weight: 500;
        text-decoration: none;
        margin: 0 15px !important;
        transition: ease-in-out;
    }

    #dropdown-menu {
        border: none;
        background-color: rgb(140, 207, 252);
    }

    nav a.router-link-exact-active,
    nav a.nav-link.router-link-exact-active,
    nav a:hover,
    nav li.nav-item a.nav-link:hover {
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