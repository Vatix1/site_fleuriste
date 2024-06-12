<template>
    <!-- Page Content  -->
    <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-info" @click="toggleSidebar">
                    <i class="fas fa-align-left"></i>
                    <span>Choisir un evenement</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>


            </div>
        </nav>
    </div>
    <div class="rows">
        <div class="wrapper">
            <!-- Sidebar  -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Evenements</h3>
                    <div v-for="(evenement, evenementIndex) in evenements" :key="evenementIndex">
                        <div class="card-body">
                            <h5 class="card-title">{{ evenement.nom_evenement }}</h5>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="carousel">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                </Slide>
            </Carousel>

            <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSlide" ref="carousel">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
                </Slide>
            </Carousel>
        </div>
    </div>


</template>
<script>

import { mapState } from 'vuex';
import { Carousel, Slide } from 'vue3-carousel'
import { getAllEvenement, getAllPhoto } from '@/services/evenement.services';

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
            photos: [],
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
        slideTo(val) {
            this.currentSlide = val
        },
        toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('active');
        }
    }
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