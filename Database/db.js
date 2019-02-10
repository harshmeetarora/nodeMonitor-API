
var mongoose = require("mongoose");
mongoose.connect("mongodb://monitor:nopassword@cluster0-shard-00-00-h9gia.mongodb.net:27017,cluster0-shard-00-01-h9gia.mongodb.net:27017,cluster0-shard-00-02-h9gia.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("\n"+ "connected succesfully")
});

var monitorSchema = new mongoose.Schema({
	timestamp : Number,
	nodes : Array
	}	
);


var monitorData = mongoose.model("monitorData",
							 monitorSchema);



var getData = function(){
	return monitorData.find();
}


module.exports = {
  getData : getData
};