import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage/LandingPage.vue';
import AboutCenter from '../components/AboutCenter/AboutCenter.vue';
import ContactPage from '../components/ContactPage/ContactPage.vue';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/center',
    name: 'AboutCenter',
    component: AboutCenter,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for unknown URLs
    name: 'NotFound',
    component: NotFoundPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restores scroll when using back/forward
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }; // Scrolls to specific element if hash is present
    } else {
      return { top: 0, behavior: 'smooth' }; // Default: Scrolls to top
    }
  }
});

export default router;
