var db = require('../../db')

module.exports = {

    // Afficher tous les artisans

    getAllArtisans: async function(req, res) {
        return db.query('select *from produits_africains.artisans',[]);
    },


    // Afficher un artisan en particulier

    getArtisanById: async function(req, res, id) {
        console.log('valeur de id:'+id);
        return db.query('select *from produits_africains.artisans where id=$1',[id]);
    },


   // Consulter l’artisan créateur d’un article

   getArtisanByArticle : async function(req, res, id) {
       console.log('valeur de id'+id);
       var qury = "select artisan->>'nom' from produits_africains.artisans join produits_africains.articles on  id_artisans=artisans.id where articles.id=$1";
       return db.query(qury, [id]);
   },

   // supprimer un artisan
   deleteArtisanById:async function(req, res, id){
        console.log('valeur de id'+id);
        return db.query('delete from artisans where id=$1',[id]);
    },

    /*// Modifier un artisan 

    updateArtisanById: function(id) {
        console.log('id:' + id);

        return db.query('update artisans set id=$1 where id=$2', [id, id1], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
   
    }*/

    // obtenir le contrat d'un artisan
    getArtisanContratByid : async function(req, res, id) {
        console.log('valeur de id'+id);
        var qury = "select refection from  produits_africains.articles    where id_artisans=$1";
        return db.query(qury, [id]);
    },



    //modifier le contrat d’un artisan concernant un article

    updateArtisanContratByid : async function(req, res, refection,id) {
        console.log('valeur de id'+id);
        var qury = "update articles set  refection =$1 where id=$2";
        return db.query(qury, [refection,id]);
    },


    //consulter les articles associés à un artisan


    getAllArticlesByArtisan: async function(req, res,id){

        

    }




}