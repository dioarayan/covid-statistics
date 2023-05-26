import { createRouter, createWebHistory } from 'vue-router';

// import CountryList from './view/CountryList.vue';
import MyDashboard from './view/MyDashboard.vue';
import ViewCountries from './view/ViewCountry.vue';
import ViewStatistics from './view/ViewStatistics.vue';
import ViewAnalytics from './view/ViewAnalytics.vue';
import ViewAbout from './view/ViewAbout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MyDashboard },
    { path: '/countries', component: ViewCountries },
    { path: '/statistics', component: ViewStatistics },
    { path: '/analytics', component: ViewAnalytics },
    { path: '/about', component: ViewAbout },
  ],
});

export default router;

