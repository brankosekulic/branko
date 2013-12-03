var fs = require("fs");


var Controller = require("../lib/Controller.js");

/**
 * @param {Object} request  [description]
 * @param {Object} response [description]
 */
var IndexController = function(request, response){
	Controller.call(this, request, response);

	this.index = function(){
		console.log(__dirname);
		this.render('index', {'page': 'index'});
	};

	this.gallery = function(){
		this.render('gallery', {'page': 'gallery'});
	};

	this.contact = function(){
		this.render('contact', {'page': 'contact'});
	};

	this.templates = function(){

		var dir = __dirname + '/../views/users/branko';
		var index = fs.readFileSync(dir + '/index.ejs', 'utf8');
		var contact = fs.readFileSync(dir + '/contact.ejs', 'utf8');
		var gallery = fs.readFileSync(dir + '/gallery.ejs', 'utf8');

		this.response.json({index: index, gallery: gallery, contact: contact});
	};
};

IndexController.prototype = new Controller();
IndexController.prototype.constructor = IndexController;

module.exports = IndexController;