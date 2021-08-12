var express = require( "express" );
var db = require('../db')
 // Afficher tous les articles

exports.getAllArticles = async (req, res) => {


    return db.query ('select *from produits_africains.articles', []);
}


module.exports = {
    /*
    // Afficher tous les articles

    getAllArticles: function() {
         return pool.query('select *from produits_africains.articles', function (error, result){
            if(error)
                throw error;
            console.log(result.rows);
            //res.json(result.rows);
            //res.send(result);

            
        });
    },*/


    // Afficher un article en particulier
    getArticleById : async (req, res,id) => {
                return db.query ('select *from produits_africains.articles where id=$1', [id]);
    },


    // Afficher tous les articles par catégorie

    getArticleByCategorie: async function (req, res, categorie){
        console.log('categorie:' + categorie);
        db.query("select article from produits_africains.articles where article->>'categorie'=$1",[categorie]);
    },


    //Obtenir  la ou les categories d'un article d'un id$

    getArticleCategorieById: async function(req, res, id){
        console.log('id:' + id);
        db.query("select article->>'categorie' from produits_africains.articles where id=$1",[id]);
          
    },


    //Afficher un article en connaissant sa catégorie et son id(cas où le même article appartient à plusieurs catégories)--afficher un article dans sa catégorie

    getArticleByCategorieandId: async function(req, res,id, categorie){
        console.log('id:' + id);

        var qury= "select * from produits_africains.articles where id=$1 and article->>'categorie'=$2";
        return db.query(qury,[id,categorie]);
    },


    // Consulter les articles ayant été refectionnés ou non
     
    getAllArticlesRefectionOrNot: async function(req, res,refection){
        console.log('refection : '+refection);

        var qury= "select * from produits_africains.articles where refection=$1";
        return db.query(qury,[refection]);
    },


    // verifier si un article a demandé à être réfectionné
    getArticleRefection: async function(req, res, id){
        console.log('refection : '+refection);

        var qury= "select refection from produits_africains.articles where  id = $1 ";
        return db.query(qury,[id])
    },


    // Modifier le nom d'un article
    updateArticleByName: async function(req, res, name) {
    
        var qury = "update articles set article= jsonb_set(article, '{nom_article}',$1)";
        return db.query(qury,[name]);
    }, 

    //Modifier la catégorie d'un article
    updateArticleByCategorie: async function(req, res, id, categorie) {
        console.log('categorie:'+categorie);
        console.log('id :'+id);
        
       return db.query("update produits_africains.articles set article= jsonb_set(article, '{categorie}',$2) where id= $1 returning* ",[id,categorie]);
       
    },


    //supprimer un article 

    deleteArticleById: async function(req, res, id){
        return db.query('delete from articles where id=$1',[id]);
    },

    //supprimer tous les articles d'une catégorie

    deleteAllArticlesByCategorie: async function(req, res, categorie){
        var qury = "delete from articles where article->> 'categorie' = $1";
        return db.query(qury, [categorie]);

    },


    // supprimer un article d’une catégorie donnée

    deleteArticleByCategorieandId: async function(req, res, id,categorie){
        var qury = "delete from produits_africains.articles where id=$1 and article->>'categorie'=$2";
        return db.query(qury, [id,categorie]);
    },



    // supprimer un article d’un nom donné

    deleteArticleByName: function(req, res, name){
        var qury = "delete from articles where article->> 'nom_article' = $1";
        return db.query(qury, [name]);

    }

};