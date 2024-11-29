<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<!-- Esta é a tela principal da aplicação, quando abrimos a primeira vez, e ao clicar no login, ele ira fazer renderizar o componente de  /login -->
<template> 
  <router-link to="/login">Login</router-link> 
  <router-link to="/register">Register</router-link>
  <RouterView />
</template>

<style scoped>
</style>
