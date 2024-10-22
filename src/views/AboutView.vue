<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
<h2>Base Buttons</h2>
  <BaseButton label="Base button" variant="base"/>
  <BaseButton label="Base tonal button" variant="tonal"/>
  <BaseButton label="Base outline button" variant="outline"/>
  <br>
  <br>
  <h2>Primary Buttons</h2>
  <BaseButton label="Primary button" variant="base" colour="primary"/>
  <BaseButton label="Primary tonal button" variant="tonal" colour="primary"/>
  <BaseButton label="Primary outline button" variant="outline" colour="primary"/>
  <br>
  <br>
  <h2>Secondary Buttons</h2>
  <BaseButton label="Secondary button" variant="base" colour="secondary"/>
  <BaseButton label="Secondary tonal button" variant="tonal" colour="secondary"/>
  <BaseButton label="Secondary outline button" variant="outline" colour="secondary"/>
  <br>
  <br>
  <h2>Accent Buttons</h2>
  <BaseButton label="Accent button" variant="base" colour="accent"/>
  <BaseButton label="Accent tonal button" variant="tonal" colour="accent"/>
  <BaseButton label="Accent outline button" variant="outline" colour="accent"/>  
</template>

<style scoped></style>
