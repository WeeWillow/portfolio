<script setup>

</script>

<template>
  <div class="hero-content">
    <div id="name">
      <h1>Monica Djurhuus</h1>
    </div>
    <div id="title">
      <h2>Web-Udvikler</h2>
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  position: relative;
  z-index: 10;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  align-content: center;

  gap: var(--base-500);

  height: 100%;
  padding: var(--base-550);
}

#name, #title {
  position: absolute;
  width: 80%;
}

#name {
  grid-column: 1 / 2;
  grid-row: 1;
}

#title {
  grid-column: 2;
  grid-row: 2;

  justify-self: end;
}

h1, h2 {
  font-family: var(--font-title-special);
  font-size: var(--base-550);
  font-weight: 200;
  line-height: 1;
  color: var(--accent-base);
}

@media screen and (max-width: 1200px) {
  .hero-content {
    padding: var(--base-300) var(--base);
  }

  #title {
    justify-self: center;
  }
  
  h1, h2 {
    font-size: var(--base-500);
  }
}

@media screen and (max-width: 800px) {
  
  #title {
    justify-self: center;
    width: auto;
  }
  
  
  h1, h2 {
    font-size: var(--base-400);
  }
}
</style>