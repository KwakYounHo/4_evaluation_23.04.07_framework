const http = require('http');
const fs   = require('fs').promises;
const path = require('path');

const server = http
  .createServer(async (req,rep)=>{
    const Mrep = async (state, type, goPath, write) => {
      rep.writeHead(state, {'Content-Type':`${type}; charset=utf-8`});
      if (write) {
        rep.write(write);
      }
      rep.end(await fs.readFile(path.join(__dirname,goPath)));
    }
    try {
      if (req.method === 'GET') {
        if (req.url === '/') {
          return Mrep(200,'text/html', '/index.html');
        }
        try {
          return rep.end(await fs.readFile(path.join(__dirname,req.url)))
        } catch {
          console.log(`${req.url} 요청이 잘못 되었습니다`);
        }
        rep.writeHead(404, {'Content-Type':'text/html; charset=utf-8'})
        rep.end('찾을 수 없는 페이지 입니다')
      }
    } catch {
      rep.writeHead(500, 'text/plain');
      rep.end('서버 응답 오류')
      console.log(error)
    }
  })
  .listen(3050, ()=>{console.log('3050 Go')})