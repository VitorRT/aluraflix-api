const { Router } = require('express');
const controller = require('../controllers/clienteController');
const checkToken = require('../utils/checkToken');

const routes = Router();
const end = '/clients';
const endid = `${end}/id=:id`;

module.exports = routes
.get(end, checkToken, controller.getAllClients)
.get(endid, checkToken, controller.getOneClient)
.post(`${end}/signup`, controller.registerClient)
.put(`${endid}/edit`, checkToken, controller.editClient)
.delete(`${endid}/delete`, checkToken, controller.deleteClient)
.post(`${end}/login`, controller.authenticateClient)
;