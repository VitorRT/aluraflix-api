const { Router } = require('express');
const controller = require('../controllers/clienteController');

const routes = Router();
const end = '/clients';
const endid = `${end}/id=:id`;

module.exports = routes
.get(end, controller.getAllClients)
.get(endid, controller.getOneClient)
.post(`${end}/signup`, controller.registerClient)
.put(`${endid}/edit`, controller.editClient)
.delete(`${endid}/delete`, controller.deleteClient)
.post(`${end}/login`, controller.authenticateClient)
;