<template>
    <br><br>
    <div>
        <h1>Galerie</h1>
        <div class="container"><p>Nous vous invitons à découvrir nos réseaux sociaux, 
            où nous partageons régulièrement de nouvelles photos et les dernières 
            actualités de notre entreprise. Vous y trouverez des informations sur nos 
            produits et services, ainsi que sur les événements auxquels nous participons. 
            N'hésitez pas à nous suivre pour être informé en temps réel de toutes nos 
            nouveautés et à interagir avec nous en commentant et en partageant nos 
            publications. Nous sommes impatients de vous accueillir sur nos réseaux 
            sociaux et de vous faire découvrir notre univers.</p></div>
    </div>
    <a href="https://www.instagram.com/fleurschassieu/" target="_blank">
            <i class="fa fa-instagram"></i>
            Instagram Histoire de Coeur
    </a>
</template>
<script>
/*
import { mapState } from 'vuex';

export default {
    name: 'GalerieView',

    computed: {
        ...mapState(['galerie'])
    }
}
*/
/*
let domainUrl = "https://graph.instagram.com/me/media?"
let fields = "fields=media_url"
var access_token = ""

var fullUrl = domainUrl + fields + "&access_token" + access_token

fetch(fullUrl)
    .then(response => response.json())
    .then(dataArray => {
        dataArray.data.array.forEach(element => {
            document.querySelector(".container").innerHTML += `<img src="${element.media_url}">`
        });
    })
*/
</script>
<style scoped>
img {
    width: calc(100%/3);
    float: left;

}
</style>