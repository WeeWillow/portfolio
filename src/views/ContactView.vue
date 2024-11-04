<script setup>
</script>

<template>
  <article class="neum raisedPlatform">
      <h2>Skal vi arbejde sammen?</h2>
      <div class="form">
        <input type="email" class="inputContainer" placeholder="yourname@mail.com">
        <input type="email" class="inputContainer" placeholder="Type anything...">
        <input type="email" class="inputContainer" placeholder="Type anything...">
      </div>
  </article>
</template>

<style scoped>
article {
  height: 100%;
  width: 100%;
}

.raisedPlatform {
  padding: var(--base-400);
  border-radius: var(--rounded-general);
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