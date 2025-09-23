import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import urql, { cacheExchange, fetchExchange } from '@urql/vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(urql, {
  url: 'http://localhost:4000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

app.mount('#app')
