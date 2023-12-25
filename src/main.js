import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Import Router
import router from './router';

// CanvasJS
import CanvasJSChart from '@canvasjs/vue-charts';

const app = createApp(App);
app.use(router);
app.use(CanvasJSChart); // install the CanvasJS Vuejs Chart Plugin
app.mount('#app');
