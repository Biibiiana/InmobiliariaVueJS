<script setup>
import { router } from './main.js'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import footerComponent from './components/footerComponent.vue'
const db = useFirestore()
const products = useCollection(collection(db, "productos"))



var estaAutentificado = ref(false)
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
    estaAutentificado.value = true
    verFormulario.value = false
  } else {
    estaAutentificado.value = false
  }
})

</script>

<template>
  <div id="app">
    <RouterView></RouterView>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
//import FooterComponent from './components/footerComponent.vue';

//export default {
  //name: 'App',
  //components: {
    //HelloWorld,
    //FooterComponent
  //}
//}
</script>

<style>
  @import './assets/main.css';
</style>
