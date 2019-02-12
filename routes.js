let express = require('express');


let router  = express.Router();
var mongoUrl = "mongodb://a5db:nopassword@cluster0-shard-00-00-4d2tn.mongodb.net:27017,cluster0-shard-00-01-4d2tn.mongodb.net:27017,cluster0-shard-00-02-4d2tn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var dbName = "a5db";

router.route('/getData')
     .get((req,res) => {
        const collection = req.app.locals.collection;
        var responsePromise = collection.find()
                                .sort({$natural: -1})
                                .limit(1).toArray();
        responsePromise.then(function(content){
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.send(content);
        },
        function(err){
            res.send("failure: " + err);
        }
        );
        });

module.exports = router;