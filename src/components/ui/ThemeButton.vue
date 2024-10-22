<script setup>
import { ref, onMounted, computed } from 'vue';
// state
const currentTheme = ref('light');

const lightIcon = 'brightness_low';
const darkIcon = 'bedtime';

// functions
function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value)
};

const themeIcon = computed(() => {
  return currentTheme.value === 'light' ? darkIcon : lightIcon;
});

// check localStorage for saved theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    currentTheme.value = savedTheme;
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value);
});
</script>

<template>
  <button type="button" @click="toggleTheme">
    Theme <span class="material-icons-outlined">{{ themeIcon }}</span>
  </button>
</template>

<style scoped>
button {
  /* flex */
  display: flex;
  align-items: center;
  gap: var(--base-050);
  /* shape */
  border-radius: 0 var(--rounded-general) var(--rounded-general) 0;
  padding: var(--base-025) var(--base-050);
  /* colours */
  background: var(--secondary-700);
  color: var(--secondary-base);
  /* text */
  font-size: var(--base);
}
</style>