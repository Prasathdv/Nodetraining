var htsample = require('fs');
htsample.writeFile(__dirname+ "/samplenodeindex.html", "<html><head><title>Sample HTML using Node.js</title></head><body><p>This page is created via Node Js script using fs function.</p></body></html>", function(error){
  if(error){
    console.log(error);
  }
  else {
    console.log("You have created your first Node.js script successfully");
  }
});
