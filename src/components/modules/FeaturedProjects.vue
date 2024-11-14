<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { cases } from '@/assets/data/case_data';

const featuredProjects = ref(cases.slice(0 , 3)) 
// futureproofed to only show first three cases
// could be altered to filter based on specific data
</script>

<template>
<section>
  <h2>Udvalgte Projekter</h2>
  <div class="card-container">
    <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
  </div>
</section>
</template>

<style scoped lang='scss'>
</style>