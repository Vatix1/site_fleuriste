<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
    <div class="row">
      <div class="col-md-3" v-for="(panel, index) in panels" :key="index">
        <component :is="panel.component" v-bind="panel.props"></component>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/users.services";
import PanneauBouquet from "./PanneauBouquet.vue";
import PanneauCadeau from "./PanneauCadeau.vue";
import PanneauEvenement from "./PanneauEvenement.vue";
import PanneauSdT from "./PanneauSdT.vue";
import PanneauUtilisateur from "./PanneauUtilisateur.vue"

export default {
  name: "BoardAdmin",
  components: {
    PanneauBouquet,
    PanneauCadeau,
    PanneauEvenement,
    PanneauSdT,
    PanneauUtilisateur
  },
  data() {
    return {
      content: "",
      panels: [
        {
          component: "PanneauBouquet",
          props: {
            // les props à passer au composant PanelOne
          }
        },
        {
          component: "PanneauCadeau",
          props: {
            // les props à passer au composant PanelTwo
          }
        },
        {
          component: "PanneauEvenement",
          props: {
            // les props à passer au composant PanelThree
          }
        },
        {
          component: "PanneauSdT",
          props: {
            // les props à passer au composant PanelFour
          }
        },
        {
          component: "PanneauUtilisateur",
          props: {
            // les props à passer au composant PanelFive
          }
        }
      ]
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
