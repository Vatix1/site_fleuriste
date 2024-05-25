<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Gestion des bouquets</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-bouquet" @click="toggleBouquet">{{ showAddBouquet ? 'Ajouter un bouquet' : 'Fermer'}}</button>
                <div class="card">
                    <div class="card-header">
                        <h3>Ajouter un bouquet</h3>
                    </div>
                    <div class="card-body">
                        <form>
                        <div class="form-group">
                            <label for="nom">Nom</label>
                            <input type="text" class="form-control" id="nom" required>
                        </div>
                        <div class="form-group">
                            <label for="prix">Prix</label>
                            <input type="number" step="0.01" class="form-control" id="prix" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="3" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Prix</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="bouquet in bouquets" :key="bouquet.id">
                        <td>{{ bouquet.nom }}</td>
                        <td>{{ bouquet.description }}</td>
                        <td><img :src="bouquet.image" alt="bouquet" width="100"></td>
                        <td>{{ bouquet.prix }} €</td>
                        <td>
                        <button class="btn btn-secondary" @click="editBouquet(bouquet)">Modifier</button>
                        <button class="btn btn-danger" @click="deleteBouquet(bouquet.id)">Supprimer</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row" v-if="editedBouquet">
            <div class="col-12">
             <BouquetForm :bouquet="editedBouquet" @cancel="editedBouquet = null" @save="saveEditedBouquet"></BouquetForm>
            </div>
        </div>
    </div>
</template>
  
<script>
import { deleteBouquet, addBouquet, updateBouquet, getAllBouquet } from "../services/bouquet.services";

  
  export default {
    name: "PanneauBouquet",

    data() {
      return {
        bouquets: [],
        bouquet:[],
        dialogCreateBouquet: false,
        newBouquetName:'',
        newBouquetPrix:'',
        newBouquetDescription:'',
        updateBouquetName:'',
        updateBouquetPrix:'',
        updateBouquetDescription:'',
      };
    },
    async mounted() {
      this.bouquets = await getAllBouquet();
    },
    methods: {
        openCreateBouquetDialog() {
            this.dialogCreateBouquet = true;
        },
        closeCreateBouquetDialog(){
            this.dialogCreateBouquet = false;
            this.newBouquetName = '';
            this.newBouquetPrix = '';
            this.newBouquetDescription = '';
        },
        openUpdateBouquetDialog() {
            this.dialogUpdateBouquet = true;
        },
        closeUpdateBouquetDialog() {
            this.dialogUpdateBouquet = false;
            this.bouquet = [];
        },
        async createNewBouquet(){
            const data = {
                nom_bouquet: this.newBouquetName,
                prix_bouquet: this.newBouquetPrix,
                description: this.newBouquetDescription,
            }
            await addBouquet(data);
        },
        async updateBouquet(id) {
            const data = {
                id_bouquet: id,
                nom_bouquet: this.updateBouquetName ,
                prix_bouquet: this.updateBouquetPrix,
                description: this.updateBouquetDescription,
            }
            await updateBouquet(data)
        },
        async deleteBouquet(id) {
            await deleteBouquet(id)
        }
    }
}
</script>
        