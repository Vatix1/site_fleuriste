<template>
    <br><br>
    <div>
        <p>galerie</p>
        <div class="container"></div>
    </div>
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

</script>
<style scoped>
img {
    width: calc(100%/3);
    float: left;

}
</style>