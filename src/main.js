import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import App from './App.vue';
import router from './router.js';
import './style.css';

import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.component('base-card', BaseCard);
app.mount('#app');

