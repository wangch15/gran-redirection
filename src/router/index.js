import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)',
    beforeEnter() {
      window.location.replace('https://gransaga-jpserver-zh-wiki.netlify.app')
    }
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;