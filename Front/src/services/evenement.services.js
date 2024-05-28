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

async function createEvenementFromAPI(data){
    return postRequest('/evenement/createEvenement',data,'createEvenement')
}

async function createEvenement(data){
    let anwser = await createEvenementFromAPI(data)
    return anwser;
}

async function updateEvenementFromAPI(data){
    return patchRequest('/evenement/updateEvenement',data,'updateEvenement')
}

async function updateEvenement(data){
    let anwser = await updateEvenementFromAPI(data)
    return anwser;
}

async function getAllPhotoFromAPI(){
    return getRequest('/evenement/getAllEvenement', 'getAllEvenement')
}

async function getAllPhoto(){
    let anwser = await getAllPhotoFromAPI();
    return  anwser.data;
}

async function deletePhotoFromAPI(id){
    return deleteRequest('/evenement/deleteEvenement?id='+id, 'deleteEvenement')
}

async function deletePhoto(id){
    let anwser = await deletePhotoFromAPI(id)
    return anwser;
}

async function createPhotoFromAPI(data){
    return postRequest('/evenement/addEvenement',data,'addEvenement')
}

async function createPhoto(data){
    let anwser = await createPhotoFromAPI(data)
    return anwser;
}

async function updatePhotoFromAPI(data){
    return patchRequest('/evenement/updateEvenement',data,'updateEvenement')
}

async function updatePhoto(data){
    let anwser = await updatePhotoFromAPI(data)
    return anwser;
}

export {
    getAllEvenement,
    deleteEvenement,
    createEvenement,
    updateEvenement,
    getAllPhoto,
    createPhoto,
    deletePhoto,
    updatePhoto

}