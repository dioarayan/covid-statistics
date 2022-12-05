import { createRouter, createWebHistory } from 'vue-router';

import CountryList from './components/pages/CountryList.vue';
import CountryStatistics from './components/pages/CountryStatistics.vue';
import CountryHistory from './components/pages/CountryHistory.vue';
import MyDashboard from './components/pages/MyDashboard.vue';

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

