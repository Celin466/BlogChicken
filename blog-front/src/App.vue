<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<!-- Esta é a tela principal da aplicação, quando abrimos a primeira vez, e ao clicar no login, ele ira fazer renderizar o componente de  /login -->
<template>
  <RouterView />
</template>

<style>
body {
  background-color: white !important;

}
</style>
