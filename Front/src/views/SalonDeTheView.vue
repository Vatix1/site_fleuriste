<template>
    <div class="row">
      <div class="box">
        <div class="img">
          <img src="../assets/fond_opa.jpeg" alt="image 1" class="img1">
          <img src="../assets/the.jpg" alt="image 2" class="img2">
        </div>
      </div>
      <div class="box">
        <div class="description">
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
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
              <div class="row">
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
      <div class="box">
        <div class="img">
          <img src="../assets/fond.jpeg" alt="image_fond">
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
  }
  
  .box {
    flex: 1 1 25%;
    height: 45vh;
    background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(89,89,97,1) 50%);
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    backdrop-filter: blur(15px);
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