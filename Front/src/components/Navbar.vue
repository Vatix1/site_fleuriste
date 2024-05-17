<template>
  <div class="navbar">
    <div class="nav-left">
      <div>
        <img class="logo" src="" alt="logo fleuriste">
      </div>
      <div @click="showAcceuil()" class="logo-text">
        Histoire de coeur
      </div>
    </div>
    <div class="nav-center">
      <button v-for="(text,index) in title" :key="index" @click="menuClick(index)" class="nav-button">{{ text.text }}</button>
    </div>
    <div class="nav-right">
      <button class="login">Login</button>
    </div>
  </div>
  <component :is="currentComponent"></component>
</template>

<script>


export default {
  name: 'AppNavbar',

  emits: ['menuClick'],

  props: {
    title: {
      type: Array,
      required: true,
    },
  },

  components: {
    //Login,
  },
  data() {
    return {
      isLoginActive: false,
      isRegisterActive: false,
      currentComponent: null,
    };
  },
  methods: {
    menuClick(index) {
      this.$emit('menuClick', index);
    },

    showAcceuil() {
      const current = this.$route.name;
      if (current !== 'home') {
        this.$router.push('/');
      }
    },
  }
};
</script>
<style scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  color: black;
}
</style>