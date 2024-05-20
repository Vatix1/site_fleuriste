const config = require("../database/db");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST
    }
);

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);

db.role.belongToMany(db.user, {
    through: "user_roles",
});

db.user.belongToMany(db.role, {
    through: "user_roles",
});

db.ROLES = ["user", "admin", "moderator"]

module.exports = db;