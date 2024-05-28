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

async function getAllTypeArticleFromAPI() {
    return getRequest('/salondethe/getAllTypeArticle','getAllTypeArticle')
}

async function getAllTypeArticle() {
    let anwser = await getAllTypeArticleFromAPI()
    return anwser.data;
}

async function createTypeArticleFromAPI(data) {
    return postRequest('/salondethe/createTypeArticle',data,'createTypeArticle')
}

async function createTypeArticle(data) {
    let anwser = await createTypeArticleFromAPI(data)
    return anwser.data;
}

async function updateTypeArticleFromAPI(data) {
    return patchRequest('/salondethe/updateTypeArticle',data,'updateTypeArticle')
}

async function updateTypeArticle(data) {
    let anwser = await updateTypeArticleFromAPI(data)
    return anwser.data;
}

async function deleteTypeArticleFromAPI(id) {
    return deleteRequest('/salondethe/deleteTypeArticle?id='+id, 'deleteTypeArticle')
}

async function deleteTypeArticle(data){
    let anwser = await deleteTypeArticleFromAPI(data)
    return anwser.data;
}

export {
    getAllArticle,
    deleteArticle,
    updateArticle,
    addArticle,
    getAllTypeArticle,
    createTypeArticle,
    updateTypeArticle,
    deleteTypeArticle
}