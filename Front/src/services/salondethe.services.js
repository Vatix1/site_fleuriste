import { getRequest, postRequest, deleteRequest, patchRequest } from "./axios.services";

async function getAllArticleFromAPI(){
    return getRequest('/salondethe/getAllArticle','getAllArticle')
}

async function getAllArticle(){
    let anwser = await getAllArticleFromAPI();
    return anwser.data;
}

async function deleteArticleFromAPI(id){
    return deleteRequest('/salondethe/deleteArticle?id='+id, 'deleteArticle')
}

async function deleteArticle(id){
    let anwser = await deleteArticleFromAPI(id)
    return anwser;
}

async function addArticleFromAPI(data){
    return postRequest('/salondethe/addArticle',data,'addArticle')
}

async function addArticle(data){
    let anwser = await addArticleFromAPI(data)
    return anwser;
}

async function updateArticleFromAPI(data){
    return patchRequest('/salondethe/updateArticle',data,'updateArticle')
}

async function updateArticle(data){
    let anwser = await updateArticleFromAPI(data)
    return anwser;
}

export {
    getAllArticle,
    deleteArticle,
    updateArticle,
    addArticle
}