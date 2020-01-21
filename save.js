let gencode = require("./gencode");

exports.saveUrl = function(db, url, cb){
	let code = gencode.generateCode();
	db.get(code, function(err,data){
		if(err){
			if(err.notFound){
				db.put(code, url, function(err){
					cb(err, code);
				});
			}else{
				cb(err,null);
			}
		}else{
			saveUrl(db, url, cb);
		}
	});
}