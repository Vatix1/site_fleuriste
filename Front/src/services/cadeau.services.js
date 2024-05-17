import { getRequest, postRequest, deleteRequest,patchRequest } from "./axios.services";


async function getAllBougieFromAPI(){
    return getRequest('/cadeau/getAllBougie', 'getAllBougie')
}

async function getAllBougie(){
    let anwser = await getAllBougieFromAPI();
    return anwser.data;
}

async function deleteBougieFromAPI(id){
    return deleteRequest('/cadeau/deleteBougie?id='+id, 'deleteBougie')
}

async function deleteBougie(id){
    let anwser = await deleteBougieFromAPI(id)
    return anwser;
}

async function addBougieFromAPI(data){
    return postRequest('/cadeau/addBougie',data,'addBougie')
}

async function addBougie(data){
    let anwser = await addBougieFromAPI(data)
    return anwser;
}

async function updateBougieFromAPI(data){
    return patchRequest('/cadeau/updateBougie',data,'updateBougie')
}

async function updateBougie(data){
    let anwser = await updateBougieFromAPI(data)
    return anwser;
}

async function getAllTheFromAPI(){
    return getRequest('/cadeau/getAllThe', 'getAllThe')
}

async function getAllThe(){
    let anwser = await getAllTheFromAPI();
    return anwser.data; 
}

async function deleteTheFromAPI(id){
    return deleteRequest('/cadeau/deleteThe?id='+id, 'deleteThe')
}

async function deleteThe(id){
    let anwser = await deleteTheFromAPI(id)
    return anwser;
}

async function addTheFromAPI(data){
    return postRequest('/cadeau/addThe',data,'addThe')
}

async function addThe(data){
    let anwser = await addTheFromAPI(data)
    return anwser;
}

async function updateTheFromAPI(data){
    return patchRequest('/cadeau/updateThe',data,'updateThe')
}

async function updateThe(data){
    let anwser = await updateTheFromAPI(data)
    return anwser;
}

async function getAllFormuleFromAPI(){
    return getRequest('/cadeau/getAllFormule', 'getAllFormule')
}

async function getAllFormule(){
    let anwser = await getAllFormuleFromAPI();
    return anwser.data; 
}

async function deleteFormuleFromAPI(id){
    return deleteRequest('/cadeau/deleteFormule?id='+id, 'deleteFormule')
}

async function deleteFormule(id){
    let anwser = await deleteFormuleFromAPI(id)
    return anwser;
}

async function addFormuleFromAPI(data){
    return postRequest('/cadeau/addFormule',data,'addFormule')
}

async function addFormule(data){
    let anwser = await addFormuleFromAPI(data)
    return anwser;
}

async function updateFormuleFromAPI(data){
    return patchRequest('/cadeau/updateFormule',data,'updateFormule')
}

async function updateFormule(data){
    let anwser = await updateFormuleFromAPI(data)
    return anwser;
}

export {
    getAllBougie,
    deleteBougie,
    addBougie,
    updateBougie,
    getAllThe,
    deleteThe,
    addThe,
    updateThe,
    getAllFormule,
    deleteFormule,
    addFormule,
    updateFormule
}