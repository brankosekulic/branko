var mongodb = require('mongodb'),
	inProgress = false,
	client = null;

/**
 * @param {Object} options
 */
var Mongo = function(options){

	this.client = null;

    this.init = function(){

    	if(inProgress){
    		return false;
    	}

    	inProgress = true;

		var serverOptions = {
			'auto_reconnect': true,
			'poolSize': 3
		};
		var server = new mongodb.Server(options.host, options.port, serverOptions);
    	var instance = new mongodb.Db(options.db, server, {});

    	var that = this;
    	console.log('creating mongodb client...');
		instance.open(function (error, pClient) {
			if (error){
				inProgress = false;
				throw error;
			}else{
				console.log('mongodb client created');
				client = pClient;
	    		that.client = pClient;
	    		inProgress = false;
	    	}
    	});
    };

	if(client){
		this.client = client;
	}else{
		this.init();
    }
};

module.exports = Mongo;