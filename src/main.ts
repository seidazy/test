// import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primeflex/primeflex.scss'
import '@/assets/reset.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
