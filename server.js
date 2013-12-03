var PORT = 9000,
	express = require("express"),
	app = express.createServer(),
	Router = require("./lib/Router.js");

app.configure( function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use('/public', express.static(__dirname + '/public'));
});

// routing
var router = new Router(app);
router.route();

// global error handling
process.on('uncaughtException', function(err) {
	console.log(err);
});

// startup this server
app.listen(PORT);
