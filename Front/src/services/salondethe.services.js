import { getRequest, postRequest } from "./axios.services";

async function getCarteFromAPI(){
    return getRequest('/salon-de-the/getCarte','getCarte')
}

async function getCarte(){
    let anwser = await getCarteFromAPI();
    return anwser.data;
}

async function getArticleFromAPI(){
    return getRequest('/salon-de-the/getArticle','getArticle')
}

async function getArticle(){
    let anwser = await getArticleFromAPI();
    return anwser.data;
}

async function deleteArticleFromAPI(id){
    return deleteRequest('/salon-de-the/deleteArticle?id='+id, 'deleteArticle')
}

async function deleteArticle(id){
    let anwser = await deleteArticleFromAPI(id)
    return anwser;
}

async function addArticleFromAPI(data){
    return postRequest('/salon-de-the/addArticle',data,'addArticle')
}

async function addArticle(data){
    let anwser = await addArticleFromAPI(data)
    return anwser;
}

async function updateArticleFromAPI(data){
    return patchRequest('/salon-de-the/updateArticle',data,'updateArticle')
}

async function updateArticle(data){
    let anwser = await updateArticleFromAPI(data)
    return anwser;
}

export {
    getCarte,
    getArticle,
    deleteArticle,
    updateArticle,
    addArticle
}