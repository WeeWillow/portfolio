<script setup>
import ContactForm from '@/components/modules/ContactForm.vue';

</script>

<template>
  <article class="neum raisedPlatform">
    <div class="contact-cover">
      <!-- https://unsplash.com/photos/sunflower-field-W9KtH3U2RmY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash -->
      <img src="@/assets/img/sunflowers.jpg" alt="field of sunflowers, credit to kilarov zaneit, unsplash">
    </div>

    <div class="cover-content">
      <h2>Skal vi arbejde sammen?</h2>
    </div>


    <section class="contact-form">
      <ContactForm />
    </section>
  </article>
</template>

<style scoped>
article {
  height: 100%;
  width: 100%;
  overflow: hidden;

  position: relative;
}

.raisedPlatform {
  display: grid;
  grid-template-columns: var(--base-200) 1fr .7fr var(--base-200);
  grid-template-rows: var(--base-200) 1fr var(--base-200);
  gap: var(--base-200);

  border-radius: var(--rounded-general);
}

.contact-cover {
  position: absolute;
  z-index: 1;

  grid-column: 1 / 3;
  grid-row: 1 / -1;

  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: sepia(.3) opacity(.45) contrast(.25) blur(1px);
    mix-blend-mode: color-dodge;
  }
}

[data-theme="light"] {
  .contact-cover {
    background: var(--primary-500) ;
  }
}

[data-theme="dark"] {
  .contact-cover {
    background: var(--primary-300) ;
  }
}


.cover-content, .contact-form {
  grid-row: 2;
}

.cover-content {
  grid-column: 2;

  position: absolute;
  z-index: 2;
}

.contact-form {
  grid-column: 3;
}

@media screen and (max-width: 1200px) {
  .raisedPlatform {
    grid-template-columns: var(--base-150) 1fr .7fr var(--base-150);
    grid-template-rows: var(--base-150) 1fr var(--base-150);
    gap: var(--base-150);
  }
}

@media screen and (max-width: 800px) {
  .raisedPlatform {
    grid-template-columns: var(--base) 1fr .7fr var(--base);
    grid-template-rows: var(--base-75) 1fr var(--base-75);
    gap: var(--base);
  }
}
</style>