/*
Newline checkers
Lee Brunjes 2017 lee.brunjes@gmail.com

Checks all json files in teh directory for keys that end in newline.

*/
var fs= require('fs');


var endsInNewline =function(filename){
	var found =false;
	if(filename.indexOf(".json") >= 0){

		var _json= JSON.parse(fs.readFileSync(filename));
		for(var item in _json) {
			if(_json[item].length >0 
				&& item.indexOf("Ency")!=0  
				&& _json[item].lastIndexOf("\n") >= _json[item].length-1){

				if(!found) {
					console.log(filename,"\r\n");

				}
				console.log(" " ,item, "ends with newline","\r\n");
				found = true;
			}
		}
	}
}

console.log("newline checker\n USAGE: node ck_newlines.js [folder]\n  defaults to current directory")

var folder= ".";
if(process.argv.length >2){
	folder = process.argv[2];
}
var items = fs.readdirSync(folder);

for(var i in items){
	try{
	endsInNewline(items[i]);
	}
	catch(ex){
		console.error(ex);
	}
}