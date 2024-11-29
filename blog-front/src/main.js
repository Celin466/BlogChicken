import './assets/main.css'
import Toast from 'primevue/toast'; // Importa o componente Toast
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'; // Importa o ToastService

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.use(ToastService); // Usa o ToastService globalmente

app.component('Toast', Toast); // Registra o Toast como componente global

app.mount('#app')
