<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Gestion des utilisateurs</h2>
        </div>
      </div>
      <div class="row">
            <div class="col-12">
                <button class="btn show-add-bouquet" @click="toggleAddUtilisateur">{{ showAddUtilisateur ? 'Fermer' : 'Ajouter un utilisateur'}}</button>
                <div v-if="showAddUtilisateur" class="card">
                <div class="card-header">
                    <h3>Ajouter un bouquet</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newUtilisateurName" required v-model="newUtilisateurName">
                    </div>
                    <div class="form-group">
                        <label for="nom">Mot de passe</label>
                        <input type="text" class="form-control" id="newUtilisateurMDP" required v-model="newUtilisateurMDP">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="createNewUtilisateur(newUtilisateurName,newUtilisateurMDP)">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Role ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(utilisateur,utilisateurIndex) in this.utilisateurs" :key="utilisateurIndex">
            <td>{{ utilisateur.nom_utilisateur }}</td>
            <td>
            <select v-model="selectedRole[utilisateur.id_utilisateur]"> 
              <option v-for="(role, roleIndex) in roles" :key="roleIndex" :value="role.id_role">
                {{ role.nom_role }}
              </option>
            </select>
          </td>
          <td>
            <button class="btn btn-primary" v-on:click="modifierUtilisateur(utilisateur.id_utilisateur)">
              Modifier
            </button>
            <button class="btn btn-danger" v-on:click="supprimerUtilisateur(utilisateur.id_utilisateur)">
              Supprimer
            </button>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getAllUsers, getAllRoles, updateUtilisateur, createUtilisateur, deleteUtilisateur } from '@/services/users.services'
  
  export default {
    name: "PanneauUtilisateur",
  
    data() {
      return {
        utilisateurs: [],
        roles: [],
        selectedRole: {},
        showAddUtilisateur: false,
        newUtilisateurName: '',
        newUtilisateurMDP: ''
      };
    },
    async mounted() {
      this.utilisateurs = await this.getUtilisateur();
      this.roles = await this.getRoles();
    },
  
    methods: {
        async getUtilisateur() {
            return await getAllUsers();
        },
        async getRoles(){
            return await getAllRoles();
        },
        toggleAddUtilisateur() {
            this.showAddUtilisateur = !this.showAddUtilisateur;
        },
        async modifierUtilisateur(id_utilisateur) {
            const selectedRoleId = this.selectedRole[id_utilisateur]
            let data = {
                id_utilisateur: id_utilisateur,
                id_role: selectedRoleId
            }
            await updateUtilisateur(data);
        },
        async createNewUtilisateur(nom_utilisateur,mot_de_passe) {
            let data = {
                nom_utilisateur: nom_utilisateur,
                mot_de_passe: mot_de_passe
            }
            console.log(data);
            await createUtilisateur(data)
        },
        async supprimerUtilisateur(id_utilisateur) {
          console.log('supp',id_utilisateur);
          await deleteUtilisateur(id_utilisateur)
          location.reload();
        }
    }
}
  
  </script>
  