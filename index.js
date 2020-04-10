let express = require('express');
let sqlite3 = require("sqlite3");
let u = require("url");
let app = express();
let redir = require("./redir");
let save = require("./save");
let db = new sqlite3.Database("./data/shortkingq.db");

app.set('port', (process.env.PORT || 7291));

app.use(express.static(__dirname + '/public'));
app.use("/node_modules",express.static(__dirname + "/node_modules"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/homepage');
});

app.get('/v/:code',function(req,res){
	let code = req.params.code;
	db.get("SELECT url FROM url WHERE id = ?", [code], function(err, row){
		if(err || row === undefined){
			console.log(err);
			res.send(501,err);
		}else{
			db.run("UPDATE url SET visits = visits + 1 WHERE id = ?", [code],function(err){
				res.redirect(redir(row.url));
			});	
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

db.run(`
CREATE TABLE IF NOT EXISTS url (
	id TEXT,
	url TEXT NOT NULL,
	visits INT NOT NULL,
	CHECK (visits >= 0),
	PRIMARY KEY (id)
)
`,function(){
	app.listen(app.get('port'), function() {
		console.log('Node app is running on port', app.get('port'));
	});
})



