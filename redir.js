var u = require("url");
var qs = require("querystring");

module.exports = function(url){
	var orig = url;
	var data = u.parse(url,true);
	if(data.host.endsWith("amazon.es")){
		data.query.tag = "adrarrcal-21";
	}
	if(data.host.endsWith("amazon.fr")){
		data.query.tag = "adrarrcal0a2-21";
	}
	if(data.host.endsWith("amazon.de")){
		data.query.tag = "adrarrcal01-21";
	}
	if(data.host.endsWith("amazon.co.uk")){
		data.query.tag = "adrarrcal02-21";
	}
	if(data.host.endsWith("amazon.it")){
		data.query.tag = "adrarrcal02-21";
	}
	if(data.host.endsWith("amazon.com")){
		data.query.tag = "aarroyoc-20";
		console.dir(data);
	}
	if(data.host.endsWith("amazon.ca")){
		data.query.tag = "aarroyoc07-20";
	}
	// TODO: Amazon.co.jp, Amazon.cn, Amazon.in, Amazon.com.br, Amazon.com.mx
	
	// Ebay
	if(data.host.endsWith("ebay.com")){
		// http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575150394&toolid=10001&campid=5337940140&customid=&mpre=http%3A%2F%2Febay.com
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/711-53200-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.at")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/5221-53469-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.com.au")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/705-53470-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.be")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/1553-53471-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.ca")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/706-53473-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.ch")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/5222-53480-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.de")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/707-53477-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.es")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/707-53477-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.fr")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/709-53476-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.ie")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/5282-53468-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.it")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/724-53478-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.nl")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/1346-53482-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	if(data.host.endsWith("ebay.co.uk")){
		data.host = "rover.ebay.com";
		data.pathname = "/rover/1/710-53481-19255-0/1";
		data.query.ff3 = "4";
		data.query.pub = "5575150394";
		data.query.toolid = "10001";
		data.query.campid = "5337940140";
		data.query.customid = "";
		data.query.mpre = orig;
	}
	
	data.search = qs.stringify(data.query);
	url = u.format(data);
	if(url == orig){
		url = "http://redirect.viglink.com?u="+encodeURIComponent(url)+"&key=71a343f453cb32958bbd43540a0abbd7";
	}
	return url;
}
