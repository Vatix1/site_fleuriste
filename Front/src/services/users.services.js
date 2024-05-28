import { getRequest } from "./axios.services";
//import authHeader from "./auth-header";

async function getAllUsersFromAPI(){
    return getRequest('/users/getAllUsers', 'getAllUsers')
}

async function getAllUsers() {
    let anwser = await getAllUsersFromAPI()
    return anwser.data
}

async function getAllRolesFromAPI() {
    return getRequest('/users/getAllRoles', 'getAllRoles')
}

async function getAllRoles() {
    let anwser = await getAllRolesFromAPI()
    return anwser.data
}
/*
async function getUserProfile() {
    return getRequest( '/user/getProfileUser', { headers: authHeader() });
}

async function getModProfile() {
    return getRequest( '/user/getProfileMod', { headers: authHeader() });
}

async function getAdminProfile() {
    return getRequest( '/user/getProfileAdmin', {headers: authHeader() });
}
*/

export{
    getAllUsers,
    getAllRoles,
}



