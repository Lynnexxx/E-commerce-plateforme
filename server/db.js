var dotenv = require('dotenv');

dotenv.config();

var Pool =  require("pg").Pool;

// Fait un cd dans le dossier server dans ton terminal et install jsonwebtoken
// npm install jsonwebtoken ( avec cette commande )
var pool = new Pool({

    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port

})

async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;

}


module.exports = {
    query
}