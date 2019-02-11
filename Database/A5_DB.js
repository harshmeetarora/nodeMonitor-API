var MongoClient = require('mongodb').MongoClient;   // require the mongodb driver

/**
 * Uses mongodb v3.1.9 - [API Documentation](http://mongodb.github.io/node-mongodb-native/3.1/api/)
 * StoreDB wraps a mongoDB connection to provide a higher-level abstraction layer
 * for manipulating the objects in our bookstore app.
 */
function A5_DB(mongoUrl, dbName){
    if (!(this instanceof A5_DB)) return new A5_DB(mongoUrl, dbName);
    this.connected = new Promise(function(resolve, reject){
        MongoClient.connect(
            mongoUrl,
            {
                useNewUrlParser: true
            },
            function(err, client){
                if (err){
                    console.log(err);
                    reject(err);
                }
                else {
                    console.log('[MongoClient] Connected to '+mongoUrl+'/'+dbName);
                    resolve(client.db(dbName));

                }
            }
        )
        
    });
}

A5_DB.prototype.getProducts = function(){
    return this.connected.then( function(db){
        return db.collection("time_logs").find().toArray();
    }).catch(function(err){
        console.log("Error " + err.message);
    });
}


module.exports = A5_DB;