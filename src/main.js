import { createApp } from 'vue';
import router from "./router/index";
import piniaStore from "./store/index";

import 'bulma/css/bulma.css'
import './assets/styles/index.scss'
import './assets/styles/bulma-variables.scss'

import App from './App.vue';

createApp(App).use(router).use(piniaStore).mount('#app')