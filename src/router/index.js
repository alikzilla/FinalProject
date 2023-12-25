import { createRouter, createWebHistory } from "vue-router";

// Pages
import dashboardA from '../pages/master/dashboardA.vue';
import dashboardG from '../pages/master/dashboardG.vue';
import dashboardK from '../pages/master/dashboardK.vue';
import MessengerDoctor from '../pages/MessengerDoctor.vue';
import MessengerPatient from '../pages/MessengerPatient.vue';

const routes = [
  {
    name: 'Dashboard A',
    path: '/dashboard_a',
    component: dashboardA,
  },
  {
    name: 'Dashboard G',
    path: '/dashboard_g',
    component: dashboardG,
  },
  {
    name: 'Dashboard K',
    path: '/dashboard_k',
    component: dashboardK,
  },
  {
    name: 'Messenger Doctor',
    path: '/messengerDoctor',
    component: MessengerDoctor
  },
  {
    name: 'Messenger Patient',
    path: '/messengerPatient',
    component: MessengerPatient
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;