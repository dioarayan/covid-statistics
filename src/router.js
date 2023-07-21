import { createRouter, createWebHistory } from 'vue-router';

import ViewCountries from './view/ViewCountry.vue';
import ViewStatistics from './view/ViewStatistics.vue';
import ViewAbout from './view/ViewAbout.vue';

const router = createRouter({
  history: createWebHistory('/covid-statistics/'),
  routes: [
    { path: '/', component: ViewStatistics },
    { path: '/countries', component: ViewCountries },
    { path: '/about', component: ViewAbout },
  ],
});

export default router;

