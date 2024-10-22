<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/projects/cine-seekers">
    <article class="layout-container flexRow margin-bottom">
      <img src="" alt="#">
      <section>
        <h3>Cine Seekers</h3>
        <p>En projektopgave med det formål at udvikle en webapp som et værktøj for koncertgæster til at skabe overblik, planlægning og nem adgang til koncertprogrammet.</p>
        <h4>Fokusområder:</h4>
        <p>UX/UI Designer</p>
        <p>Udvikler</p>
        <div>
          <p>button</p>
          <p>button</p>
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
}

</style>