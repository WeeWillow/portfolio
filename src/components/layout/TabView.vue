<script setup>
  import Start from '../content/Start.vue';
  import Middle from '../content/Middle.vue';
  import End from '../content/End.vue';

  import { ref } from 'vue';

  const currentTab = ref('Start')

  const tabs = {
    Start,
    Middle,
    End
  }
</script>

<template>
  <div class="demo">
    <button v-for="(_, tab) in tabs" 
    :key="tab" 
    :class="['tab-button', { active: currentTab === tab}]" 
    @click="currentTab = tab">
    {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab" ></component>
  </div>

</template>

<style scoped>
/* demo = the container */
.demo {
  width: 80%;
  margin: 0 auto;
  border: 1px solid var(--secondary-300);
  border-radius: 6px;
  padding: 2rem 3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  width: 33.4%;
  padding: .5rem 2rem;
  border-radius: 0px;
  border: 1px solid var(--secondary-300);
  cursor: pointer;
  background: var(--primary-200);
  color: var(--primary-800);
  margin-bottom: -1px;
  margin-right: -1px;

  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--primary-100);
  }
}

.active {
  background: var(--secondary-300);
  color: var(--secondary-800);
}

.tab {
  padding: 1rem;
  border: 1px solid var(--secondary-300);
}
</style>