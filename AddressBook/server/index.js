const express = require('express');
const morgan = require('morgan');
const contactRoutes = require('./routes/contact');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname + '/../client')));
app.use('/lib', express.static(path.resolve(__dirname + '/../node_modules')));

app.use('/api/contacts', contactRoutes);

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    message: 'Not Found'
  });
});

// On transmet les erreur 404 à angular
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(8080, () => {
  console.log('Le serveur a démarré');
});
