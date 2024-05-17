<template>
    <br><br>
    <div>
        <p>cadeau</p>
        <p>{{ formule }}</p>
        <p>{{ bougie }}</p>
        <p>{{ the }}</p>
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
            formule: [],
            bougie: [],
            the: []
        }
    },

    async mounted() {
        this.formule = await this.getFormule();
        this.bougie = await this.getBougie();
        this.the = await this.getThe();
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