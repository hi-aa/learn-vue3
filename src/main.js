import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from './components/AppCard.vue';

const app = createApp(App);
// 전역컴포넌트 등록
// app.component('AppCard', AppCard);

// app provide/inject
app.provide('app-message', 'Hello App Message');

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
