<script setup>
// smooth scroll to top of page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// y-position where scrolled class activates
const scrollThreshold = 100;

document.addEventListener('scroll', () => {
  // check if scroll position is above threshold
  if (window.scrollY > scrollThreshold) {
    // add class when over threshold
    document.body.classList.add('scrolled');
  } else {
    // remove class when at top
    document.body.classList.remove('scrolled');
  }
});
</script>

<template>
  <button @click="scrollToTop" class="scroll-btn" type="button">
    <span class="material-icons-outlined contact">arrow_upward</span>
  </button>
</template>

<style scoped lang="scss">
button  {
  z-index: 999;
  position: fixed;
  bottom: var(--base-300);
  right: var(--base-300);
  border: none;
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

  animation: jump 1s infinite delay 2s;

  background: var(--secondary-400);

  &:hover {
    background: var(--primary-400);

  }
  
  span {
    color: var(--secondary-50);
    font-size: var(--base-200);
    transition: all .25s ease-in-out;
    &:hover {
      color: var(--primary-50);
      animation: spin 1s cubic-bezier(.25, 1.5, .2, 1);
      transform: scale(1.5);
    }
  }
}

body.scrolled {

  .scroll-btn {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

