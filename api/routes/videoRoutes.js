const { Router } = require('express');
const controller = require('../controllers/videoController');
const checkToken = require('../utils/checkToken');

const router = Router();
const end = "/videos";
const endid = `${end}/id=:id`;

module.exports = router
.get(end, checkToken, controller.getAllVideos)
.get(endid, checkToken, controller.getOneVideo)
.post(`${end}/create`, checkToken, controller.createVideo)
.put(`${endid}/edit`, checkToken, controller.editVideo)
.delete(endid, checkToken, controller.deleteVideo)
;