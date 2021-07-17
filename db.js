var dotenv = require('dotenv');

dotenv.config();

var Pool =  require("pg").Pool;



module.exports = new Pool({

    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port

});
/*
async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;

}


module.exports = {
    query
}*/