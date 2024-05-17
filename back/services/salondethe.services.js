const pool = require("../database/db")

async function getAllArticleAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM article");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllArticleAsync : ',error);
        throw error
    }
}

const getAllArticle = (callback) => {
    getAllArticleAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function createArticleAsync (nom_article,prix_article) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("INSERT INTO article (nom_article, prix_article) VALUES ($1,$2);",[nom_article,prix_article]);
        conn.release();
    } catch (error) {
        console.error('Error in createArticleAsync : ',error);
        throw error;
    }
}

const createArticle = (nom_article,prix_article,callback) => {
    createArticleAsync(nom_article,prix_article).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function updateArticleAsync(id_article,nom_article,prix_article) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("UPDATE article SET nom_article=$2 , prix_article=$3 WHERE id_article=$1;", [id_article,nom_article,prix_article]);
        conn.release();
    } catch (error) {
        console.error('Error in updateArticleAsync :', error);
        throw error;
    }
}

const updateArticle = (id_article,nom_article,prix_article,callback) => {
    updateArticleAsync(id_article,nom_article,prix_article).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function deleteArticleAsync(id_article) {
    try {
        const conn = await pool.connect();
        await conn.query("DELETE FROM article WHERE id_article =$1;", [id_article]);
        conn.release();
    } catch (error) {
        console.error('Error in deleteArticleAsync :', error);
        throw error;
    }
}

const deleteArticle = (id_article, callback) => {
    deleteArticleAsync(id_article).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

module.exports = {
    getAllArticle: getAllArticle,
    createArticle: createArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
}