<template>
    <hr>
    <div class="col-md-12">
        <div class="card card-container">
            <img
                id="profile-img"
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                class="profile-img-card"
                />
                <hr>
            <Form @submit="handleLogin" :validation-schema="schema">
                <div class="form-group">
                    <label for="username">Nom d'utilisateur</label>
                    <Field name="username" type="text" class="form-control" />
                    <ErrorMessage name="username" class="error-feedback" />
                </div>
                <div class="form-group">
                    <label for="password">Mot de Passe</label>
                    <Field name="password" type="password" class="form-control" />
                    <ErrorMessage name="password" class="error-feedback" />
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        <span>Se connecter</span>
                    </button>
                </div>
                <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">
                        {{message}}
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
import { mapGetters } from 'vuex';

export default {
    name: 'LoginForm',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            username: yup.string().required('Username is required!'),
            password: yup.string().required('Password is required!'),
        });

        return{
            loading: false,
            message: '',
            schema,
            user: [],
        };
    },
    computed: {
        ...mapGetters({
            user: 'auth/user',
        })
    },
    methods: {
        handleLogin(user) {
            this.loading = true;
            console.log("yolo",user)
            this.$store.dispatch("auth/login", user).then(
                () => {
                    console.log('yo')
                    // Récupérer le rôle de l'utilisateur à partir du store
                    const user = this.$store.getters["auth/user"];
                    console.log("store",user)
                    const role = user.roles;
                    console.log("log",role);
                    // Rediriger vers le bon tableau en fonction du rôle
                    let redirectPath = "/";
                    if (role === 3) {
                        redirectPath = "/boardAdmin";
                    } else if (role === 2) {
                        redirectPath = "/boardMod";
                    }
                    
                    this.$router.push(redirectPath);
                },
                (error) => {
                    this.loading = false;
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                }
            );
        },
    },
};

</script>
<style scoped>

.col-md-12 {
    display: flex;
    justify-content: center;
}

img {
    border-radius: 50%;
}

</style>