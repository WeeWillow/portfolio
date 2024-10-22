<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="layout-container">
    <nav>
      <ul class="nav-list flexRow">
        <li><RouterLink to="/">Home</RouterLink></li>
        <div class="nav-island">
          <li><RouterLink to="/about" class="flexRow">Om mig</RouterLink></li>
          <li><RouterLink to="/projects" class="flexRow">Projekter</RouterLink></li>
          <li><a class="flexRow" href="https://github.com/WeeWillow" target="_blank" rel="noopener noreferrer">GitHub <span class="material-icons-outlined">open_in_new</span></a></li>
        </div>
        <li><RouterLink to="/contact">Kontakt</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.router-link-active {
  background: var(--primary-50);
  border-color: var(--secondary-500);
}

.flexRow {
  justify-content: space-between;
  align-items: center;
}

a {
  /* flex */
  gap: var(--base-025);
  /* border */
  border: var(--border-lil) solid transparent;
  /* shape */
  border-radius: var(--rounded-general);
  padding: var(--base-050) var(--base);
  /* typography */
  font-family: var(--font-interface);
  font-size: var(--base);
  /* colour */
  color: var(--text-800);
  transition: all 0.15s ease-in-out;
  &:hover {
    border-color: var(--primary-300);
  }
}

nav {
  /* sizing */
  width: 100%;
  min-height: 4rem;
  height: 6vh;

  /* positioning */
  margin: var(--base-150) 0;
}

span {
  font-size: var(--base);
}

.nav-island {
  display: flex;
  gap: var(--base-200);
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 0;
  }
}
</style>