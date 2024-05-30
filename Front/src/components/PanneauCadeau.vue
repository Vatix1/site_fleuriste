<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Gestion des Cadeaux</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-bougie" @click="toggleAddBougie">{{ showAddBougie ? 'Fermer' : 'Ajouter une bougie'}}</button>
                <div v-if="showAddBougie" class="card">
                <div class="card-header">
                    <h3>Ajouter une bougie</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newBougieName" v-model="newBougieName" required>
                    </div>
                    <div class="form-group">
                        <label for="prix">Prix</label>
                        <input type="number" step="0.01" class="form-control" id="newBougiePrix" v-model="newBougiePrix" required>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control-file" id="newBougieImage">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="createNewBougie(newBougieName,newBougiePrix,newBougieImage)">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(bougie, bougieIndex) in this.bougies" :key="bougieIndex" class="card-min">
            <hr>
            <h2>{{ bougie.nom_bougie}}</h2>
            <p class="text">
                <u>Prix :</u> <input type="number" :id="'bougiePrice_' + bougie.prix_bougie" v-model="bougie.prix_bougie" min="1"> €<br>
            </p>
            <div class="image-container">
                <hr>    
                <img :src="bougie.image_bougie" alt="bougie">
                <hr>
                <input type="file" @change="updateBougieImage(bougie, $event)">
            </div>
            <div class="counter-container">
                <button class="btn btn-secondary" @click="updateBougie(bougie.id_bougie,bougie.nom_bougie, bougie.prix_bougie)">Modifier</button>
                <button class="btn btn-danger" @click="deleteBougie(bougie.id_bougie)">Supprimer</button>
            </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-the" @click="toggleAddThe">{{ showAddThe ? 'Fermer' : 'Ajouter un the'}}</button>
                <div v-if="showAddThe" class="card">
                <div class="card-header">
                    <h3>Ajouter un the</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newTheName" v-model="newTheName" required>
                    </div>
                    <div class="form-group">
                        <label for="prix">Prix</label>
                        <input type="number" step="0.01" class="form-control" id="newThePrix" v-model="newThePrix" required>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control-file" id="newTheImage">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="createNewThe(newTheName,newThePrix,newTheImage)">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(the, theIndex) in this.thes" :key="theIndex" class="card-min">
            <hr>
            <h2>{{ the.nom_the }}</h2>
            <p class="text">
                <u>Prix :</u> <input type="number" :id="'thePrice_' + the.prix_the" v-model="the.prix_the" min="1"> €<br>
            </p>
            <div class="image-container">
                <hr>
                <img :src="the.image_the" alt="the">
                <hr>
                <input type="file" @change="updateTheImage(the, $event)">
            </div>
            <div class="counter-container">
                <button class="btn btn-secondary" @click="updateThe(the.id_the,the.nom_the, the.prix_the)">Modifier</button>
                <button class="btn btn-danger" @click="deleteThe(the.id_the)">Supprimer</button>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-formule" @click="toggleAddFormule">{{ showAddFormule ? 'Fermer' : 'Ajouter une formule'}}</button>
                <div v-if="showAddFormule" class="card">
                <div class="card-header">
                    <h3>Ajouter une formule</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newFormuleName" v-model="newFormuleName" required>
                    </div>
                    <div class="form-group">
                        <label for="prix">Prix</label>
                        <input type="number" step="0.01" class="form-control" id="newFormulePrix" v-model="newFormulePrix" required>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control-file" id="newFormuleImage">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="createNewFormule(newFormuleName,newFormulePrix)">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(formule, formuleIndex) in this.formules" :key="formuleIndex" class="card-min">
            <hr>
            <h2>{{ formule.nom_formule }}</h2>
            <p class="text">
                <u>Prix :</u> <input type="number" :id="'formulePrice_' + formule.prix_formule" v-model="formule.prix_formule" min="1"> €<br>
            </p>
            <div class="image-container">
                <hr>
                <img :src="formule.image_formule" alt="formule">
                <hr>
                <input type="file" @change="updateFormuleImage(formule, $event)">
            </div>
            <div class="counter-container">
                <button class="btn btn-secondary" @click="updateFormule(formule.id_formule,formule.nom_formule, formule.prix_formule)">Modifier</button>
                <button class="btn btn-danger" @click="deleteFormule(formule.id_formule)">Supprimer</button>
            </div>
            </div>
        </div>
    </div>
    
</template>
  
<script>
import { getAllBougie, deleteBougie, addBougie, updateBougie, getAllThe, deleteThe, addThe, updateThe,
    getAllFormule, deleteFormule, addFormule, updateFormule  } from "../services/cadeau.services";

  
  export default {
    name: "PanneauCadeau",

    data() {
      return {
        bougies: [],
        thes: [],
        formules: [],
        showAddThe: false,
        showAddBougie: false,
        showAddFormule: false
      };
    },
    async mounted() {
        this.bougies = await this.getBougie();
        this.thes = await this.getThe();
        this.formules = await this.getFormule();
    },

    methods: {
        async getBougie() {
            return await getAllBougie();
        },
        async getThe() {
            return await getAllThe();
        },  
        async getFormule() {
            return await getAllFormule();
        },
        toggleAddBougie() {
            this.showAddBougie = !this.showAddBougie;
        },
        toggleAddThe() {
            this.showAddThe = !this.showAddThe;
        },
        toggleAddFormule() {
            this.showAddFormule = !this.showAddFormule;
        },

        async createNewBougie(newBougieName, newBougiePrix, newBougieImage = ''){
            const data = {
                nom_bougie: newBougieName,
                prix_bougie: newBougiePrix,
                image_bougie: newBougieImage
            }
            console.log("bougie", data);
            await addBougie(data);
        },
        async createNewThe(newTheName,newThePrix,newTheImage = ''){
            const data = {
                nom_the: newTheName,
                prix_the: newThePrix,
                image_the: newTheImage
            }
            console.log("the", data);
            await addThe(data);
        },
        async createNewFormule(newFormuleName,newFormulePrix,newFormuleImage = ''){
            const data = {
                nom_formule: newFormuleName,
                prix_formule: newFormulePrix,
                image_formule: newFormuleImage
            }
            console.log("formule", data);
            await addFormule(data);
        },
        async updateBougie(id_bougie, nom_bougie, prix_bougie) {
            const data = {
                id_bougie: id_bougie,
                nom_bougie: nom_bougie ,
                prix_bougie: prix_bougie,
            }
            await updateBougie(data)
        },
        async updateThe(id_the, nom_the, prix_the) {
            const data = {
                id_the: id_the,
                nom_the: nom_the ,
                prix_the: prix_the,
            }
            await updateThe(data)
        },
        async updateFormule(id_formule, nom_formule, prix_formule) {
            const data = {
                id_formule: id_formule,
                nom_formule: nom_formule ,
                prix_formule: prix_formule,
            }
            await updateFormule(data)
        },
        async deleteBougie(id_bougie) {
            await deleteBougie(id_bougie);
        },
        async deleteThe(id_the){
            await deleteThe(id_the)
        },
        async deleteFormule(id_formule){
            await deleteFormule(id_formule)
        }
    }
}
</script>
        