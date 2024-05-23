/*
import { getRequest } from "./axios.services";

async function getAllUsersFromAPI(){
    return getRequest('/users', 'getAllUsers')
}

async function getAllUsers() {
    let anwser = await getAllUsersFromAPI()
    return anwser
}

export{
    getAllUsers
}
*/

import { getRequest } from './axios.services'
import authHeader from "./auth-header";



class UserService {
    getPublicContent() {
        return getRequest('/user/getAllUsers');
    }

    getUserProfile() {
        return getRequest( '/user/getProfileUser', { headers: authHeader() });
    }

    getModProfile() {
        return getRequest( '/user/getProfileMod', { headers: authHeader() });
    }

    getAdminProfile() {
        return getRequest( '/user/getProfileAdmin', {headers: authHeader() });
    }
}

export default new UserService();