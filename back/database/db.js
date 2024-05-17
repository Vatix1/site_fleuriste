const {Pool} = require("pg")
require("dotenv").config();

const credentials = {
    user: process.env.DB_USERNAME,
    port :process.env.DB_PORT,
    host :process.env.DB_HOSTNAME ,
    database: process.env.DB_DATABASE ,
    password:process.env.DB_PASSWORD 
}

const pool = new Pool(credentials);
module.exports = pool;