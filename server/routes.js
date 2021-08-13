//var db = require('./db');
const { getAllArticles,getArticleById }= require('./services/articles');
var articleService = require('./services/articles');

module.exports = app => {
   app.get("/", (req, res) => {
       res.json({status: "E-commerce API"});
   });

   app.post("/article/", (req, res) => {
      const data = articleService.postArticle(req, res).then( (d)=>{
           
           res.send(data);
      } ).catch((d)=>{
         console.log(d);
         res.send(data);
    } );
   });

    
   app.get("/articles/", (req, res) => {
      getAllArticles(req, res).then( (d)=>{
           console.log(d);
           res.send(d);
      } );
   });

   
   app.get("/article/:id/", (req, res) => {

      getArticleById(req, res, req.params.id).then((d)=>{
         console.log(d);
         res.send(d[0]);
      });
   });

    app.get("/articles/:categorie/", function(req){ articleService.getArticleByCategorie(req.params.categorie)});

    app.get("/article/:id/categorie/", function(req){ articleService.getArticleCategorieById(req.params.id)});

    
    app.put("/article/:id/:categorie/", (req, res) =>
    { 

      console.log("test");
      const data = articleService.updateArticleByCategorie(req,  req.params.id, req.params.categorie).then((d)=>
      {
         console.log(d);
         res.send(data);
      });
    });
   // supprimer un article
   app.delete("/article/:id/", (req, res) =>
   { 

     console.log("test");
     const data = articleService.deleteArticleById(req,res,  req.params.id).then((d)=>
     {
        console.log(d);
        res.send(data);
     });
   });
    



}