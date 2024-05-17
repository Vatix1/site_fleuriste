import { getRequest, postRequest, deleteRequest, patchRequest } from "./axios.services";

async function getAllBouquetFromAPI(){
    return getRequest('/bouquet/getAllBouquet', 'getAllBouquet')
}

async function getAllBouquet(){
    let anwser = await getAllBouquetFromAPI();
    return anwser.data; 
}

async function deleteBouquetFromAPI(id){
    return deleteRequest('/bouquets/deleteBouquet?id='+id, 'deleteBouquet')
}

async function deleteBouquet(id){
    let anwser = await deleteBouquetFromAPI(id)
    return anwser;
}

async function addBouqueutFromAPI(data){
    return postRequest('/bouquets/addBouquet',data,'addBouquet')
}

async function addBouquet(data){
    let anwser = await addBouqueutFromAPI(data)
    return anwser;
}

async function updateBouquetFromAPI(data){
    return patchRequest('/bouquets/updateBouquet',data,'updateBouquet')
}

async function updateBouquet(data){
    let anwser = await updateBouquetFromAPI(data)
    return anwser;
}

export {
    getAllBouquet,
    deleteBouquet,
    addBouquet,
    updateBouquet,
}