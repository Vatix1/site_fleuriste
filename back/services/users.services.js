const pool = require("../database/db")

async function getAllUsersAsync () {
    console.log("res");
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM utilisateur;");
        conn.release();
        return result;
    } catch (error) {
        console.error('Error in getAllUsersAsync : ',error);
        throw error
    }
}

const getAllUsers = (callback) => {
    console.log('pass');
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