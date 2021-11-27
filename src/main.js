import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import "bootswatch/dist/sketchy/bootstrap.min.css";

const app = createApp(App).use(router,axios)
app.mount('#app')

