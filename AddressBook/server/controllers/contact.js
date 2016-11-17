const Contact = require('../models/contact');
// Operation CRUD sur un contact

module.exports.list = function(req, res, next) {
  Contact.find(function(err, contacts) {
    res.json(contacts);
  });
};

module.exports.show = function(req, res, next) {
  res.send('contact show');
};

module.exports.add = function(req, res, next) {
  let contact = new Contact(req.body);
  contact.save(function(err, contact) {
    res.statusCode = 201; // CREATED
    res.json(contact);
  });
};

module.exports.remove = function(req, res, next) {
  res.send('contact remove');
};

module.exports.update = function(req, res, next) {
  res.send('contact update');
};