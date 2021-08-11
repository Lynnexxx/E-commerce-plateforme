var express = require("express");
var consign = require("consign");
const app = express();
const port = 2001;
const cors = require('cors');


app.use(cors());
consign()
    .include("routes.js")
    .into(app);

   
app.set("json spaces", 4);  

app.listen(port, () => {
    console.log(`E-commerce API - Port ${ port }`);
});

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });