<script setup>
import LandingHero from '../content/LandingHero.vue';
import WavePortrait from '../other/WavePortrait.vue';
</script>

<template>
<header>
  <LandingHero />
  <WavePortrait/>
</header>
</template>

<style scoped>
header {
  height: 70vh;
  width: auto;
  display: grid;
  position: relative;
}

@media screen and (max-width: 800px) {
  header {
    height: 50vh;
  }
}
</style>