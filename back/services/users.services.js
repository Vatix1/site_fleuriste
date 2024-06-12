const pool = require("../database/db")

async function getAllUsersAsync() {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM utilisateur;");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error("Error in getAllUsersAsync:", error);
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

async function getAllRolesAsync() {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM roles")
        conn.release();
        return result.rows;
    } catch (error) {
        console.error("Error in getAllRolesAsync :", error);
        throw error;
    }
}

const getAllRoles = (callback) => {
    getAllRolesAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    })
}

async function updateUtilisateurAsync(id_utilisateur,id_role) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("UPDATE utilisateur SET id_role =$2 WHERE id_utilisateur =$1;",[id_utilisateur,id_role]);
        conn.release();
        return result.rows;
    } catch (error) {
        console.error("Error in updateUtilisateurAsync :", error);
        throw error;
    }
}

const updateUtilisateur = (id_utilisateur, id_role, callback) => {
    updateUtilisateurAsync(id_utilisateur,id_role).then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    })
}

async function deleteUtilisateurAsync(id_utilisateur) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("DELETE FROM utilisateur WHERE id_utilisateur=$1;",[id_utilisateur])
        conn.release();
        return result.rows;
    } catch (error) {
        console.error("Error in deleteUtilisateurAsync :", error);
        throw error;
    }
}

const deleteUtilisateur = (id_utilisateur, callback) => {
    console.log('del',id_utilisateur);
    deleteUtilisateurAsync(id_utilisateur).then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    })
}

async function createUtilisateurAsync(nom_utilisateur, mot_de_passe) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("INSERT INTO utilisateur (nom_utilisateur, mot_de_passe,id_role) VALUES ($1,$2,1);",[nom_utilisateur,mot_de_passe])
        conn.release();
    } catch (error) {
        console.error("Error in createUtilisateurAsync :", error);
        throw error;
    }
}

const createUtilisateur = (nom_utilisateur, mot_de_passe, callback) => {
    createUtilisateurAsync(nom_utilisateur,mot_de_passe).then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })
}

async function getUserByNameAsync(nom_utilisateur) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM Utilisateur WHERE nom_utilisateur=$1;",[nom_utilisateur])
        conn.release();
        return result.rows;
    } catch(error) {
        console.error("Error in getUserByName :", error);
    }
}

const getUserByName = (nom_utilisateur, callback) => {
    getUserByNameAsync(nom_utilisateur).then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error,null);
    })
}

async function getRoleByUserAsync(id_utilisateur) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT id_role FROM Utilisateur WHERE id_utilisateur=$1;",[id_utilisateur])
        conn.release();
        return result.rows
    } catch(error) {
        console.error("Error in getRoleByUser :", error);
    }
}

const getRoleByUser = (id_utilisateur,callback) => {
    console.log("id serv", id_utilisateur);
    getRoleByUserAsync(id_utilisateur).then(res => {
        console.log('res', res);
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error,null)
    })
}

module.exports = {
    getAllUsers: getAllUsers,
    getAllRoles: getAllRoles,
    updateUtilisateur: updateUtilisateur,
    deleteUtilisateur: deleteUtilisateur,
    createUtilisateur: createUtilisateur,
    getUserByName: getUserByName,
    getRoleByUser: getRoleByUser
}