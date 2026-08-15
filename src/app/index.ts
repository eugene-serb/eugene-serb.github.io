import { createApp } from 'vue';
import { head, router, store } from './providers';
import App from './App.vue';

export const app = createApp(App).use(store).use(router).use(head);
