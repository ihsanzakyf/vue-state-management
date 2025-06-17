import { createRouter, createWebHistory } from 'vue-router';

import coreRouter from './routes.js';

const routes = [...coreRouter];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

export default router;
