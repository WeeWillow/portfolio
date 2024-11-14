<script setup>
import { ref } from 'vue';
import { cases } from '@/assets/data/case_data';
import ProjectCard from '@/components/modules/ProjectCard.vue';


const projects = ref(cases);

</script>

<template>
<section>
  <h1>Udforsk mine projekter</h1>
  <div class="card-container">
    <!-- for loop for "projects" based on "cases" within case_data.js file -->
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</section>
</template>

<style scoped lang="scss">
</style>