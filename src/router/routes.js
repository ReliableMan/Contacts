import VueRouter from 'vue-router';

import MainPage from '@/pages/MainPage.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/auth',
      component: () => import('@/pages/AuthPage.vue'),
    },
    {
      path: '/contacts',
      component: () => import('@/pages/ContactPage.vue'),
    },
  ],
});
