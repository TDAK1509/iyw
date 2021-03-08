import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/route/routes';
import store from '../src/vuex/store';
createApp(App).use(router).use(store).mount('#app');
