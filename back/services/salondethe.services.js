const pool = require("../database/db");
const { error } = require("console");

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

async function getAllTypeArticleAsync (){
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM type_article;");
        conn.release();
        return result.rows
    } catch (error) {
        console.error('Error in getAllTypeArticleAsync :', error);
        throw error;
    }
}

const getAllTypeArticle = (callback) => {
    getAllTypeArticleAsync().then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })
}

async function createTypeArticleAsync(nom_type_article) {
    try {
        const conn = await pool.connect();
        await conn.query("INSERT INTO type_article(nom_type_article) VALUES ($1);",[nom_type_article]);
        conn.release();
    } catch (error) {
        console.error('Error in createTypeArticleAsync :', error);
        throw error;
    }
}

const createTypeArticle = (nom_type_article,callback) => {
    createTypeArticleAsync(nom_type_article).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })    
}

async function updateTypeArticleAsync(id_type_article,nom_type_article) {
    try {
        const conn = await pool.connect();
        await conn.query("UPDATE type_article SET nom_type_article = $1 WHERE id_type_article =$2;",[nom_type_article,id_type_article]);
        conn.release();
    } catch {
        console.error('Error in updateTypeArticleAsync :', error);
        throw error;
    }
}

const updateTypeArticle = (id_type_article, nom_type_article,callback) => {
    updateTypeArticleAsync(id_type_article,nom_type_article).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })
}

async function deleteTypeArticleAsync(id_type_article) {
    try {
        const conn = await pool.connect();
        await conn.query("DELETE FROM type_article WHERE id_type_article = $1;",[id_type_article]);
        conn.release();
    } catch {
        console.error('Error in deleteTypeArticle :', error);
        throw error;
    }
}

const deleteTypeArticle = (id_type_article,callback) => {
    deleteTypeArticleAsync(id_type_article).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })
} 

module.exports = {
    getAllArticle: getAllArticle,
    createArticle: createArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle,
    getAllTypeArticle: getAllTypeArticle,
    createTypeArticle: createTypeArticle,
    updateTypeArticle: updateTypeArticle,
    deleteTypeArticle: deleteTypeArticle
}