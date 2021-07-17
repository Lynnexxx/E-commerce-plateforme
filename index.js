var express = require("express");
var consign = require("consign");
const app = express();
const port = 2000;

consign()
    .include("models")
    .then("routes.js")
    .into(app);



   
app.set("json spaces", 4);  

app.listen(port, () => {
    console.log(`E-commerce API - Port ${ port }`);
});
