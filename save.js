let gencode = require("./gencode");

exports.saveUrl = function(db, url, cb){
	let code = gencode.generateCode();
	db.get("SELECT * FROM url WHERE id = ?", [code], function(err,row){
		if(err){
			cb(err, null);
		}else{
			if(row === undefined){
				db.run("INSERT INTO url VALUES (?, ?, 0)",[code, url], function(err){
					cb(err, code);
				});
			}else{
				saveUrl(db, url, cb);
			}
		}
	});
}