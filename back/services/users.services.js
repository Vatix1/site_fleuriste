const pool = require("../database/db")

async function getAllUsersAsync() {
    console.log("res");
    try {
        const conn = await pool.connect();
        console.log("Connexion à la base de données établie avec succès", conn);
        try {
            const result = await conn.query("SELECT * FROM utilisateur;");
            conn.release();
            return result.rows;
        } catch (error) {
            console.error("Échec de la requête à la base de données :", error);
            conn.release();
            throw error;
        }
    } catch (error) {
        console.error("Échec de la connexion à la base de données :", error);
        throw error;
    }
}

const getAllUsers = (callback) => {
    getAllUsersAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function getUserByNameAsync(nom_utilisateur) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM utilisateur WHERE nom_utilisateur = $1;",[nom_utilisateur])
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getUserByNameAsync : ',error);
        throw error
    }
}

const getUserByName = (nom_utilisateur,callback) => {
    getUserByNameAsync(nom_utilisateur).then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    })
}

async function getRoleByUserAsync(id_utilisateur) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT id_role FROM user_role WHERE id_utilisateur=$1;", [id_utilisateur])
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getRoleByUserAsync : ',error);
        throw error
    }
}

const getRoleByUser = (id_utilisateur,callback) => {
    getRoleByUserAsync(id_utilisateur).then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserByName: getUserByName,
    getRoleByUser: getRoleByUser,
}