<template>
	<nav class="navbar">
		<div class="nav-left">
			<div>
				<img class="logo" src="../assets/histoiredecoeurlogo.jpg" alt="logo fleuriste"
					style="width: 60px; border-radius: 50%;" @click="showAcceuil()">
			</div>
		</div>
		<div class="nav-center">
			<button v-for="(text, index) in title" :key="index" @click="menuClick(index)" class="nav-button">{{
						text.text
					}}</button>
		</div>
		<!-- <div class="nav-right">
      <button class="login" @click="showLogin()">Connexion</button>
    </div> -->
		<div class="nav-right">
			<button v-if="!isLoggedIn" @click="showLogin" class="nav-button">Connexion</button>
			<button v-else @click="logout" class="nav-button">Déconnexion</button>
			<button v-if="isLoggedIn" @click="showProfile" class="nav-button">Profil</button>
		</div>


		<component :is="currentComponent"></component>
	</nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'AppNavbar',

	emits: ['menuClick'],

	props: {
		title: {
			type: Array,
			required: true,
		},
	},

	components: {
		//Login,
	},
	data() {
		return {
			isLoginActive: false,
			isRegisterActive: false,
			currentComponent: null,
		};
	},
	computed: {
		isLoggedIn() {
			return this.$store.state.auth.status.loggedIn;
		}
	},

	mounted() {
		if (this.$store.state.auth.status.loggedIn) {
			console.log('Un utilisateur est connecté :', this.$store.state.auth.user);
		} else {
			console.log('Aucun utilisateur n\'est connecté');
		}
	},
	methods: {
		...mapActions('auth', ['logout']),

		menuClick(index) {
			this.$emit('menuClick', index);
		},

		showAcceuil() {
			const current = this.$route.name;
			if (current !== 'home') {
				this.$router.push('/');
			}
		},
		showLogin() {
			const current = this.$route.name;
			if (current !== 'login') {
				this.$router.push('/login');
			}
		},
		showProfile() {
			const user = this.$store.state.auth.user;
			if (user.roles == 3) {
				// afficher le profil de l'utilisateur avec les fonctionnalités d'administration
				this.$router.push('/boardAdmin');
			} else {
				// afficher le profil de l'utilisateur standard
				this.$router.push('/');
			}
		}
	}
};
</script>
<style scoped>
/* .navbar {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  color: black;
} */

@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
	margin: 5%;
	color: white;
	background: #111111;
	font-family: 'Roboto', sans-serif;
}

#nav-colors,
#font-colors,
#edges {
	margin-top: 10px;

	.btn {
		display: inline-block;
		padding: 10px;
		margin: 0 5px;
		border: 2px solid #111111;
		transition: 0.2s ease;

		&:hover {
			border: 2px solid white;
		}
	}
}

.navbar {
	border: 0;
	border-radius: 0;
	background: linear-gradient(to right, #837c7c, #c5c4c5);
	height: 80px;

	.nav li>a,
	.navbar-brand {
		max-height: 50px;
		width: auto;
		background: transparent !important;
		font-size: 18px;
		transition: 0.2s ease-in-out;

		&:hover {
			background-color: rgba(255, 255, 255, 0.2);
			font-size: 14px;

			.link {
				width: 100%;
				padding: 0 5px 0 5px;
				visibility: visible;
				font-size: 14px;
			}
		}
	}

	.link {
		width: 0;
		font-family: 'Roboto', sans-serif;
		transition: 0.2s ease-in-out;
		visibility: hidden;
		font-size: 0px;
	}

	span {
		color: white;
	}

	.navbar-toggle {
		padding-right: 0;

		.icon-bar {
			background: white;
		}
	}

	.navbar-collapse {
		display: none;
	}

	button {
		background: transparent;
	}

	button[type=submit] {
		padding-right: 0;

		span {
			transition: 0.3s ease-in-out;
		}

		&:hover {
			span {
				transform: scale(1.3) rotate(90deg);
			}
		}
	}
}

.nav-right {
	display: flex;
	margin-right: 20px;
	width: 25%;
	align-items: center;
	flex-direction: row-reverse;
}

.nav-center {
	display: flex;
	align-items: center;
	width: 65%;
	justify-content: end;
}

.nav-button {
	font-size: 25px;
	width: fit-content;
	padding-left: 15px;
	padding-right: 15px;
	margin: 10px;
	height: 100%;
	border: none;
	background: none;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 0);
	transition: background-color 0.3s;
}

.nav-button:hover {
	background-color: rgba(222, 222, 222, 0.7);
	cursor: pointer;
}

@media(max-width: 769px) {
	.navbar {
		.link {
			padding-left: 10px;
			visibility: visible;
			width: 100%;
			font-size: 14px;
		}

		.navbar-brand {
			.link {
				visibility: hidden;
			}
		}
	}

	.dropdown {
		.dropdown-menu {
			text-align: left !important;
		}
	}

	button[type=submit] {
		width: 50%;
		float: left;
	}

	.navbar-form {
		border: 0;
	}

	.form-group {
		padding: 0;
		margin: 0;

		input {
			width: 50%;
			float: left
		}
	}
}
</style>