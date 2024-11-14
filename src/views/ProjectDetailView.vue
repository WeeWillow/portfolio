<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { cases } from '@/assets/data/case_data';

const route = useRoute();
const project = ref(null);

onMounted(() => {
  const slug = route.params.slug;
  project.value = cases.find(p => p.slug === slug);
});

</script>

<template>
<div v-if="project" class="project-detail">
    <h1>{{ project.details.title }}</h1>
    <div>
      <h2>Tags</h2>
      <p><strong>Roles:</strong> {{ project.tags.roles.join(', ') || 'None' }}</p>
      <p><strong>Type:</strong> {{ project.tags.type.join(', ') || 'None' }}</p>
      <p><strong>Approach:</strong> {{ project.tags.approach || 'Not specified' }}</p>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<style scoped lang='scss'>
.project-detail {
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

h2 {
  margin-top: 20px;
  font-size: 1.5em;
}

p {
  font-size: 1.1em;
}
</style>