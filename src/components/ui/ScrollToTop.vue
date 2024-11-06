<script setup>

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const scrollThreshold = 100;

document.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
</script>

<template>
  <button @click="scrollToTop" class="scroll-btn" type="button">
    <span class="material-icons-outlined contact">arrow_circle_up</span>
  </button>
</template>

<style scoped>
button  {
  position: fixed;
  bottom: var(--base-200);
  right: var(--base-200);
}

.scroll-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--base-50);
  border-radius: var(--round);
  
  opacity: 0;
  visibility: hidden;
  
  transition: opacity 0.2s, visibility 0.2s;

  span {
    font-size: var(--base-200);
  }
}

body.scrolled {

  .scroll-btn {
    opacity: 1;
    visibility: visible;
  }
}
</style>

