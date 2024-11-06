<script setup>

</script>

<template>
<header>
  <img src="@/assets/img/fancyHands.jpg" alt="" class="shape-mask">
</header>
</template>

<style scoped>
header {
  height: 70vh;
  width: auto;
  /* background: var(--primary-base); */
}

img {
  height: 100%;
  width: auto;
}

.shape-mask {
  mask-image: url(@/assets/img/shapeMask.svg);
  mask-repeat: no-repeat;
}

/* image {
  animation: hueRotate 5s linear infinite;
}

#mask-shape {
  animation: shapeChange 5s linear infinite;
}

@keyframes hueRotate {
  from {
    filter: contrast(80%) opacity(70%) saturate(40%) hue-rotate(0deg);
  }

  to {
    filter: contrast(80%) opacity(70%) saturate(40%) hue-rotate(360deg);
  }
}

@keyframes shapeChange {
  0% {
    #mask-shape {
      d: path("M50,15 A35,35 0 1,0 50,85 A35,35 0 1,0 50,15");
    }
  }

  100% {
    #mask-shape {
      d: path("M50,10 L75,25 L75,75 L50,90 L25,75 L25,25 Z");
    }
  }
} */
</style>