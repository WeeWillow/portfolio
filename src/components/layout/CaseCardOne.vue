<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/projects/den-blaa-festival">
    <article class="layout-container flexRow margin-bottom">
      <img src="/src/assets/img/Group 114.png" alt="#">
      <section>
        <h3>Den Blå Festival</h3>
        <p>En projektopgave med det formål at udvikle en webapp som et værktøj for koncertgæster til at skabe overblik, planlægning og nem adgang til koncertprogrammet.</p>
        <h4>Fokusområder:</h4>
        <p>UX/UI Designer</p>
        <p>Udvikler</p>
        <div class="buttons flexRow">
          <a href="#" class="btn">GitHub</a>
          <a href="#" class="btn">Live demo</a>
        </div>
      </section>
    </article>
  </RouterLink>
</template>

<style scoped>

article {
  height: 300px;
  width: 100%;
  background: var(--primary-base);
  border-radius: var(--rounded-050);

  padding: var(--base-200);
}

.buttons {
  margin: var(--base-200) 0;
  gap: var(--base-200);
  justify-content: end;
}

.btn {
  background: var(--secondary-base);
}

</style>