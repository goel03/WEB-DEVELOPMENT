var http = require('http');
// var dt = require('./myfirstnode');

const hostname = "localhost";
const port = "10000";
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("This is my First nodejs Server");
  res.end();
});

server.listen(port,hostname ,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
