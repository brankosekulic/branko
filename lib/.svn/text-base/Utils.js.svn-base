var fs = require("fs");

/**
 * @type {Object}
 */
var Utils = {
	/**
	 * Read and parse json file
	 * @param  {String} filepath
	 * @param  {String} encoding
	 * @return {Object}
	 */
	readJsonFileSync: function(filepath, encoding){

		if (typeof (encoding) == 'undefined') encoding = 'utf8';

		var file = fs.readFileSync(filepath, encoding);
		return JSON.parse(file);
	},
	getConfig: function(file){

		var filepath = __dirname + '/../configs/' + file;
		return this.readJsonFileSync(filepath);
	}
};

module.exports = Utils;