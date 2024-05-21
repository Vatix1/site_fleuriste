require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
});

db.ROLES = ["user", "admin", "moderator"]

module.exports = db;