import { get, post, del, patch } from "./axios.services";



async function getAllBouquetFromAPI(){
    return get('/bouquet/getAllBouquet', 'getAllBouquet')
}

async function getAllBouquet(){
    let anwser = await getAllBouquetFromAPI();
    return anwser.data; 
}

async function deleteBouquetFromAPI(id){
    console.log("del boquet",id)
    return del('/bouquet/deleteBouquet?id='+id, 'deleteBouquet')
}

async function deleteBouquet(id){
    let anwser = await deleteBouquetFromAPI(id)
    return anwser;
}

async function createBouquet(data){
    console.log("pass",data);
    try {
        const response = await post('/bouquet/createBouquet',data);
        console.log(response);
        return response;
    } catch (error) {
        // Gérez les erreurs de la requête POST
        console.error(error);
    }
}

async function updateBouquetFromAPI(data){
    console.log("up",data)
    return patch('/bouquet/updateBouquet',data,'updateBouquet')
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
/*
import axios from 'axios';

const url = axios.create({
    baseURL: 'http://localhost:3000/',
});

async function getAllBouquet() {
    console.log("getBouquet",data);
    try {
        const response = await axios.get(url + "/bouquet/getAllBouquet");
        console.log(response);
        return response.data
    } catch(error) {
        console.error(error);
    }
}
*/