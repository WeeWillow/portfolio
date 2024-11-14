<template>
  <div class="hero-content">
    <div id="name-container">
      <h1>Monica Djurhuus</h1>
      <div class="details-container">
        <div class="tag">
          <span id="location" class="tag-txt">
            <span class="material-icons-outlined">place</span> Aalborg
          </span>
        </div>
        <div class="tag">
          <span id="status" class="tag-txt">
            <span class="pulse-circle"></span> Åben for arbejde
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

<style scoped lang="scss">

#location, #status {
  display: flex;
   align-items: center;
   gap: var(--base-50);
   span {
      font-size: var(--base);
    }
  }
  
  .details-container {
    display: flex;
    gap: var(--base-50);

    margin: var(--base) 0;

    .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-base);
    padding: var(--base-50) var(--base-125);
    border-radius: var(--round-general);

    .tag-txt {
      font-size: var(--base-btn-txt);
      font-family: var(--font-body);
      font-weight: 600;
    }
  }
}

.tag {
  &:nth-of-type(1) {
      background: var(--primary-200);
      color: var(--primary-700);
    }
    &:nth-of-type(2) {
      background: var(--secondary-200);
      color: var(--secondary-800);
    }
}

.hero-content {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  align-content: center;
  height: 100%;
  margin: var(--base) var(--base-450);
}

#name-container, #title-container {
  position: absolute;
  width: 80%;
}

#name-container {
  grid-column: 1 / span 1;
  grid-row: 0;
}

#title-container {
  grid-column: 2 / span 1;
  grid-row: 1;

  justify-self: end;
}

h1, h2 {
  font-family: var(--font-title-special);
  font-size: var(--base-650);
  font-weight: 200;
  line-height: 1;
  color: var(--accent-base);
}

.pulse-circle {
  display: inline-block;
  height: var(--base-btn-txt);
  width: var(--base-btn-txt);
  background-color: var(--secondary-500);
  border-radius: 50%; 
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(.9);
    opacity: 1;
  }
  50% {
    transform: scale(.7);
    opacity: 0.5;
  }
  100% {
    transform: scale(.9);
    opacity: 1;
  }
}

@media screen and (max-width: 1200px) {
  h1, h2 {
    font-size: var(--base-500);
  }
}

@media screen and (max-width: 900px) { 
  .hero-content {
  gap: var(--base-20);
  margin: var(--base) var(--base);
}
  h1, h2 {
    font-size: var(--base-400);
  }
}

@media screen and (max-width: 700px) {
  .hero-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  }

  #name-container, #title-container {
  position: relative;
  width: 100%;
  }

  h1, h2 {
    font-size: var(--base-200);
  }
  
  .details-container {  
    width: 70vw;
    justify-content: center;
    margin: var(--base-25) 0;
    .tag {
      padding: var(--base-50) var(--base-125);
      
      .tag-txt {
      font-size: var(--base-75);
    }
  }
}
}
</style>