<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
      <ul class="nav-list flexRow">
        <li>
          <RouterLink to="/" class="logo neum-hover">
            <img src="/assets/img/logo.png" alt="illustration of a dragon head">
          </RouterLink></li>
        <div class="nav-island">
          <li><RouterLink to="/about" class="flexRow neum-hover">Om mig</RouterLink></li>
          <li><RouterLink to="/projects" class="flexRow neum-hover">Projekter</RouterLink></li>
          <li><a class="flexRow neum-hover" href="https://github.com/WeeWillow" target="_blank" rel="noopener noreferrer"><span class="hidden">GitHub</span><span class="material-icons-outlined">open_in_new</span></a></li>
        </div>
        <li><RouterLink to="/contact" class="flexRow neum-hover"><span class="hidden">Kontakt</span><span class="material-icons-outlined contact">email</span></RouterLink></li>
      </ul>
    </nav>
</template>

<style scoped lang="scss">
.router-link-active {
  background: var(--hover-background);
  border-color: var(--secondary-300);
  color: var(--secondary-500);
}

[data-theme="light"] {
  .router-link-active:hover {
    border-color: var(--primary-300);
    background: var(--primary-100);
    color: var(--primary-500);
  }
  
}
[data-theme="dark"] {
  .router-link-active:hover {
    border-color: var(--primary-300);
    background: var(--primary-100);
    color: var(--primary-400);
  }

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
  border-radius: var(--round-50);
  padding: var(--base-50) var(--base);
  /* typography */
  font-family: var(--font-interface);
  font-size: var(--base);
  text-transform: uppercase;
  /* colour */
  color: var(--text-400);
  transition: all 0.2s ease-in-out;

  background: var(--background-base);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  height: var(--base-400);
  width: var(--base-400);
  border-radius: var(--round);
  padding: var(--base);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  background: var(--background-base);
  
  img {
  object-fit: cover;
  height: auto;
  width: calc(var(--base-400) - var(--base-50));
  transition: all 0.2s ease-in-out;
  filter: saturate(1.5);
    &:active {
      opacity: 50%;
    }
  }

  &:hover {
  filter: saturate(1.5);
  background: var(--accent-100);
  }

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
  margin: 0 var(--base-25);
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

@media screen and (max-width: 650px) {
  .hidden {
    display: none;
  }

  a {
    font-size: var(--base-btn-txt);
    padding: var(--base-50) var(--base-75);
  }

  span.contact {
    font-size: var(--base-125);
  }
  
  .nav-island { 
    gap: var(--base-50);
  }
}

@media screen and (max-width: 450px) {
  span.contact {
    font-size: var(--base);
  }
  
}

</style>