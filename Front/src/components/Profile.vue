<template>
    <div class="container">
        <header class="jumbotron">
            <h3>
                <strong>{{currentUser.username}}</strong> Profile
            </h3>
        </header>
        <p>
            <strong>Token:</strong>
            {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
        </p>
        <p>
            <strong>Email:</strong>
            {{currentUser.email}}
        </p>
        <strong>Authorities :</strong>
        <ul>
            <li v-for="role in currentUser.roles" :key="role">{{ role }}</li>
        </ul>
        <div v-if="currentUser.roles.includes('ROLE_USER')">
            <BoardUser/>
        </div>
        <div v-else-if="currentUser.roles.includes('ROLE_MODERATOR')">
            <BoardMod/>
        </div>
        <div v-else-if="currentUser.roles.includes('ROLE_ADMIN')">
            <BoardAdmin/>
        </div>
    </div>
</template>

<script>
import BoardUser from './BoardUser';
import BoardMod from './BoardMod';
import BoardAdmin from './BoardAdmin';

export default {
    name: 'ProfilePage',
    components: {
        BoardUser,
        BoardMod,
        BoardAdmin
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    }
};
</script>
