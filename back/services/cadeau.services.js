const pool = require("../database/db")

async function getAllBougieAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM bougie");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllBougieAsync : ',error);
        throw error
    }
}

const getAllBougie = (callback) => {
    getAllBougieAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function createBougieAsync (nom_bougie,prix_bougie) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("INSERT INTO bougie (nom_bougie, prix_bougie) VALUES ($1,$2);",[nom_bougie,prix_bougie]);
        conn.release();
    } catch (error) {
        console.error('Error in createBougieAsync : ',error);
        throw error;
    }
}

const createBougie = (nom_bougie,prix_bougie,callback) => {
    createBougieAsync(nom_bougie,prix_bougie).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function updateBougieAsync(id_bougie,nom_bougie,prix_bougie) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("UPDATE bougie SET nom_bougie=$2 , prix_bougie=$3 WHERE id_bougie=$1;", [id_bougie,nom_bougie,prix_bougie]);
        conn.release();
    } catch (error) {
        console.error('Error in updateBougieAsync :', error);
        throw error;
    }
}

const updateBougie = (id_bougie,nom_bougie,prix_bougie,callback) => {
    updateBougieAsync(id_bougie,nom_bougie,prix_bougie).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function deleteBougieAsync(id_bougie) {
    try {
        const conn = await pool.connect();
        await conn.query("DELETE FROM bougie WHERE id_bougie =$1;", [id_bougie]);
        conn.release();
    } catch (error) {
        console.error('Error in deleteBougieAsync :', error);
        throw error;
    }
}

const deleteBougie = (id_bougie,callback) => {
    deleteBougieAsync(id_bougie).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function getAllTheAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM the");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllTheAsync : ',error);
        throw error
    }
}

const getAllThe = (callback) => {
    getAllTheAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function createTheAsync (nom_the,prix_the) {
    try {
        const conn = await pool.connect();
        await conn.query("INSERT INTO the (nom_the, prix_the) VALUES ($1,$2);",[nom_the,prix_the]);
        conn.release();
    } catch (error) {
        console.error('Error in createTheAsync : ',error);
        throw error;
    }
}

const createThe = (nom_the,prix_the,callback) => {
    createTheAsync(nom_the,prix_the).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function updateTheAsync(id_the,nom_the,prix_the) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("UPDATE the SET nom_the=$2 , prix_the=$3 WHERE id_the=$1;", [id_the,nom_the,prix_the]);
        conn.release();
    } catch (error) {
        console.error('Error in updateTheAsync :', error);
        throw error;
    }
}

const updateThe = (id_the,nom_the,prix_the,callback) => {
    updateTheAsync(id_the,nom_the,prix_the).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function deleteTheAsync(id_the) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("DELETE FROM the WHERE id_the =$1;", [id_the]);
        conn.release();
    } catch (error) {
        console.error('Error in deleteTheAsync :', error);
        throw error;
    }
}

const deleteThe = (id_the,callback) => {
    deleteTheAsync(id_the).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function getAllFormuleAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM formule");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllFormuleAsync : ',error);
        throw error
    }
}

const getAllFormule = (callback) => {
    getAllFormuleAsync().then(res => {
        callback(null, res);
    }).catch(error => {
        console.log(error);
        callback(error, null);
    });
}

async function createFormuleAsync (nom_formule,prix_formule,id_bouquet,id_bougie,id_the) {
    try {
        const conn = await pool.connect();
        const result = await conn.query("INSERT INTO formule (nom_formule, prix_formule,id_bouquet,id_bougie,id_the) VALUES ($1,$2,$3,$4,$5);",[nom_formule,prix_formule,id_bouquet,id_bougie,id_the]);
        conn.release();
    } catch (error) {
        console.error('Error in createFormuleAsync : ',error);
        throw error;
    }
}

const createFormule = (nom_formule,prix_formule,id_bouquet,id_bougie,id_the,callback) => {
    createFormuleAsync(nom_formule,prix_formule,id_bouquet,id_bougie,id_the).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function updateFormuleAsync(id_formule,nom_formule,prix_formule,id_bouquet,id_bougie,id_the) {
    console.log(id_formule,nom_formule,prix_formule,id_bouquet,id_bougie,id_the);
    try {
        const conn = await pool.connect();
        await conn.query("UPDATE formule SET nom_formule=$2 , prix_formule=$3, id_bouquet=$4, id_bougie=$5, id_the=$6 WHERE id_formule=$1;", [id_formule,nom_formule,prix_formule,id_bouquet,id_bougie,id_the]);
        conn.release();
    } catch (error) {
        console.error('Error in updateFormuleAsync :', error);
        throw error;
    }
}

const updateFormule = (id_formule,nom_formule,prix_formule,id_bouquet,id_bougie,id_the,callback) => {
    updateFormuleAsync(id_formule,nom_formule,prix_formule,id_bouquet,id_bougie,id_the).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

async function deleteFormuleAsync(id_formule) {
    try {
        const conn = await pool.connect();
        await conn.query("DELETE FROM formule WHERE id_formule =$1;", [id_formule]);
        conn.release();
    } catch (error) {
        console.error('Error in deleteFormuleAsync :', error);
        throw error;
    }
}

const deleteFormule = (id_formule,callback) => {
    deleteFormuleAsync(id_formule).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

module.exports = {
    getAllBougie : getAllBougie,
    createBougie: createBougie,
    updateBougie: updateBougie,
    deleteBougie: deleteBougie,
    getAllThe: getAllThe,
    createThe: createThe,
    updateThe: updateThe,
    deleteThe: deleteThe,
    getAllFormule: getAllFormule,
    createFormule: createFormule,
    updateFormule: updateFormule,
    deleteFormule: deleteFormule
}