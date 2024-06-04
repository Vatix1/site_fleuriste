import { get, post, del, patch } from "./axios.services";

async function getAllArticleFromAPI(){
    return get('/salondethe/getAllArticle','getAllArticle')
}

async function getAllArticle(){
    let anwser = await getAllArticleFromAPI();
    return anwser.data;
}

async function deleteArticleFromAPI(id){
    return del('/salondethe/deleteArticle?id='+id, 'deleteArticle')
}

async function deleteArticle(id){
    let anwser = await deleteArticleFromAPI(id)
    return anwser;
}

async function createArticleFromAPI(data){
    console.log("article",data)
    return post('/salondethe/createArticle',data,'createArticle')
}

async function createArticle(data){
    let anwser = await createArticleFromAPI(data)
    return anwser;
}

async function updateArticleFromAPI(data){
    return patch('/salondethe/updateArticle',data,'updateArticle')
}

async function updateArticle(data){
    console.log("serv", data);
    let anwser = await updateArticleFromAPI(data)
    return anwser;
}

async function getAllTypeArticleFromAPI() {
    return get('/salondethe/getAllTypeArticle','getAllTypeArticle')
}

async function getAllTypeArticle() {
    let anwser = await getAllTypeArticleFromAPI()
    return anwser.data;
}

async function createTypeArticleFromAPI(data) {
    console.log('sdt',data);
    return post('/salondethe/createTypeArticle',data,'createTypeArticle')
}

async function createTypeArticle(data) {
    console.log('pass type');
    let anwser = await createTypeArticleFromAPI(data)
    return anwser.data;
}

async function updateTypeArticleFromAPI(data) {
    return patch('/salondethe/updateTypeArticle',data,'updateTypeArticle')
}

async function updateTypeArticle(data) {
    let anwser = await updateTypeArticleFromAPI(data)
    return anwser.data;
}

async function deleteTypeArticleFromAPI(id) {
    return del('/salondethe/deleteTypeArticle?id='+id, 'deleteTypeArticle')
}

async function deleteTypeArticle(data){
    let anwser = await deleteTypeArticleFromAPI(data)
    return anwser.data;
}

export {
    getAllArticle,
    deleteArticle,
    updateArticle,
    createArticle,
    getAllTypeArticle,
    createTypeArticle,
    updateTypeArticle,
    deleteTypeArticle
}