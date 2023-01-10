import { createRouter, createWebHistory } from 'vue-router';

// import CountryList from './view/CountryList.vue';
import ViewStatistics from './view/ViewStatistics.vue';
import ViewAnalytics from './view/ViewAnalytics.vue';
import MyDashboard from './view/MyDashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MyDashboard },
    { path: '/statistics', component: ViewStatistics },
    { path: '/analytics', component: ViewAnalytics },
    { path: '/dashboard', component: MyDashboard },
  ],
});

export default router;

