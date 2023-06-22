<script setup>
import { ref, computed } from 'vue'
import Offerts from './offers.vue'
import Explore from './pPpal.vue'
import Profile from './registro.vue'
import NotFound from './errorComponent.vue'

const routes = {
    '/': Explore,
    '/offerts': Offerts,
    '/profile': Profile
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <footer class="navbar">
        <nav class="navbarNav">
            <ul class="navbarListItems">
                <li class="navbarListItem">
                    <img src="../assets/explorar.png" alt="">
                    <a href="#/">Explorar</a>
                </li>
                <li class="navbarListItem">
                    <img src="../assets/ofertas.png" alt="">
                    <a href="#/offerts">Ofertas</a>
                </li>
                <li class="navbarListItem">
                    <img src="../assets/perfil.png" alt="">
                    <a href="#/profile">Perfil</a>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style>
    .navbarListItems{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 100%;
        height: 100%;
    }

    .navbarListItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    img{
        width: 30px;
        height: 30px;
    }

    .nanbar a{
        text-decoration: none;
        color: black;
    }

    .navbar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 11vh;
        background-color: white;
        border-top: 1px solid #E5E5E5;
    }
</style>