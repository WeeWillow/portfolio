<script setup>
import { RouterView } from 'vue-router'
// import components
import TheNav from './components/layout/TheNav.vue'
import ThemeButton from './components/ui/ThemeButton.vue'
import CaseCard from './components/layout/CaseCard.vue'
</script>

<template>
  <TheNav />
  <ThemeButton />
  <CaseCard />
  <main><router-view /></main>
</template>

<style scoped></style>
