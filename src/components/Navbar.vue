<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../assets/navbar-logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy">Ghozy</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/rafi">Rafi</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shiddiq">Shiddiq</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<style scoped>
    @media (min-width: 991px) {
        nav {
            padding: 10px 100px;
        }
    }

    .navbar {
        background-color: #276678 !important;
    }

    nav img {
        width: 150px;
    }

    nav a {
        color: white;
        margin: 0 10px;
        text-decoration: none;
    }

    nav a.router-link-exact-active {
        color: #276678;
        background-color: white;
        padding: 5px 7px;
        border-radius: 7px;
    }

    nav a:hover:not(.router-link-exact-active) {
        text-decoration: underline;
    }
</style>