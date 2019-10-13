var data

window.onload = function() {
  readTextFile("games.json", function(text){
    var datat = JSON.parse(text);
    daa.push(data)
  });
}

function readTextFile(file, callback) {
 var rawFile = new XMLHttpRequest();
 rawFile.overrideMimeType("application/json");
 rawFile.open("GET", file, true);
 rawFile.onreadystatechange = function() {
  if (rawFile.readyState === 4 && rawFile.status == "200") {
   callback(rawFile.responseText);
  }
 }
 rawFile.send(null);
}
