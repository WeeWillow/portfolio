<script setup>

</script>

<template>
  <div class="hero-content">
    <div id="name-container">
      <h1>Monica Djurhuus</h1>
      <div class="details-container">
        <div class="tag">
          <span id="location" class="tag-txt">
            Aalborg
          </span>
        </div>
        <div class="tag">
          <span id="status" class="tag-txt">
            Åben for arbejde
          </span>
        </div>
      </div>
    </div>
    <div id="title-container">
      <h2>Web-Udvikler</h2>
      <div class="details-container">
        <div class="tag">
          <span id="designer" class="tag-txt">
              UX/UI Designer
          </span>
        </div>
        <div id="developer" class="tag">
          <span class="tag-txt">
            Frontend Udvikler
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-container {
  display: flex;
  gap: var(--base-50);
  
  .tag {
    background: var(--primary-base);
    padding: var(--base-50) var(--base-125);
    border-radius: var(--round-general);

    .tag-txt {
      font-size: var(--base-btn-txt);
      font-family: var(--font-body);
      font-weight: 400;
    }
  }
}



.hero-content {
  position: relative;
  z-index: 10;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  align-content: center;

  gap: var(--base-500);

  height: 100%;
  padding: var(--base-550);
}

#name-container, #title-container {
  position: absolute;
  width: 80%;
}

#name-container {
  grid-column: 1 / 2;
  grid-row: 1;
}

#title-container {
  grid-column: 2;
  grid-row: 2;

  justify-self: end;
}

h1, h2 {
  font-family: var(--font-title-special);
  font-size: var(--base-550);
  font-weight: 200;
  line-height: 1;
  color: var(--accent-base);
}

@media screen and (max-width: 1200px) {
  .hero-content {
    padding: var(--base-300) var(--base);
  }

  #title {
    justify-self: center;
  }
  
  h1, h2 {
    font-size: var(--base-500);
  }
}

@media screen and (max-width: 800px) {
  
  #title {
    justify-self: center;
    width: auto;
  }
  
  
  h1, h2 {
    font-size: var(--base-400);
  }
}
</style>