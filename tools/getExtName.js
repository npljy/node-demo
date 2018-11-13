const fs = require('fs');
exports.getExtName = function(extname) {

    let data = fs.readFileSync('data/ext.json', 'utf-8');
    let jsonObj = JSON.parse(data.toString());
    let contType = jsonObj[extname];
    console.log("123Content-Type:" + extname + " " + contType)
    return contType || "text/html";

}