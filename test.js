const test = require('ava');
let sqlite3 = require("sqlite3");
let redir = require("./redir");
let save = require("./save");
let db = new sqlite3.Database(":memory:");

test.before.cb(t => {
	db.run(`
	CREATE TABLE IF NOT EXISTS url (
		id TEXT,
		url TEXT NOT NULL,
		visits INT NOT NULL,
		CHECK (visits >= 0),
		PRIMARY KEY (id)
	)
	`,t.end);
});

test("Amazon.com homepage",t => {
	var orig = "http://amazon.com";
	var final = "http://amazon.com/?tag=aarroyoc-20";
	var red = redir(orig);
	t.is(red, final);
});
test("Amazon.com replace",t =>{
	var orig = "http://amazon.com/?tag=falso-23";
	var final = "http://amazon.com/?tag=aarroyoc-20"
	var red = redir(orig);
	t.is(red, final);
});
test("Amazon.com complex",t => {
	var orig = "https://www.amazon.com/gp/product/B011SLD1NC/ref=s9_ri_gw_g23_i1_r?ie=UTF8&fpl=fresh&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=3A4T7JA1E5CV4546BJVF&pf_rd_t=36701&pf_rd_p=a5c1d758-e7c8-4532-be6f-cda40b84b455&pf_rd_i=desktop";
	var final = "https://www.amazon.com/gp/product/B011SLD1NC/ref=s9_ri_gw_g23_i1_r?ie=UTF8&fpl=fresh&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=3A4T7JA1E5CV4546BJVF&pf_rd_t=36701&pf_rd_p=a5c1d758-e7c8-4532-be6f-cda40b84b455&pf_rd_i=desktop&tag=aarroyoc-20";
	var red = redir(orig);
	t.is(red, final);
});
test("Ebay.com", t => {
	var orig = "http://ebay.com";
	var final = "http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575150394&toolid=10001&campid=5337940140&customid=&mpre=http%3A%2F%2Febay.com";
	var red = redir(orig);
	t.is(red, final);
});
test.cb("Save/Get", t => {
	let url = "https://blog.adrianistan.eu";
	save.saveUrl(db, url, function(err, code){
		db.get("SELECT url FROM url WHERE id = ?", code, function(err, row){
			t.is(url, row.url);
			t.end();
		});
	});
})
