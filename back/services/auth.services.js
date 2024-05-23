const pool = require("../database/db");

async function signupAsync(nom_utilisateur,mot_de_passe,email) {
    try {
        const conn = await pool.connect();
        await conn.query("INSERT INTO utilisateur (nom_utilisateur, mot_de_passe, email) VALUES ($1,$2;$3);",[nom_utilisateur,mot_de_passe,email]);
        conn.release();
    } catch (error) {
        console.error('Error in signupAsync : ',error);
        throw error;
    }
}

const signup = (nom_utilisateur,mot_de_passe,email,callback) => {
    signupAsync(nom_utilisateur,email,mot_de_passe).then(res => {
        callback(null,res)
    }).catch(error => {
        console.log(error);
        callback(error,null);
    });
}

module.exports = {
    signup: signup
}