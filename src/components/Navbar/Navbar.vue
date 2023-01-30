<script setuo>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<div class="wrapper">
    <div class="navbar">
    <nav>
        <img class="logo" src="@/assets/dtt/logo_dtt.png" alt="logo">
        <RouterLink v-if="$route.name === 'home' || $route.name === 'detail'" class="houses-active" to="/">Houses</RouterLink>
        <RouterLink v-else class="houses" to="/">Houses</RouterLink>
        <RouterLink  class="about" to="/about"> About</RouterLink>
    </nav>
    </div>
</div>

<div class="mobile-wrapper">
    <div class="mobile-navbar">
        <RouterLink class="mobile-houses" to="/">
        <img v-if="$route.name === 'home' || $route.name === 'detail'" class="house-logo" src="@/assets/dtt/navigarion_home_active.png">
        <img v-else class="inactive-house-logo" src="@/assets/dtt/navigarion_home.png">
        </RouterLink>
        <RouterLink class="mobile-about" to="/about">
        <img v-if="$route.name === 'about'" class="about-logo" src="@/assets/dtt/navigarion_info_active.png">
        <img v-else class="inactive-about-logo" src="@/assets/dtt/navigarion_info.png">
        </RouterLink>
    </div>
</div>
</template>


<style scoped>

@media (min-width: 750px) {
    .mobile-wrapper {
        display: none;
    }
}

@media (max-width: 750px) {
    .wrapper {
        display: none;
    }
}

.mobile-wrapper {
    width: 100%;
    background: var(--background2);
    height: 70px;
    position: fixed;
    bottom: 0;
}

.mobile-navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.mobile-navbar img {
    width: 30px;
    height: 30px;
    margin-top: 20px;
}

.wrapper {
    width: 100%;
    background: var(--background2);
    height: 70px;
}
.navbar {
    display: flex;
    margin-left: 15%;
}

nav {
    display: flex;
    align-items: center;
}


.logo {
    width: 120px;
    margin-top: 15px;
}

.about,
 .houses{
    margin-top: 15px;
    margin-left: 40px;
    font-size: 15px;
    font-family: var(--font-family);
    font-weight: 650;
    color: var(--tertiary);
    text-decoration: none;
}

.houses-active{
    margin-top: 15px;
    margin-left: 40px;
    font-size: 15px;
    font-family: var(--font-family);
    font-weight: 650;
    color: var(--primary-text);
    text-decoration: none;
}

a.router-link-exact-active {
    color: var(--primary-text);
}

</style>
