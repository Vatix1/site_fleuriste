import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BouquetView from '../views/BouquetView.vue';
import GalerieView from '../views/GalerieView.vue';
import SalonDeTheView from '../views/SalonDeTheView.vue';
import EvenementView from '../views/EvenementView.vue';
import CadeauView from '../views/CadeauView.vue';
//import LoginView from '../views/LoginView.vue';

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PanneauBouquet from '@/components/PanneauBouquet.vue';
import PanneauEvenement from '@/components/PanneauEvenement.vue';
import PanneauSdT from '@/components/PanneauSdT.vue';
import PanneauCadeau from '@/components/PanneauCadeau.vue';
import PanneauUtilisateur from '@/components/PanneauUtilisateur.vue'
import BoardAdmin from '../components/BoardAdmin.vue';
// import BoardMod from '@/components/BoardMod.vue';
import BoardUser from '../components/BoardUser.vue';
import Profile from '../components/Profile.vue';

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
    path: '/salondethe',
    name: 'salondethe',
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
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/admin',
    name: 'admin',
    component: BoardAdmin,
  },
  {
    path: '/user',
    name: 'user',
    component: BoardUser,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/panneauBouquet',
    name: 'panneauBouquet',
    component: PanneauBouquet
  },
  {
    path: '/panneauEvenement',
    name: 'panneauEvenement',
    component: PanneauEvenement
  },
  {
    path: '/panneauSdT',
    name: 'panneauSdT',
    component: PanneauSdT
  },
  {
    path: '/panneauCadeau',
    name: 'panneauCadeau',
    component: PanneauCadeau
  },
  {
    path: '/boardAdmin',
    name: 'boardAdmin',
    component: BoardAdmin
  },
  {
    path: '/panneauUtilisateur',
    name: 'panneauUtilisateur',
    component: PanneauUtilisateur
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from,next) => {
  const publicPages = ['/','/login','/register','/bouquet','/galerie','/salondethe','/evenement','/cadeau','/panneauBouquet','/panneauEvenement','/panneauSdT','/boardAdmin','/panneauUtilisateur','/panneauCadeau'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if(authRequired && !loggedIn){
    next('/login');
  } else {
    next();
  }
});

export default router;