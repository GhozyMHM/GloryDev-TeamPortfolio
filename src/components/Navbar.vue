<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mt-3 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>|
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy">Ghozy</router-link>|
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy">Rafi</router-link>|
                    </li>
                    <li class="nav-item">
                        <router-link to="/ghozy">Shiddiq</router-link>|
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

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

    nav ul li a {
        font-family: 'Montserrat', sans-serif;
        color: #1f5766;
        font-weight: 500;
        text-decoration: none;
        margin: 0 10px;
    }

    nav ul li a.router-link-exact-active,
    nav ul li a:hover {
        font-weight: 800;
        color: #276678;
    }
</style>