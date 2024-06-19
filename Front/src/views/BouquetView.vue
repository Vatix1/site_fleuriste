<template>
    <br><br>
    <div>
        <h1>Bouquets</h1>
        <p>N'hésitez pas à appeler pour prendre connaissance des disponibilités et réserver votre bouquet. </p>
    </div>
    <div class="container">
        <div class="row">
                <div v-for="(bouquet, bouquetIndex) in this.bouquets" :key="bouquetIndex" class="card" >
                    <!-- :style="`background-image: url(${bouquet.image_bouquet})`" -->
                    <div class="overlay">
                        <div class="bouquet">
                            <div class="bouquet name">
                                <p>{{ bouquet.nom_bouquet }}</p>
                                <hr>
                            </div>
                            <div class="bouquet description">
                                <p>{{ bouquet.description }}</p>
                            </div>
                            <div class="bouquet prix">
                                <p>{{ bouquet.prix_bouquet }} €</p>
                            </div>
                        </div>
                    </div>
                    <!-- <img :src="bouquet.image" class="card-img-top" alt="bouquet">> -->
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
    width: 350px;
    height: 350px;
/*  position: absolute; */
    padding: 5px;

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    background: url(../assets/fond.jpeg);
    background-color: black;
    background-size: cover;


    cursor: pointer;

    -webkit-box-shadow: 0 0 5px #000;
        box-shadow: 0 0 5px #000;
}

.overlay {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;

    background: rgba(77, 77, 77, .9);
    color:#FEF5DF;
    opacity: 0;
    transition: all 0.5s;
}

.bouquet{
    letter-spacing: 3px;
    size:cover ;
}

.name{
    padding-top: 25%;
    font-size: 30px;
    margin: 10px;
    p {
        margin-bottom: 0;
    }

    transform: translateY(40px);
    transition: all 0.7s;
    hr {
        display: block;
        width: 0;
        margin-top: 0;

        border: none;
        border-bottom: solid 2px #FEF5DF;

        /* position: absolute; */
        bottom: 0; left: 20px;

        transition: all .5s;
    }
}

.prix{
    font-size: 22px;
    line-height: 10px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s;
    align-items: flex-end;
    padding-top: 5%;
}

.description{
    font-size: 12px;
    opacity: 0;
    letter-spacing: 1px;
    transform: translateY(40px);
    transition: all 0.7s;
    padding-top: 5%;
}

.card:hover .overlay {
    opacity: 1;
    & .name {
        transform: translateY(0px);
    }

    & hr {
        width: 75px;
        transition-delay: 0.4s;
    }

    & .prix {
        transform: translateY(0px);
        transition-delay: 0.3s;
        opacity: 1;
    }

    & .description {
        transform: translateY(0px);
        transition-delay: 0.6s;
        opacity: 1;
    }
}

.row {
    gap: 30px;
}
</style>
