const Router = require('express').Router;
const bodyParser = require('body-parser');
const contactCtrl = require('../controllers/contact');

const routes = new Router();

// Convention RESTful (convention d'URL)
routes.get('/', contactCtrl.list);
routes.post('/', bodyParser.json(), contactCtrl.add);
routes.get('/:id', contactCtrl.show);
routes.put('/:id', bodyParser.json(), contactCtrl.update);
routes.delete('/:id', contactCtrl.remove);

module.exports = routes;