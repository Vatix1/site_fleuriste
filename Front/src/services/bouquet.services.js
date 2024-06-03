import { getRequest, postRequest, deleteRequest, patchRequest } from "./axios.services";

async function getAllBouquetFromAPI(){
    return getRequest('/bouquet/getAllBouquet', 'getAllBouquet')
}

async function getAllBouquet(){
    let anwser = await getAllBouquetFromAPI();
    return anwser.data; 
}

async function deleteBouquetFromAPI(id){
    console.log("del boquet",id)
    return deleteRequest('/bouquet/deleteBouquet?id='+id, 'deleteBouquet')
}

async function deleteBouquet(id){
    let anwser = await deleteBouquetFromAPI(id)
    return anwser;
}

async function createBouquet(data){
    console.log("pass",data);
    try {
        const response = await postRequest('/bouquet/createBouquet',data);
        console.log(response);
        return response;
    } catch (error) {
        // Gérez les erreurs de la requête POST
        console.error(error);
    }
}

async function updateBouquetFromAPI(data){
    return patchRequest('/bouquet/updateBouquet',data,'updateBouquet')
}

async function updateBouquet(data){
    let anwser = await updateBouquetFromAPI(data)
    return anwser;
}

export {
    getAllBouquet,
    deleteBouquet,
    createBouquet,
    updateBouquet,
}