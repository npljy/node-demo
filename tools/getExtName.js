const fs = require('fs');
exports.getExtName = function(extname) {
    // 也可以给 getExtName 增加回调函数，然后使用 readFile 的回调函数实现
    // 也可以 通过 事件广播 实现
    let data = fs.readFileSync('../data/ext.json', 'utf-8');
    let jsonObj = JSON.parse(data.toString());
    let contType = jsonObj[extname];
    // console.log("123Content-Type:" + extname + " " + contType)
    return contType || "text/html";

}