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

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/test';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserProfile() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getAdminProfile() {
        return axios.get(API_URL + 'admin', {headers: authHeader() });
    }
}

export default new UserService();