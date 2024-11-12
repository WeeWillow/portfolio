<script setup>

</script>

<template>
<div class="form">
  <input type="email" class="inputContainer" placeholder="yourname@mail.com">
  <input type="email" class="inputContainer" placeholder="Type anything...">
  <input type="email" class="inputContainer" placeholder="Type anything...">
</div>
</template>

<style scoped>
.inputContainer {
  /* size */
  width: 100%;
  height: var(--base-300);

  /* visual */
  margin: var(--base-50) 0;
  border: none;
  border-radius: var(--round-50);
  padding-left: var(--base-125);
  background: none;
  box-shadow: var(--neum-inset);
  
  /* font */
  font-size: var(--base-125);
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