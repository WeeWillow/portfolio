<script setup>
// import components
import ContactForm from '@/components/modules/ContactForm.vue';

</script>

<template>
  <section>
    <h1>Skal vi arbejde sammen?</h1>
    <ContactForm />
  </section>
</template>

<style scoped lang="scss">
section {
  h1 {
    text-align: center;
    margin-bottom: var(--base-200);
  }
  min-width: 50vw;
  max-width: 80vw;
  padding: 0 var(--base-900);
  margin: 0 auto;
}

@media screen and (max-width: 1200px) {
 section {
   h1 {
     font-size: var(--base-200);
   }
  width: 100vh;
  padding: 0;
}
  
}
</style>