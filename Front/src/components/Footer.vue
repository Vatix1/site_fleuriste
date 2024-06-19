<template>
    <footer>
      <p>
        <strong>{{ name }}</strong><br>
        {{ address }}<br>
        {{ phoneNumber }}
      </p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',

    data() {
      return {
        name: 'Histoire de coeur',
        address: '24 rue de la République, 69680 Chassieu',
        phoneNumber: '+33 4 78 90 74 10'
      };
    }
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
  }
  </style>