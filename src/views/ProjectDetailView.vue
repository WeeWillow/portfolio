<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { cases } from '@/assets/data/case_data';

const route = useRoute();
const project = ref(null);

// const headerImg = computed(() => {
//   return project.value ? `/assets/cases/${project.intro.img}` : ''
// }) ;

// dynamically generate img after project is computed
const headerImg = computed(() => {
  // set image only after project data is available
  // return whole project and img from data
  return project.value && project.value.intro.img
  // if img, then return the data
    ? `/assets/cases/${project.value.intro.img}`
    : '';  // if no image, return empty string if no image
});

onMounted(() => {
  const slug = route.params.slug;
  project.value = cases.find(p => p.slug === slug);
});


</script>

<template>
<div v-if="project" class="project-detail">
  <header>
    <h1>{{ project.details.title }}</h1>
    <div class="header-content">
      <article>
        <section>
          <h2>Case</h2>
          <p>{{ project.intro.case}}</p>
        </section>
        <section>
          <h2>Løsning</h2>
          <p>{{ project.intro.solution }}</p>
        </section>
        <div class="header-btns">
          <a class="neum-hover" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub <font-awesome-icon class="icon" icon="fa-brands fa-github"/></a>
          <a class="neum-hover" :href="project.live_demo" target="_blank" rel="noopener noreferrer">Live Demo <font-awesome-icon class="icon" icon="fa-solid fa-external-link-alt"/></a>
        </div>
      </article>
      <!-- check if there is a header img -->
      <!-- bind headerImg const to src -->
      <!-- bind project title to alt + some descriptive text -->
      <img v-if="headerImg" :src="headerImg" :alt="`billede af ${project.details.title} projekt`" class="header-image">
    </div>
  </header>

  <div>
      <h2>Tags</h2>
      <p><strong>Roller:</strong> {{ project.tags.roles.join(', ') || 'None' }}</p>
      <p><strong>Type:</strong> {{ project.tags.type.join(', ') || 'None' }}</p>
      <p><strong>Approach:</strong> {{ project.tags.approach.join(', ') || 'None' }}</p>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>

</template>

<style scoped lang='scss'>

.header-content {
  padding: 0 var(--base);
  display: flex;
  gap: var(--base-200);
  justify-content: space-between;
  height: 60vh;
  width: 100%;
  
  img {
    border-radius: var(--round-general);
    height: auto;
    width: 60%;
    overflow: hidden;
    object-fit: cover;
  }

  section {
    p {
      font-size: var(--base);
      max-width: 70ch;
    }
  }
}

.header-btns {
  display: flex;
  flex-direction: row;
  gap: var(--base-150);
  margin: var(--base-200) 0;

  .icon {
    margin-left: var(--base-25);
    font-size: var(--base);
  }
  
  a {
    font-family: var(--font-interface);
    font-size: var(--base);
    padding: var(--base-75) var(--base-125);
    border-radius: var(--round-50);

    &:nth-of-type(1) {
      color: var(--primary-400) ;
      
      &:hover {
        color: var(--accent-400) ;
      }
    }
    &:nth-of-type(2) {
      color: var(--secondary-400);
      
      &:hover {
        color: var(--accent-400) ;
      }
    }
  }
}

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