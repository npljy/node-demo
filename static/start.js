const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const { router } = require('../routers/router.js')

const server = http.createServer((req, res) => {

    router(req, res)
}).listen(80, '127.0.0.1');