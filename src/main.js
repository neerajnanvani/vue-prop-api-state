import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./routes/index";
import { store } from "./store/index";

createApp(App)
.use(router)
.use(store)
.mount('#app')
