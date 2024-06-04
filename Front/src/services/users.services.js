import { del, get, patch, post } from "./axios.services";
//import authHeader from "./auth-header";


async function getAllUsersFromAPI(){
    return get('/user/getAllUsers', getAllUsers)
}

async function getAllUsers() {
    let anwser = await getAllUsersFromAPI()
    return anwser.data
}

async function getAllRolesFromAPI() {
    return get('/user/getAllRoles', getAllRoles)
}

async function getAllRoles() {
    let anwser = await getAllRolesFromAPI()
    return anwser.data
}

async function updateUtilisateurFromAPI(data) {
    console.log('user',data)
    return patch('/user/updateUtilisateur',data, updateUtilisateur)
}

async function updateUtilisateur(data) {
    let anwser = await updateUtilisateurFromAPI(data)
    return anwser.data
}

async function deleteUtilisateurFromAPI(id) {
    return del('/user/deleteUtilisateur?id='+id, deleteUtilisateur)
}

async function deleteUtilisateur(id) {
    console.log('del serv', id);
    let anwser = await deleteUtilisateurFromAPI(id)
    return anwser.data
}

async function createUtilisateurFromAPI(data) {
    console.log('pass',data);
    return post('/user/createUtilisateur',data, 'createUtilisateur')
}

async function createUtilisateur(data) {
    let anwser = await createUtilisateurFromAPI(data)
    console.log('create', anwser);
    return anwser.data
}

async function loginFromAPI(user) {
    console.log('pass', user);
    let data = {
        nom_utilisateur: user.username,
        mot_de_passe: user.password
    }
    console.log('pass 2', data);
    return post('/user/signin',data,'signin')
}

async function login (user) {
    let anwser = await loginFromAPI(user)
    if(anwser.data.accesToken) {
        localStorage.setItem('user', JSON.stringify(anwser.data))
    }
    return anwser.data
}

async function logout() {
    localStorage.removeItem('user');
}
/*
register(user) {
    return post('auth/signup', {
        nom_utilisateur: user.nom_utilisateur,
        email: user.email,
        mot_de_passe: user.mot_de_passe
    });
}
*/
/*
async function getUserProfile() {
    return get( '/user/getProfileUser', { headers: authHeader() });
}

async function getModProfile() {
    return get( '/user/getProfileMod', { headers: authHeader() });
}

async function getAdminProfile() {
    return get( '/user/getProfileAdmin', {headers: authHeader() });
}
*/

export{
    getAllUsers,
    getAllRoles,
    updateUtilisateur,
    deleteUtilisateur,
    createUtilisateur,
    login,
    logout,
}



