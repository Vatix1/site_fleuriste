
import { postRequest } from "./axios.services"

class AuthService {
    login(user) {
        console.log('pass', user);
        return postRequest( 'auth/signin',{
            nom_utilisateur: user.nom_utilisateur,
            mot_de_passe: user.mot_de_passe
        })
        .then(response => {
            if(response.data.accesToken){
                localStorage.setItem('user',JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return postRequest('auth/signup', {
            nom_utilisateur: user.nom_utilisateur,
            email: user.email,
            mot_de_passe: user.mot_de_passe
        });
    }
}

export default new AuthService();



/*
async function loginFromAPI(data) {
    return postRequest('/auth/signin', data, 'signin')
}

async function login(data){
    let anwser = await loginFromAPI(data)
    return anwser;
}

async function registerFromAPI(data) {
    return postRequest('/auth/signup', data, 'signup')
}

async function register(data){
    let anwser = await registerFromAPI(data)
    return anwser;
}

export {
    login,
    register,
}
*/