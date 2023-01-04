const { Router } = require('express');
const controller = require('../controllers/clienteController');

const routes = Router();
const end = '/cliente';
const endid = `${end}/:cod_cliente`;

module.exports = routes
.get(end, controller.getAllClients)
;