import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BouquetView from '../views/BouquetView.vue';
import GalerieView from '../views/GalerieView.vue';
import SalonDeTheView from '../views/SalonDeTheView.vue';
import EvenementView from '../views/EvenementView.vue';
import CadeauView from '../views/CadeauView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/bouquet',
    name: 'bouquet',
    component:BouquetView,
  },
  {
    path: '/galerie',
    name: 'galerie',
    component: GalerieView,
  },
  {
    path: '/salon-de-the',
    name: 'salon-de-the',
    component: SalonDeTheView,
  },
  {
    path: '/evenement',
    name: 'evenement',
    component: EvenementView,
  },
  {
    path: '/cadeau',
    name: 'cadeau',
    component: CadeauView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;