<script setup>
  import { useRouter, RouterLink } from 'vue-router'; 
  // import of useRouter for navigation with goToProject and @click
  // import RouterLink for linking in vue-router
  
  import { computed } from 'vue';
  // import 'computed' to create reactive vue props
  
  const props = defineProps({
    project: {
      type: Object,
        required: true,
    },
  });

  const router = useRouter();

  const projectRoute = computed(() => ({
    name: 'project-detail',
    params: { slug: props.project.slug }
  }));

  const goToProject = () => {
    router.push(projectRoute.value);
  };

  function tagsFlat(tags) {
    return Object.values(tags).flat();
  };

  const coverImageURL = `/assets/img/${props.project.cover}`;
  
</script>

<template>
    <article class="project-card"> <!-- singular card -->
        <div class="cover"> <!-- image and button stuff -->
          <div class="cover-container">
            <div @click="goToProject" class="cover-image">
              <img :src="coverImageURL" :alt="project.details.title">
            </div>
            <div class="cover-icon">
              <RouterLink :to="projectRoute" class="cover-btn neum">
                  <span class="material-icons-outlined">arrow_outward</span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="content">
            <h3>{{ project.details.title }}</h3>
            <p>{{ project.details.desc }}</p>
            <ul>
              <li v-for="tag in tagsFlat(project.tags)" class="tag">{{ tag }}</li>
            </ul>
        </div>
    </article>
</template>

<style scoped lang="scss">
// design and code based on https://codepen.io/kristen17/pen/pomgrKp

.project-card {
  max-width: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--base-75);

    li.tag{
      font-family: var(--font-interface);
      text-transform: uppercase;
      font-weight: 500;
      font-size: var(--base-btn-txt);
      padding: var(--base-25) var(--base-75);
      border-radius: var(--round-min);
      
      &:nth-of-type(1) {
        background: var(--accent-300);
        color: var(--accent-600);
      }
      &:nth-of-type(2) {
        background: var(--secondary-300);
        color: var(--secondary-600);
      }
      &:nth-of-type(3) {
        background: var(--primary-200);
        color: var(--primary-600);
      }
      &:nth-of-type(4) {
        background: var(--background-300);
        color: var(--background-700);
      }
    }
  }
}

.cover {
  position: relative;
  height: var(--base-20x);
  width: inherit;
  background: var(--background-base);
  border-radius: var(--round-50) var(--round-50) 0 var(--round-50);
  overflow: hidden;

  .cover-container {
    height: 100%;
    width: 100%;
    background: var(--background-base);
    border-radius: var(--round-50);
    overflow: hidden;

    .cover-image {
      cursor: pointer;
      position: absolute;
      inset: 0;
      background: var(--primary-100);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

.cover-icon {
  position: absolute;
  // bottom: -var(--base-25);
  bottom: calc(-1 * var(--base-25));
  right: calc(-1 * var(--base-25));

  height: var(--base-600);
  width: var(--base-600);

  background: var(--background-base);
  border-top-left-radius: var(--round);

  &::before, &::after {
    position: absolute;
    content: '';
    background: transparent;
    height: var(--base-125);
    width: var(--base-125);
    border-bottom-right-radius: var(--round-50);
    box-shadow: var(--base-25) var(--base-25) 0 var(--base-25) var(--background-base);
  }

  &::before {
    bottom: var(--base-25);
    left: calc(-1 * var(--base-125));
  }

  &::after {
    top: calc(-1 * var(--base-125));
    right: var(--base-25);
  }

}

.cover-btn {
  position: absolute;
  inset: var(--base-75);
  background: var(--background-base);
  border-radius: var(--round);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.25s ease-in-out;

  &:hover {
    background: var(--accent-100);
    span {
      color: var(--accent-400);
      animation: spin 1s cubic-bezier(.25, 1.5, .2, 1);
      transform: scale(1.5);
    }
  }

  &:active {
    box-shadow: var(--neum-inset);
  }

  span {
    color: var(--text-500);
    font-size: var(--base-150);
    transition: all 0.25s ease-in-out;
  }
}

.content {
  padding: var(--base) var(--base-75);

  h3 {
    font-size: var(--base-150);
  }

  p {
    min-height: var(--base-450); 
    max-height: 7vh; 
    margin: var(--base-75) 0 var(--base-125);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(360deg) scale(1.5);
  }
}

@media screen and (max-width: 700px) {
  .cover {
  height: var(--base-900);
}

.content {
  p {
    max-height: 80vh; 
  }
}
}

</style>