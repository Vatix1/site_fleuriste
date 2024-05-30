<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Gestion des Evenements</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-bouquet" @click="toggleAddEvenement">{{ showAddEvenement ? 'Fermer' : 'Ajouter un evenement'}}</button>
                <div v-if="showAddEvenement" class="card">
                <div class="card-header">
                    <h3>Ajouter un evenement</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newEvenementName" required v-model="newEvenementName">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="createNewEvenement(newEvenementName)">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(evenement, evenementIndex) in this.evenements" :key="evenementIndex" class="card-min">
                <hr>
                <h2>{{ evenement.nom_evenement }}</h2>
                <div class="counter-container">
                    <button class="btn btn-secondary" @click="updateEvenement(evenement.id_evenement,evenement.nom_evenement)">Modifier</button>
                    <button class="btn btn-danger" @click="supprimerEvenement(evenement.id_evenement)">Supprimer</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-bouquet" @click="toggleAddPhoto">{{ showAddPhoto ? 'Fermer' : 'Ajouter une photo'}}</button>
                <div v-if="showAddPhoto" class="card">
                <div class="card-header">
                    <h3>Ajouter une photo</h3>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="newEvenementImage">
                            <h3>Evenements</h3>
                            <div v-for="(evenement, evenementIndex) in this.evenements" :key="evenementIndex">
                                <select name="evenement" v-model="selectedEvenement[evenement.id_evenement]">
                                    <option value="">{{ evenement.nom_evenement}}</option>
                                </select>
                            </div>
                        </div>
                    <button type="submit" class="btn btn-primary" @click="createNewPhoto">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card-deck">
                    <div class="card" v-for="(evenement, evenementIndex) in evenements" :key="evenementIndex">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4" v-for="(photo, photoIndex) in evenement.photos" :key="photoIndex">
                                    <img :src="photo.url" class="img-fluid" alt="photo">
                                    <button class="btn btn-secondary" @click="editPhoto(photo.id_photo, photo.id_evenement)">Modifier</button>
                                    <button class="btn btn-danger" @click="deletePhoto(photo.id_photo)">Supprimer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAllEvenement, deleteEvenement, createEvenement, updateEvenement, getAllPhoto } from '@/services/evenement.services';

export default {
    name: 'PanneauEvenement',

    data() {
        return {
            evenements: [],
            photos:[],
            showAddPhoto: false,
            showAddEvenement: false,
            selectedEvenement: {}
        }
    },

    async mounted() {
        this.evenements = await this.getEvenement();
    },

    methods: {
        toggleAddPhoto(){
            this.showAddPhoto = !this.showAddPhoto;
        },
        toggleAddEvenement() {
            this.showAddEvenement = !this.showAddEvenement;
        },
        async getEvenement() {
            return await getAllEvenement();
        },
        async getPhoto(){
            return await getAllPhoto();
        },
        async updateEvenement(nom_evenement){
            await updateEvenement(nom_evenement)
        },
        async supprimerEvenement(id_evenement){
            await deleteEvenement(id_evenement);
        },
        async createNewEvenement(newEvenementName) {
            let data = {
                nom_evenement: newEvenementName
            }
            await createEvenement(data);
        }

    }
}
</script>