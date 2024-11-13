<script setup>
import { ref } from 'vue';
import { cases } from '@/assets/data/case_data';
import ProjectCard from '@/components/modules/ProjectCard.vue';


const projects = ref(cases);

</script>

<template>
<section class="projects-gallery">
  <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
</section>
</template>

<style scoped lang="scss">
.projects-gallery {
  margin: var(--base-150) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--base-20x), 1fr));
  gap: var(--base-200);
}
</style>