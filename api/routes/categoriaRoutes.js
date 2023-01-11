const { Router } = require('express');
const controller = require('../controllers/categoriaController');
const checkToken = require('../utils/checkToken');

const router = Router();
const end = '/categories'
const endid = `${end}/id=:id`

module.exports = router
.get(end, checkToken, controller.getAllCategoria)
.get(endid, checkToken, controller.getOneCategoria)
.post(`${end}/create`, checkToken, controller.createCategoria)
.put(`${endid}/edit`, checkToken, controller.editCategoria)
.delete(`${endid}/delete`, checkToken, controller.deleteCategoria)
.get(`${endid}/itens`, checkToken, controller.getItensCategoria)
.get(`${endid}/itens=:item_id`, checkToken, controller.getOneItemCategoria)
.post(`${endid}/itens/create`, checkToken, controller.registerItemInCategoria)
.delete(`${endid}/itens=:item_id/delete`, checkToken, controller.removeItemFromCategoria)
;