const { Router } = require('express');
const controller = require('../controllers/categoriaController');

const router = Router();
const end = '/categories'
const endid = `${end}/id=:id`

module.exports = router
.get(end, controller.getAllCategoria)
.get(endid, controller.getOneCategoria)
.post(`${end}/create`, controller.createCategoria)
.put(`${endid}/edit`, controller.editCategoria)
.delete(`${endid}/delete`, controller.deleteCategoria)
.get(`${endid}/itens`, controller.getItensCategoria)
.get(`${endid}/itens=:item_id`, controller.getOneItemCategoria)
.post(`${endid}/itens/create`, controller.registerItemInCategoria)
.delete(`${endid}/itens=:item_id/delete`, controller.removeItemFromCategoria)
;