/*
import axios from 'axios'

const axiosAgent = axios.create({
    baseURL: 'http://localhost:3000/'
});

function handleError(serviceName, err) {
    if (err.response) {
        console.log("ERROR while calling SERVICE " + serviceName + ": " + JSON.stringify(err.response));
        return {
            data: {
                error: 1,
                data: err.response.data
            }
        };
    }
    else if (err.request) {
        console.log("NETWORK ERROR while calling SERVICE "+serviceName+ ": " + JSON.stringify(err.request));
        return {
            data: {
                error: 1,
                data: 'Le serveur est injoignable ou l\'URL demandée n\'existe pas'
            }
        };
    }
    else {
        console.log("UNKNOWN ERROR while calling SERVICE "+serviceName);
        return {
            data: {
                error: 1,
                data: 'Erreur inconnue'
            }
        };
    }
}
async function getRequest(uri, name) {
    let response = null
    try {
        response = await axiosAgent.get(uri)
    } catch (err) {
        response = handleError(name, err);
    }
    return response;
}


async function postRequest(uri, data, name) {
    let response = null
    try {
        console.log('axios', uri + data);
        response = await axiosAgent.post(uri, data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}


async function patchRequest(uri, data, name) {
    let response = null
    try {
        console.log('axios 2 ', uri+ data);
        response = await axiosAgent.patch(uri, data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}

async function deleteRequest(uri, data, name) {
    let response = null
    try {
        response = await axiosAgent.delete(uri, data)
    } catch (err) {
        response = handleError(name, err);
    }
    return response.data;
}

export {
    getRequest,
    deleteRequest,
    patchRequest,
    postRequest
}
*/

// axios.service.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;

        if (response) {
            // La requête a été faite, mais le serveur a répondu avec un code d'erreur
            console.error('Axios Error:', response.status, response.data);
        } else if (error.request) {
            // La requête a été faite, mais aucune réponse n'a été reçue
            console.error('Axios Error: No response received');
        } else {
            // La requête n'a même pas pu être faite (ex: problème de connexion)
            console.error('Axios Error: Request failed before sending');
        }

        return Promise.reject(error);
    }
);

// Méthodes générales pour les requêtes GET, POST, PUT, PATCH, DEL
export const get = (url, config) => instance.get(url, config);
export const post = (url, data, config) => instance.post(url, data, config);
export const put = (url, data, config) => instance.put(url, data, config);
export const patch = (url, data, config) => instance.patch(url, data, config);
export const del = (url, data, config) => instance.delete(url, data, config)

export default instance;
