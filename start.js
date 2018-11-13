const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { getExtName } = require('./tools/getExtName.js')

const server = http.createServer((req, res) => {
    let pathName = req.url;
    if (pathName != "/favicon.ico") {
        pathName === "/" && (pathName = './index.html')

        fs.readFile('./' + pathName, function(err, data) {
            if (err) {
                res.writeHead(200, { "Content-type": "text/html;charset = 'utf-8'" })
                fs.readFile('./404.html', function(err, data) {
                    res.write(data);
                    res.end();
                })
                return;
            } else {
                let ext = path.extname(pathName)
                let contType = getExtName(ext);
                // console.log("ext " + ext)
                // console.log("contType " + contType)
                res.writeHead(200, { "Content-type": contType + ";charset = 'utf-8'" })
                res.write(data);
                res.end();
            }
        })

    }

}).listen(80, '127.0.0.1');