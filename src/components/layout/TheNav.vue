<script setup>

</script>

<template>
  <div class="layout-container">
    <nav class="flexRow">
      <RouterLink to="/">Home</RouterLink>
      <div class="nav-island">
        <RouterLink to="/about" class="flexRow">Om mig</RouterLink>
        <RouterLink to="/projects" class="flexRow">Projekter</RouterLink>
        <a class="flexRow" href="https://github.com/WeeWillow" target="_blank" rel="noopener noreferrer">GitHub <span class="material-icons-outlined">open_in_new</span></a>
      </div>
      <RouterLink to="/contact">Kontakt</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.flexRow {
  justify-content: space-between;
  align-items: center;
}

a {
  /* border */
  border-radius: var(--rounded-m);
  border: var(--border-size-s) solid var(--accent-base);
  /* positioning */
  padding: var(--size-xs) var(--size-s);
  gap: var(--size-xs);
}

nav {
  /* sizing */
  width: 100%;
  min-height: 4rem;
  height: 6vh;

  /* positioning */
  margin: 1.5rem 0;
}

span {
  font-size: var(--size-s);
}

.nav-island {
  display: flex;
  gap: 2rem;
}
</style>