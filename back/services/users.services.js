const pool = require("../database/db")

async function getAllUsersAsync () {
    try {
        const conn = await pool.connect();
        const result = await conn.query("SELECT * FROM utilisateur");
        conn.release();
        return result.rows;
    } catch (error) {
        console.error('Error in getAllUsersAsync : ',error);
        throw error
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

module.exports = {
    getAllUsers: getAllUsers,
}