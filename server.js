const express = require('express');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
// Route Files
let router = require('./routes');
app.use(router);

var MongoClient = require('mongodb').MongoClient;
var mongo_uri = "mongodb://a5db:nopassword@cluster0-shard-00-00-4d2tn.mongodb.net:27017,cluster0-shard-00-01-4d2tn.mongodb.net:27017,cluster0-shard-00-02-4d2tn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

MongoClient.connect(mongo_uri, { useNewUrlParser: true })
.then(client => {
  const db = client.db('a5db');
  const collection = db.collection('time_logs');
  app.locals.collection = collection;
  app.listen(port, () => console.info(`REST API running on port ${port}`));
}).catch(error => console.error(error));
