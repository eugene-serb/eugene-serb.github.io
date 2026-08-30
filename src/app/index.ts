import { createApp } from 'vue';
import { store, router, head, i18n } from './providers';
import App from './App.vue';

export const app = createApp(App).use(store).use(router).use(i18n).use(head);
