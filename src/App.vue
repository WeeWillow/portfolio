<script setup>
import { RouterView } from 'vue-router'
// import components
import TheNav from '@/components/layout/TheNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ThemeButton from '@/components/ui/ThemeButton.vue'
</script>

<template>
  <TheNav />
  <ThemeButton />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<style scoped>
</style>
