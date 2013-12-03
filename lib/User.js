var	utils = require("./Utils.js"),
	hostmap = utils.getConfig('hostmap.json');

var User = {
	/**
	 * @return {String} [description]
	 */
	getUserName: function(request){
		var host = request.headers.host;
		return hostmap[host];
	},

	/**
	 * @return {String} [description]
	 */
	getAllUsers: function(){

		var users = [];
		for(var i in hostmap){
			var user = hostmap[i];
			if(users.indexOf(user) == -1){
				users.push(user);
			}
		}
		return users;
	}
};

module.exports = User;