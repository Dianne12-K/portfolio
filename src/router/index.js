import { createRouter, createWebHistory } from 'vue-router'

// Import your view files
import HomePage from '../views/HomeView.vue'
import AboutPage from '../views/AboutMe.vue'
import SkillsPage from '../views/Skills.vue'
import ProjectsPage from '../views/Projects.vue'
import ServicesPage from '../views/Services.vue'
import ContactPage from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})

export default router
