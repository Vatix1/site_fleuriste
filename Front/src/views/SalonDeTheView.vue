<template>
    <div class="row">
      <div class="box">
        <div class="img">
          <img src="../assets/fond_opa.jpeg" alt="image 1" class="img1">
          <img src="../assets/the.jpg" alt="image 2" class="img2">
        </div>
      </div>
      <div class="box desc">
        <div class="description">
          <p>Bienvenue dans notre salon de thé chaleureux et accueillant, où vous pourrez déguster 
            une grande variété de boissons chaudes et fraîches, à l'intérieur ou en extérieur selon 
            vos préférences. Nous proposons une sélection de thés, cafés et chocolats chauds de qualité 
            supérieure, ainsi que des jus de fruits frais, des smoothies et des limonades maison pour 
            vous rafraîchir. Notre salon de thé est l'endroit idéal pour se détendre et se ressourcer, 
            seul ou en compagnie, dans une ambiance conviviale et détendue. Nous avons également une 
            sélection de pâtisseries et de snacks faits maison pour accompagner vos boissons. Nous 
            sommes impatients de vous accueillir et de vous faire découvrir notre sélection de boissons 
            et de mets délicieux.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <div class="carte" style="display: flex; flex-direction: column; align-items: flex-start;">
          <template v-for="(type) in type_article" v-bind:key="type.id_type_article">
            <span>{{ type.nom_type_article }} </span>
            <hr>
            <div v-for="(article) in filteredCarte(type)" v-bind:key="article.id_article">
              <div class="row_art">
                <div class="article">
                  <p>{{ article.nom_article }}</p>
                  <p>{{ article.prix_article }}</p>
                </div>  
              </div>
            </div>
            <hr>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import { getAllArticle, getAllTypeArticle } from '@/services/salondethe.services';
  
  export default {
    name: 'SalonDeTheView',
  
    computed: {
     ...mapState(['salonDeThe']),
      filteredCarte() {
        return (type) => {
          return this.carte.filter((article) => article.id_type_article === type.id_type_article);
        };
      }
    },
  
    data() {
      return {
        carte: [],
        type_article: [],
      }
    },
  
    async mounted() {
      this.carte = await this.getAllArticle();
      this.type_article = await this.getTypeArticle();
    },
  
    methods: {
      async getAllArticle() {
        return await getAllArticle();
      },
      async getTypeArticle() {
        return await getAllTypeArticle();
      }
    }
  }
  </script>
  
  <style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    background-image: url(../assets/the.jpg);
  }
  
  .box {
    flex: 1 1 25%;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
  
    backdrop-filter: blur(15px);
  }
  .box .desc {
    background-image: url(../assets/the.jpg);
    margin-left:0px; 
  }
  
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .description {
    padding: 20px;
    background-color: rgb(248, 243, 243);
    width: 450px;
    
  }
  
  .carte {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: antiquewhite;
  }
  
  .carte span {
    margin-right: 10px;
    font-weight: bold;
    color: #333;
  }
  
  .article {
    display: flex;
    justify-content: space-between;
    padding-left: 8%;
    width:450px ;
  }
  
  p {
    margin-bottom: 0px;
  }
  img {
    width: 50%;
    height: 100%;
  }

  hr {
        display: block;
        width: 0;
        margin-top: 0;

        border: none;
        border-bottom: solid 2px #333;
  }

  .img1 {
    size: 25%;
  }
  .img2 {
    size: 75%;
  }
  
  /* Média query pour les écrans de taille inférieure à 768px */
  @media (max-width: 768px) {
   .box {
      flex: 1 1 100%;
    }
  }
  </style>