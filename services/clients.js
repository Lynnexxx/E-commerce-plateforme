var db = require('../db')

module.exports = {

    // Afficher tous les clients

    getAllClients: function() {
        return db.query('select *from produits_africains.clients', []);
    },


    // Afficher un client en particulier

    getClientById: async function(req, res, id) {
        console.log('valeur de id:'+id);
        return db.query('select *from produits_africains.clients where id=$1',[id]);
    }
}