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