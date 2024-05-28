<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Gestion des utilisateurs</h2>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Role ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(utilisateur,utilisateurIndex) in this.utilisateurs" :key="utilisateurIndex">
            <td>{{ utilisateur.nom_utilisateur }}</td>
            <td>{{ utilisateur.email }}</td>
            <td>
            <select v-model="utilisateur.role_id">
              <option v-for="(role, roleIndex) in roles" :key="roleIndex" :value="role.id_role">
                {{ role.nom_role }}
              </option>
            </select>
          </td>
          <td>
            <button class="btn btn-primary" v-on:click="modifierUtilisateur(utilisateur)">
              Modifier
            </button>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getAllUsers } from '@/services/users.services'
  
  export default {
    name: "PanneauUtilisateur",
  
    data() {
      return {
        utilisateurs: [],
      };
    },
    async mounted() {
      this.utilisateurs = await getAllUsers();
    },
  
    methods: {
      async getUtilisateur() {
        return await getAllUsers();
      },
    }
  }
  
  </script>
  