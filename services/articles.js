var pool = require('../db')

module.exports = {

    getAllArticles: function(res, req) {
        pool.query('select *from produits_africains.artisans', function (error, result){
            if(error)
                throw error;
            console.log(result.rows);
        });
    }
};