<template>
    <br><br>
    <div class="container">
        <div class="card">
            <div class="row">
                <div v-for="(bouquet, bouquetIndex) in this.bouquets" :key="bouquetIndex" class="card" >
                    <img :src="bouquet.image" class="card-img-top" alt="bouquet">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title">{{ bouquet.nom_bouquet }}</h5>
                            <p class="card-text">{{ bouquet.prix_bouquet }} €</p>
                        </div>
                        
                        <div v-if="showDescription" class="card-text">
                            {{ bouquet.description }}
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    
</template>
<script>

import { mapState } from 'vuex';
import { getAllBouquet } from '@/services/bouquet.services';

export default {
    name: 'BouquetView',

    computed: {
        ...mapState(['bouquet'])
    },

    data() {
        return {
            bouquets: [],
        }
    },
    
    async mounted() {
        this.bouquets = await this.getBouquet();
    },

    methods: {
        async getBouquet() {
            return await getAllBouquet();
        }
    }
}
</script>
<style scoped>
.card {
    margin: 10px;
    box-shadow: 0px 0px 1px 0px;
}
.card-img-top{
    height: 370px;
    width: 370px;

}
.card-title{
    font-size: 20px;
    display: block;
}
.card-text{
    justify-content: space-between;
}
</style>
