const { Router } = require('express');
const controller = require('../controllers/playlistController');

const router = Router();
const end = "/playlists";
const endid = `${end}/id=:id`;

module.exports = router
.get(end, controller.getAllPlaylists)
.get(endid, controller.getOnePlaylist)
.post(`${end}/create`, controller.createPlaylist)
.put(`${endid}/edit`, controller.editPlaylist)
.delete(`${endid}/delete`, controller.deletePlaylist)
.get(`${endid}/itens`, controller.getItensPlaylist)
.get(`${endid}/itens=:item_id`, controller.getOneItemPlaylist)
.post(`${endid}/itens/create`, controller.registerItemInPlaylist)
.delete(`${endid}/itens=:item_id/delete`, controller.removeItemFromPlaylist)
;