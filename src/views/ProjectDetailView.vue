<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { cases } from '@/assets/data/case_data';

const route = useRoute();
const project = ref(null);

const props = defineProps({
  slug: String,
});

// dynamically generate img after project is set
const headerImg = computed(() => {
  // set image only after project data is available
  // return project image path from data
  return project.value && project.value.intro.img
    ? `/assets/cases/${project.value.intro.img}`
    : '';  // if no image, return empty string
});

onMounted(() => {
  const slug = route.params.slug;
  project.value = cases.find(p => p.slug === slug);
});
</script>

<template>
<section v-if="project" class="project-detail">
  <div id="header">
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
  </div>
</section>


<section v-else>
  <p>Project not found.</p>
</section>

<article v-if="project" v-for="article in project.articles" :key="article.id" >
  <h2>{{ article.title }}</h2>
  <section v-for="section in article.sections" :key="section.id">
    <h3>{{ section.title }}</h3>
    <p>{{ section.content }}</p>
  </section>
</article>



</template>

<style scoped lang='scss'>

.header-content {
  padding: 0 var(--base);
  display: flex;
  gap: var(--base-200);
  justify-content: space-between;
  // height: 60vh;
  width: 100%;
  
  img {
    border-radius: var(--round-general);
    height: auto;
    width: 50%;
    object-fit: contain;
    object-position: 0 -80px;
  }

  section {
    p {
      font-size: var(--base);
      max-width: 60ch;
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
  margin: 0 0 var(--base-300) 0;
}

h2 {
  margin: var(--base-75) 0;
  font-size: var(--base-250);
}

p {
  font-size: 1.1em;
}
</style>