import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp({})

app.component('App', App)
app.use(VueAxios, axios);
app.use(router);
app.use(vuetify)

app.mount('#app')