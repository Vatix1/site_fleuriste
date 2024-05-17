<template>
    <br><br>
    <div>
        <p>bouquet</p>
        <p>{{ bouquet }}</p>
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
            bouquet: [],
        }
    },
    
    async mounted() {
        this.bouquet = await this.getBouquet();
    },

    methods: {
        async getBouquet() {
            return await getAllBouquet();
        }
    }
}
</script>
