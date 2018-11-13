const url = require('url');
const fs = require('fs');
const path = require('path');
const { getExtName } = require('../tools/getExtName.js')

exports.router = function(req, res) {

    let pathName = url.parse(req.url).pathname;
    let routerPath = 'static';
    switch (pathName) {
        case "/login":
            console.log("获取到login");
            routerPath = "login";
            break;
        case "/reg":
            routerPath = "reg";
            break;
        case "":
            break;
        default:
            routerPath = 'static';
            break;
    }

    if (pathName != "/favicon.ico") {
        let ext = path.extname(pathName);
        ext && (pathName === '/index.html') && (pathName = 'static/index.html');
        !ext && (pathName = routerPath + '/index.html', ext = '.html');
        console.log("pathName " + pathName)
        fs.readFile('../' + pathName, function(err, data) {
            if (err) {
                res.writeHead(200, { "Content-type": "text/html;charset = 'utf-8'" })
                fs.readFile('../static/404.html', function(err, data) {
                    res.end(data);
                })

            } else {
                // 1、也可以给 getExtName 函数增加回调函数 解决
                // 2、也可以使用 事件广播 实现
                let contType = getExtName(ext);
                // console.log("ext " + ext)
                // console.log("contType " + contType)
                res.writeHead(200, { "Content-type": contType + ";charset = 'utf-8'" })
                res.end(data);
            }
        })

    }
}