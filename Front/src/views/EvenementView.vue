<template>
    <br><br>
    <div>
        <p>evenement</p>
        <p>{{ evenement }}</p>
    </div>
</template>
<script>

import { mapState } from 'vuex';
import { getAllEvenement } from '@/services/evenement.services';

export default {
    name: 'EvenementView',

    computed: {
        ...mapState(['evenement'])
    },

    data() {
        return {
            evenement: [],
        }
    },
    
    async mounted() {
        this.evenement = await this.getEvenement();
    },

    methods: {
        async getEvenement() {
            return await getAllEvenement();
        }
    }
}
</script>