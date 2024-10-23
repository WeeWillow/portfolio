<script setup>
import { computed } from 'vue';

// state
// define props for button
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'button'
  },
  icon: {
    type: String, // prop for name of material icon
    default: null // default no icon
  },
  variant: {
    type: String,
    default: 'base'
  },
  colour: {
    type: String,
    default: 'base' // base, primary, secondary, accent
  }
});

// computed property to add class based on button variant
const computedClass = computed(() => {
  return `${props.variant}-${props.colour}`
});

// functions
// method to handle click
function clickHandler() {
  alert('Button clicked!');
};
</script>

<template>
<button :class="computedClass" :type="type" @click="clickHandler">
  {{ label }}
  <!-- conditionally render icon -->
  <span v-if="icon" class="material-icons-outlined">{{ icon }}</span>
</button>
</template>

<style scoped>

/* Styles for base buttons */
button {
  padding: var(--base-075) var(--base);
  border-radius: var(--rounded-min);
  font-size: var(--base-btn-txt);
  border: none;
  box-shadow: var(--shadow-sharp);
  font-weight: 500;
}



[data-theme="light"] {
  
  .base-base {
    background: var(--background-50);
    color: var(--text-base);
  }
  
  .base-primary {
    background: var(--primary-400);
    color: var(--text-100);
  }
  
  .base-secondary {
    background: var(--secondary-500);
    color: var(--text-100);
  }
  
  .base-accent {
    background: var(--accent-500);
    color: var(--text-100);
  }
  
  /* Tonal variants */
  .tonal-base {
    background: var(--background-100);
    color: var(--background-400);
  }
  .tonal-primary {
    background: var(--primary-100);
    color: var(--primary-400);
  }
  
  .tonal-secondary {
    background: var(--secondary-100);
    color: var(--secondary-600);
  }
  
  .tonal-accent {
    background: var(--accent-100);
    color: var(--accent-500);
  }
  
  /* Outline variants */
  .outline-base {
    background: var(--background-base);
    border: var(--border-lil) solid var(--background-300);
    color: var(--background-400);
    box-shadow: none;
  }
  
  .outline-primary {
    background: transparent;
    border: var(--border-lil) solid var(--primary-300);
    color: var(--primary-500);
    box-shadow: none;
  }
  
  .outline-secondary {
    background: transparent;
    border: var(--border-lil) solid var(--secondary-400);
    color: var(--secondary-600);
    box-shadow: none;
  }
  
  .outline-accent {
    background: transparent;
    border: var(--border-lil) solid var(--accent-500);
    color: var(--accent-500);
    box-shadow: none;
  }
}
[data-theme="dark"] {
  
  .base-base {
    background: var(--background-200);
    color: var(--text-base);
  }
  
  .base-primary {
    background: var(--primary-300);
    color: var(--text-base);
  }
  
  .base-secondary {
    background: var(--secondary-300);
    color: var(--text-base);
  }
  
  .base-accent {
    background: var(--accent-500);
    color: var(--text-base);
  }
  
  /* Tonal variants */
  .tonal-base {
    background: var(--background-300);
    color: var(--background-900);
  }
  .tonal-primary {
    background: var(--primary-200);
    color: var(--primary-800);
  }
  
  .tonal-secondary {
    background: var(--secondary-200);
    color: var(--secondary-700);
  }
  
  .tonal-accent {
    background: var(--accent-200);
    color: var(--accent-800);
  }
  
  /* Outline variants */
  .outline-base {
    background: var(--background-base);
    border: var(--border-lil) solid var(--background-600);
    color: var(--background-700);
    box-shadow: none;
  }
  
  .outline-primary {
    background: transparent;
    border: var(--border-lil) solid var(--primary-600);
    color: var(--primary-700);
    box-shadow: none;
  }
  
  .outline-secondary {
    background: transparent;
    border: var(--border-lil) solid var(--secondary-600);
    color: var(--secondary-700);
    box-shadow: none;
  }
  
  .outline-accent {
    background: transparent;
    border: var(--border-lil) solid var(--accent-600);
    color: var(--accent-700);
    box-shadow: none;
  }
}

</style>