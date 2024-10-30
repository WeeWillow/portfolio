<script setup>
import TabView from '@/components/layout/TabView.vue';
</script>

<template>
  <!-- <TabView /> -->
  <article class="layout-container">
    <div class="raisedPlatform neum">
      <h2>Skal vi arbejde sammen?</h2>
      <div class="form">
        <input type="email" class="inputContainer" placeholder="yourname@mail.com">
        <input type="email" class="inputContainer" placeholder="Type anything...">
        <input type="email" class="inputContainer" placeholder="Type anything...">
      </div>
    </div>
  </article>
</template>

<style scoped>

h1, h2 {
  margin: 0 auto;
  text-align: center;
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
}

.raisedPlatform {
  width: 100%;
  height: 40rem;
  padding: var(--base-400);
  border-radius: var(--rounded-general);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(autofit, min-content);
  column-gap: var(--base-125);
  row-gap: var(--base-125);
  align-items: center;
}

.form {
  grid-column: 3 / 5;
  grid-row: 1 / 4;
}

.inputContainer {
  margin: var(--base-50) 0;
  width: 100%;
  height: var(--base-300);
  border: none;
  border-radius: var(--rounded-50);
  font-size: var(--base-125);
  padding-left: var(--base-125);
  background: none;
  box-shadow: var(--neum-inset);
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--text-500);

  

  &::placeholder {
    color: var(--primary-200);
  }

  &:focus {
    outline: none;
    box-shadow: var(--neum-outset);
  }
}

input {
  transition: all 0.25s ease-in-out;
}
</style>