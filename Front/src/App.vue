<template>
  <div id="app">
    <div class="tarteausucre">
      <Navbar :title="title" @menuClick="menuClickHandle"/>
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data(){
    return {
      router : useRouter(),
      showLogin: false,
      showRegister: false,
      title:[
        {text: "Bouquet"},
        {text: "Galerie"},
        {text: "Salon de The"},
        {text: "Evenement"},
        {text: "Cadeau"},
      ],
    }
  },

  methods: {
    menuClickHandle(index) {
      const current = this.$route.name;
      if (index === 0 && current !== 'bouquet'){
        this.router.push({name: 'bouquet'});
      } else if (index === 1 && current !== 'galerie') {
        this.router.push({name: 'galerie'});
      } else if (index === 2 && current !== 'salon-de-the') {
        this.router.push({name: 'salon-de-the'});
      } else if (index === 3 && current !== 'evenement') {
        this.router.push({name: 'evenement'});
      } else if (index === 4 && current !== 'cadeau') {
        this.router.push({name: 'cadeau'});
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  position: fixed; top: 0; z-index: 11; background: linear-gradient(to bottom, rgba(245, 240, 230, 1), rgba(255, 255, 255, 0));
}

.footer{
  position: fixed; bottom: 0; z-index: 11;background: linear-gradient(to top, rgba(245, 240, 230, 1), rgba(255, 255, 255, 0));
}
</style>
