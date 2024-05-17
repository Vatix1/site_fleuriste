<template>
    <br><br>
    <div>
        <p>galerie</p>
    </div>
</template>
<script>

import { mapState } from 'vuex';

export default {
    name: 'GalerieView',

    computed: {
        ...mapState(['galerie'])
    }
}
</script>