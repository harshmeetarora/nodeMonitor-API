let express = require('express');
let A5_DB = require('./Database/A5_DB.js');


let router  = express.Router();
var mongoUrl = "mongodb://monitor:nopassword@cluster0-shard-00-00-h9gia.mongodb.net:27017,cluster0-shard-00-01-h9gia.mongodb.net:27017,cluster0-shard-00-02-h9gia.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var dbName = "a5db";

router.route('/getData')
     .get((req,res) => {
         //var dbPromise = model.getData();
        var db = A5_DB(mongoUrl, dbName);       
        var products = db.getProducts();
        products.then(function(arg){
            //console.log(arg);
            res.send(arg);
        })
     }
);

module.exports = router;