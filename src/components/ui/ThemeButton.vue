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
  border-radius: 0 30px 30px 0;
  display: flex;
  align-items: center;
  gap: .5rem;
}
</style>