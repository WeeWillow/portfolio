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

[data-theme="light"] {
  button {
    background: var(--accent-700);
    color: var(--text-50);
    span {
      color: var(--accent-200);
    }
    &:hover {
      background: var(--accent-600);
      color: var(--accent-50);
      span {
        color: var(--accent-50);
      }
    }
  }
}

[data-theme="dark"] {
  button {
    background: var(--background-400);
    color: var(--background-900);
    span {
      color: var(--primary-800);
    }
    &:hover {
      background: var(--background-500);
      color: var(--background-950);
      span {
        color: var(--primary-900);
      }
    }
  }
}

button {
  /* flex */
  display: flex;
  align-items: center;
  gap: var(--base-050);
  /* shape */
  border: none;
  box-shadow: var(--shadow-sharp);
  border-radius: 0 var(--rounded-general) var(--rounded-general) 0;
  padding: var(--base-025) var(--base-050);
  width: fit-content;
  /* text */
  font-size: var(--base);
  transition: all 0.15s ease-in-out;
  &:hover {
    transform: scale(1.007);
  }
}
</style>