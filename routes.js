//var db = require('./db');

var articleService = require('./services/articles');

module.exports = app => {
    app.get("/", (req, res) => {
       res.json({status: "E-commerce API"});
    });

    app.get("/articles/", function(req, res){  articleService.getAllArticles(req, res) });
};


