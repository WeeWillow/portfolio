<script setup>
// script from web3forms
// https://docs.web3forms.com/how-to-guides/js-frameworks/vue-js

import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = '4ff1a987-3c88-4e52-9fa5-35a2244648b9';
const name = ref("")
const email = ref("")
const message = ref("")
const subject = ref("");

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
      subject: subject.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
    alert(result.message);
  }
}
</script>

<template>
<form @submit.prevent="submitForm" class="form">
    <!-- Name Input -->
     <label for="name">Navn</label>
     <input type="text" name="name" id="name" class="input-container" placeholder="Dit navn" v-model="name" required>
     
     <!-- Email Input -->
     <label for="email">Email</label>
     <input type="email" name="email" id="email" class="input-container" placeholder="dinemail@mail.com" v-model="email" required>

     <!-- Email Input -->
     <label for="subject">Emne</label>
     <input type="text" name="subject" id="subject" class="input-container" placeholder="Vil du med i vores næste projekt?" v-model="subject" required>
     
     <!-- Message Input -->
     <label for="message">Besked</label>
    <textarea class="input-container" name="message" id="message" placeholder="Skriv besked her..." v-model="message" required></textarea>

    <!-- Submit Button -->
    <button type="submit" class="submit-btn neum">Send Besked<span class="material-icons-outlined">send</span></button>
  </form>
</template>

<style scoped lang="scss">

.input-container {
  min-height: var(--base-300);
  width: 100%;

  /* visual */
  margin: var(--base-50) 0 var(--base-125) 0;
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

textarea {
  min-height: var(--base-400) !important;
  width: 100%;
  resize: vertical;
  padding: var(--base-75) 0;
}

label {
  font-family: var(--font-title);
  font-weight: 600;
  font-size: var(--base-150);
  padding: 0 var(--base-75);
  color: var(--text-500);
}

.submit-btn {
  display: flex;
  gap: var(--base-75);
  align-items: center;
  margin-top: var(--base);
  padding: var(--base-75) var(--base-125);
  color: var(--accent-600);
  background: var(--accent-100);
  font-size: var(--base);
  border: none;
  border-radius: var(--round-50);
  
  transition: all 0.25s ease-in-out;
  
  &:hover {
    background: var(--accent-base);
    color: var(--accent-200);
    span {
      animation: spin 1.2s cubic-bezier(.25, 1.5, .2, 1);
      transform: scale(1.5);
    }
  }
  
  &:active {
    box-shadow: var(--neum-inset);
  }
  
}

input, textarea {
  transition: all 0.25s ease-in-out;
}


</style>