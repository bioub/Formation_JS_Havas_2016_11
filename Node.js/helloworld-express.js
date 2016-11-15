const express = require('express');

const server = express();

server.all('/', (req, res) => {
  res.send(`
    <p class="dhjdgjh">Hello</p>
`);
});

server.all('/toto', (req, res) => {
  res.json({data: ['Romain']});
});

server.listen(8080, function() {
  console.log('Serveur HTTP démarré sur le port 8080');
});
