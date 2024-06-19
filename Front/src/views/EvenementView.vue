<template>
    <div>
        <div v-for="evenement in evenements" :key="evenement.id_evenement">
            <h2>{{ evenement.nom_evenement }}</h2>
            <carousel v-if="evenementPhotos(evenement.id_evenement).length > 0" :items-to-show="3" :wrap-around="true"
                :navigation-enabled="true">
                <slide v-for="photo in evenementPhotos(evenement.id_evenement)" :key="photo.id">
                    <img :src="photo.url" alt="Photo de l'événement" />
                </slide>
            </carousel>
        </div>

    </div>
</template>



<script>

import { mapState } from 'vuex';
import { getAllEvenement, getAllPhoto } from '@/services/evenement.services';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'EvenementView',
    components: {
        Carousel,
        Slide,
    },

    computed: {
        ...mapState(['evenement'])
    },

    data() {
        return {
            evenements: [],
            photos: [
                {
                    id: 1,
                    id_evenement: 1,
                    url: 'https://via.placeholder.com/300x200?text=Photo+1',
                },
                {
                    id: 2,
                    id_evenement: 1,
                    url: 'https://via.placeholder.com/300x200?text=Photo+2',
                },
                {
                    id: 3,
                    id_evenement: 5,
                    url: 'https://via.placeholder.com/300x200?text=Photo+3',
                },
            ],
            currentSlide: 0,
        }
    },

    async mounted() {
        this.evenements = await this.getEvenement();
        //this.photos = await this.getPhoto();
        console.log('photo', this.photos);
    },

    methods: {
        async getEvenement() {
            return await getAllEvenement();
        },
        async getPhoto() {
            return await getAllPhoto();
        },
        evenementPhotos(id_evenement) {
            console.log("id_event",id_evenement,this.photos.filter(photo => photo.id_evenement === id_evenement));
            return this.photos.filter(photo => photo.id_evenement === id_evenement);
        },
    },

}
</script>
<style scoped>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: #d354a2;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}


.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #d68bec;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }

    #sidebar.active {
        margin-left: 0;
    }

    #sidebarCollapse span {
        display: none;
    }
}
</style>