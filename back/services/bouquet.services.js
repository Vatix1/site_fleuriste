const pool = require("../database/db")


async function getAllBouquetAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM bouquet");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllBouquetAsync : ',error);
        throw error
    }
}
const getAllBouquet = (callback) => {
    getAllBouquetAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function createBouquetAsync (nom_bouquet,prix_bouquet) {
    try {
        const conn = await pool.connect();
        await conn.query("INSERT INTO bouquet (nom_bouquet, prix_bouquet) VALUES ($1,$2);",[nom_bouquet,prix_bouquet]);
        conn.release();
    } catch (error) {
        console.error('Error in createBouquetAsync : ',error);
        throw error;
    }
}

const createBouquet = (nom_bouquet,prix_bouquet,callback) => {
    createBouquetAsync(nom_bouquet,prix_bouquet).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function updateBouquetAsync(id_bouquet,nom_bouquet,prix_bouquet) {
    try {
        const conn = await pool.connect();
        await conn.query("UPDATE bouquet SET nom_bouquet=$2 , prix_bouquet=$3 WHERE id_bouquet=$1;", [id_bouquet,nom_bouquet,prix_bouquet]);
        conn.release();
    } catch (error) {
        console.error('Error in updateBouquetAsync :', error);
        throw error;
    }
}

const updateBouquet = (id_bouquet,nom_bouquet,prix_bouquet,callback) => {
    updateBouquetAsync(id_bouquet,nom_bouquet,prix_bouquet).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function deleteBouquetAsync(id_bouquet) {
    try {
        const conn = await pool.connect();
        await conn.query("DELETE FROM bouquet WHERE id_bouquet =$1;", [id_bouquet]);
        conn.release();
    } catch (error) {
        console.error('Error in deleteBouquetAsync :', error);
        throw error;
    }
}

const deleteBouquet = (id_bouquet,callback) => {
    deleteBouquetAsync(id_bouquet).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

module.exports = {
    getAllBouquet: getAllBouquet,
    createBouquet: createBouquet,
    updateBouquet: updateBouquet,
    deleteBouquet: deleteBouquet,
}