<script setup>
</script>

<template>
  <section>
    <h1>Hvem er jeg?</h1>
    <p>section 1</p>
    <p>billede af mig eller noget</p>
  </section>
  <section>
    <p>section 2</p>
    <p>lidt om mine interesser</p>
  </section>
  <section>
    <p>section 3</p>
    <p>lidt relevant til faglighed</p>
  </section>
  <section>
    <p>section 4</p>
    <p>lidt om mine erfaringer</p>
  </section>
</template>

<style scoped lang="scss">
.buttonsContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1,
h2 {
  margin: 0 auto;
  // text-align: center;
}

.flexRow {
  justify-content: space-between
}

.buttonBox {
  background: var(--background-50);
  padding: var(--base-200);
  border-radius: var(--round-min);
  box-shadow: var(--shadow-sharp);
}
</style>
