<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNav from './components/layout/TheNav.vue'
import ThemeButton from './components/ui/ThemeButton.vue'
</script>

<template>
  <TheNav></TheNav>
  <ThemeButton></ThemeButton>
  <router-view></router-view>
</template>

<style scoped></style>
