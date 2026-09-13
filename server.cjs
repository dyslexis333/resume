const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg' };
http.createServer((req, res) => {
  const requested = req.url === '/' ? 'index.html' : decodeURIComponent(req.url.slice(1));
  const file = path.join(root, requested);
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(Number(process.argv[2]) || 4173, '127.0.0.1');
