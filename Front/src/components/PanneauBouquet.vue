<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Gestion des bouquets</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-bouquet" @click="toggleAddBouquet">{{ showAddBouquet ? 'Fermer' : 'Ajouter un bouquet'}}</button>
                <div v-if="showAddBouquet" class="card">
                <div class="card-header">
                    <h3>Ajouter un bouquet</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newBouquetName" v-model="newBouquetName" required>
                    </div>
                    <div class="form-group">
                        <label for="prix">Prix</label>
                        <input type="number" step="0.01" class="form-control" id="newBouquetPrix" v-model="newBouquetPrix" required>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="newBouquetDescription" v-model="newBouquetDescription" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control-file" id="newBouquetImage" ref="newBouquetImage">
                    </div>
                    </form>
                    <button type="submit" class="btn btn-primary" @click="createNewBouquet(newBouquetName,newBouquetPrix,newBouquetDescription,newBouquetImage)">Ajouter</button>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
             <div v-for="(bouquet, bouquetIndex) in this.bouquets" :key="bouquetIndex" class="card-min">
            <hr>
            <h2>{{ bouquet.nom_bouquet }}</h2>
            <p class="text">
                <u>Prix :</u> <input type="number" :id="'bouquetPrice_' + bouquet.prix_bouquet" v-model="bouquet.prix_bouquet" min="1"> €<br>
            </p>
            <div class="details-container">
                <hr>
                <p class="text">
                    <u>Description :</u> <textarea :id="'bouquetDescription_' + bouquet.description" v-model="bouquet.description"></textarea>
                </p>
            </div>
            <div class="image-container">
                <hr>
                <img :src="bouquet.image" alt="bouquet">
                <hr>
                <input type="file" @change="updateBouquetImage(bouquet, $event)">
            </div>
            <div class="counter-container">
                <button class="btn btn-secondary" @click="updateBouquet(bouquet.id_bouquet,bouquet.nom_bouquet, bouquet.prix_bouquet, bouquet.description)">Modifier</button>
                <button class="btn btn-danger" @click="deleteBouquet(bouquet.id_bouquet)">Supprimer</button>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { deleteBouquet, createBouquet, updateBouquet, getAllBouquet } from "../services/bouquet.services";

  
  export default {
    name: "PanneauBouquet",

    data() {
      return {
        bouquets: [],
        showAddBouquet: false,
        newBouquetName: '',
        newBouquetPrix: 0,
        newBouquetDescription:"",
        newBouquetImage: "",
      };
    },
    async mounted() {
        this.bouquets = await this.getBouquet();
    },

    methods: {
        async getBouquet() {
            return await getAllBouquet();
        },
        toggleAddBouquet() {
            this.showAddBouquet = !this.showAddBouquet;
        },
        async createNewBouquet(newBouquetName,newBouquetPrix,newBouquetDescription = ''){
            console.log('bouquet',this.$refs.newBouquetImage.files[0]);
            const data = {
                nom_bouquet: newBouquetName,
                prix_bouquet: newBouquetPrix,
                description: newBouquetDescription,
                image_bouquet: this.$refs.newBouquetImage.files[0]
            }
            console.log("bouquet", data);
            await createBouquet(data);
            location.reload();
        },
        async updateBouquet(id, nom, prix, description) {
            const data = {
                id_bouquet: id,
                nom_bouquet: nom ,
                prix_bouquet: prix ,
                description: description,
            }
            await updateBouquet(data)
            alert("Bouquet Modifié")
        },
        async deleteBouquet(id) {
            await deleteBouquet(id)
            location.reload();
        }
    }
}
</script>
        