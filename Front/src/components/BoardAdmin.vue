<template>
  <div class="row">
    <div class="col-12">
      <h1>Board Admin</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <router-link to="/panneauBouquet" class="btn btn-primary btn-block">
        Bouquets
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/panneauSdT" class="btn btn-primary btn-block">
        Salon de The
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/panneauEvenement" class="btn btn-primary btn-block">
        Événements
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/panneauCadeau" class="btn btn-primary btn-block">
        Cadeaux
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/panneauUtilisateur" class="btn btn-primary btn-block">
        Utilisateurs
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "BoardAdmin",
};

</script>
