import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import withUUID from "vue-uuid";

import '@/assets/css/main.css'
import App from './App.vue'

const app = withUUID(createApp(App));
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.mount('#app');
