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

<style scoped lang="scss">
header {
  height: 70vh;
  width: auto;
  display: grid;
  position: relative;
}

@media screen and (max-width: 900px) {
  header {
    height: 50vh;
  }
}
</style>