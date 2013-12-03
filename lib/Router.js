var fs = require("fs"),
	utils = require("./Utils.js"),
	User = require("./User.js");

/**
 * Router
 * @param {[type]} app [description]
 */
var Router = function(app){

	this.app = app;
	this.controllers = {};

	/**
	 * @param  {string} name [description]
	 * @return {Object}      [description]
	 */
    this.getController = function(name){

    	var controllers = this.controllers;
    	if(!controllers[name]){
    		var firstLetter = name.charAt(0).toUpperCase();
    		var controllerName = firstLetter + name.substr(1);
    		controllers[name] = require("../controllers/" + controllerName + "Controller.js");
    		this.controllers = controllers;
    	}
    	return controllers[name];
    };

    /**
     * make routes by config
     */
	this.route = function(){
		var app = this.app;

		var userlist = User.getAllUsers();

		/** User proxy route */
		app.get('*', function(req, res, next){
			var user = User.getUserName(req);
			if(user){
				req.url = '/' + user + req.url;
				next();
			}
		});

		for(var index in userlist){

			var user = userlist[index];
			var config = utils.getConfig('users/' + user + '/routes.json');
			var routes = config.routes;

			// Generating routes from siteConfig
		    for(var index in routes){
		    	var schema = routes[index].replace(/[\t ]+/g, ' ').split(' ');
		    	var path = '/' + user + schema[0];
		    	var controller = this.getController(schema[1]);

		    	var action = schema[2];
		    	var methods = schema[3].split(',');
		    	for(var i in methods){
		    		var method = methods[i];
		    		(function(){
		    			var lMethod = method;
		    			var lAction = action;
		    			var lController = controller;
		    			var lPath = path;
		    			app[lMethod](lPath, function(req, res) {
		    				var instance = new lController(req, res);
		        			instance[lAction]();
		    			});
		    		})();
		    	}
		    }
		}

		// error handling
		app.use(function(req, res, next){
			res.render('users/' + User.getUserName(req) + '/error', {layout: false});
		});
	};
};

module.exports = Router;