<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-link to="/login">Login</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/home">Home</router-link>
  <RouterView />
</template>

<style scoped>
</style>
