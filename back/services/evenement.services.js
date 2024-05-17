const pool = require("../database/db")

async function getAllEvenementAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM evenements");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllEvenementAsync : ',error);
        throw error
    }
}

const getAllEvenement = (callback) => {
    getAllEvenementAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function createEvenementAsync (nom_evenement) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("INSERT INTO evenements (nom_evenement) VALUES ($1);",[nom_evenement]);
        conn.release();
    } catch (error) {
        console.error('Error in createEvenementAsync : ',error);
        throw error;
    }
}

const createEvenement = (nom_evenement,callback) => {
    createEvenementAsync(nom_evenement).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function updateEvenementAsync(id_evenement,nom_evenement,) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("UPDATE evenements SET nom_evenement=$2 WHERE id_evenement=$1;", [id_evenement,nom_evenement]);
        conn.release();
    } catch (error) {
        console.error('Error in updateEvenementAsync :', error);
        throw error;
    }
}

const updateEvenement = (id_evenement,nom_evenement,callback) => {
    updateEvenementAsync(id_evenement,nom_evenement).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function deleteEvenementAsync(id_evenement) {
    try {
        const conn = await pool.connect();
        await conn.query("DELETE FROM evenements WHERE id_evenement =$1;", [id_evenement]);
        conn.release();
    } catch (error) {
        console.error('Error in deleteEvenementAsync :', error);
        throw error;
    }
}

const deleteEvenement = (id_bouquet,callback) => {
    deleteEvenementAsync(id_bouquet).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

module.exports = {
    getAllEvenement: getAllEvenement,
    createEvenement: createEvenement,
    updateEvenement: updateEvenement,
    deleteEvenement: deleteEvenement
}