import { createRouter, createWebHistory } from 'vue-router'

// view imports
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectOne from '@/views/ProjectOne.vue'
import ProjectTwo from '@/views/ProjectTwo.vue'
import ProjectThree from '@/views/ProjectThree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/projects/den-blaa-festival',
      name: 'Den Blå Festival',
      props: true,
      component: ProjectOne
    },
    {
      path: '/projects/cine-seekers',
      name: 'Cine Seekers',
      props: true,
      component: ProjectTwo
    },
    {
      path: '/projects/sejr-davidsen',
      name: 'Sejr og Davidsen',
      props: true,
      component: ProjectThree
    }
  ]
})

export default router
