<script setup>
import { RouterLink } from 'vue-router'
// import components
import CaseCardOne from '@/components/layout/CaseCardOne.vue'
</script>

<template>
  <section class="layout-container margin-bottom">
    <div class="flexRow">
      <div class="content">
        <h1>Monica Djurhuus</h1>
        <h2>Unicorn</h2>
        <h2>UX/UI Designer</h2>
        <h2>Frontender</h2>
        <div class="buttons flexRow">
          <RouterLink to="/contact" class="btn">Kontakt</RouterLink>
          <RouterLink to="/projects" class="btn">Projekter</RouterLink>
        </div>
      </div>
      <img src="../assets/img/Dandy Frog.jpeg" alt="placeholder frog">
    </div>
  </section>

  <section class="layout-container margin-bottom">
    <h2>Noget om mig</h2>
    <div class="flexRow">
      <div class="icons">
        <p>
          <span>html5</span>
        </p>
        <p>
          <span>css3</span>
        </p>
        <p>
          <span>scss</span>
        </p>
        <p>
          <span>js</span>
        </p>
        <p>
          <span>vue</span>
        </p>
        <p>
          <span>vscode</span>
        </p>
        <p>
          <span>procreate</span>
        </p>
        <p>
          <span>photoshop</span>
        </p>
        <p>
          <span>xd</span>
        </p>
        <p>
          <span>figma</span>
        </p>
      </div>
      <div class="content flexClm">
        <section class="contentSection">
          <h3>Kodning</h3>
          <p>Min tid som multimediedesignstuderende har lært mig en del om kodning, og jeg har gode evner inden for HTML, CSS og Sass. Derudover er jeg i fuld gang med at mestre JavaScript, og inden længe vil den også sidde på plads.</p>
        </section>
        <section class="contentSection">
          <h3>Design</h3>
          <p>Med erfaring fra selvstudier i Figma før mine studier samt al min nye læring har jeg nu solidt kendskab til både Adobe XD og Figma. Desuden har jeg en generel passion for design. Mit fokus ligger særligt på læsbarhed, tilgængelighed og pixel-perfekt design.</p>
        </section>
        <section class="contentSection">
          <h3>Kunst</h3>
          <p>Jeg har sneget Procreate ind på listen, da jeg rigtig godt kan lide at tegne, både digitalt og traditionelt. Desuden har jeg omfattende erfaring med at tegne i Photoshop.</p>
        </section>
      </div>
    </div>
  </section>

  <section class="layout-container margin-bottom">
    <h2>Nylige projekter</h2>
    <CaseCardOne />
  </section>
</template>

<style scoped>
h1 {
  font-family: var(--font-title-special);
  font-size: var(--base-450);
  font-weight: 200;
  line-height: 1;
  margin-bottom: var(--base);
}

h2 {
  margin: var(--base) 0;
}

.content {
  h2 {
    margin: var(--base-025) 0;
    color: var(--primary-300);
  }
}

.contentSection {
  padding: var(--base) 0;

  p {
    max-width: 70ch;
  }
}

img {
  border: 2px solid var(--secondary-200);
  border-radius: var(--rounded-general);
  padding: var(--base-050);
  transition: all 0.15s ease-in-out;
  &:hover {
    transform: scale(1.01);
    padding: 1rem;
  }
}

.icons {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: var(--base-050);
  align-items: center;
  padding: var(--base) 0;
  height: 100%;

  p {
    background: var(--secondary-base);
    padding: var(--base-075);
    text-align: center;
    border-radius: var(--rounded-050);
  }
}

.flexRow {
 gap: var(--base-400);
 justify-content: space-between;
}

.buttons {
  margin: var(--base-200) 0;
  justify-content: start;
}
</style>
