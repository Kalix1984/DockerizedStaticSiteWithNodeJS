const http = require('http');
const fs = require('fs');

const port = 80;

const server = http.createServer((req, res) => {
  console.log(req.method + " " + req.url);
  
  if (req.url === '/' && req.method === 'GET'){
    fs.readFile(__dirname + '/home.html', function(err, data){
      res.setHeader('content-type', 'text/html; charset=utf-8');
      res.writeHead(200);
      res.end(data);
    })
  } else if (req.url === '/login' && req.method === 'GET'){
    fs.readFile(__dirname + '/login.html', function(err, data){
      res.setHeader('content-type', 'text/html; charset=utf-8');
      res.writeHead(200);
      res.end(data);
    })
  } else{
    fs.readFile(__dirname + '/404.html', function(err, data){
      res.setHeader('content-type', 'text/html; charset=utf-8');
      res.writeHead(200);
      res.end(data);
    })
  }
 
});

server.listen(port);
console.log('Server running on port: ' + port);


