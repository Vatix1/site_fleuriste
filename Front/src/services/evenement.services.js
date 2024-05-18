import { getRequest, postRequest, deleteRequest,patchRequest } from "./axios.services";

async function getAllEvenementFromAPI(){
    return getRequest('/evenement/getAllEvenement', 'getAllEvenement')
}

async function getAllEvenement(){
    let anwser = await getAllEvenementFromAPI();
    return  anwser.data;
}

async function deleteEvenementFromAPI(id){
    return deleteRequest('/evenement/deleteEvenement?id='+id, 'deleteEvenement')
}

async function deleteEvenement(id){
    let anwser = await deleteEvenementFromAPI(id)
    return anwser;
}

async function addEvenementFromAPI(data){
    return postRequest('/evenement/addEvenement',data,'addEvenement')
}

async function addEvenement(data){
    let anwser = await addEvenementFromAPI(data)
    return anwser;
}

async function updateEvenementFromAPI(data){
    return patchRequest('/evenement/updateEvenement',data,'updateEvenement')
}

async function updateEvenement(data){
    let anwser = await updateEvenementFromAPI(data)
    return anwser;
}

export {
    getAllEvenement,
    deleteEvenement,
    addEvenement,
    updateEvenement
}