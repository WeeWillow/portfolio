<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
// import components
import TheNav from '@/components/layout/TheNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ThemeButton from '@/components/ui/ThemeButton.vue'
import TheHeader from './components/layout/TheHeader.vue';
import ScrollToTop from './components/ui/ScrollToTop.vue';

const route = useRoute();

// computed property check route matching path
const showTheHeader = computed(() => route.name === 'home')
</script>

<template>
  <TheNav />
  <ThemeButton />
  <ScrollToTop />
  <TheHeader v-if="showTheHeader" :routeName="route.name"/>
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<style scoped>
</style>
