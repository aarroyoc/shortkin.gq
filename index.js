let express = require('express');
let level = require("level");
let u = require("url");
let app = express();
let redir = require("./redir");
let save = require("./save");
let db = level("shortkin-db");

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));
app.use("/node_modules",express.static(__dirname + "/node_modules"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/homepage');
});

app.get('/v/:code',function(req,res){
	let code = req.params.code;
	db.get(code, function(err, data){
		if(err){
			console.log(err);
			res.send(501,err);
		}else{
			res.redirect(redir(data));
		}
	});
});

app.get('/s',function(req,res){
	let targetUrl = req.query.url;
	save.saveUrl(db, targetUrl, function(err, code){
		if(err){
			console.error("Error"+err);
			res.send(null);
		}else{
			var shortUrl = "https://shortkin.gq/v/"+code;
			res.send(shortUrl);
		}
	});
	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


