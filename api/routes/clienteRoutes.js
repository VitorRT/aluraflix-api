const { Router } = require('express');
const controller = require('../controllers/clienteController');

const routes = Router();
const end = '/clients';
const endid = `${end}/:id`;

module.exports = routes
.get(end, controller.getAllClients)
.get(endid, controller.getOneClient)
.post(`${end}/signup`, controller.registerClient)
.put(endid, controller.editClient)
.delete(endid, controller.deleteClient)
;