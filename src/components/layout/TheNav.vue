<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
      <ul class="nav-list flexRow">
        <li><RouterLink to="/" class="neum">Home</RouterLink></li>
        <div class="nav-island">
          <li><RouterLink to="/about" class="flexRow neum">Om mig</RouterLink></li>
          <li><RouterLink to="/projects" class="flexRow neum">Projekter</RouterLink></li>
          <li><a class="flexRow neum" href="https://github.com/WeeWillow" target="_blank" rel="noopener noreferrer">GitHub <span class="material-icons-outlined">open_in_new</span></a></li>
        </div>
        <li><RouterLink to="/contact" class="flexRow neum">Kontakt <span class="material-icons-outlined contact">email</span></RouterLink></li>
      </ul>
    </nav>
</template>

<style scoped>
.router-link-active {
  background: var(--primary-50);
  border-color: var(--secondary-300);
  color: var(--secondary-500);
}

.flexRow {
  justify-content: space-between;
  align-items: center;
}

a {
  /* flex */
  gap: var(--base-25);
  /* border */
  border: var(--border-lil) solid transparent;
  /* shape */
  border-radius: var(--rounded-50);
  padding: var(--base-50) var(--base);
  /* typography */
  font-family: var(--font-interface);
  font-size: var(--base);
  text-transform: uppercase;
  /* colour */
  color: var(--text-400);
  transition: all 0.2s ease-in-out;
}

nav {
  /* sizing */
  height: fit-content;

  /* positioning */
  padding: var(--base) 0 0 0;
}

span {
  font-size: var(--base);
}

span.contact {
  font-size: var(--base-150);
  color: var(--accent-400);
}

.nav-island {
  display: flex;
  gap: min(3vw, var(--base-125));
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