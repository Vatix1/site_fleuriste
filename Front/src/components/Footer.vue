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
        name: 'Mon entreprise',
        address: '123 rue des Roses, 75000 Paris',
        phoneNumber: '+33 1 23 45 67 89'
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