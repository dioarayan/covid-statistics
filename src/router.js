import { createRouter, createWebHistory } from 'vue-router';

// import CountryList from './view/CountryList.vue';
import ViewStatistics from './view/ViewStatistics.vue';
import ViewAnalytics from './view/ViewAnalytics.vue';
import ViewAbout from './view/ViewAbout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ViewStatistics },
    { path: '/statistics', component: ViewStatistics },
    { path: '/analytics', component: ViewAnalytics },
    { path: '/about', component: ViewAbout },
  ],
});

export default router;

