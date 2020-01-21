var button = document.getElementById("short");
var longUrl = document.getElementById("longUrl");
var spinner = document.getElementById("spinner");
var linkOutput = document.getElementById("linkOutput");

button.addEventListener("click",function(){
	if(longUrl.value == "" || longUrl.value == null){
		alert("Please, paste the URL in the textbox");
	}
	var url = longUrl.value;
	spinner.className = "mdl-spinner mdl-js-spinner is-active";
	var xhr = new XMLHttpRequest();
	xhr.open("GET","/s?url="+url);
	xhr.addEventListener("load",function(){
		spinner.className = "mdl-spinner mdl-js-spinner";
		linkOutput.textContent = xhr.responseText;
		linkOutput.setAttribute("href", xhr.responseText);
	});
	xhr.send();
});
