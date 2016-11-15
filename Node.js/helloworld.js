const http = require('http');

const server = http.createServer(function(req, res) {

  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello');
      break;
    case '/toto':
      res.statusCode = 200;
      res.end('Hello Toto');
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
  }

});

server.listen(8080, function() {
  console.log('Serveur HTTP démarré sur le port 8080');
});
