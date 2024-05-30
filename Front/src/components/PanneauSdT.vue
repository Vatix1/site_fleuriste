<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Gestion des articles</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-typeArticle" @click="toggleAddTypeArticle">{{ showAddTypeArticle ? 'Fermer' : "Ajouter un type d'article"}}</button>
                <div v-if="showAddTypeArticle" class="card">
                <div class="card-header">
                    <h3>Ajouter un Type d'article</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newTypeArticleName" required v-model="newTypeArticleName">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="createNewTypeArticle">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(type, typeIndex) in this.type_articles" :key="typeIndex" class="card-min">
            <hr>
            <h2>{{ type.nom_type_article }}</h2>
            <div class="counter-container">
                <button class="btn btn-secondary" @click="updateTypeArticle(type.id_type_article,type.nom_type_article)">Modifier</button>
                <button class="btn btn-danger" @click="deleteTypeArticle(type.id_type_article)">Supprimer</button>
            </div>
            </div>
        </div> 
        <!-- article -->
        <div class="row">
            <div class="col-12">
                <button class="btn show-add-article" @click="toggleAddArticle">{{ showAddArticle ? 'Fermer' : 'Ajouter un article'}}</button>
                <div v-if="showAddArticle" class="card">
                <div class="card-header">
                    <h3>Ajouter un article</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="newArticleName" required v-model="newArticleName">
                    </div>
                    <div class="form-group">
                        <label for="prix">Prix</label>
                        <input type="number" step="0.01" class="form-control" id="newArticlePrix" required v-model="newArticlePrix">
                    </div>
                    <div class="form-group">
                        <label for="type">Type</label>
                        <select class="form-control" id="newArticleType" v-model="selectedTypeId[type.id_article]">
                            <option v-for="(type, typeIndex) in type_articles" :key="typeIndex" :value="type.id">{{ type.nom }}</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary" @click="createNewArticle">Ajouter</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(article, articleIndex) in this.articles" :key="articleIndex" class="card-min">
            <hr>
            <h2>{{ article.nom_article }}</h2>
            <p class="text">
                <u>Prix :</u> <input type="number" :id="'articlePrice_' + article.prix_article" v-model="article.prix_article" min="1"> €<br>
            </p>
            <div class="details-container">
                <hr>
                <h3>Type d'article</h3>
                <p>{{ article.nom_type_article }}</p>
                <select name="type-article" v-model="selectedTypeIdsArticle[article.id_article]">
                <option v-for="(type, typeIndex) in type_articles" :key="typeIndex" :value="type.id">{{ type.nom_type_article }}</option>
                </select>
                <hr>
            </div>
            <div class="counter-container">
                <button class="btn btn-secondary" @click="updateArticle(article.id_article,article.nom_article, article.prix_article, article.id_type_article)">Modifier</button>
                <button class="btn btn-danger" @click="deleteArticle(article.id_article)">Supprimer</button>
            </div>
            </div>
        </div> 
    </div>
</template>
<script>
import { getAllArticle, updateArticle, addArticle, deleteArticle, getAllTypeArticle, updateTypeArticle, createTypeArticle, deleteTypeArticle} from '@/services/salondethe.services';


export default {
    name: "PanneauSdT",

    data() {
      return {
        articles: [],
        type_articles:[],
        newArticleName:'',
        newArticlePrix: 0,
        showAddArticle: false,
        showAddTypeArticle: false,
        selectedTypeId: {},
        selectedTypeIdsArticle: {}
      };
    },
    async mounted() {
        this.articles = await this.getArticle();
        this.type_articles = await this.getTypeArticle();
    },

    methods: {
        async getArticle() {
            return await getAllArticle();
        },
        async getTypeArticle(){
            return await getAllTypeArticle();
        },
        toggleAddArticle() {
            this.showAddArticle = !this.showAddArticle;
        },
        toggleAddTypeArticle() {
            this.showAddTypeArticle = !this.showAddTypeArticle;
        },
        async addArticle(addArticleName,addArticlePrix,addIdTypeArticle) {
            let data = {
                nom_article: addArticleName,
                prix_article: addArticlePrix,
                id_type_article: addIdTypeArticle
            }
            await addArticle(data);
        },
        async createNewTypeArticle(newTypeArticleName) {
            await createTypeArticle(newTypeArticleName)
        }, 

        async updateArticle(id_article,nom_article,prix_article){
            const selectedTypeIds = this.selectedTypeIdsArticle[id_article]
            let data = {
                id_article: id_article,
                nom_article: nom_article,
                prix_article: prix_article,
                id_type_article: selectedTypeIds
            }
            await updateArticle(data);
        },
        async updateTypeArticle(id_type_article,nom_type_article){
            let data = {
                id_type_article: id_type_article,
                nom_type_article: nom_type_article
            }
            await updateTypeArticle(data);
        },
        async deleteArticle(id_article){
            await deleteArticle(id_article)
        },
        async deleteTypeArticle(id_type_article){
            await deleteTypeArticle(id_type_article)
            location.reload();
        }

    }
}
</script>