<template>
    <br><br>
    <div>
        <p>Salon de The</p>
        <p>{{ carte }}</p>
    </div>
</template>
<script>

import { mapState } from 'vuex';
import { getAllArticle } from '@/services/salondethe.services';

export default {
    name: 'SalonDeTheView',

    computed: {
        ...mapState(['salonDeThe'])
    },

    data() {
        return {
            carte: [],
        }
    },
    
    async mounted() {
        this.carte = await this.getAllArticle();
    },

    methods: {
        async getAllArticle() {
            return await getAllArticle();
        }
    }
}
</script>