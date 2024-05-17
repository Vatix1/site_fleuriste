<template>
    <div class="login-component">
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <label for="username">Nom d'utilisateur:</label>
        <input v-model="username" type="text" id="username" name="username" required>
  
        <label for="password">Mot de passe:</label>
        <input v-model="password" type="password" id="password" name="password" required>
  
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'AppLogin',
    setup() {
      const username = ref('');
      const password = ref('');
  
      const login = () => {
        console.log(`Nom d'utilisateur: ${username.value}, Mot de passe: ${password.value}`);
      };
  
      return {
        username,
        password,
        login,
      };
    },
  };
  </script>
  
  <style scoped>
  .login-component {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    margin: 0 auto;
    box-sizing: border-box;
  }
  
  label {
    display: block;
    margin-top: 10px;
  }
  
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 6px;
    border: 1px solid #ddd;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  