<template>
<footer>
  <img src="/assets/img/logo.png" alt="illustration of a dragon head">
  <div class="content">
    <h2>Monica Djurhuus</h2>

    <p>&copy; 2024 - all rights reserved.</p>
  </div>
</footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  align-items: center;
  gap: var(--base);
  justify-content: center;
  background: var(--primary-200);
  padding: var(--base-200);

  img {
    height: 100px;
    width: auto;
  }

  h2 {
    color: var(--primary-700);
    font-weight: 900;
  }
  
  p {
    color: var(--primary-700);
    font-size: var(--base);
    font-weight: 300;
  }
}
</style>