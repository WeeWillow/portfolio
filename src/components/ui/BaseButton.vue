<script setup>
import { defineProps, computed } from 'vue';

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
  box-shadow: var(--dropshadow-sharp);
}

.base-base {
  background: var(--background-base);
}

.base-primary {
  background: var(--primary-400);
  color: var(--text-100);
}

.base-secondary {
  background: gray;
  color: white;
}

.base-accent {
  background: orange;
  color: white;
}

/* Tonal variants */
.tonal-primary {
  background: lightblue;
  color: black;
}

.tonal-secondary {
  background: lightgray;
  color: black;
}

.tonal-accent {
  background: lightcoral;
  color: black;
}

/* Outline variants */
.outline-primary {
  background: transparent;
  border: 2px solid blue;
  color: blue;
}

.outline-secondary {
  background: transparent;
  border: 2px solid gray;
  color: gray;
}

.outline-accent {
  background: transparent;
  border: 2px solid orange;
  color: orange;
}

</style>