const { Router } = require('express');
const controller = require('../controllers/clienteController');

const routes = Router();
const end = '/clientes';
const endid = `${end}/:id`;

module.exports = routes
.get(end, controller.getAllClients)
.get(endid, controller.getOneClient)
.post(end, controller.registerClient)
.put(endid, controller.editClient)
;