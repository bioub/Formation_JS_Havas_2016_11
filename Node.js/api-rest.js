const express = require('express');

const server = express();

var contacts = [{
  prenom: 'Bill',
  nom: 'Gates',
  id: 123
},{
  prenom: 'Steve',
  nom: 'Jobs',
  id: 456
}];

server.get('/liste', (req, res) => {
  res.json(contacts);
});

server.get('/details/:id', (req, res) => {
  var id = Number(req.params.id);
  var contact = contacts.find(c => c.id === id);
  res.json(contact);
});

server.listen(8080, function() {
  console.log('Serveur HTTP démarré sur le port 8080');
});
