<template>
    <br><br>   
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="(formule, formuleIndex) in formules" :key="formuleIndex">
                <div class="card">
                    <img src="" alt="image formule">
                    <div class="card-body">
                        <h5 class="card-title">{{ formule.nom_formule }}</h5>
                        <p class="card-text">Prix : {{ formule.prix_formule }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="(the, theIndex) in thes" :key="theIndex">
                <div class="card">
                    <img src="../assets/the.jpg" alt="the" class="img_the_bougie">
                    <div class="card-body">
                        <div class="rows">
                            <h5 class="card-title">{{ the.nom_the }}</h5> 
                            <p class="card-text">{{ the.prix_the }} €</p>
                             
                        </div>     
                          
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="(bougie, bougieIndex) in bougies" :key="bougieIndex">
                <div class="card">
                    <img src="../assets/bougie img.jpg" alt="bougie" class="img_the_bougie">
                    <div class="card-body">
                        <p class="card-text">{{ bougie.prix_bougie }} €</p>
                        <h5 class="card-title">{{ bougie.nom_bougie }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>
<script>
import { getAllBougie,getAllThe,getAllFormule } from '@/services/cadeau.services';
import { mapState } from 'vuex';

export default {
    name: 'CadeauView',

    computed: {
        ...mapState(['cadeau'])
    },

    data () {
        return {
            formules: [],
            bougies: [],
            thes: []
        }
    },

    async mounted() {
        this.formules = await this.getFormule();
        this.bougies = await this.getBougie();
        this.thes = await this.getThe();
    },

    methods: {
        async getFormule() {
            return await getAllFormule();
        },
        async getBougie() {
            return await getAllBougie();
        },
        async getThe() {
            return await getAllThe();
        }
    }
}

</script>
<style scoped>
.card {
    border: 5px;
    border-style: groove;
    border-color: white
}
.card-body {
    display: flex;
    flex-direction: column-reverse;
}
.container {
    padding: 15px;
}
</style>