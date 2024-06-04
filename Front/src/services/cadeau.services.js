import { get, post, del,patch } from "./axios.services";


async function getAllBougieFromAPI(){
    return get('/cadeau/getAllBougie', 'getAllBougie')
}

async function getAllBougie(){
    let anwser = await getAllBougieFromAPI();
    return anwser.data;
}

async function deleteBougieFromAPI(id){
    return del('/cadeau/deleteBougie?id='+id, 'deleteBougie')
}

async function deleteBougie(id){
    let anwser = await deleteBougieFromAPI(id)
    return anwser;
}

async function createBougieFromAPI(data){
    console.log('bougie',data);
    return post('/cadeau/createBougie',data,'createBougie')
}

async function createBougie(data){
    let anwser = await createBougieFromAPI(data)
    return anwser;
}

async function updateBougieFromAPI(data){
    return patch('/cadeau/updateBougie',data,'updateBougie')
}

async function updateBougie(data){
    let anwser = await updateBougieFromAPI(data)
    return anwser;
}

async function getAllTheFromAPI(){
    return get('/cadeau/getAllThe', 'getAllThe')
}

async function getAllThe(){
    let anwser = await getAllTheFromAPI();
    return anwser.data; 
}

async function deleteTheFromAPI(id){
    return del('/cadeau/deleteThe?id='+id, 'deleteThe')
}

async function deleteThe(id){
    let anwser = await deleteTheFromAPI(id)
    return anwser;
}

async function createTheFromAPI(data){
    console.log('the', data);
    return post('/cadeau/createThe',data,'createThe')
}

async function createThe(data){
    let anwser = await createTheFromAPI(data)
    return anwser;
}

async function updateTheFromAPI(data){
    return patch('/cadeau/updateThe',data,'updateThe')
}

async function updateThe(data){
    let anwser = await updateTheFromAPI(data)
    return anwser;
}

async function getAllFormuleFromAPI(){
    return get('/cadeau/getAllFormule', 'getAllFormule')
}

async function getAllFormule(){
    let anwser = await getAllFormuleFromAPI();
    return anwser.data; 
}

async function deleteFormuleFromAPI(id){
    return del('/cadeau/deleteFormule?id='+id, 'deleteFormule')
}

async function deleteFormule(id){
    let anwser = await deleteFormuleFromAPI(id)
    return anwser;
}

async function createFormuleFromAPI(data){
    console.log('formule',data);
    return post('/cadeau/createFormule',data,'createFormule')
}

async function createFormule(data){
    let anwser = await createFormuleFromAPI(data)
    return anwser;
}

async function updateFormuleFromAPI(data){
    return patch('/cadeau/updateFormule',data,'updateFormule')
}

async function updateFormule(data){
    let anwser = await updateFormuleFromAPI(data)
    return anwser;
}

export {
    getAllBougie,
    deleteBougie,
    createBougie,
    updateBougie,
    getAllThe,
    deleteThe,
    createThe,
    updateThe,
    getAllFormule,
    deleteFormule,
    createFormule,
    updateFormule
}