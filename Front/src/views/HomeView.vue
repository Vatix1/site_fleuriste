<template>
  <div>
    <div class="image-logo">
      <div class="container">
        <div class="element_photo">
          <img class="photo" src="../assets/fleuriste.webp" alt="photo">
          <p class="boxtext">
            <span>
              Bienvenue chez "Histoire de Cœur", votre fleuriste de confiance au cœur de la ville de Chassieu. Notre
              passion
              pour les fleurs et le désir de partager leur beauté nous ont conduits à créer cette boutique, véritable
              havre de paix et de couleurs.
              <br><br>
              Chez "Histoire de Cœur", nous sommes fiers de proposer une large sélection de fleurs fraîches,
              soigneusement choisies auprès de producteurs locaux et respectueux de l'environnement. Que vous
              recherchiez des roses romantiques, des lys élégants, des orchidées exotiques ou des tournesols joyeux,
              nous avons ce qu'il vous faut.
              <br><br>
              Notre fleuriste est toujours prête à vous aider à créer des bouquets personnalisés
              pour toutes les occasions. Que ce soit pour un anniversaire, un mariage, une naissance ou simplement pour
              faire plaisir, nous mettons notre créativité et notre savoir-faire à votre service pour créer des
              compositions
              florales uniques et éblouissantes.
              <br><br>
              En plus de notre sélection de fleurs, nous sommes heureux de vous accueillir dans notre salon de thé au
              milieu
              des fleurs. Installez-vous confortablement et dégustez une tasse de thé ou de café accompagnée d'une
              pâtisserie
              , tout en profitant de la vue sur nos magnifiques compositions florales. Notre salon de thé est l'endroit
              idéal pour se détendre, se retrouver entre amis ou simplement profiter d'un moment de calme au milieu des
              fleurs.
              <br><br>
              Chez "Histoire de Cœur", nous croyons au pouvoir des fleurs pour raconter des histoires d'amour, exprimer
              des
              sentiments profonds et embellir les moments importants de la vie. Nous sommes impatients de vous
              accueillir dans
              notre boutique et de partager notre amour des fleurs avec vous, tout en savourant une délicieuse tasse de
              thé.
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="container deco">
      <h2>Découvrir nos produits</h2>
      <div class="row">
        <div class="col-md-3" v-for="(button, index) in buttons" :key="index">
          <div class="card">
            <div class="card-body">
              <a href="#" class="btn btn-light" @click="navigateTo(button.route)">
                <i :class="button.icon"></i>
                <h5 class="card-title">{{ button.title }}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3>Horaires d'ouverture</h3>
      <div class="">
        <div class="horaire">
          <p>Mardi - Samedi : 8h - 12h30 / 15h - 19h</p>
          <p>Dimanche : 8h - 12h30</p>
          <p>Lundi : Fermé</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';

export default {
  name: 'HomeView',
  props: {
    msg: String
  },

  data() {
    return {
      buttons: [
        {
          title: 'Bouquet',
          icon: 'fa fa-tags',
          route: '/bouquet'
        },
        {
          title: 'Salon de thé',
          icon: 'fa fa-coffee',
          route: '/salondethe'
        },
        {
          title: 'Galerie',
          icon: 'fa fa-camera',
          route: '/galerie'
        },
        {
          title: 'Cadeau',
          icon: 'fa fa-gift',
          route: '/cadeau'
        }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxtext {
  font-size: 25px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  padding: 20px;
  color: white;
}


.image-logo {
  background-image: url(../assets/boutique.jpeg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: max-content;
  background-position: top center;
  position: relative;
  min-height: 805px;
}


.element_photo {
  display: flex;
}

.photo {
  width: 400px;
  height: 600px;
}

h3 {
  padding-top: 35px;
}

.horaire {
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 30%;
  gap: 15px;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 20px 0;
  height: 90vh;
}

.deco {
  background-image: url(../assets/bordure.png);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: initial;
  /* ou cover si vous voulez que l'image remplisse tout l'espace disponible */
}

.row {
  padding-top: 15%;
}

h2 {
  font-size: 40px;
  padding-bottom: 5%;
}
</style>
