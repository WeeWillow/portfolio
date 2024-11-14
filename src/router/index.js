import { createRouter, createWebHistory } from 'vue-router'

// view imports
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import GalleryView from '@/views/GalleryView.vue'
import ProjectDetail from '@/views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: GalleryView,
    },
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: ProjectDetail,
      props: true,
    },
  ],
  // if something has a saved position, it will use it
  // otherwise return to top of new page
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0
      }
    }
  }
})

export default router
