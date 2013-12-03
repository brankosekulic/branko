var mongodb = require('mongodb'),
	Db = require("../lib/db/Mongo.js"),
	utils = require("../lib/Utils.js");
	config = utils.getConfig('db.json'),
	db = new Db(config.mongo);

var Mongo = {
	getThings: function(callback){

		var client = db.client,
    		collection = new mongodb.Collection(client, 'things');

    	collection.find({}, {limit:10}).toArray(function(err, docs) {
    		callback(docs);
 		});
	}
};

module.exports = Mongo;