<script setup>
import { ref } from 'vue';
// import data
import { cases } from '@/assets/data/case_data';
// import components
import ProjectCard from '@/components/modules/ProjectCard.vue';

// set reactive data as projects
const projects = ref(cases);

</script>

<template>
<section>
  <h1>Udforsk mine projekter</h1>
  <div class="card-container">
    <!-- for-loop for "projects" based on "cases" within case_data.js file -->
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</section>
</template>

<style scoped lang="scss">
</style>