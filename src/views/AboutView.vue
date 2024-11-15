<script setup>
</script>

<template>
  <h1>Hej!</h1>
  <section class="content">
    <div class="flexClm">
      <h2>Jeg hedder <span>Monica</span></h2>
      <p>Jeg hedder Monica, og jeg er en passioneret UX/UI designer med en stærk baggrund i visuel kommunikation. Min rejse inden for design har ført mig til en dyb forståelse for brugeroplevelser og en evne til at skabe intuitive og æstetisk tiltalende designs. Jeg har altid været fascineret af, hvordan design kan påvirke menneskers følelser og adfærd.</p>
      <p>Min kreativitet og nysgerrighed driver mig til konstant at udvikle mine færdigheder og udforske nye designværktøjer.</p>
      <h3>Katte</h3>
      <p>Jeg har flere katte, de fleste bor hjemme hos mine forældre, men der er
      to som bringer liv og energi til min lejlighed her i Aalborg. Atlas og Ellie, et søskendepar, jeg fik gratis sammen med et æble fra et par i Nibe.</p>
      <h3>At Skabe</h3>
      <p>Jeg kan lide at skabe. Jeg skal skabe, for at være glad. Jeg har tegnet siden jeg var lille, men har side da prøvet mange former af skabelse, som at arbejde med træ, sy, hækle, traditional og 3D modellering</p>
    <p>UX/UI design, kodning og programmering passer mig helt fint, fordi det
      er endnu en måde for mig at skabe!</p>
    </div>
    <img src="/assets/img/fish-fear-me.jpg" alt="billede af mig med en kasket">
  </section>
</template>

<style scoped lang="scss">
section.content {
  margin-bottom: var(--base-500);
}

p {
  max-width: 50ch;
}

.flexClm {
  gap: var(--base);
}

.content {
  display: flex;
  gap: var(--base-500);
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

img {
  width: 30vw;
  height: 60vh;
  margin-right: 10%;
  object-fit: cover;
  border-radius: var(--round-50);
}

@media screen and (max-width: 900px) {

  h1 {
    margin-bottom: -4rem;
  }
  .content {
    flex-direction: column-reverse;
    gap: var(--base-300);
  }

  img {
  width: 80vw;
  height: 60vh;
  margin: 0 auto;
  object-fit: cover;
  border-radius: var(--round-50);
}
  
}
</style>
