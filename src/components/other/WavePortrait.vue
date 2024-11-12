<template>
  <div class="circle no-touch">
    <span class="circle platform no-touch">
      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="shape-mask">
            <circle cx="50" cy="50" r="49.5" fill="white"/>
          </mask>
        </defs>
        <image x="0" y="-10" xlink:href="@/assets/img/fancyHands.jpg" mask="url(#shape-mask)" />
      </svg>
    </span>
    <span class="circle wave-1 no-touch"></span>
    <span class="circle wave-2 no-touch"></span>
  </div>
</template>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}

image {
  height: auto;
  width: 100%;
  object-fit: cover;
  animation: filterRotate 8s linear infinite;
}

.no-touch {
  pointer-events: none;
}

/* based on the neumorphic elements by @myacode on codepen.io/myacode */
.circle {
  z-index: 4;
  position: absolute;
  width: var(--base-38x);
  height: 100%;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  
  &.platform {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: var(--base-32x);
    height: var(--base-32x);
    border-radius: var(--round);
    z-index: 1;
    background: var(--background-base);
    box-shadow: var(--neum-outset);
  }

  &.wave-1, &.wave-2 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: var(--base-32x);
    height: var(--base-32x);
    border-radius: var(--round);
    filter: blur(1px);
    z-index: 0;
  }
  
  &.wave-1 {
    box-shadow: var(--neum-outset);
    background: linear-gradient(to bottom right, var(--lowered) 0%, var(--raised) 100%);
    animation: waves 8s linear infinite;
  }
  
  &.wave-2 {
    box-shadow: var(--neum-outset);
    animation: waves 8s linear 4s infinite;
  }
}

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@keyframes filterRotate {
  from {
    filter: contrast(80%) opacity(70%) saturate(40%) hue-rotate(0deg);
  }

  to {
    filter: contrast(80%) opacity(70%) saturate(40%) hue-rotate(360deg);
  }
}

@media screen and (max-width: 1200px) {
  .circle {
  width: var(--base-32x);
  
  &.platform {
    width: var(--base-30x);
    height: var(--base-30x);
  }

  &.wave-1, &.wave-2 {
    width: var(--base-30x);
    height: var(--base-30x);
  }
}
}

@media screen and (max-width: 800px) {
  .circle {
  width: var(--base-28x);
  
  &.platform {
    width: var(--base-22x);
    height: var(--base-22x);
  }

  &.wave-1, &.wave-2 {
    width: var(--base-22x);
    height: var(--base-22x);
  }
}
}

</style>
