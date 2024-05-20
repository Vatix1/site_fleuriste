<template>
  <div>
    <div class="image-logo"> 
      <div class="container">
        <div class="element_photo">
          <img class="photo" src="../assets/logo.png" alt="photo">
          <p class="boxtext">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla mattis ligula in diam porttitor efficitur. Proin
               sagittis, velit ut dictum auctor, est urna viverra dui, in
                varius mi elit vel lorem. Cras laoreet mattis diam sed 
                feugiat. Nunc egestas nulla nisl. Donec tempus mi at vulputate
                 sagittis. Curabitur vehicula orci mi, ut elementum orci faucibus 
                 eu. Ut tempus pretium nisl vel consectetur. Sed porta quam lacus, 
                 nec elementum urna fermentum nec. Morbi commodo et est in vulputate. 
                 Cras enim mi, mollis hendrerit pharetra et, imperdiet et mi. Mauris 
                 ac sapien posuere, consectetur purus et, sodales leo. Nunc a eros nibh.
                  Integer ac quam mi. Donec vulputate scelerisque leo, at tempus neque 
                  auctor non. Cras vitae justo vulputate enim varius fringilla. Nunc 
                  luctus purus magna, in ultricies est semper id. 
            </span>
          </p>
        </div>  
      </div> 
    </div>
    <button>bouquet</button>
    <button>salon de the</button>
    <button>galerie</button>
    <button>cadeau</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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


.image-logo{
  background-image: url(../assets/fond_opa.jpeg);
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


.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 20px 0;
}
</style>
