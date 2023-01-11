const { Router } = require('express');
const controller = require('../controllers/playlistController');
const checkToken = require('../utils/checkToken');

const router = Router();
const end = "/playlists";
const endid = `${end}/id=:id`;

module.exports = router
.get(end, checkToken, controller.getAllPlaylists)
.get(endid, checkToken, controller.getOnePlaylist)
.post(`${end}/create`, checkToken, controller.createPlaylist)
.put(`${endid}/edit`, checkToken, controller.editPlaylist)
.delete(`${endid}/delete`, checkToken, controller.deletePlaylist)
.get(`${endid}/itens`,checkToken, controller.getItensPlaylist)
.get(`${endid}/itens=:item_id`, checkToken, controller.getOneItemPlaylist)
.post(`${endid}/itens/create`, checkToken, controller.registerItemInPlaylist)
.delete(`${endid}/itens=:item_id/delete`, checkToken, controller.removeItemFromPlaylist)
.get(`${end}/private/client=:client_id`, checkToken, controller.getAllPrivatesPlaylistsOfClient)
.get(`${endid}/private/client=:client_id`, checkToken, controller.getOnePrivatePlaylistOfClient)
;