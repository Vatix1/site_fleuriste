module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("utilisateur", {
        nom_utilisateur: {
            type: Sequelize.STRING,
        },
        mot_de_passe: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        }
    });
    return User;
}