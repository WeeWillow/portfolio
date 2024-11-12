<script setup>
import BaseButton from '@/components/ui/ActionButton.vue';
</script>

<template>
  <h1>Under construction - Om mig</h1>
  <h2>We appreciate your patience</h2>
  <section class="layout-container margin-top-bottom">
    <h2 class="margin-bottom">Button showcase - fordi jeg har lavet dem, men ikke skal bruge dem til noget....</h2>
    <div class="buttonsContainer">
      <div class="baseBtns">
        <h2>Base Buttons</h2>
        <div class="buttonBox flexRow">
          <BaseButton label="Base button" variant="base" />
          <BaseButton label="Base tonal button" variant="tonal" />
          <BaseButton label="Base outline button" variant="outline" />
        </div>
      </div>
      <div class="primaryBtns">
        <h2>Primary Buttons</h2>
        <div class="buttonBox flexRow">
          <BaseButton label="Primary button" variant="base" colour="primary" />
          <BaseButton label="Primary tonal button" variant="tonal" colour="primary" />
          <BaseButton label="Primary outline button" variant="outline" colour="primary" />
        </div>
      </div>
      <div class="secondaryBtns">
        <h2>Secondary Buttons</h2>
        <div class="buttonBox flexRow">
          <BaseButton label="Secondary button" variant="base" colour="secondary" />
          <BaseButton label="Secondary tonal button" variant="tonal" colour="secondary" />
          <BaseButton label="Secondary outline button" variant="outline" colour="secondary" />
        </div>
      </div>
      <div class="accentBtns">
        <h2>Accent Buttons</h2>
        <div class="buttonBox flexRow">
          <BaseButton label="Accent button" variant="base" colour="accent" />
          <BaseButton label="Accent tonal button" variant="tonal" colour="accent" />
          <BaseButton label="Accent outline button" variant="outline" colour="accent" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  text-align: center;
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
