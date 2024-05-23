<template>
    <div class="col-md-12">
        <div class="card card-container">
            <img
            id="profile-img"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            class="profile-img-card"
            />
            <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                    <div class="form-group">
                        <label for="username">Nom d'utilisateur</label>
                        <Field name="username" type="text" class="form-control" />
                        <ErrorMessage name="username" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <Field name="email" type="email" class="form-control" />
                        <ErrorMessage name="email" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de Passe</label>
                        <Field name="password" type="password" class="form-control" />
                        <ErrorMessage name="password" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span>Register</span>
                        </button>
                    </div>
                </div>
            </Form>
            <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: "RegisterForm",
    components: {
        Form,
        Field,
        ErrorMessage,
    },

    data() {
        const schema = yup.object().shape({
            username: yup.string().required("Username is required!").min(3, "3 caracters minimum !").max(50, "50 caracters maximum !"),
            email: yup.string().required("Email is required!").email("Email invalide !"),
            password: yup.string().required("Password is required!").min(6, "6 caracters minimum").max(50, "50 caracters maximum !")
        });
        return {
            successful: false,
            loading: false,
            message: "",
            schema,
        };
    },

    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },

    methods: {
        handleRegister(user){
            this.message = "";
            this.successful = false;
            this.loading = true;

            this.$store.dispatch("auth/register", user).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                },
                (error) => {
                    this.message = 
                    (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
    },
};
</script>

<style scoped>
</style>