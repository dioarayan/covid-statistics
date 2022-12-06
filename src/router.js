import { createRouter, createWebHistory } from 'vue-router';

import CountryList from './pages/CountryList.vue';
import CountryStatistics from './pages/CountryStatistics.vue';
import CountryHistory from './pages/CountryHistory.vue';
import MyDashboard from './pages/MyDashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MyDashboard },
    { path: '/dashboard', component: MyDashboard },
    { path: '/country', component: CountryList },
    { path: '/statistics', component: CountryStatistics },
    { path: '/country/:id/history', component: CountryHistory },
  ],
});

export default router;

