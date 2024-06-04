import { get, post, del,patch } from "./axios.services";

async function getAllEvenementFromAPI(){
    return get('/evenement/getAllEvenement', 'getAllEvenement')
}

async function getAllEvenement(){
    let anwser = await getAllEvenementFromAPI();
    return  anwser.data;
}

async function deleteEvenementFromAPI(id){
    return del('/evenement/deleteEvenement?id='+id, 'deleteEvenement')
}

async function deleteEvenement(id){
    let anwser = await deleteEvenementFromAPI(id)
    return anwser;
}

async function createEvenementFromAPI(data){
    console.log('event',data);
    return post('/evenement/createEvenement',data,'createEvenement')
}

async function createEvenement(data){
    console.log('pass');
    let anwser = await createEvenementFromAPI(data)
    return anwser;
}

async function updateEvenementFromAPI(data){
    return patch('/evenement/updateEvenement',data,'updateEvenement')
}

async function updateEvenement(data){
    let anwser = await updateEvenementFromAPI(data)
    return anwser;
}

async function getAllPhotoFromAPI(){
    return get('/evenement/getAllEvenement', 'getAllEvenement')
}

async function getAllPhoto(){
    let anwser = await getAllPhotoFromAPI();
    return  anwser.data;
}

async function deletePhotoFromAPI(id){
    return del('/evenement/deleteEvenement?id='+id, 'deleteEvenement')
}

async function deletePhoto(id){
    let anwser = await deletePhotoFromAPI(id)
    return anwser;
}

async function createPhotoFromAPI(data){
    return post('/evenement/addEvenement',data,'addEvenement')
}

async function createPhoto(data){
    let anwser = await createPhotoFromAPI(data)
    return anwser;
}

async function updatePhotoFromAPI(data){
    return patch('/evenement/updateEvenement',data,'updateEvenement')
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