<template>
    <br><br>
    <div v-for="(bouquet, bouquetIndex) in this.bouquets" :key="bouquetIndex" class="card" style="width: 18rem;">
        <img :src="bouquet.image" class="card-img-top" alt="bouquet">
        <div class="card-body">
            <h5 class="card-title">{{ bouquet.nom_bouquet }}</h5>
            <p class="card-text">{{ bouquet.prix_bouquet }} €</p>
            <div v-if="showDescription" class="card-text">
                {{ bouquet.description }}
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
