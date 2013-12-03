var User = require("./User.js");

/**
 * @param {Object} request
 * @param {Object} response
 */
var Controller = function(request, response){

	this.request = request;
	this.response = response;

	/**
	 * [render description]
	 * @return {[type]} [description]
	 */

	this.render = function(tpl, data){
		this.response.render("users/" + User.getUserName(this.request) + "/" + tpl, {
			layout: "users/" + User.getUserName(this.request) + "/layouts/layout",
			locals: data
		});
	};
};

module.exports = Controller;