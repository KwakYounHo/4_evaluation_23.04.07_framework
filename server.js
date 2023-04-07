const http = require('http');
const fs   = require('fs').promises;
const path = require('path');

const server = http
  .createServer(async (req,rep)=>{
    if (req.method === 'GET') {
      try {
        if (req.url === '/') {
          rep.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
          return rep.end(await fs.readFile('./index.html','utf-8'))
        }
        if (req.url.includes('setintervalTest.js')) {
          rep.writeHead(200, {'Content-Type':'text/javascript'});
          return rep.end(await fs.readFile('./setintervalTest.js','utf-8'));
        }
      } catch {

      }
    }
  })
  .listen(3050,()=>{console.log('3050포트 런')})