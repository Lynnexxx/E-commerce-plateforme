var express = require("express");
var consign = require("consign");
const app = express();
const port = 8905;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
consign()
    .include("routes.js")
    .into(app);2000

   
app.set("json spaces", 4);  

app.listen(port, () => {
    console.log(`E-commerce API - Port ${ port }`);
});

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });